import csv from "csv-parser";
import { Readable } from "stream";
import db from "../../../../utils/db";
import Keyword from "../../../../models/KeyWord";

async function parseCSV(file) {
  const arrayBuffer = await file.arrayBuffer();
  const text = new TextDecoder("utf-16le").decode(arrayBuffer);
  const readable = Readable.from([text]);
  const results = [];

  await new Promise((resolve, reject) => {
    readable
      .pipe(csv({ separator: "\t" })) // TSV
      .on("data", (data) => results.push(data))
      .on("end", () => resolve())
      .on("error", (err) => reject(err));
  });

  return results;
}

function parseCSVObjects(data) {
  if (!data || data.length < 3) {
    return { title: "", rows: [] };
  }

  const title = Object.values(data[0])[0];

  // Другий рядок — справжні назви колонок
  const headerObj = data[1];
  const headers = Object.values(headerObj);

  // 3-й рядок і далі — реальні ключові слова
  const rows = data.slice(2).map((rowObj) => {
    const values = Object.values(rowObj);

    const result = {};
    headers.forEach((header, index) => {
      result[header] = values[index] ?? "";
    });

    return result;
  });

  return { title, rows };
}

function transformRowsForMongo(rows) {
  return rows.map((row) => {
    const transformed = { ...row };

    // Формуємо Searches
    const searches = [];
    Object.keys(transformed).forEach((key) => {
      if (key.startsWith("Searches: ")) {
        const rawValue = transformed[key].trim();
        const value = rawValue === "" ? 0 : Number(rawValue);
        searches.push({ month: key.replace("Searches: ", ""), value });
        delete transformed[key];
      }
    });
    transformed.Searches = searches;

    // CamelCase і конвертація чисел
    transformed.avgMonthlySearches = transformed[
      "Avg. monthly searches"
    ]?.trim()
      ? Number(transformed["Avg. monthly searches"])
      : 0;
    delete transformed["Avg. monthly searches"];

    transformed.threeMonthChange =
      transformed["Three month change"]?.trim() || "";
    delete transformed["Three month change"];

    transformed.yoYChange = transformed["YoY change"]?.trim() || "";
    delete transformed["YoY change"];

    transformed.competitionIndexedValue = transformed[
      "Competition (indexed value)"
    ]?.trim()
      ? Number(transformed["Competition (indexed value)"])
      : 0;
    delete transformed["Competition (indexed value)"];

    transformed.topOfPageBidLow = transformed[
      "Top of page bid (low range)"
    ]?.trim()
      ? Number(transformed["Top of page bid (low range)"])
      : 0;
    delete transformed["Top of page bid (low range)"];

    transformed.topOfPageBidHigh = transformed[
      "Top of page bid (high range)"
    ]?.trim()
      ? Number(transformed["Top of page bid (high range)"])
      : 0;
    delete transformed["Top of page bid (high range)"];

    // Залишаємо текстові поля
    transformed.Competition = transformed["Competition"]?.trim() || "";
    transformed.Currency = transformed["Currency"]?.trim() || "";
    transformed.Keyword = transformed["Keyword"]?.trim() || "";

    return transformed;
  });
}

async function bulkUpsertKeywords(rows) {
  await db.connectDb();
  if (!rows || rows.length === 0) return { newDocs: [], updatedCount: 0 };

  const existingKeywords = await Keyword.find({
    Keyword: { $in: rows.map((r) => r.Keyword) },
  }).select("Keyword");
  const existingSet = new Set(existingKeywords.map((d) => d.Keyword));

  const newDocs = [];
  const updateOps = [];

  rows.forEach((data) => {
    const {
      Keyword,
      Currency,
      avgMonthlySearches,
      threeMonthChange,
      yoYChange,
      Competition,
      competitionIndexedValue,
      topOfPageBidLow,
      topOfPageBidHigh,
      Searches,
    } = data;

    if (existingSet.has(Keyword)) {
      updateOps.push({
        updateOne: {
          filter: { Keyword },
          update: {
            $set: {
              Currency,
              avgMonthlySearches,
              threeMonthChange,
              yoYChange,
              Competition,
              competitionIndexedValue,
              topOfPageBidLow,
              topOfPageBidHigh,
              Searches,
            },
          },
        },
      });
    } else {
      newDocs.push({
        Keyword,
        Currency,
        avgMonthlySearches,
        threeMonthChange,
        yoYChange,
        Competition,
        competitionIndexedValue,
        topOfPageBidLow,
        topOfPageBidHigh,
        Searches,
      });
    }
  });

  let updatedCount = 0;
  if (updateOps.length > 0) {
    const bulkResult = await Keyword.bulkWrite(updateOps);
    updatedCount = bulkResult.modifiedCount;
  }

  let insertedDocs = [];
  if (newDocs.length > 0) {
    insertedDocs = await Keyword.insertMany(newDocs);
  }

  return { newDocs: insertedDocs, updatedCount };
}

export async function POST(req) {
  try {
    const formData = await req.formData();
    const file = formData.get("file");

    if (!file) {
      return new Response(JSON.stringify({ error: "No file uploaded" }), {
        status: 400,
        headers: { "Content-Type": "application/json" },
      });
    }

    const parsedData = await parseCSV(file);
    const { title, rows } = parseCSVObjects(parsedData);
    const transformedRows = transformRowsForMongo(rows);
    const result = await bulkUpsertKeywords(transformedRows);
    // for (let i = 0; i < 10; i++) {
    //   console.log("parsedData", parsedData[i]);
    //   console.log("rows:", rows[i]);
    //   console.log("transformedRows", transformedRows[i]);
    // }

    // return new Response(JSON.stringify(parsedData));

    return new Response(
      JSON.stringify({
        title,
        newDocs: result.newDocs,
        updatedCount: result.updatedCount,
      }),
      { headers: { "Content-Type": "application/json" } }
    );
  } catch (err) {
    console.error(err);
    return new Response(JSON.stringify({ error: err.message }), {
      status: 500,
      headers: { "Content-Type": "application/json" },
    });
  }
}

export async function GET(req) {
  try {
    await db.connectDb();

    const { searchParams } = new URL(req.url);
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 20;

    const skip = (page - 1) * limit;

    // Загальна кількість документів
    const total = await Keyword.countDocuments();

    // Обмежена вибірка
    const items = await Keyword.find({})
      .sort({ createdAt: -1 }) // найновіші першими
      .skip(skip)
      .limit(limit);

    return new Response(
      JSON.stringify({
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        items,
      }),
      { status: 200 }
    );
  } catch (error) {
    console.error("GET /api/keywords error:", error);
    return new Response(JSON.stringify({ error: "Server error" }), {
      status: 500,
    });
  }
}

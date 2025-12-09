import db from "../../../../utils/db";
import Keyword from "../../../../models/KeyWord";

export async function GET(req) {
  try {
    await db.connectDb();

    const { searchParams } = new URL(req.url);

    // Пагінація
    const page = parseInt(searchParams.get("page")) || 1;
    const limit = parseInt(searchParams.get("limit")) || 20;
    const skip = (page - 1) * limit;

    // Сортування
    const sortField = searchParams.get("sortField") || "Keyword";
    const sortOrder = searchParams.get("sortOrder") === "desc" ? -1 : 1;

    const allowedSortFields = ["Keyword", "avgMonthlySearches"];
    const sort = allowedSortFields.includes(sortField)
      ? { [sortField]: sortOrder }
      : { Keyword: 1 };

    // 🔥 Фільтр по group
    let filter = {};

    const group = searchParams.get("group");

    if (group) {
      if (group === "empty") {
        // Повернути ті, де group === "" або null
        filter.group = { $in: ["", null] };
      } else {
        // Повернути ті, де group === "значення"
        filter.group = group;
      }
    }

    // Загальна кількість з фільтром
    const total = await Keyword.countDocuments(filter);

    // Дані
    const items = await Keyword.find(filter).sort(sort).skip(skip).limit(limit);

    return new Response(
      JSON.stringify({
        page,
        limit,
        total,
        totalPages: Math.ceil(total / limit),
        sort,
        filter,
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

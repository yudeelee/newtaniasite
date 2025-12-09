import db from "../../../../utils/db";
import Group from "../../../../models/Group";

export async function POST(req) {
  await db.connectDb();

  try {
    const { name } = await req.json();

    if (!name) {
      return Response.json({ error: "Name is required" }, { status: 400 });
    }

    const group = await Group.create({ name });

    return new Response(JSON.stringify(group));
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}

export async function GET() {
  await db.connectDb();

  try {
    const groupsWithCounts = await Group.aggregate([
      {
        $addFields: {
          idString: { $toString: "$_id" },
        },
      },
      {
        $lookup: {
          from: "keywords", // колекція keywords
          localField: "idString", // поле в Groups
          foreignField: "group", // поле в Keywords
          as: "keywords", // тимчасове поле
        },
      },
      {
        $addFields: {
          keywordsCount: { $size: "$keywords" }, // рахуємо кількість
        },
      },
      {
        $project: {
          keywords: 0, // не повертаємо самі keywords
        },
      },
    ]);
    return Response.json(groupsWithCounts);
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}

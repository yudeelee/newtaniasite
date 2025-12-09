import db from "../../../../../utils/db";
import Keyword from "../../../../../models/KeyWord";

export async function PUT(req, { params }) {
  await db.connectDb();

  try {
    const id = params.id;
    const data = await req.json();

    // Дозволити оновлення всіх полів
    const updated = await Keyword.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return Response.json({ error: "Keyword not found" }, { status: 404 });
    }

    return Response.json(updated);
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}

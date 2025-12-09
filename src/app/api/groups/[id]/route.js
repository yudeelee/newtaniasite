import db from "../../../../../utils/db";
import Group from "../../../../../models/Group";

export async function PUT(req, { params }) {
  await db.connectDb();

  try {
    const id = params.id;
    const data = await req.json();

    // Дозволити оновлення всіх полів
    const updated = await Group.findByIdAndUpdate(id, data, {
      new: true,
      runValidators: true,
    });

    if (!updated) {
      return Response.json({ error: "Group not found" }, { status: 404 });
    }

    return Response.json(updated);
  } catch (e) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}

export async function GET(req, { params }) {
  try {
    await db.connectDb();
    const id = params.id;
    const group = await Group.findById(id);
    if (!group) {
      return Response.json({ error: "Group not found" }, { status: 404 });
    }
    return new Response(JSON.stringify(group));
  } catch (error) {
    return Response.json({ error: e.message }, { status: 500 });
  }
}

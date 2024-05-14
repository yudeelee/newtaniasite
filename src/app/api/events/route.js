import db from '../../../../utils/db';
import Event from '../../../../models/Event';

export async function POST(req) {
  const body = await req.json();
  try {
    const { userId, orderId, type, description } = body;
    const newEvent = new Event({
      orderId,
      type,
      description,
    });
    const res = await newEvent.save();
    return new Response(JSON.stringify(res));
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }));
  }
}

export async function PUT(req) {
  const body = await req.json();
  try {
    const { orderId } = body;
    const res = await Event.find({ orderId });
    return new Response(JSON.stringify(res));
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }));
  }
}

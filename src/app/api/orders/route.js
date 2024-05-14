import db from '../../../../utils/db';
import Order from '../../../../models/Order';
import Client from '../../../../models/Client';
import Event from '../../../../models/Event';

export async function POST(req) {
  const body = await req.json();
  try {
    const { category, item, comment, name, phone, mail, price } = body;
    if (!category || !item || !name || !phone || !mail) {
      return new Response(JSON.stringify({ message: 'empty fields' }));
    }
    let client = await Client.findOne({ name, phone, mail });
    if (!client) {
      const newClient = new Client({
        name,
        phone,
        mail,
        birthday: '',
        organization: '',
        comment: '',
      });
      const res = await newClient.save();
      client = res;
    }
    const newOrder = new Order({
      category,
      item,
      price,
      comment,
      userId: client._id,
      managerId: null,
      status: 'waiting',
      managerComment: '',
    });
    const result = await newOrder.save();
    const newEvent = new Event({
      userId: '',
      orderId: result.id,
      type: 'add',
      description: 'Додано нове замовлення',
    });
    await newEvent.save();
    return new Response(JSON.stringify({ message: 'order added' }));
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }));
  }
  return new Response(JSON.stringify({ body }));
}

export async function PUT(req) {
  const body = await req.json();
  try {
    const { userId, orderId, status, comment } = body;
    if (userId) {
      const res = await Order.findByIdAndUpdate(
        orderId,
        {
          managerId: userId,
        },
        { new: true }
      );
      return new Response(JSON.stringify(res));
    } else if (status) {
      const res = await Order.findByIdAndUpdate(
        orderId,
        {
          status,
        },
        { new: true }
      );
      return new Response(JSON.stringify(res));
    } else if (comment) {
      const res = await Order.findByIdAndUpdate(
        orderId,
        {
          managerComment: comment,
        },
        { new: true }
      );
      return new Response(JSON.stringify(res));
    }
    return new Response(JSON.stringify({ message: 'order added' }));
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }));
  }
}

export async function GET(req) {
  try {
    await db.connectDb();
    const data = await Order.find();
    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(JSON.stringify({ message: err.message }));
  }
}

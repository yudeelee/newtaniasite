import db from '../../../../utils/db';
import Client from '../../../../models/Client';

export async function POST(req) {
  const body = await req.json();
  try {
    await db.connectDb();
    const { name, phone, mail } = body;
    if (!name || !phone || !mail) {
      return new Response(JSON.stringify({ message: 'fill all fields' }));
    }
    const newClient = new Client({
      name,
      phone,
      mail,
      birthday: '',
      organization: '',
      comment: '',
    });
    const addedClient = await newClient.save();
    return new Response(JSON.stringify({ message: 'user added' }));
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }));
  }
}

export async function GET(req) {
  try {
    await db.connectDb();
    const data = await Client.find();
    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(JSON.stringify({ message: err.message }));
  }
}

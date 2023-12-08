import db from '../../../../utils/db';
import User from '../../../../models/User';

export async function POST(req) {
  const body = await req.json();
  try {
    await db.connectDb();
    const { login, password } = body;
    if (!login || !password) {
      return new Response(JSON.stringify({ message: 'fill all fields' }));
    }
    const newUser = new User({
      email: login,
      password,
    });
    const addedUser = await newUser.save();
    return new Response(JSON.stringify({ message: 'user added' }));
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }));
  }
}

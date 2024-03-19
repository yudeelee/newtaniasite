import db from '../../../../utils/db';
import MainPage from '../../../../models/MainPage';

export async function POST(req) {
  const body = await req.json();
  try {
    await db.connectDb();
    const data = body;
    const newPage = new MainPage({ ...data, topImg: data.topImg });
    const addedPage = await newPage.save();
    return new Response(JSON.stringify({ message: 'done' }));
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }));
  }
}

export async function GET(req) {
  try {
    await db.connectDb();
    const data = await MainPage.findOne();
    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }));
  }
}

export async function PUT(req) {
  const body = await req.json();
  try {
    await db.connectDb();
    const data = body;
    const newPage = await MainPage.findByIdAndUpdate(
      '656073b6e19858a026acd1de',
      {
        ...data,
      },
      { new: true }
    );
    return new Response(JSON.stringify(newPage));
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }));
  }
}

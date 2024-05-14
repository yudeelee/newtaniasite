import db from '../../../../utils/db';
import ServicePage from '../../../../models/ServicePage';

export async function POST(req) {
  const body = await req.json();
  try {
    await db.connectDb();
    const data = body;

    const services = await ServicePage.findOne();
    services.services.push(data);

    const newPage = await ServicePage.findByIdAndUpdate(
      '65f6b96dfe87b8c8416c4a35',
      {
        ...services,
      },
      { new: true }
    );

    return new Response(JSON.stringify({ services: newPage }));
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }));
  }
}

export async function PUT(req) {
  const body = await req.json();
  try {
    await db.connectDb();
    const data = body;
    const newData = { services: data };
    const newPage = await ServicePage.findByIdAndUpdate(
      '65f6b96dfe87b8c8416c4a35',
      {
        ...newData,
      },
      { new: true }
    );
    return new Response(JSON.stringify({ services: newPage }));
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }));
  }
}

export async function GET(req) {
  try {
    await db.connectDb();
    const data = await ServicePage.findOne();
    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(JSON.stringify({ message: err.message }));
  }
}

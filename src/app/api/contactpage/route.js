import db from '../../../../utils/db';
import ContactPage from '../../../../models/ContactPage';

export async function POST(req) {
  const body = await req.json();
  try {
    await db.connectDb();
    const data = body;

    const newContact = new ContactPage({
      phone: '+380734187147',
      mail: 'consulting.lviv.ua@gmail.com',
      instagram: 'www.instagram.com/tanyaselezniova_accountant/',
      telegram: 't.me/tanyaselezniova_accountant',
      youtube: 'www.youtube.com/@consulting-accountant',
    });

    const res = await newContact.save();
    // const oldData = await AboutPage.findOne();
    // oldData.workers.push(data);
    // const newPage = await AboutPage.findByIdAndUpdate(
    //   '65f09c01d011ba41a27eb247',
    //   {
    //     ...oldData,
    //   },
    //   { new: true }
    // );

    // const newPage = new AboutPage({ ...data, topImg: data.topImg });
    // const addedPage = await newPage.save();
    return new Response(JSON.stringify({ message: 'done' }));
  } catch (err) {
    return new Response(JSON.stringify({ message: err.message }));
  }
}

export async function PUT(req) {
  const body = await req.json();
  try {
    await db.connectDb();
    const data = body;
    // const newData = { data };
    const newPage = await ContactPage.findByIdAndUpdate(
      '65fa04357ebdc7edc42e6e10',
      {
        ...data,
      },
      { new: true }
    );
    return new Response(JSON.stringify({ newPage }));
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }));
  }
}

export async function GET(req) {
  try {
    await db.connectDb();
    const data = await ContactPage.findOne();
    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(JSON.stringify({ message: err.message }));
  }
}

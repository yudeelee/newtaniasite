import db from '../../../../utils/db';
import User from '../../../../models/User';

// export async function POST(req) {
//   const body = await req.json();
//   //   console.log(body);
//   try {
//     await db.connectDb();
//     const data = body;
//     const oldData = await AboutPage.findOne();
//     // console.log(oldData, 'data');
//     // console.log(oldData.workers, 'workers');
//     oldData.workers.push(data);
//     const newPage = await AboutPage.findByIdAndUpdate(
//       '65f09c01d011ba41a27eb247',
//       {
//         ...oldData,
//       },
//       { new: true }
//     );

//     // const newPage = new AboutPage({ ...data, topImg: data.topImg });
//     // const addedPage = await newPage.save();
//     return new Response(JSON.stringify({ message: 'done' }));
//   } catch (err) {
//     return new Response(JSON.stringify({ message: err.message }));
//   }
// }

// export async function PUT(req) {
//   const body = await req.json();
//   try {
//     await db.connectDb();
//     const data = body;
//     const newData = { workers: data };
//     const newPage = await AboutPage.findByIdAndUpdate(
//       '65f09c01d011ba41a27eb247',
//       {
//         ...newData,
//       },
//       { new: true }
//     );
//     return new Response(JSON.stringify({ workers: newPage }));
//   } catch (error) {
//     return new Response(JSON.stringify({ message: error.message }));
//   }
// }

export async function GET(req) {
  try {
    await db.connectDb();
    const data = await User.find();
    return new Response(JSON.stringify(data));
  } catch (error) {
    return new Response(JSON.stringify({ message: error.message }));
  }
}

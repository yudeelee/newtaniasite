import db from "../../../../utils/db";
import Order from "../../../../models/Order";
import Client from "../../../../models/Client";
import Event from "../../../../models/Event";
import axios from "axios";

export async function POST(req) {
  const body = await req.json();
  console.log(body, "ddd");
  try {
    const { category, item, comment, name, phone, mail, price } = body;
    if (!name || !phone) {
      return new Response(JSON.stringify({ message: "empty fields" }));
    }
    // let client = await Client.findOne({ name, phone, mail });
    // if (!client) {
    //   const newClient = new Client({
    //     name,
    //     phone,
    //     mail,
    //     birthday: '',
    //     organization: '',
    //     comment: '',
    //   });
    //   const res = await newClient.save();
    //   client = res;
    // }
    // const newOrder = new Order({
    //   category,
    //   item,
    //   price,
    //   comment,
    //   userId: client._id,
    //   managerId: null,
    //   status: 'waiting',
    //   managerComment: '',
    // });
    // const result = await newOrder.save();
    // const newEvent = new Event({
    //   userId: '',
    //   orderId: result.id,
    //   type: 'add',
    //   description: 'Додано нове замовлення',
    // });
    // await newEvent.save();

    const data = {
      source_id: 3,
      // source_name: 'Сайт',
      buyer: {
        full_name: name,
        email: mail,
        phone: phone,
      },
      shipping: {
        shipping_address_city: "Lviv",
        shipping_receive_point: "Lviv",
        shipping_address_country: "Lviv",
        shipping_address_region: "Lviv",
        shipping_address_zip: "Lviv",
      },
      products: [
        {
          price: price,
          quantity: 1,
          name: `${category} || ${item}`,
          picture: "111",
        },
      ],
    };

    // const data = {
    //   source_id: 3,
    //   buyer: { full_name: "yura", email: "yura@mail.com", phone: "3874583405" },
    //   shipping: {
    //     shipping_address_city: "Lviv",
    //     shipping_receive_point: "Lviv",
    //     shipping_address_country: "Lviv",
    //     shipping_address_region: "Lviv",
    //     shipping_address_zip: "Lviv",
    //   },
    //   products: [
    //     {
    //       price: 2500,
    //       quantity: 1,
    //       name: "Гранти || Допомога з поданням грантової заявки",
    //       picture: "111",
    //     },
    //   ],
    // };

    // console.log(data);
    // const res = await axios.get('https://openapi.keycrm.app/v1/order', {
    //   headers: {
    //     'Content-type': 'application/json',
    //     Accept: 'application/json',
    //     'Cache-Control': 'no-cache',
    //     Pragma: 'no-cache',
    //     Authorization:
    //       'Bearer YTU3NzQ1ZmIzMDdmNDU5YzBjMjFhODRmMGY0MTRmMjg0YTdhYzVhNw',
    //   },
    // });
    const res = await axios.post("https://openapi.keycrm.app/v1/order", data, {
      headers: {
        "Content-type": "application/json",
        Accept: "application/json",
        "Cache-Control": "no-cache",
        Pragma: "no-cache",
        Authorization:
          "Bearer YTU3NzQ1ZmIzMDdmNDU5YzBjMjFhODRmMGY0MTRmMjg0YTdhYzVhNw",
      },
    });

    console.log(res.data);

    return new Response(JSON.stringify(res.data));
    // return new Response(JSON.stringify({ message: "order added" }));
  } catch (error) {
    console.log("there", error);
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
    return new Response(JSON.stringify({ message: "order added" }));
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

import { join } from 'path';
import { writeFile } from 'fs/promises';
import Image from '../../../../models/Image';
import db from '../../../../utils/db';
import axios from 'axios';
var path = require('path');

export async function POST(req) {
  const cloudName = 'dnsm5nwmg';
  const uploadPreset = 'tanias_preset';
  try {
    await db.connectDb();
    const data = await req.formData();
    const file = data.get('file');

    if (!file) {
      return new Response(JSON.stringify({ message: 'failed' }));
    }

    const dataForm = new FormData();
    dataForm.set('file', file);
    dataForm.set('upload_preset', uploadPreset);

    const res = await axios.post(
      `https://api.cloudinary.com/v1_1/${cloudName}/image/upload`,
      dataForm
    );
    const newImg = new Image({
      src: res.data.url,
    });

    // const bytes = await file.arrayBuffer();
    // const buffer = Buffer.from(bytes);

    // const path1 = join('./', 'public', 'img', 'uploaded', dat + ext);
    // await writeFile(path1, buffer);
    const addedImg = await newImg.save();

    return new Response(JSON.stringify(addedImg));
    // return new Response(JSON.stringify({ message: 'ok' }));
  } catch (error) {
    return new Response(JSON.stringify({ message: 'failed1' }));
  }
}

export async function GET(req) {
  try {
    await db.connectDb();
    const images = await Image.find();

    return new Response(JSON.stringify(images));
  } catch (error) {
    return new Response(JSON.stringify({ message: 'failed' }));
  }
}

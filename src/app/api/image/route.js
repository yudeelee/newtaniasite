import { join } from 'path';
import { writeFile } from 'fs/promises';
import Image from '../../../../models/Image';
import db from '../../../../utils/db';
var path = require('path');

export async function POST(req) {
  try {
    await db.connectDb();
    const data = await req.formData();
    const file = data.get('file');

    if (!file) {
      return new Response(JSON.stringify({ message: 'failed' }));
    }

    const dat = Date.now().toString();

    const ext = path.extname(file.name);

    const newImg = new Image({
      src: `/img/uploaded/${dat + ext}`,
    });

    const bytes = await file.arrayBuffer();
    const buffer = Buffer.from(bytes);

    const path1 = join('./', 'public', 'img', 'uploaded', dat + ext);
    await writeFile(path1, buffer);
    const addedImg = await newImg.save();

    return new Response(JSON.stringify(addedImg));
  } catch (error) {
    return new Response(JSON.stringify({ message: 'failed' }));
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

import { NextResponse } from "next/server";
import path from 'path';
import fs from 'fs';

export async function POST (request: Request) {
  const res = NextResponse;
  const formData = await request.formData();
  const imageFile = formData.get("image") as File | undefined;
  const fileName = formData.get("filename") as string | undefined;
  const folderName = formData.get("folder") as string | undefined;

  console.log('api: formData :>> ', formData);
  try {
    const uploadDir = path.join(process.cwd(), 'public/uploads', folderName || '');
    console.log('api: uploadDir :>> ', uploadDir);
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
      console.log('api: created uploadDir ', uploadDir);
    }
    
    if(imageFile && fileName){
      const imagePath = path.join(uploadDir, fileName);
      const buffer = await imageFile.arrayBuffer();
      const imageBuffer = Buffer.from(buffer);
      fs.writeFileSync(`/tmp${imagePath}`, imageBuffer);
      console.log('api: success (berenti disini):>> ');
      return res.json({
        code: 201,
        message: "Created",
        description: "image berhasil di unggah"
      })
    }

    console.log('api: error 400:>> ');
    return res.json({
      code: 400,
      message: "Bad Request",
      description: "image atau filename tidak boleh kosong"
    })
  } catch (error) {
    console.log('api: error ketika upload image :>> ', error);
    return res.json({
      code: 500,
      message: "Internal Server Error",
      description: "terjadi kesalahan, image gagal diunggah"
    })
  }
}
import { NextResponse } from "next/server";
import path from 'path';
import fs from 'fs';

export async function POST (request: Request) {
  const res = NextResponse;
  const formData = await request.formData();
  const imageFile = formData.get("image") as File | undefined;
  const fileName = formData.get("filename") as string | undefined;
  const folderName = formData.get("folder") as string | undefined;

  try {
    const uploadDir = path.join(process.cwd(), 'public/uploads', folderName || '');
    if (!fs.existsSync(uploadDir)) {
      fs.mkdirSync(uploadDir);
    }
    
    if(imageFile && fileName){
      const imagePath = path.join(uploadDir, fileName);
      const buffer = await imageFile.arrayBuffer();
      const imageBuffer = Buffer.from(buffer);
      fs.writeFileSync(imagePath, imageBuffer);
      return res.json({
        code: 201,
        message: "Created",
        description: "image berhasil di unggah"
      })
    }

    return res.json({
      code: 400,
      message: "Bad Request",
      description: "image atau filename tidak boleh kosong"
    })
  } catch (error) {
    return res.json({
      code: 500,
      message: "Internal Server Error",
      description: "terjadi kesalahan, image gagal diunggah"
    })
  }
}
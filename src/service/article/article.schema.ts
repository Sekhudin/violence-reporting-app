import * as z from 'zod';
import { TypeZod } from 'src/util/types';
import { ArticleDto } from './article.dto';

export namespace ArticleShcema {
  const MAX_FILE_SIZE = 3000000; //3 MB
  const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  const _create: TypeZod<ArticleDto.Create> = {
    title: z.string().min(10, { message: "Judul terlalu singkat"}).trim().toLowerCase(),
    article: z.string().min(20, { message: "Artikel terlalu singkat"}).trim().toLowerCase(),
    image: z.string().refine((v)=> v ? v.length > 1 : true, 'gagal membaca gambar'),
    imageFile: z.any().refine(
      (file) => file? file.size <= MAX_FILE_SIZE : true,
      `Maksimal ukuran gambar 3MB.`).refine(
      (file) => file? ACCEPTED_IMAGE_TYPES.includes(file?.type): true,
      `Only .jpg, .jpeg, .png and .webp formats are supported.`)
  } as any

  export const create = z.object(_create);
}
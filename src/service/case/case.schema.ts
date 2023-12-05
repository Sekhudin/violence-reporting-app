import * as z from 'zod';
import { TypeZod } from 'src/util/types';
import { CaseDto } from './case.dto';

export namespace CaseSchema {
  const MAX_FILE_SIZE = 3000000; //3 MB
  const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  const _create: TypeZod<Omit<CaseDto.Create, 'type_incident'>
  & {
    type_incident: string ;
    imageFile?: any
  }> = {
    id_card: z.string().min(16, { message: "ktp tidak valid, minimal 16 karakter" }).refine((x)=> Number(x), "ktp tidak valid"),
    name: z.string().min(1, {message: "nama tidak valid"}).toLowerCase().trim(),
    address: z.string().min(10, { message: "alamat sesuai ktp (desa, rt, rw, kecamatan)" }).toLowerCase().trim(),
    phone: z.string().min(12, { message: "telephone tidak valid, min. 12 karakter" }).refine((x)=> Number(x), "telepon tidak valid"),
    title: z.string().min(15, { message: "perjelas judul, minimal 15 karakter" }).toLowerCase().trim(),
    type_incident: z.enum(CaseDto.TYPE_CASE).transform((type)=> type.trim()),
    date_incident: z.coerce.date(),
    location_incident: z.string().min(10, { message: "lokasi kurang jelas, minimal 10 karakter" }).toLowerCase().trim(),
    description: z.string().min(20, { message: "deskripsi kurang rinci, lebih detail"}).toLowerCase().trim(),
    evidence: z.string().trim().optional(),
    evidence_img: z.string().trim().optional(),
    imageFile: z.any().optional()
  }
  export const create = z.object(_create);
}
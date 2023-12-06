import * as z from 'zod';
import { TypeZod } from 'src/util/types';
import { UserDto } from './user.dto';

export namespace UserSchema {
  const MAX_FILE_SIZE = 3000000; //3 MB
  const ACCEPTED_IMAGE_TYPES = ["image/jpeg", "image/jpg", "image/png", "image/webp"];
  const passwordPattern:RegExp = /^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{8,}$/;
  
  const _login: TypeZod<UserDto.Login> = {
    email: z.string().email("Invalid email").toLowerCase().trim(),
    password: z.string().min(8, {message: "Pnvalid password"})
  }

  const _create : TypeZod<UserDto.Create> = {
    id_card: z.string().min(16, { message: "KTP tidak valid, minimal 16 karakter" }).refine((x)=> Number(x), "ktp tidak valid"),
    name: z.string().min(1, { message: 'Nama tidak boleh kosong'}).trim().toLowerCase(),
    email: z.string().email("Invalid email").trim().toLowerCase(),
    password: z.string().min(8, { message: "Password minimal 8 karakter"}).regex(passwordPattern, {
      message: "Password harus terdiri dari kombinasi angka, Uppercase, lowercase, dan karakter"
    }),
    image: z.string().min(1, {message: 'foto tidak boleh kosong'}),
    imageFile: z.any().refine((file) => file?.size <= MAX_FILE_SIZE, `Maksimal ukuran gambar 3MB.`).refine(
      (file) => ACCEPTED_IMAGE_TYPES.includes(file?.type), "Only .jpg, .jpeg, .png and .webp formats are supported.")
  } as any


  export const login = z.object(_login).required();
  export const create = z.object(_create).required();
}

import * as z from 'zod';
import { TypeZod } from 'src/util/types';
import { UserDto } from './user.dto';

export namespace UserSchema {
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
  }


  export const login = z.object(_login).required();
  export const create = z.object(_create).required();
}

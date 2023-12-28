import { FirebaseError } from 'firebase/app';
import { FunStr } from 'src/util/str';
import { HttpException } from './http.exception';
import { Exception } from './type';
export * from './http.exception';

export type HooksWithStatus = { loading: boolean; error?: HttpException | null; }
export function catchError(e: any, desc?: string): Exception.Catch {
  let code: number = 500;
  let message: string = "error";
  let description: string = desc || "internal server error";

  if(e instanceof HttpException){
    code = e.code;
    message = e.message;
    description = e.description;
  }

  if(e instanceof FirebaseError){
    if(e.code.includes("auth")){
      message = "autentication failed";
      description = "terja kesalahan saat autentikasi";
      if(e.code.includes("invalid")){
        description = "email atau password tidak cocok/tidak terdaftar";
      }
    }
  }

  const result: Exception.Catch = {
    forToast: {
      variant: "error",
      title: FunStr.capitalFirst(message),
      description: FunStr.capitalFirst(description)
    },
    errorDetail: { code, message, description }
  }

  return result;
}
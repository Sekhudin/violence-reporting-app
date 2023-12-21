import { FirebaseError } from 'firebase/app';
import { HttpException } from './http.exception';
import { FunStr } from 'src/util/str';
import { Exception } from './type';
export * from './http.exception';

export type HttpErrorDetail = Exception.HttpErrorDetail;
export function catchError(error: any, desc?: string): Exception.Catch {
  let title: string = "error";
  let description: string = desc || "internal server error";

  if(error instanceof HttpException){
    title = error.message;
    description = error.description;
  }

  if(error instanceof FirebaseError){
    const { code } = error;
    if(code.includes("auth")){
      title = "autentication failed";
      description = "terja kesalahan saat autentikasi";
      if(code.includes("invalid")){
        description = "email atau password tidak cocok/tidak terdaftar";
      }
    }
  }

  return {
    forToast: {
      variant: "error",
      title: FunStr.capitalFirst(title),
      description: FunStr.capitalFirst(description)
    },
    errorDetail: { code: 500, message: title, description }
  }

}
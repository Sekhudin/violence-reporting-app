import { HttpException } from './http.exception';
import { FunStr } from 'src/util/str';
import { Exception } from './type';
export * from './http.exception';

export function catchError(error: any): Exception.Catch {

  if(error instanceof HttpException){
    return {
      forToast: {
        variant: "error",
        title: FunStr.capitalFirst(error.message),
        description: FunStr.capitalFirst(error.description)
      }
    }
  }

  return {
    forToast: {
      variant: "error",
      title: FunStr.capitalFirst("error"),
      description: FunStr.capitalFirst("internal server error")
    }
  }

}
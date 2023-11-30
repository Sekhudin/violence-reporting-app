import { ForToast } from 'src/component/ui/use-toast';
import { HttpException } from './http.exception';
import { Str } from 'src/util';

export type CatchAll = {
  forToast: ForToast
}

export function catchAll(error: any): CatchAll {

  if(error instanceof HttpException){
    return {
      forToast: {
        variant: "error",
        title: Str.capitalFirst(error.message),
        description: Str.capitalFirst(error.description)
      }
    }
  }

  return {
    forToast: {
      variant: "error",
      title: Str.capitalFirst("error"),
      description: Str.capitalFirst("internal server error")
    }
  }

}
import { FieldErrors, FieldValues } from 'react-hook-form';
import { ForToast } from 'src/component/ui/use-toast';
import { FunStr } from 'src/util/str';
export * from './type';

export namespace HookForm {
  export function catchErrorMessage<T extends FieldValues>(e: any ): ForToast {
    const error = e as FieldErrors<T>;
    const keys = Object.keys(error);
    const title = "Bad Request";
    let description: string = "validation error";
    if(keys && keys[0]){
      const fieldname = keys[0] as keyof FieldErrors<T>;
      const field = error[fieldname];
      if(field && typeof field.message === 'string'){
        description = field.message;
      }
    }
    return { variant: "error", title, description };
  }

  export function successMessage(message?: string):ForToast {
    const description = FunStr.capitalFirst(message || "berhasil")
    return { variant: "success", title: "Sukses", description };
  }
}
"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "src/component/ui/use-toast";
import { catchError } from 'src/util/exception/catch';
import { HookForm, UseForm } from 'src/util/hook-form/catch';
import { UserDto } from "../user.dto";
import { UserSchema } from "../user.schema";
import { UserService } from '../user.service';

export function useFormUserLogin():UseForm<UserDto.Login>{
  const [disabled, setDisabled] = useState<boolean>(false)
  const router = useRouter()
  const { toast } = useToast();
  const form = useForm<UserDto.Login>({
    resolver: zodResolver(UserSchema.login),
    defaultValues: new UserDto.Login(),
  })

  const onSubmit = async (values: UserDto.Login) => {
   try {
    setDisabled(true);
    const result = await UserService.signInEmailPwd(values);
    form.reset({});
    router.push("/dashboard");
    setDisabled(false);
    return result;
   } catch (error:any) {
    const { forToast } = catchError(error);
    setDisabled(false);
    toast(forToast);
   }
  }
  const onValidationError = (error: any) =>{
    const message = HookForm.catchErrorMessage(error);
    toast(message);
  }

  return [form, onSubmit, onValidationError, disabled]
}
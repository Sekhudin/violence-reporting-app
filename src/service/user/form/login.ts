"use client"
import { useState } from 'react';
import { useRouter } from 'next/navigation'
import { useForm, UseFormReturn, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "src/component/ui/use-toast";
import { catchAll } from 'src/util/exception/catch-all';
import { UserDto } from "../user.dto";
import { UserSchema } from "../user.schema";
import { UserService } from '../user.service';

type UserLoginForm = [UseFormReturn<UserDto.Login>, SubmitHandler<any>, boolean ]
export function useFormUserLogin():UserLoginForm{
  const [disabled, setDisabled] = useState<boolean>(false)
  const router = useRouter()
  const { toast } = useToast();
  const form = useForm<UserDto.Login>({
    resolver: zodResolver(UserSchema.login),
    defaultValues: {
      email: "",
      password: ""
    }
  })

  const onSubmit = async (values: UserDto.Login) => {
   try {
    setDisabled(true);
    const result = await UserService.signInEmailPwd(values);
    form.reset();
    router.push("/dashboard");
    setDisabled(false);
    const user = result?.values as UserDto.Payload;
    toast({
      variant: "show",
      title: `Hello, ${user.name || 'Admin'}`,
      description: "Mari bersama melawan kekerasan"
    })
    return result;
   } catch (error:any) {
    const { forToast } = catchAll(error);
    setDisabled(false);
    toast(forToast);
   }
  }
  return [form, onSubmit, disabled]
}
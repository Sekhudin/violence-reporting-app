"use client"
import { useState } from 'react';
import { useForm, UseFormReturn, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "src/component/ui/use-toast";
import { catchAll } from 'src/util/exception/catch-all';
import { UserDto } from "../user.dto";
import { UserSchema } from "../user.schema";
import { UserService } from '../user.service';

type UserCreateForm = [UseFormReturn<UserDto.Create>, SubmitHandler<any>, boolean ]
export function useFormUserCreate():UserCreateForm{
  const [disabled, setDisabled] = useState<boolean>(false)
  const { toast } = useToast();
  const form = useForm<UserDto.Create>({
    resolver: zodResolver(UserSchema.create),
    defaultValues: {
      id_card: "",
      name: "",
      email: "",
      password: "",
    }
  })

  const onSubmit = async (values: UserDto.Create) => {
   try {
    setDisabled(true);
    const user = await UserService.creaateAdmin(values);
    form.reset();
    setDisabled(false);
    return user;
   } catch (error:any) {
    const { forToast } = catchAll(error);
    setDisabled(false);
    toast(forToast);
   }
  }
  return [form, onSubmit, disabled]
}
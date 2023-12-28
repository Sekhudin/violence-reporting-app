"use client"
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "src/component/ui/use-toast";
import { catchError } from 'src/util/exception/catch';
import { HookForm, UseForm } from 'src/util/hook-form/catch';
import { UserDto } from "../user.dto";
import { UserSchema } from "../user.schema";
import { UserService } from '../user.service';

export function useFormUserCreate():UseForm<UserDto.Create>{
  const [disabled, setDisabled] = useState<boolean>(false)
  const { toast } = useToast();
  const defaultValues = new UserDto.Create()
  const form = useForm<UserDto.Create>({
    resolver: zodResolver(UserSchema.create),
    defaultValues,
  })

  const onSubmit = async (values: UserDto.Create) => {
   try {
    setDisabled(true);
    const result = await UserService.creaateAdmin(values);
    form.reset(defaultValues);
    setDisabled(false);
    toast(HookForm.successMessage("Admin baru berhasil ditambahkan"))
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
"use client"
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "src/component/ui/use-toast";
import { catchError } from 'src/util/exception/catch';
import { HookForm, UseForm } from 'src/util/hook-form/catch';
import { ArticleDto } from "../article.dto";
import { ArticleShcema } from "../article.schema";
import { ArticleService } from '../article.service';

export function useFormArticleCreate():UseForm<ArticleDto.Create>{
  const [disabled, setDisabled] = useState<boolean>(false)
  const { toast } = useToast();
  const form = useForm<ArticleDto.Create>({
    resolver: zodResolver(ArticleShcema.create),
    defaultValues: new ArticleDto.Create()
  })

  const onSubmit = async (values: ArticleDto.Create) => {
   try {
    setDisabled(true);
    const article = await ArticleService.create(values);
    form.reset({});
    toast(HookForm.successMessage("Artikel berhasil ditambahkan"));
    setDisabled(false);
    return article;
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
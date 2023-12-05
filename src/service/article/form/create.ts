"use client"
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "src/component/ui/use-toast";
import { catchError, BadRequestException } from 'src/util/exception/catch';
import { HookForm, UseForm } from 'src/util/hook-form/catch';
import { ArticleDto } from "../article.dto";
import { ArticleShcema } from "../article.schema";
import { ArticleService } from '../article.service';

type ArticleCreate = { imageFile?: File | null } & ArticleDto.Create;
export function useFormArticleCreate():UseForm<ArticleCreate>{
  const [disabled, setDisabled] = useState<boolean>(false)
  const { toast } = useToast();
  const form = useForm<ArticleCreate>({
    resolver: zodResolver(ArticleShcema.create),
    defaultValues: {
      title: "",
      article: "",
      image: "",
      imageFile: null
    }
  })

  const onSubmit = async ({ imageFile, ...values}: ArticleCreate) => {
   try {
    if(!imageFile) throw new BadRequestException("Gagal memuat gambar")
    setDisabled(true);
    const image = imageFile as File
    const article = await ArticleService.create(values, image);
    form.reset();
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
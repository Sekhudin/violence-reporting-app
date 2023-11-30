"use client"
import { useState } from 'react';
import { useForm, UseFormReturn, SubmitHandler, SubmitErrorHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "src/component/ui/use-toast";
import { catchAll } from 'src/util/exception/catch-all';
import { BadRequestException } from 'src/util/exception/http.exception';
import {  } from 'src/component/static-file/illustration';
import { ArticleDto } from "../article.dto";
import { ArticleShcema } from "../article.schema";
import { ArticleService } from '../article.service';

type ArticleCreate = {
  imageFile?: File | null;
} & ArticleDto.Create
type ArticleCreateForm = [
  UseFormReturn<ArticleCreate>,
  SubmitHandler<ArticleCreate>,
  boolean,
  SubmitErrorHandler<ArticleCreate>
]
export function useFormArticleCreate():ArticleCreateForm{
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

  const onValidationError:SubmitErrorHandler<ArticleCreate> = ({ imageFile }) =>{
    if(imageFile){
      toast({
        variant: "error",
        title: "Error",
        description: typeof imageFile.message === 'string' ? imageFile.message : "Gagal memuat file gambar"
      })
    }
  }

  const onSubmit:SubmitHandler<ArticleCreate> = async ({ imageFile, ...values}) => {
   try {
    if(!imageFile) throw new BadRequestException("Gagal memuat gambar")
    setDisabled(true);
    const image = imageFile as File
    const article = await ArticleService.create(values, image);
    form.reset();
    toast({
      variant: "success",
      title: "Sukses",
      description: "Artikel berhasil ditambahkan"
    })
    setDisabled(false);
    return article;
   } catch (error:any) {
    const { forToast } = catchAll(error);
    setDisabled(false);
    toast(forToast);
   }
  }

  return [form, onSubmit, disabled, onValidationError]
}
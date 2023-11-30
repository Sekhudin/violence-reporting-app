"use client"
import { useState } from 'react';
import { useForm, UseFormReturn, SubmitHandler } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "src/component/ui/use-toast";
import { catchAll } from 'src/util/exception/catch-all';
import { CaseDto } from "../case.dto";
import { CaseSchema } from "../case.schema";
import { CaseService } from '../case.service';

export type TypeCase = CaseDto.TypeCase;
type CaseCreate = {
  imageFile: any
} & CaseDto.Create
type UserLoginForm = [UseFormReturn<CaseCreate>, SubmitHandler<CaseCreate>, boolean ];
export function useFormCaseCreate(): UserLoginForm {
  const [disabled, setDisabled] = useState<boolean>(false)
  const { toast } = useToast();
  const form = useForm<CaseCreate>({
    resolver: zodResolver(CaseSchema.create),
    defaultValues: {
      id_card: '',
      name: '',
      address: '',
      phone: '',
      title: '',
      type_incident: 'verbal',
      location_incident: '',
      date_incident: new Date(),
      description: '',
      evidence: '',
      evidence_img: '',
      imageFile: null
    }
  })

  const onSubmit = async ({ imageFile, ...values}: CaseCreate) => {
   try {
    setDisabled(true);
    const newCase = await CaseService.create(values, imageFile);
    setDisabled(false);
    form.reset();
    toast({
      variant: "success",
      title: "Berhasil",
      description: "Aduan berhasil dikirim"
    });
    return newCase;
   } catch (error:any) {
    const { forToast } = catchAll(error);
    setDisabled(false);
    toast(forToast);
   }
  }

  return [form, onSubmit, disabled]
}
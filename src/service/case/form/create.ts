"use client"
import { useState } from 'react';
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useToast } from "src/component/ui/use-toast";
import { catchError } from 'src/util/exception/catch';
import { HookForm, UseForm } from 'src/util/hook-form/catch';
import { CaseDto } from "../case.dto";
import { CaseSchema } from "../case.schema";
import { CaseService } from '../case.service';

export type CaseType = CaseDto.Type;
type CaseCreate = { imageFile: any } & CaseDto.Create;
export function useFormCaseCreate(): UseForm<CaseCreate> {
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
    const result = await CaseService.create(values, imageFile);
    setDisabled(false);
    form.reset();
    toast(HookForm.successMessage("Aduan berhasil dikirim"));
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
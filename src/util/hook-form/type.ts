import { UseFormReturn, SubmitHandler, SubmitErrorHandler, FieldValues } from "react-hook-form";

export type UseForm<T extends FieldValues> = [
  UseFormReturn<T>,
  SubmitHandler<T>,
  SubmitErrorHandler<T>,
  boolean,
]

export type TemplateMsgType = "login";
import { UseFormReturn, SubmitHandler, SubmitErrorHandler, FieldValues } from "react-hook-form";
import { ForToast } from 'src/component/ui/use-toast';

export type UseForm<T extends FieldValues> = [
  UseFormReturn<T>,
  SubmitHandler<T>,
  SubmitErrorHandler<T>,
  boolean,
]
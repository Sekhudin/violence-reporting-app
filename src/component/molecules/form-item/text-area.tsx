import React from "react";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage, useFormField } from "src/component/ui/form";
import { Textarea, TextareaProps } from "src/component/ui/textarea";
import { cn } from "src/util";

export type ItemTextAreaProps = {
  label?: string;
  description?: string;
  itemClassName?: string,
  labelClassName?: string;
  desClassName?: string;
  msgClassName?: string;
  forceMsgBox?: boolean;
} & TextareaProps;

export const ItemTextArea = React.forwardRef<HTMLDivElement, ItemTextAreaProps>(({
  label,
  description,
  className,
  itemClassName,
  labelClassName,
  desClassName,
  msgClassName,
  forceMsgBox,
  ...props }, ref) => {
  const { error } = useFormField()
  return (
    <FormItem ref={ref} className={cn("space-y-1.5", itemClassName)}>
      {label && (<FormLabel className={cn(`text-base invalid:text ${error && 'text-primary'}`,
        labelClassName)}>
        {label}
      </FormLabel>)}

      <FormControl>
        <Textarea
          className={cn(`focus-visible:ring-blue-500 resize-y ${error && 'focus-visible:ring-pink-500'}`, className)}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          {...props} />
      </FormControl>

      {description && (<FormDescription className={cn(`${error && "hidden"} font-light`,
        desClassName)}>
        {description}
      </FormDescription>)}

      {forceMsgBox && !error && (<FormDescription className={cn(`invisible font-light`, `${desClassName} invisible`)}>
        forceLabelBox
      </FormDescription>)}

      <FormMessage className={cn("font-light", msgClassName)} />
    </FormItem>
  )
})
ItemTextArea.displayName = "ItemInput"

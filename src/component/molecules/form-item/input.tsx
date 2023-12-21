import Image from "next/image";
import React from "react";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage, useFormField } from "src/component/ui/form";
import { Input, InputProps } from "src/component/ui/input";
import { cn } from "src/util";

export type ItemInputProps = {
  label?: string;
  description?: string;
  imageFile?: File | null,
  itemClassName?: string,
  labelClassName?: string;
  desClassName?: string;
  msgClassName?: string;
  imgPrevClassName?: string;
  forceMsgBox?: boolean;
} & InputProps;

export const ItemInput = React.forwardRef<HTMLDivElement, ItemInputProps>(({
  label,
  description,
  type,
  accept,
  imageFile,
  className,
  itemClassName,
  labelClassName,
  desClassName,
  msgClassName,
  imgPrevClassName,
  forceMsgBox,
  ...props }, ref) => {
  const { error } = useFormField()
  const sourceFile = imageFile ? URL.createObjectURL(imageFile) : null;
  return (
    <FormItem ref={ref} className={cn("space-y-1.5", itemClassName)}>
      {label && (<FormLabel className={cn(`text-base invalid:text ${error && 'text-primary'}`,
        labelClassName)}>
        {label}
      </FormLabel>)}

      {
        type && type === 'file' && accept?.includes("image") ? (
          <div className={cn('relative overflow-hidden flex justify-center', imgPrevClassName)}>
            {imageFile && (
              <Image
                className="object-cover"
                src={sourceFile || ""}
                fill={true}

                alt={imageFile.name} />
            )}
          </div>
        ) : null
      }

      <FormControl>
        <Input
          type={type || 'text'}
          accept={accept}
          className={cn(`focus-visible:ring-blue-500 ${error && 'focus-visible:ring-pink-500'}`, className)}
          autoComplete="off"
          autoCorrect="off"
          autoCapitalize="none"
          {...props} />
      </FormControl>

      {description && (<FormDescription className={cn(`${error && "hidden"} font-light`,
        desClassName, 'text-xs md:text-sm pb-1')}>
        {description}
      </FormDescription>)}

      {forceMsgBox && !error && !description && (<FormDescription className={cn(`invisible font-light`,
        `${desClassName} invisible`, 'text-xs md:text-sm pb-1')}>
        forceLabelBox
      </FormDescription>)}

      <FormMessage className={cn("font-light", msgClassName, 'text-xs md:text-sm pb-1')} />
    </FormItem>
  )
})
ItemInput.displayName = "ItemInput"

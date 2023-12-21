"use client"
import React, { useState } from "react";
import { Eye, EyeOff } from "lucide-react";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage, useFormField } from "src/component/ui/form";
import { Input, InputProps } from "src/component/ui/input";
import { Toggle } from "src/component/ui/toggle";
import { cn } from "src/util";

export type ItemPasswordProps = {
  label?: string;
  description?: string;
  itemClassName?: string,
  inputClassName?: string;
  toggleClassName?: string;
  labelClassName?: string;
  desClassName?: string;
  msgClassName?: string;
  forceMsgBox?: boolean;
} & Omit<InputProps, 'type'>;

export const ItemPassword = React.forwardRef<HTMLDivElement, ItemPasswordProps>(({
  label,
  description,
  className,
  inputClassName,
  toggleClassName,
  itemClassName,
  labelClassName,
  desClassName,
  msgClassName,
  forceMsgBox,
  ...props }, ref) => {
  const { error } = useFormField()
  const [type, setType] = useState<InputProps['type']>('password');
  const [focus, setFocus] = useState<boolean>(false);

  const toggleHandler = (checked: boolean) => {
    if (checked) {
      setType("text")
    } else {
      setType("password")
    }
  }

  const blurFocus = () => {
    setFocus(!focus)
  }

  return (
    <FormItem ref={ref} className={cn("space-y-1.5", itemClassName)}>
      {label && (<FormLabel className={cn(`text-base invalid:text ${error && 'text-primary'}`,
        labelClassName)}>
        {label}
      </FormLabel>)}

      <div className={cn(`flex items-center w-full space-x-3 rounded-md border
        border-input bg-background text-sm ring-offset-background
        disabled:cursor-not-allowed disabled:opacity-50 px-3 py-2
        overflow-hidden ${focus && 'ring-2 ring-offset-2 ring-blue-500'}
        ${focus && error && 'ring-2 ring-offset-2 ring-pink-500'}`, className)}>
        <FormControl>
          <Input
            type={type}
            onFocus={blurFocus}
            onBlurCapture={blurFocus}
            className={cn(`h-fit p-0 m-0 border-none rounded-none ring-0 outline-none
            shadow-none focus-visible:ring-0 focus-visible:ring-transparent
            focus-visible:outline-none`, inputClassName)}
            autoComplete="off"
            autoCorrect="off"
            autoCapitalize="none"
            placeholder="email" {...props} />
        </FormControl>

        <Toggle className={cn(`block w-fit h-fit p-0 m-0 rounded-none
          bg-transparent hover:bg-transparent active:bg-transparent
          data-[state=on]:bg-transparent`, toggleClassName)}
          onPressedChange={toggleHandler}>
          {type === 'password' ? <EyeOff className="w-5 h-5" /> : <Eye className="w-5 h-5" />}
        </Toggle>
      </div>

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
ItemPassword.displayName = "ItemPassword"

import React from "react";
import { Check, ChevronsUpDown } from "lucide-react";
import { Command, CommandEmpty, CommandGroup, CommandInput, CommandItem } from 'src/component/ui/command';
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage, useFormField } from "src/component/ui/form";
import { Popover, PopoverTrigger, PopoverContent, PopoverClose } from 'src/component/ui/popover';
import { Button, ButtonProps } from "src/component/ui/button";
import { cn } from "src/util";

type ListValue<T extends string = string> = {
  label: string;
  value: T;
}

export type ItemComboboxProps<T extends string = string> = {
  listValue: ListValue<T>[],
  value: string,
  onSelect: (value: string) => void,
  alternativeValue?: string;
  placeholder?: string;
  emptyText?: string,
  label?: string;
  description?: string;
  itemClassName?: string,
  labelClassName?: string;
  desClassName?: string;
  msgClassName?: string;
  forceMsgBox?: boolean;
} & Omit<ButtonProps, 'onSelect' | 'value'>

export const ItemCombobox = React.forwardRef<HTMLDivElement, ItemComboboxProps>(({
  listValue,
  value,
  alternativeValue,
  placeholder,
  emptyText,
  onSelect,
  label,
  description,
  className,
  itemClassName,
  labelClassName,
  desClassName,
  msgClassName,
  forceMsgBox,
  children,
  ...props }, ref) => {
  const { error } = useFormField();

  return (
    <FormItem ref={ref} className={cn("flex flex-col", itemClassName)}>
      {label && (<FormLabel className={cn(`text-base invalid:text ${error && 'text-primary'}`,
        labelClassName)}>
        {label}
      </FormLabel>)}

      <Popover>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              className={cn('text-sm font-normal text-primary grow flex justify-between items-center', `${!value && "text-muted-foreground"} ${className}`)}
              variant="outline"
              role="combobox"
              {...props}>
              {value ? listValue.find(
                (list) => value === list.value
              )?.label
                : alternativeValue || "select"}
              <span>
                <ChevronsUpDown className={cn("w-4 h-4 opacity-50", '')} />
              </span>
            </Button>
          </FormControl>
        </PopoverTrigger>

        <PopoverContent className="p-0">
          <Command>
            <CommandInput
              placeholder={placeholder} />
            <CommandEmpty>{emptyText || "Tidak ada"}</CommandEmpty>
            <CommandGroup>
              {listValue.map((item, key) => (
                <PopoverClose key={key} className="flex flex-col w-full">
                  <CommandItem
                    className="flex justify-between items-center cursor-pointer"
                    key={item.label}
                    value={item.value}
                    onSelect={onSelect}>
                    <Check className={cn(`w-4 h-4 opacity-50 ${value === item.value ? "visible" : "invisible"}`, '')} />
                    {item.label}
                  </CommandItem>
                </PopoverClose>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>

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
ItemCombobox.displayName = "ItemCombobox"

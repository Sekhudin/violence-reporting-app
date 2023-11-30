import React from "react";
import { CalendarIcon } from "lucide-react";
import { format } from "date-fns"
import { Button } from "src/component/ui/button";
import { Calendar, CalendarSingleProps } from "src/component/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "src/component/ui/popover";
import { FormControl, FormDescription, FormItem, FormLabel, FormMessage, useFormField } from "src/component/ui/form";
import { cn } from "src/util";
import { PopoverClose } from "@radix-ui/react-popover";

export type ItemDateTimePickerProps = CalendarSingleProps & {
  label?: string;
  description?: string;
  placeholder?: string;
  itemClassName?: string,
  labelClassName?: string;
  desClassName?: string;
  msgClassName?: string;
  forceMsgBox?: boolean;
};

export const ItemDateTimePicker = React.forwardRef<HTMLDivElement, ItemDateTimePickerProps>(({
  label,
  description,
  placeholder,
  className,
  itemClassName,
  labelClassName,
  desClassName,
  msgClassName,
  forceMsgBox,
  selected,
  ...props }, ref) => {
  const { error } = useFormField()
  return (
    <FormItem ref={ref} className={cn("flex flex-col", itemClassName)}>
      {label && (<FormLabel className={cn(`text-base invalid:text ${error && 'text-primary'}`,
        labelClassName)}>
        {label}
      </FormLabel>)}

      <Popover modal>
        <PopoverTrigger asChild>
          <FormControl>
            <Button
              variant={"outline"}
              className={cn(
                "text-sm font-normal text-primary grow flex justify-between items-center",
                `${!selected && "text-muted-foreground"} ${className}`
              )}>
              {selected ? (format(selected, "PPP")) : (<span>{placeholder || 'Pilih tanggal'}</span>)}
              <CalendarIcon className="ml-auto h-4 w-4 opacity-50" />
            </Button>
          </FormControl>
        </PopoverTrigger>
        <PopoverContent className="p-0" align="start">
          <Calendar
            initialFocus
            selected={selected}
            disabled={(date) => date > new Date() || date < new Date("2000-01-01")}
            classNames={{
              day_selected: "bg-cyan-800 text-white focus:bg-cyan-800 focus:text-white",
              day_outside: `text-muted-foreground opacity-50 aria-selected:bg-cyan-800
              aria-selected:text-white aria-selected:opacity-30`
            }}
            components={{
              DayContent: ({ date }) =>
              (
                <PopoverClose asChild>
                  <div className={`w-full h-full flex justify-center items-center bg-transparent rounded-md`}>
                    {format(date, 'dd')}
                  </div>
                </PopoverClose>
              )
            }}
            {...props} />
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
ItemDateTimePicker.displayName = "ItemDateTimePicker"

import React from "react"
import { cn } from "src/util";

type PdfFieldProps = {
  label: string;
  value: string;
  alias?: string
  className?: string;
  textClassName?: string;
  labelClassName?: string;
  valueClassName?: string;
}

export function PdfField({
  label,
  value,
  alias,
  className,
  textClassName,
  labelClassName,
  valueClassName
}: PdfFieldProps) {

  return (
    <div className={cn('flex space-x-1', className)}>
      <div className={cn('w-[20%]', labelClassName)}>
        <p className={cn('', textClassName)}>{label}</p>
        {alias && (<p className="text-xs font-light italic">({alias})</p>)}
      </div>

      <div className={cn('w-[80%]', valueClassName)}>
        <p className={cn('', textClassName)}>{`: ${value}`}</p>
        {alias && (<p className="text-xs font-light italic invisible">-</p>)}
      </div>
    </div>
  )
}

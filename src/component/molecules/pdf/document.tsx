import { Roboto_Serif } from "next/font/google";
import React from "react"
import { Options, Resolution } from "react-to-pdf";
import { cn } from "src/util";

const roboto = Roboto_Serif({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-sans",
})

export type PdfDocumentProps = {
} & React.PropsWithChildren

export const PdfDocument = React.forwardRef<HTMLDivElement, PdfDocumentProps>(({ children }, ref) => {
  return (
    <div ref={ref} className={`${roboto.className} w-[793px] h-[1122px] p-[75.5px] text-sm flex flex-col`}>
      {children}
    </div>
  )
})
PdfDocument.displayName = "PdfDocument"

export type PdfBodyProps = {
  className?: string
} & React.PropsWithChildren;
export function PdfBody({ children, className }: PdfBodyProps) {
  return (
    <div
      className={cn(`flex flex-col space-y-6 text-justify`, className)}>
      {children}
    </div>
  )
}

export type PdfSectionProps = {
  description?: string;
  className?: string;
} & React.PropsWithChildren;
export function PdfSection({ children, description, className }: PdfSectionProps) {
  return (
    <div
      className={cn(`flex flex-col space-y-2 text-justify`, className)}>
      {description && (<p>{description}</p>)}
      {children}
    </div>
  )
}

export type PdfHeaderProps = {
} & React.PropsWithChildren;
export function PdfHeader({ children }: PdfHeaderProps) {
  return (
    <div
      className={`flex flex-col items-center text-center mb-8`}>
      {children}
    </div>
  )
}

export type PdfFieldProps = {
  label: string;
  value: string;
  alias?: string
  className?: string;
  textClassName?: string;
  labelClassName?: string;
  valueClassName?: string;
}

export function PdfField({ label, value, alias, className, textClassName, labelClassName, valueClassName }: PdfFieldProps) {
  return (
    <div className={cn('flex space-x-1', className)}>
      <div className={cn('w-[20%]', labelClassName)}>
        <p className={cn('', textClassName)}>{label}</p>
        {alias && (<p className="text-xs font-light italic">(Name)</p>)}
      </div>

      <div className={cn('w-[80%]', valueClassName)}>
        <p className={cn('', textClassName)}>{`: ${value}`}</p>
        {alias && (<p className="text-xs font-light italic invisible">-</p>)}
      </div>
    </div>
  )
}

export function getoptions(idReport: string, name: string): Options {
  const newName = name.replace(" ", "_").toLowerCase().trim();
  return {
    method: "open",
    filename: `report-${idReport}_${newName}.pdf`,
    resolution: Resolution.HIGH,
    page: {
      format: "A4",
      margin: 0,
      orientation: "portrait",
    },
    overrides: {}
  }
}
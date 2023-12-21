import React from "react"
import { Roboto_Serif } from "next/font/google";
import { cn } from "src/util";

export * from './pdf-header';
export * from './pdf-body';
export * from './pdf-field';
export * from './pdf-section';
export * from './pdf-text-watermark';

const roboto = Roboto_Serif({
  weight: ["300", "400", "500"],
  subsets: ["latin"],
  variable: "--font-sans",
})

type PdfDocumentProps = {
  className?: string;
} & React.PropsWithChildren

export const PdfDocument = React.forwardRef<HTMLDivElement, PdfDocumentProps>(({
  children,
  className
}, ref) => {
  return (
    <div ref={ref} className={cn(`${roboto.className} w-[793px] h-[1122px] p-[75.5px] text-sm flex flex-col`,
      className)}>
      {children}
    </div>
  )
})
PdfDocument.displayName = "PdfDocument"
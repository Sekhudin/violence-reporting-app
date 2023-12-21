import React from "react"
import { cn } from "src/util";

type PdfBodyProps = {
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

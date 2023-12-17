import React from "react"
import { cn } from "src/util";

type PdfHeaderProps = {
  className?: string;
} & React.PropsWithChildren;

export function PdfHeader({ children, className }: PdfHeaderProps) {
  return (
    <div
      className={cn(`flex flex-col items-center text-center mb-8`, className)}>
      {children}
    </div>
  )
}
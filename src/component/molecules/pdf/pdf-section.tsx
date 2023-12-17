import React from "react"
import { cn } from "src/util";

type PdfSectionProps = {
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
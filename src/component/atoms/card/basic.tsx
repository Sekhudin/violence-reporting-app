import React from "react";
import { cn } from "src/util";

export type CardBasicProps = {
  children: React.ReactNode;
  className?: string;
}
export function CardBasic({ children, className }: CardBasicProps) {
  return (
    <div className={cn('bg-white p-4 rounded-md shadow-md', className)}>
      {children}
    </div>
  )
}
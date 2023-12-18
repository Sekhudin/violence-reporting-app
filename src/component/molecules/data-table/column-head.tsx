"use client"
import React from "react";
import { ArrowUpDown } from "lucide-react";
import { HeaderContext } from "@tanstack/react-table";
import { Button } from "src/component/ui/button";
import { cn } from "src/util";
import { ColumnHeadProps } from "./type";

type OrderButtonProps<DT extends Record<string, any>, DV = unknown> = {
  ctx: HeaderContext<DT, DV>;
  className?: string;
} & React.PropsWithChildren;
function OrderButton<DT extends Record<string, any>, DV = unknown>({ ctx, children, className }: OrderButtonProps<DT, DV>) {
  const clickHandler = () => {
    const isAsc = ctx.column.getIsSorted() === 'asc';
    ctx.column.toggleSorting(isAsc);
  }

  return (
    <Button
      className={cn("hover:bg-transparent hover:opacity-90 hover:text-white", className)}
      variant="ghost"
      onClick={clickHandler}>
      {children}
      <ArrowUpDown className="ml-2 h-4 w-4" />
    </Button>
  )
}

export function ColumnHead<DT extends Record<string, any>, DV = unknown>({
  ctx,
  header,
  headerType,
  className,
  ...props
}: ColumnHeadProps<DT, DV>): React.JSX.Element {
  switch (headerType) {
    case "order":
      return (
        <OrderButton
          className={cn("", className)}
          ctx={ctx}
          {...props}>
          {header}
        </OrderButton>
      )
    default:
      return (
        <div className={cn("", className)}>
          {header}
        </div>
      )
  }
}
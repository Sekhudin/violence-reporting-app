import React from "react";
import { ChevronDown } from "lucide-react";
import { Table } from "@tanstack/react-table";
import {
  DropdownMenu,
  DropdownMenuCheckboxItem,
  DropdownMenuContent,
  DropdownMenuTrigger
} from "src/component/ui/dropdown-menu";
import { Button } from "src/component/ui/button";
import { getHeaderName } from './util';
import { cn } from 'src/util';

type DataTableColumnSelectorProps<DT extends Record<string, any>> = {
  table: Table<DT>;
  textTrigger: string;
  isEmpty: boolean;
  className?: string;
  contentClassName?: string;
  itemClassName?: string;
}

export function DataTableColumnSelector<DT extends Record<string, any>>({
  table,
  textTrigger,
  isEmpty,
  className,
  contentClassName,
  itemClassName,
}: DataTableColumnSelectorProps<DT>) {

  return (
    <DropdownMenu>
      <DropdownMenuTrigger asChild>
        <Button
          className={cn("p-0 flex disabled:opacity-100 space-x-1", className)}
          variant="outline"
          disabled={isEmpty}
          aria-label="column-selector">
          <span className="hidden md:block text-sm lg:text-base">
            {textTrigger}
          </span>
          <ChevronDown className="h-4 w-4 lg:w-5 lg:h-5" />
        </Button>
      </DropdownMenuTrigger>
      <DropdownMenuContent align="end" className={cn('', contentClassName)}>
        {table.getAllColumns().filter((column) => column.getCanHide()).map((column, key) => {
          const itemName = getHeaderName<DT>(column);
          return (
            <DropdownMenuCheckboxItem
              key={key}
              className={cn(`text-sm lg:text-base capitalize`, itemClassName)}
              checked={column.getIsVisible()}
              onCheckedChange={(value) => column.toggleVisibility(!!value)}>
              {itemName}
            </DropdownMenuCheckboxItem>
          )
        })}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}
"use client";
import React from "react";
import { Table } from "@tanstack/react-table";
import { Button } from "src/component/ui/button";
import { Input, InputProps } from "src/component/ui/input";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuRadioGroup,
  DropdownMenuRadioItem,
  DropdownMenuTrigger
} from "src/component/ui/dropdown-menu";
import { cn } from 'src/util';
import { getHeaderName, withExtraDef } from './util';

type DataTableSearchboxProps<DT extends Record<string, any>> = {
  table: Table<DT>;
  defaultSearch: { by: keyof DT; as: string; };
  isEmpty: boolean;
  exclude?: (keyof DT)[];
  containerClassName?: string;
} & InputProps;

export function DataTableSearchbox<DT extends Record<string, any>>({
  table,
  defaultSearch,
  isEmpty,
  exclude,
  className,
  containerClassName,
  ...props
}: DataTableSearchboxProps<DT>) {
  const [searchBy, setSearchBy] = React.useState<keyof DT>(defaultSearch.by);
  const [searchAs, setSearchAs] = React.useState<string>(defaultSearch.as);

  const radioOnChecked = (value: string): void => {
    const column = table.getColumn(value);
    const colDef = withExtraDef<DT>(column);
    if (colDef && colDef.accessorKey && colDef.headerName) {
      setSearchBy(colDef.accessorKey);
      setSearchAs(colDef.headerName);
    }
  }

  const searchBoxOnChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const column = table.getColumn(searchBy as string);
    if (column) {
      column.setFilterValue(event.target.value);
    }
  }

  return (
    <div className={cn("flex", containerClassName)}>
      <DropdownMenu>
        <DropdownMenuTrigger asChild>
          <Button
            className="bg-cyan-900 hover:bg-cyan-900/90 text-white hover:text-white
            font-light rounded-l-lg border-r-0 rounded-r-none disabled:opacity-100 text-sm lg:text-base"
            variant="outline"
            disabled={isEmpty}>
            {searchAs}
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="start" className=''>
          <DropdownMenuRadioGroup value={searchBy as string} onValueChange={(v) => radioOnChecked(v)}>
            {table.getAllColumns().filter((column) => column.getCanHide()).map((column, key) => {
              const colDef: Record<string, any> = column.columnDef as Record<string, any>;
              if (exclude && exclude.includes(colDef.accessorKey as keyof DT)) return null;
              const itemName = getHeaderName<DT>(column);
              return (
                <DropdownMenuRadioItem key={key}
                  className="text-sm lg:text-base font-light py-1"
                  value={colDef.accessorKey}>
                  {itemName}
                </DropdownMenuRadioItem>
              )
            })}
          </DropdownMenuRadioGroup>
        </DropdownMenuContent>
      </DropdownMenu>

      <Input
        className={cn(`focus-visible:ring-transparent focus-visible:ring-0
        focus-visible:ring-offset-0 rounded-l-none disabled:opacity-100 text-sm lg:text-base`, className)}
        value={(table.getColumn(searchBy as string)?.getFilterValue() as string) ?? ""}
        placeholder={`Cari ${searchAs}...`}
        onChange={searchBoxOnChange}
        disabled={isEmpty}
        {...props} />
    </div>
  )
}
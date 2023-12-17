import { Table as TB, flexRender } from "@tanstack/react-table";
import { TableHeader, TableRow, TableHead } from "src/component/ui/table";
import { cn } from "src/util";

type DataTableHeaderProps<DT extends Record<string, any>> = {
  table: TB<DT>;
  className?: string;
}
export function DataTableHeader<DT extends Record<string, any>>({ table, className }: DataTableHeaderProps<DT>) {
  return (
    <TableHeader>
      {table.getHeaderGroups().map((headerGroup) => (
        <TableRow key={headerGroup.id} className="sticky top-0 bg-pink-400">
          {headerGroup.headers.map((header) => (
            <TableHead key={header.id} className={cn('', className)}>
              {!header.isPlaceholder && flexRender(header.column.columnDef.header, header.getContext())}
            </TableHead>
          ))}
        </TableRow>
      ))}
    </TableHeader>
  )
}
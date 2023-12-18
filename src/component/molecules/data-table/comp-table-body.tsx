import { Table, flexRender, ColumnDef } from "@tanstack/react-table";
import { TableBody, TableRow, TableCell } from "src/component/ui/table";
import { cn } from "src/util";

type DataTableBodyProps<DT extends Record<string, any>> = {
  table: Table<DT>;
  columns: ColumnDef<DT>[];
  className?: string;
  oddClassName?: string;
  evenClassName?: string;
}

export function DataTableBody<DT extends Record<string, any>>({
  table,
  columns,
  className,
  oddClassName,
  evenClassName
}: DataTableBodyProps<DT>) {
  return (
    <TableBody className="relative overflow-x-scroll">
      {table.getRowModel().rows?.length ? (
        table.getRowModel().rows.map((row, idx) => (
          <TableRow
            key={row.id}
            className={cn(`${idx % 2 ? evenClassName : oddClassName} cursor-default`, className)}
            data-state={row.getIsSelected() && "selected"}>
            {row.getVisibleCells().map((cell) => (
              <TableCell key={cell.id}>
                {flexRender(cell.column.columnDef.cell, cell.getContext())}
              </TableCell>
            ))}
          </TableRow>
        ))) : (
        <TableRow className="hover:bg-transparent">
          <TableCell
            className="w-full h-24 text-center text-sm lg:text-base"
            colSpan={columns.length}>
            Tidak ditemukan.
          </TableCell>
        </TableRow>
      )}
    </TableBody>
  )
}
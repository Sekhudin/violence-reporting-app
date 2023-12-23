import React from "react";
import { ColumnDef } from '@tanstack/react-table';
import { PackageOpen } from 'lucide-react';
import { Table } from "src/component/ui/table";
import { Barierloader } from 'src/component/atoms/barier/loader';
import { cn } from 'src/util';
import { ColumnHead } from './column-head';
import { ColumnCell } from './column-cell';
import { ColumnProps, ColumnExtraDef } from './type';

export function column<DT extends Record<string, any>, DV = unknown>({
  accessorKey,
  header,
  headerType,
  cellType,
  headerClassName,
  cellClassName,
  ...props
}: ColumnProps<DT, DV>): ColumnDef<DT, DV> {
  const column: ColumnExtraDef<DT, DV> = {
    accessorKey,
    headerName: header,
    header: (ctx) => (
      <ColumnHead<DT, DV>
        className={cn("text-sm lg:text-base capitalize", headerClassName)}
        ctx={ctx}
        header={header}
        headerType={headerType || "div"} />),
    cell: (ctx) => (
      <ColumnCell<DT, DV>
        className={cn("text-sm lg:text-base normal-case", cellClassName)}
        ctx={ctx}
        cellId={accessorKey as string}
        cellType={cellType || "string"} />),
    ...props
  }
  return column as ColumnDef<DT, DV>
}

export const EmptyTable = ({ text, className, }: { text: string, className?: string, }) => (
  <div className={cn(`absolute inset-0 z-10 bg-transparent flex flex-col justify-center
    items-center space-y-2 text-cyan-800`, className)}>
    <PackageOpen className="h-20 w-20 opacity-40" />
    {text}
  </div>)


export const DataTable = React.forwardRef<
  React.ElementRef<typeof Table>,
  React.ComponentPropsWithoutRef<typeof Table> & { isEmpty: boolean; loading: boolean }
>(({ children, isEmpty, loading, className }, ref) => {

  if (loading) return (
    <Barierloader isLoading />);

  if (isEmpty) return (
    <EmptyTable text="Belum data data." />)

  return (
    <Table ref={ref} className={cn(``, className)}>
      {children}
    </Table>)
})
DataTable.displayName = 'DataTable';


export * from './comp-column-selector';
export * from './comp-search-box';
export * from './comp-next-prev';
export * from './comp-table-header';
export * from './comp-table-body';

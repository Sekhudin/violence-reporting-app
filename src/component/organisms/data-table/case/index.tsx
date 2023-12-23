"use client"
import React from "react";
import {
  DataTable,
  DataTableColumnSelector,
  DataTableBody,
  DataTableHeader,
  DataTableSearchbox,
  DataTableNextPrev
} from 'src/component/molecules/data-table';
import {
  ColumnFiltersState,
  SortingState,
  VisibilityState,
  PaginationState,
  getCoreRowModel,
  getFilteredRowModel,
  getPaginationRowModel,
  getSortedRowModel,
  useReactTable,
} from "@tanstack/react-table";
import { ScrollArea, ScrollBar } from 'src/component/ui/scroll-area';
import { useCaseFilter, CaseDetail, CaseStatus } from 'src/component/context/use-ctx';
import { cn, FunStr, Vutil } from "src/util";
import { getColumns } from './column';

export type DatatableCaseProps = {
  status: CaseStatus;
  pageSize: number;
  className?: string;
}

export const DataTableCaseHeader = ({ children, className }: { className?: string } & React.PropsWithChildren) => (
  <div className={cn(`flex flex-col items-center mb-4`, className)}>
    {children}
  </div>);

export const DataTableCaseTitle = ({ text, className }: { text: string, className?: string }) => (
  <h2 className={cn(`font-medium 2xl:font-semibold text-base md:text-lg lg:text-2xl`, className)}>
    {FunStr.title(text, ['di', 'ke', 'dari'])}
  </h2>);

export const DataTableCaseSubTitle = ({ text, className }: { text: string, className?: string }) => (
  <p className={cn(`mt-1 text-sm font-extralight lg:text-base`, className)}>
    {FunStr.title(text, ['in', 'of', 'on'])}
  </p>);

export function DataTableCase({
  status,
  pageSize,
  className
}: DatatableCaseProps) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [pagination, setPagination] = React.useState<PaginationState>({ pageSize, pageIndex: 0 });

  const { cases, loading, error } = useCaseFilter(status);
  const isEmpty = Vutil.isEmptyList(cases);
  const columns = getColumns({ status });
  const table = useReactTable({
    data: cases,
    columns,
    onSortingChange: setSorting,
    onColumnFiltersChange: setColumnFilters,
    onColumnVisibilityChange: setColumnVisibility,
    onRowSelectionChange: setRowSelection,
    onPaginationChange: setPagination,
    getCoreRowModel: getCoreRowModel(),
    getPaginationRowModel: getPaginationRowModel(),
    getSortedRowModel: getSortedRowModel(),
    getFilteredRowModel: getFilteredRowModel(),
    state: {
      sorting,
      columnFilters,
      columnVisibility,
      rowSelection,
      pagination
    },
  })

  return (
    <>
      <div className={cn("flex justify-between")}>
        <DataTableSearchbox<CaseDetail>
          className="border-r-0 rounded-r-none lg:border-r lg:rounded-r-lg"
          containerClassName="w-full lg:w-7/12 2xl:w-5/12"
          defaultSearch={{ by: "id_card", as: "No. KTP" }}
          exclude={['date_incident', 'type_incident']}
          table={table}
          isEmpty={isEmpty} />
        <DataTableColumnSelector<CaseDetail>
          className="px-2 rounded-l-none rounded-r-lg font-light lg:rounded-l-lg"
          contentClassName="flex flex-col space-y-1"
          itemClassName="py-1 cursor-pointer font-light"
          textTrigger="Kolom"
          table={table}
          isEmpty={isEmpty} />
      </div>

      <ScrollArea type="always" className={cn(`relative border rounded-lg mt-4 mx-0 px-0`, className,
        `${isEmpty && 'md:max-w-full'}`)}>
        <DataTable
          loading={loading}
          isEmpty={isEmpty}>
          <DataTableHeader<CaseDetail>
            className="bg-cyan-900 text-white font-medium"
            table={table} />
          <DataTableBody<CaseDetail>
            evenClassName='bg-cyan-900/20 hover:bg-cyan-900/30 text-cyan-900'
            table={table}
            columns={columns} />
        </DataTable>
        <ScrollBar orientation="horizontal" className="" />
      </ScrollArea>

      <DataTableNextPrev<CaseDetail>
        className={cn("")}
        prev={{ title: "Prev" }}
        next={{ title: "Next" }}
        table={table}
        isEmpty={isEmpty} />
    </>
  )
}
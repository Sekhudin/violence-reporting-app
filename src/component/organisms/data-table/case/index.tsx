"use client"
import React from "react";
import {
  DataTable,
  DataTableColumnSelector,
  DataTableBody,
  DataTableEmpty,
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
import { cn, FunStr } from "src/util";
import { getColumns } from './column';

export type DatatableCasesProps = {
  status: CaseStatus;
  pageSize: number;
  title: string;
  subtitle: string;
  className?: string;
}

export function DataTableCases({
  status,
  pageSize,
  title,
  subtitle,
  className,
}: DatatableCasesProps) {
  const [sorting, setSorting] = React.useState<SortingState>([]);
  const [columnFilters, setColumnFilters] = React.useState<ColumnFiltersState>([]);
  const [columnVisibility, setColumnVisibility] = React.useState<VisibilityState>({});
  const [rowSelection, setRowSelection] = React.useState({});
  const [pagination, setPagination] = React.useState<PaginationState>({ pageSize, pageIndex: 0 });

  const { data, isEmpty } = useCaseFilter(status);
  const columns = getColumns({ status });
  const table = useReactTable({
    data,
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
      <div className="flex flex-col items-center mb-4">
        <h2 className="font-medium 2xl:font-semibold text-base md:text-lg lg:text-2xl">
          {FunStr.title(title, ['di', 'ke'])}
        </h2>
        <p className="mt-1 text-sm font-extralight lg:text-base">
          {FunStr.title(subtitle, ['of', 'is'])}
        </p>
      </div>

      <div className={cn("flex justify-between", className)}>
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

      <ScrollArea className={cn(`relative rounded-lg border mt-4 mx-0 px-0 h-[53vh]`, className,
        `${isEmpty && 'md:max-w-full'}`)}>
        <DataTableEmpty
          text="Belum ada data"
          isEmpty={isEmpty} />
        {!isEmpty && (
          <DataTable>
            <DataTableHeader<CaseDetail>
              className="bg-cyan-900 text-white font-medium"
              table={table} />
            <DataTableBody<CaseDetail>
              evenClassName='bg-cyan-900/20 hover:bg-cyan-900/30 text-cyan-900'
              table={table}
              columns={columns} />
          </DataTable>
        )}
        <ScrollBar orientation="horizontal" className="" />
      </ScrollArea>

      <DataTableNextPrev<CaseDetail>
        className={cn("", className)}
        prev={{ title: "Prev" }}
        next={{ title: "Next" }}
        table={table}
        isEmpty={isEmpty} />
    </>
  )
}
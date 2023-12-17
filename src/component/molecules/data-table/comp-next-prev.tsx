import { Table } from "@tanstack/react-table";
import { Button, ButtonProps } from 'src/component/ui/button';
import { cn } from "src/util";

type DataTableNextPrevProps<DT extends Record<string, any>> = {
  table: Table<DT>;
  isEmpty: boolean;
  next: {
    title?: string
  } & Omit<ButtonProps, 'disabled'>;
  prev: {
    title?: string
  } & Omit<ButtonProps, 'disabled'>;
  className?: string;
}

export function DataTableNextPrev<DT extends Record<string, any>>({ table, isEmpty, next, prev, className }: DataTableNextPrevProps<DT>) {
  const { className: clNext, title: titleNext, ...propsNext } = next;
  const { className: clPrev, title: titlePrev, ...propsPrev } = prev;

  const pageCount = table.getPageCount();
  const { pageIndex, pageSize } = table.getState().pagination;
  const currentPage: number = pageCount ? pageIndex + 1 : 0;

  return (
    <div className={cn("flex justify-start items-center space-x-2 mt-4", className)}>
      <Button
        className={cn("py-1 px-2 h-fit font-medium disabled:opacity-100", clPrev)}
        variant="outline"
        size="sm"
        onClick={() => table.previousPage()}
        disabled={isEmpty || !table.getCanPreviousPage()}
        {...propsPrev}>
        {titlePrev || "Previous"}
      </Button>
      <Button
        className={cn("py-1 px-2 h-fit font-medium disabled:opacity-100", clNext)}
        variant="outline"
        size="sm"
        onClick={() => table.nextPage()}
        disabled={isEmpty || !table.getCanNextPage()}
        {...propsNext}>
        {titleNext || "Next"}
      </Button>
      {pageSize && (
        <p className="text-sm font-medium">
          {`Page ${currentPage} of ${pageCount}`}
        </p>
      )}
    </div>
  )
}
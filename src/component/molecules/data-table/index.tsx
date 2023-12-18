import { ColumnDef } from '@tanstack/react-table';
import { ColumnHead } from './column-head';
import { ColumnCell } from './column-cell';
import { ColumnProps, ColumnExtraDef } from './type';
import { cn } from 'src/util';

export { ColumnHead, ColumnCell };
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
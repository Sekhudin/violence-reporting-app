import { ColumnDef } from '@tanstack/react-table';
import { ColumnHead } from './column-head';
import { ColumnCell } from './column-cell';
import { ColumnProps, ColumnExtraDef } from './type';

export { ColumnHead, ColumnCell };
export function column<DT extends Record<string, any>, DV = unknown>({
  accessorKey,
  header,
  headerType,
  cellType,
  ...props
}: ColumnProps<DT, DV>): ColumnDef<DT, DV> {
  const column: ColumnExtraDef<DT, DV> = {
    accessorKey,
    headerName: header,
    cell: (ctx) => (
      <ColumnCell<DT, DV>
        ctx={ctx}
        cellId={accessorKey as string}
        cellType={cellType || "string"} />),

    header: (ctx) => (
      <ColumnHead<DT, DV>
        ctx={ctx}
        header={header}
        headerType={headerType || "div"} />),
    ...props
  }
  return column as ColumnDef<DT, DV>
}
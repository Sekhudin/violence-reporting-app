import { Column } from "@tanstack/react-table";
import { ColumnExtraDef } from './type';

export function getHeaderName<DT extends Record<string, any>, DV = unknown>(
  column: Column<DT, DV>
): string {
  if (typeof column.columnDef.header === 'string') return column.columnDef.header;
  const extracol = column.columnDef as ColumnExtraDef<DT, DV>;
  if (extracol.headerName) return extracol.headerName;
  return "undefined"
}

export function withExtraDef<DT extends Record<string, any>, DV = unknown>(
  column?: Column<DT, DV>
): ColumnExtraDef<DT, DV> | null {
  if (!column) return null;
  return column.columnDef as ColumnExtraDef<DT, DV>;
}
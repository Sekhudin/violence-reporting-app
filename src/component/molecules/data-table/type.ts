import type { ColumnDef, CellContext, HeaderContext } from "@tanstack/react-table";

export type HeaderType = "div" | "order";
export type CellType = "string" | "date" | "fold-wrd" | "fold-stc" | "abbrev" | "abbrev-name";

export type ColumnHeadProps<DT extends Record<string, any>, DV = unknown> = {
  ctx: HeaderContext<DT, DV>;
  header: string;
  headerType: HeaderType;
}

export type ColumnCellProps<DT extends Record<string, any>, DV = unknown> = {
  ctx: CellContext<DT, DV>;
  cellId: string;
  cellType: CellType,
}

export type ColumnProps<DT extends Record<string, any>, DV = unknown> = {
  accessorKey: keyof DT;
  header: string;
  cellType?: CellType,
  headerType?: HeaderType;
} & Omit<ColumnDef<DT, DV>, "headerType">;

export type ColumnExtraDef<DT extends Record<string, any>, DV = unknown> = {
  headerName?: string;
  accessorKey?: keyof DT;
} & Omit<ColumnDef<DT, DV>, "accessorKey">;
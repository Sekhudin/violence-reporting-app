import { cn, FunStr, FunDate } from "src/util";
import { ColumnCellProps } from "./type";

export function ColumnCell<DT extends Record<string, any>, DV = unknown>({
  ctx,
  cellId,
  cellType
}: ColumnCellProps<DT, DV>) {
  const value: unknown = ctx.row.getValue(cellId);
  switch (cellType) {
    case "string":
      return (<div className={cn("", "")}>{value as React.ReactNode}</div>);
    case "fold-wrd":
      return (<div className={cn("", "")}>{FunStr.foldWord(value as string, 6)}</div>);
    case "fold-stc":
      return (<div className={cn("", "")}>{FunStr.foldSentence(value as string, 4, " ")}</div>);
    case "abbrev":
      return (<div className={cn("", "")}>{FunStr.abbrev(value as string, 10)}</div>);
    case "abbrev-name":
      return (<div className={cn("", "")}>{FunStr.abbrevName(value as string, 15)}</div>);
    case "date":
      return (<div className={cn("", "")}>{FunDate.ISOtoLocal(value as string)}</div>);
    default:
      return (<div className={cn("", "")}>invalid</div>);
  }
}
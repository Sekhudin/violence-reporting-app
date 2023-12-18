import { cn, FunStr, FunDate } from "src/util";
import { ColumnCellProps } from "./type";

export function ColumnCell<DT extends Record<string, any>, DV = unknown>({
  ctx,
  cellId,
  cellType,
  className
}: ColumnCellProps<DT, DV>) {
  const value: unknown = ctx.row.getValue(cellId);
  const strValue = typeof value === "string" ? FunStr.capitalFirst(value) : "";

  switch (cellType) {
    case "string":
      return (<div className={cn("", className)}>
        {strValue}
      </div>);
    case "fold-wrd":
      return (<div className={cn("", className)}>
        {FunStr.foldWord(strValue, 6)}
      </div>);
    case "fold-stc":
      return (<div className={cn("", className)}>
        {FunStr.foldSentence(strValue, 4, " ")}
      </div>);
    case "abbrev":
      return (<div className={cn("", className)}>
        {FunStr.abbrev(strValue, 10)}
      </div>);
    case "abbrev-name":
      return (<div className={cn("", className)}>
        {FunStr.abbrevName(strValue, 15)}
      </div>);
    case "date":
      return (<div className={cn("", className)}>
        {FunDate.ISOtoLocal(strValue)}
      </div>);
    default:
      return (<div className={cn("", className)}>Invalid</div>);
  }
}
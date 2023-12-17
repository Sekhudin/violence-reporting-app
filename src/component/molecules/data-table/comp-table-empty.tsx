import { cn } from "src/util";

type DataTableEmptyProps = {
  isEmpty: boolean;
  text?: string;
  className?: string;
  textClassName?: string;
}
export function DataTableEmpty({ isEmpty, text, className, textClassName }: DataTableEmptyProps) {
  const childText = text || "Data is empty";
  return (
    <>{isEmpty && (
      <div className={cn(`absolute inset-0 z-10 flex justify-center items-center bg-white`, className)}>
        <p className={cn("", textClassName)}>{childText}</p>
      </div>)}
    </>
  )
}
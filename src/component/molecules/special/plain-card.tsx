import { cn } from "src/util";

export const PlainCard = ({ children, className }: { className?: string } & React.PropsWithChildren) => (
  <div className={cn('bg-white w-fit h-fit rounded-md lg:rounded-xl shadow-md p-4', className)}>
    {children}
  </div>)
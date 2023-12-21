import { Loader2 } from 'lucide-react';
import { cn } from 'src/util';

type BarierLoaderProps = {
  isLoading: boolean;
  className?: string;
  spinnerClassName?: string;
}

export function Barierloader({ isLoading, className, spinnerClassName }: BarierLoaderProps) {
  if (!isLoading) return null;
  return (
    <div className={cn("absolute inset-0 flex justify-center items-center cursor-not-allowed",
      className)}>
      <Loader2 className={cn('animate-spin w-7 h-7 text-cyan-800',
        spinnerClassName)} />
    </div>
  )
}
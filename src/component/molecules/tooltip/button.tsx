import { Button, ButtonProps } from "src/component/ui/button";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "src/component/ui/tooltip";
import { cn } from "src/util";

type Side = "top" | "right" | "bottom" | "left";
type Align = "start" | "center" | "end";
export type TooltipButtonProps = {
  text: string;
  position?: [Side, Align];
  defaultOpen?: boolean;
  contentClassName?: string;
} & ButtonProps;

export function TooltipButton({
  children,
  text,
  position,
  contentClassName,
  ...btnProps
}: TooltipButtonProps) {
  const side: Side = position?.[0] || 'left';
  const align: Align = position?.[1] || 'start';

  return (
    <TooltipProvider delayDuration={500}>
      <Tooltip defaultOpen={false}>
        <TooltipTrigger asChild>
          <Button {...btnProps}>
            {children}
          </Button>
        </TooltipTrigger>

        <TooltipContent side={side} align={align}>
          <p className={cn("", contentClassName)}>{text}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

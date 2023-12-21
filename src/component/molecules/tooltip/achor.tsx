import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "src/component/ui/tooltip";
import { cn } from "src/util";
import { getAlignSide } from './util';
import { BaseTooltipProps } from './type';
import React from "react";

export function TooltipAnchor({
  children,
  tooltip,
  position,
  className,
  tooltipClassName,
  contentAsChild,
  ...props
}: BaseTooltipProps & React.AnchorHTMLAttributes<HTMLAnchorElement>) {
  const { align, side } = getAlignSide(position)
  return (
    <TooltipProvider delayDuration={500}>
      <Tooltip defaultOpen={false}>
        <TooltipTrigger asChild>
          <a className={cn('hover:bg-cyan-900/20 rounded-lg py-1 px-2',
            className)} {...props}>
            {children}
          </a>
        </TooltipTrigger>

        <TooltipContent
          asChild={contentAsChild}
          side={side}
          align={align}>
          <p className={cn("text-sm font-light", tooltipClassName)}>{tooltip}</p>
        </TooltipContent>
      </Tooltip>
    </TooltipProvider>
  )
}

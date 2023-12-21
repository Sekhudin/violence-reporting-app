type ToolTipSide = "top" | "right" | "bottom" | "left";
type ToolTipAlign = "start" | "center" | "end";
type TooltipPosition = [ToolTipAlign, ToolTipSide];

type AlignSide = { align: ToolTipAlign; side: ToolTipSide; };
export type BaseTooltipProps = {
  tooltip: string;
  position?: TooltipPosition;
  defaultOpen?: boolean;
  tooltipClassName?: string;
  contentAsChild?: boolean;
}

export namespace Util {
  export type GetAlignSide = (position?: TooltipPosition) => AlignSide;
}
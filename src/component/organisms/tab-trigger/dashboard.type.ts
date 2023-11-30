import type { LucideIcon } from "lucide-react";
import { StaticImageData } from "next/image";

export namespace Props {
  type Value = {
    label: string;
    value: string;
    src?: string | StaticImageData;
    Icon?:LucideIcon;
    triggerClassName?:string;
  }

  export type TabTriggerDashboard = {
    values: Value[];
    className?: string;
    triggerClassName?: string;
    labelClassName?:string;
    imgIconClassName?:string;
    withTooltip?:boolean;
    tooltipLabelClass?:string;
  }
}
import type { LucideIcon } from 'lucide-react'
export namespace Props {
  type Icon = {
    title: string;
    Icon: LucideIcon;
    href: string;
    iconClassName?:string;
    labelClassName?: string;
  }

  export type LinksIcon = {
    linkList: Icon[];
    className?: string;
    itemClassName?: string;
    iconClassName?: string;
    labelClassName?: string;
    withLabel?: boolean;
  }
}
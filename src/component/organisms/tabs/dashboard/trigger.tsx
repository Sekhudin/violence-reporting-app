import React from 'react';
import {
  LayoutDashboardIcon,
  FileInputIcon,
  FileSearchIcon,
  FileCheck2Icon,
  FileX2Icon,
  type LucideIcon
} from 'lucide-react';
import { TabsList, TabsTrigger } from 'src/component/ui/tabs';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from 'src/component/ui/tooltip';
import { cn } from 'src/util';

const tabList: TabsList = [
  { label: "Dashboard", value: "dashboard", IconComponent: LayoutDashboardIcon },
  { label: "Laporan Masuk", value: "masuk", IconComponent: FileInputIcon },
  { label: "Laporan Diproses", value: "proses", IconComponent: FileSearchIcon },
  { label: "Laporan Selesai", value: "selesai", IconComponent: FileCheck2Icon },
  { label: "Laporan Ditolak", value: "tolak", IconComponent: FileX2Icon },
]


const ChildTrigger = ({ children, className }: { className?: string } & React.PropsWithChildren) => (
  <div className={cn(`w-full flex space-x-2 items-center text-sm md:text-base font-normal py-1.5 px-1.5`, className)}>
    {children}
  </div>)

const ChildTriggerWithTooltip = ({
  tooltip,
  children,
  className
}: { tooltip: React.ReactNode, className?: string, } & React.PropsWithChildren) => (
  <TooltipProvider>
    <Tooltip>
      <TooltipTrigger className={cn(``, className)} asChild>
        {children}
      </TooltipTrigger>
      <TooltipContent className='h-fit text-xs sm:text-sm font-light mb-2 py-1 px-2 lg:px-3'>
        {tooltip}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>)

export type TabName = "dashboard" | "masuk" | "proses" | "selesai" | "tolak";
type TabsList = { IconComponent: LucideIcon, label: string, value: TabName }[];
export function TabsDashboardTrigger({ className }: { className?: string, }) {
  return (
    <TabsList className={cn(`h-full bg-background w-[220px] lg:w-[300px]
        hidden lg:flex flex-col space-y-1.5 rounded-none my-0`, className)}>{
        tabList.map((v, key) => (
          <TabsTrigger key={key}
            className='w-full data-[state=active]:bg-cyan-900 data-[state=active]:text-white
          data-[state=inactive]:hover:bg-gray-100 duration-500'
            value={v.value}>
            <ChildTrigger className='w-full flex space-x-2'>
              <v.IconComponent className='h-6 w-6' />
              <span>{v.label}</span>
            </ChildTrigger>
          </TabsTrigger>))}
    </TabsList>)
}


export function TabsDashboardTriggerMobile({ className }: { className?: string, }) {
  return (
    <TabsList className={cn(`h-fit w-fit max-w-[95vw] fixed bottom-4 left-1/2 z-50
      flex lg:hidden space-x-1 transform -translate-x-1/2 bg-white
      rounded-lg m-0 p-0`, className)}>{tabList.map((v, key) => (
      <TabsTrigger key={key}
        className='data-[state=active]:bg-cyan-900 data-[state=active]:text-white
          data-[state=inactive]:hover:bg-gray-100 rounded-lg duration-500 px-3 py-1.5'
        value={v.value}>
        <ChildTriggerWithTooltip tooltip={v.label}>
          <v.IconComponent className='h-7 w-7' />
        </ChildTriggerWithTooltip>
      </TabsTrigger>))}
    </TabsList>)
}
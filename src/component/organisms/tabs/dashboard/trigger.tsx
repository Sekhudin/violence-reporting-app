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
import { FloatButtonDashboard } from 'src/component/organisms/float-button/dashboard'
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
      <TooltipContent className=''>
        {tooltip}
      </TooltipContent>
    </Tooltip>
  </TooltipProvider>)

export type TabName = "dashboard" | "masuk" | "proses" | "selesai" | "tolak";
type TabsList = { IconComponent: LucideIcon, label: string, value: TabName }[];
export function TabsDashboardTrigger({ className }: { className?: string, }) {
  return (
    <TabsList className={cn(`h-full w-[270px] hidden lg:flex bg-background rounded-none
      flex-col space-y-1 justify-start`, className)}>
      {tabList.map((v, key) => (
        <TabsTrigger key={key}
          className='w-full flex justify-start items-center space-x-2
          data-[state=active]:bg-cyan-900 data-[state=active]:text-white
          data-[state=inactive]:hover:bg-gray-100 rounded-md duration-500 px-3 py-2'
          value={v.value}>
          <v.IconComponent className='h-6 w-6' />
          <span>{v.label}</span>
        </TabsTrigger>
      ))}
      <div className='fixed bottom-4 right-4 p-5 rounded-full rounded-br-none bg-gray-100 z-10'>
        <FloatButtonDashboard />
      </div>
    </TabsList>)
}

export function TabsDashboardTriggerMobile({ className }: { className?: string, }) {
  return (
    <TabsList className={cn(`h-fit flex items-center space-x-2 lg:hidden relative bottom-4 inset-x-0 z-10`, className)}>
      <div className='bg-white flex space-x-1 items-center justify-center rounded-md overflow-hidden'>
        {tabList.map((v, key) => (
          <TabsTrigger key={key}
            className='data-[state=active]:bg-cyan-900 data-[state=active]:text-white
          data-[state=inactive]:hover:bg-gray-100 rounded-none duration-500 px-3 py-1.5'
            value={v.value}
            aria-label={v.value}>
            <ChildTriggerWithTooltip tooltip={v.label}>
              <v.IconComponent className='h-7 w-7' />
            </ChildTriggerWithTooltip>
          </TabsTrigger>))}
      </div>
      <FloatButtonDashboard />
    </TabsList>)
}
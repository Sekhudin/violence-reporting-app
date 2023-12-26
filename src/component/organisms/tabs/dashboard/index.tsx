import React from 'react';
import { Tabs } from 'src/component/ui/tabs';
import { cn } from 'src/util';
import { type TabName } from './trigger';
export * from './trigger';
export * from './content';

export function TabsDashboard({
  defaultValue,
  children,
  className
}: { defaultValue: TabName, className?: string } & React.PropsWithChildren) {
  return (<Tabs className={cn(`flex flex-col-reverse lg:flex-row
    space-x-0 space-y-0 w-screen h-full`, className)}
    defaultValue={defaultValue}>
    {children}
  </Tabs>)
}
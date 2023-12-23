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
  return (<Tabs className={cn(`flex flex-col lg:flex-row
    bg-background lg:bg-transparent`, className)}
    defaultValue={defaultValue}>
    {children}
  </Tabs>)
}
import React from 'react';
import { TabsContent } from 'src/component/ui/tabs';
import { cn } from 'src/util';
import { TabName } from './trigger';



export function TabsDashboardContent({ className, content }: {
  className?: string;
  content: Record<TabName, React.ReactNode>
}) {
  const tabName = Object.keys(content) as unknown[] as TabName[];
  return (
    <>{tabName.map((v, key) => (
      <TabsContent key={key}
        className={cn(`relative h-[85vh] lg:h-[90vh] w-full bg-gray-100
        overflow-hidden m-0 p-4`, className)}
        value={v}>
        {content[v]}
      </TabsContent>
    ))}</>
  )
}
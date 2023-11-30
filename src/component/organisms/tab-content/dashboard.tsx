import { TabsContent } from 'src/component/ui/tabs';
import { cn } from 'src/util';
import { Props } from './dashboard.type';

export type TabContentDashboardProps = Props.TabContentDashboard;
export function TabContentDashboard({ values, childrens, className }: TabContentDashboardProps) {
  if (values.length !== childrens.length) return "invalid length";
  return (
    <>
      {values.map((value, key) => (
        <TabsContent
          key={key}
          value={value}
          className={cn(`grow bg-gray-100 mt-0 px-4 pt-4 lg:px-6 lg:pt-6 2xl:px-10 2xl:pt-12
          `, className)}>
          {childrens[key]}
        </TabsContent>
      ))}
    </>
  )
}

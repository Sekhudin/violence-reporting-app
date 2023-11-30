import Image from 'next/image';
import { TabsTrigger } from 'src/component/ui/tabs';
import { Tooltip, TooltipProvider, TooltipTrigger, TooltipContent } from 'src/component/ui/tooltip';
import { cn } from 'src/util';
import { Props } from './dashboard.type';

export type TabTriggerDashboardProps = Props.TabTriggerDashboard
export function TabTriggerDashboard({
  values,
  className,
  triggerClassName,
  labelClassName,
  imgIconClassName,
  withTooltip,
  tooltipLabelClass
}: TabTriggerDashboardProps) {
  return (
    <>
      {values.map(({ label, value, src, Icon, triggerClassName: triggerClass }, key) => (
        <TabsTrigger
          className={cn(`data-[state=active]:bg-cyan-900 data-[state=active]:text-white
          data-[state=inactive]:hover:bg-gray-100 duration-500`, className)}
          key={key}
          value={value}>
          {withTooltip ? (
            <TooltipProvider>
              <Tooltip delayDuration={500}>
                <TooltipTrigger asChild>
                  <div className={cn('grow flex items-center space-x-2', triggerClassName, triggerClass)}>
                    {src && (<Image src={src} alt="-" className={cn('', imgIconClassName)} />)}
                    {Icon && (<Icon className={cn('w-5', imgIconClassName)} />)}
                    <span className={cn('', labelClassName)}>{label}</span>
                  </div>
                </TooltipTrigger>
                <TooltipContent className={cn('', tooltipLabelClass)}>{label}</TooltipContent>
              </Tooltip>
            </TooltipProvider>
          ) : (
            <div className={cn('grow flex items-center space-x-2', triggerClassName, triggerClass)}>
              {src && (<Image src={src} alt="-" className={cn('', imgIconClassName)} />)}
              {Icon && (<Icon className={cn('w-5', imgIconClassName)} />)}
              <span className={cn('', labelClassName)}>{label}</span>
            </div>
          )}
        </TabsTrigger>
      ))}
    </>
  )
}
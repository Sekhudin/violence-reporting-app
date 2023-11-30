import { TooltipContent, TooltipProvider, Tooltip, TooltipTrigger } from 'src/component/ui/tooltip'
import { Props } from './icon.type';

export type LinksIconProps = Props.LinksIcon;
export function LinksIcon({
  linkList,
  className,
  itemClassName,
  iconClassName,
  labelClassName,
  withLabel
}: Props.LinksIcon) {
  return (
    <>
      <TooltipProvider>
        <ul className={className}>
          {linkList.map(({
            iconClassName: iconClass,
            labelClassName: labelClass,
            title,
            href,
            Icon,
          }, key) => (
            <a href={href} key={key}>
              <Tooltip>
                <TooltipTrigger className={itemClassName}>
                  <Icon className={`${iconClassName} ${iconClass}`} />
                  {withLabel && <p className={`${labelClassName} ${labelClass}`}>{title}</p>}
                </TooltipTrigger>
                <TooltipContent>
                  <p>{title}</p>
                </TooltipContent>
              </Tooltip>
            </a>
          ))}
        </ul>
      </TooltipProvider>
    </>
  )
}
import Image from 'next/image'
import { TooltipContent, TooltipProvider, Tooltip, TooltipTrigger } from 'src/component/ui/tooltip'
import { Props } from './image.type';

export type LinksImageProps = Props.LinksImage;
export function LinksImage({
  linkList,
  className,
  itemsClassName,
  imageClassName,
  labelClassName,
  withLabel
}: LinksImageProps) {
  return (
    <>
      <TooltipProvider delayDuration={500}>
        <ul className={className}>
          {linkList.map(({
            imageClassName: imageClass,
            labelClassName: labelClass,
            title,
            src,
            href,
            width,
            height
          }, key) => (
            <a key={key} href={href}>
              <Tooltip>
                <TooltipTrigger className={itemsClassName}>
                  <Image
                    className={`${imageClassName} ${imageClass}`}
                    src={src}
                    alt={title}
                    width={width}
                    height={height}
                  />
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
import Image from "next/image";
import { TooltipAnchor } from "src/component/molecules/tooltip/achor";
import { PlatformConfig } from 'src/config/platform';
import { cn } from "src/util";

export const AppSocialMedia = ({
  className, itemClassName, withLabel
}: { withLabel?: boolean } & Partial<Record<'className' | 'itemClassName', string>>) => (
  <ul className={cn('flex justify-center items-start',
    className)}>{PlatformConfig.socialMedia.map((v, key) => {

      if (!withLabel) return (
        <TooltipAnchor key={key}
          className={cn('w-14 h-14 hover:bg-transparent p-0', itemClassName)}
          tooltip={v.title}
          href={v.href}>
          <Image src={v.src} alt={v.title} className='object-cover h-full w-full' />
        </TooltipAnchor>
      );

      if (withLabel) return (
        <div key={key} className={cn('flex flex-col items-center space-y-1', itemClassName)}>
          <a key={key} href={v.href}
            className='h-10 md:h-14 w-10 md:w-14 hover:bg-transparent p-0'>
            <Image src={v.src} alt={v.title} className='object-cover h-full w-full' />
          </a>
          {withLabel && (<p className="text-center text-xs sm:text-sm font-light mt-1">
            {v.title}</p>)}
        </div>
      )
    })}
  </ul>)
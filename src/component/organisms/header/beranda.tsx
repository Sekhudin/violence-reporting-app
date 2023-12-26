import React from 'react';
import Image from 'next/image';
import { NavMenuBeranda } from 'src/component/molecules/nav-menu/beranda';
import { PngLogo } from 'src/component/static-file/logo';
import { cn } from 'src/util';

export function HeaderBeranda({ className }: { className?: string }) {
  return (
    <div className={cn(`bg-white backdrop-blur-md px-12`, className)}>
      <div className='h-[60px] lg:h-[70px] flex items-center justify-between'>
        <a href="/">
          <Image
            className='w-12 lg:w-14'
            src={PngLogo.large}
            alt="Logo" />
        </a>
        <NavMenuBeranda />
      </div>
    </div>
  )
}
import React from 'react';
import Image from 'next/image';
import { NavMenuBeranda } from 'src/component/molecules/nav-menu/beranda';
import { PngLogo } from 'src/component/static-file/logo';
import { cn } from 'src/util';

export function HeaderBerandaGap({ className }: { className?: string }) {
  return (<div className={cn('relative w-full bg-white h-[60px] lg:h-[70px]', className)} />)
}

export function HeaderBeranda({ className }: { className?: string }) {
  return (
    <div className={cn(`bg-white/20 backdrop-blur-md`, className)}>
      <div className='h-[60px] lg:h-[70px] flex items-center justify-between px-12'>
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
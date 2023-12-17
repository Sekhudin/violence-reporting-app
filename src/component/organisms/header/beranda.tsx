"use client"
import React from 'react';
import Image from 'next/image';
import { useMotionValueEvent, useScroll } from 'framer-motion';
import { NavigationMenuBeranda } from 'src/component/organisms/navigation-menu/beranda';
import { PngLogo } from 'src/component/static-file/logo';

export function HeaderBeranda() {
  const { scrollY } = useScroll()
  const [minScroll, setMinScroll] = React.useState<boolean>(false);

  const styleOnScolling = (axisY: number) => {
    if (axisY > 30) {
      setMinScroll(true)
    } else {
      setMinScroll(false)
    }
  }

  useMotionValueEvent(scrollY, "change", styleOnScolling)
  return (
    <header className={`sticky top-0 z-50 ${minScroll && 'drop-shadow-md'}`}>
      <div className='flex items-center justify-between px-12 py-2 bg-white'>
        <a href="/">
          <Image
            className='w-12 lg:w-14'
            src={PngLogo.large}
            alt="Logo" />
        </a>
        <NavigationMenuBeranda />
      </div>
    </header>
  )
}
import React from 'react';
import { ScrollArea, ScrollBar } from 'src/component/ui/scroll-area'
import { HeaderBeranda, HeaderBerandaGap } from 'src/component/organisms/header/beranda';
import { FooterBeranda, FooterBerandaGap } from 'src/component/organisms/footer/beranda';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <HeaderBeranda className='fixed top-0 inset-x-0 z-50' />
      <ScrollArea className='relative h-screen bg-background'>
        <HeaderBerandaGap />
        {children}
        <FooterBerandaGap />
        <FooterBeranda />
        <ScrollBar />
      </ScrollArea>
    </>
  )
}

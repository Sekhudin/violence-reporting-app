import React from 'react';
import { ScrollArea } from 'src/component/ui/scroll-area';
import { HeaderBeranda } from 'src/component/organisms/header/beranda';
import { FooterBeranda, FooterGap } from 'src/component/organisms/footer/beranda';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <ScrollArea id='scroll-area-beranda' className='relative h-screen overflow-x-hidden'>
        <HeaderBeranda scrollRef="#scroll-area-beranda" />
        {children}
        <FooterGap />
        <FooterBeranda />
      </ScrollArea>
    </>
  )
}

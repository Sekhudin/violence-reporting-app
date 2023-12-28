import React from 'react';
import { ScrollArea } from 'src/component/ui/scroll-area';
import { HeaderBeranda } from 'src/component/organisms/header/beranda';
import { FooterBeranda, FooterGap } from 'src/component/organisms/footer/beranda';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <ScrollArea className='relative h-screen overflow-x-hidden'>
        <HeaderBeranda className={`drop-shadow-md`} />
        {children}
        <FooterGap />
        <FooterBeranda />
      </ScrollArea>
    </>
  )
}

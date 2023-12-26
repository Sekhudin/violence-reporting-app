import React from 'react';
import { ScrollArea } from 'src/component/ui/scroll-area'
import { HeaderBeranda } from 'src/component/organisms/header/beranda';
import { FooterBeranda } from 'src/component/organisms/footer/beranda';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <ScrollArea className='relative h-screen bg-background flex flex-col'>
        <HeaderBeranda className='fixed top-0 inset-x-0 z-50' />
        {children}
        <FooterBeranda className='flex-auto' />
      </ScrollArea>
    </>
  )
}

"use client"
import React from 'react';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import { Separator } from 'src/component/ui/separator';
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from 'src/component/ui/navigation-menu';
import { Sheet, SheetTrigger, SheetContent, SheetHeader, SheetTitle, SheetClose } from 'src/component/ui/sheet';
import { useMaxScreenAs } from 'src/component/hooks/use-screen';
import { NavigationConfig } from 'src/config/navigation';
import { cn } from 'src/util';
import css from './beranda.module.css';

export function NavmenuBeranda() {
  const [isMobile] = useMaxScreenAs('md')
  const pathname = usePathname();
  const navigation = NavigationConfig.berandaNavigation;

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className='hidden md:flex'>
          {navigation.map(({ title, href }, key) => (
            <NavigationMenuItem key={key}>
              <NavigationMenuLink href={href} className={cn(`px-4 py-2 rounded-md font-medium text_blue w-full`,
                `${pathname === href ? css['item_active'] : css['item']}`)}>
                {title}
              </NavigationMenuLink>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      {isMobile ? (
        <Sheet modal>
          <SheetTrigger className={cn(`cursor-pointer focus:outline-none p-2 md:hidden`)}>
            <Menu />
          </SheetTrigger>

          <SheetContent className='px-0 mx-0'>
            <SheetHeader className='text-start mb-3'>
              <SheetTitle className='text-base text-cyan-800 font-medium px-2'>
                Navigasi
              </SheetTitle>
            </SheetHeader>
            <Separator orientation='horizontal' className='' />

            <div className='flex flex-col space-y-1.5 m-2'>
              {navigation.map(({ title, href }, key) => (
                <a className={cn(`rounded-md overflow-hidden font-light`,
                  `${pathname === href ? css['item_active'] : css['item']}`)}
                  href={href}
                  key={key}>
                  <SheetClose className='w-full text-start px-3 py-1.5'>
                    {title}
                  </SheetClose>
                </a>
              ))}
            </div>
          </SheetContent>
        </Sheet>) : (
        <div className='md:hidden cursor-not-allowed p-2'>
          <Menu />
        </div>
      )}
    </>
  )
}
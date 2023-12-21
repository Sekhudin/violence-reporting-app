"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { Menu } from 'lucide-react';
import {
  NavigationMenu,
  NavigationMenuList,
  NavigationMenuItem,
  NavigationMenuLink
} from 'src/component/ui/navigation-menu';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator
} from 'src/component/ui/dropdown-menu';
import { useMaxScreen } from 'src/component/hooks/use-screen';
import { NavigationConfig } from 'src/config/navigation';
import { cn } from 'src/util';
import css from './beranda.module.css';

export function NavMenuBeranda() {
  const pathname = usePathname();
  const navigation = NavigationConfig.berandaNavigation;
  const [maxMd, setMaxMd] = useMaxScreen('md', false);

  return (
    <>
      <NavigationMenu>
        <NavigationMenuList className='hidden md:flex'>
          {navigation.map(({ title, href }, key) => (
            <NavigationMenuItem key={key}>
              <Link href={href} scroll={false} passHref legacyBehavior>
                <NavigationMenuLink className={cn(`px-4 py-2 rounded-md font-medium text_blue w-full`,
                  `${pathname === href ? css['item_active'] : css['item']}`)}>
                  {title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>
      </NavigationMenu>

      <DropdownMenu
      // open={maxMd}
      // onOpenChange={setMaxMd}
      >
        <DropdownMenuTrigger className={cn(`cursor-pointer focus:outline-none p-2 md:hidden`)}>
          <Menu />
        </DropdownMenuTrigger>
        <DropdownMenuContent
          className='w-screen border-none rounded-none flex flex-col space-y-1 mt-1 mx-0 py-2'>
          <DropdownMenuLabel className='text-base font-medium pt-4 pb-2'>
            Navigation
          </DropdownMenuLabel>
          <DropdownMenuSeparator />
          {navigation.map(({ title, href }, key) => (
            <DropdownMenuItem
              asChild
              key={key}
              className={cn(`px-4 py-2 rounded-md font-medium text_blue w-full`,
                `${pathname === href ? css['item_active'] : css['item']}`,
                'font-normal sm:font-medium')}>
              <Link href={href} scroll={false}>
                {title}
              </Link>
            </DropdownMenuItem>
          ))}
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
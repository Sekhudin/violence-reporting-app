"use client"
import { usePathname } from 'next/navigation';
import Link from 'next/link';
import { Menu } from 'lucide-react'
import { NavigationMenu, NavigationMenuList, NavigationMenuItem, NavigationMenuLink } from 'src/component/ui/navigation-menu';
import { DropdownMenu, DropdownMenuTrigger, DropdownMenuContent, DropdownMenuItem } from 'src/component/ui/dropdown-menu';
import { NavigationConfig } from 'src/config/navigation';
import css from './beranda.module.css';

export function NavigationMenuBeranda() {
  const pathname = usePathname();
  const navigation = NavigationConfig.berandaNavigation;

  return (
    <>
      <NavigationMenu>
        {/* normal view */}
        <NavigationMenuList className='hidden md:flex'>
          {navigation.map(({ title, href }, key) => (
            <NavigationMenuItem key={key}>
              <Link href={href} passHref legacyBehavior>
                <NavigationMenuLink className={`${pathname === href ? css['item_active'] : css['item']}
                  px-4 py-2 rounded-md font-medium text_blue`}>
                  {title}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          ))}
        </NavigationMenuList>

        {/* mobile view */}
        <NavigationMenuList className='block md:flex'>
          <NavigationMenuItem>
            <DropdownMenu>
              <DropdownMenuTrigger className='block md:hidden cursor-pointer focus:outline-none'>
                <Menu />
              </DropdownMenuTrigger>
              <DropdownMenuContent className='block md:hidden w-screen border-none rounded-none mt-4 mx-0 bg-white'>
                {navigation.map(({ title, href }, key) => (
                  <Link href={href} key={key}>
                    <DropdownMenuItem className={`${pathname === href ? css['item_active'] : css['item']}
                      px-4 py-2 rounded-md font-medium my-1 text_blue`}>
                      {title}
                    </DropdownMenuItem>
                  </Link>
                ))}
              </DropdownMenuContent>
            </DropdownMenu>
          </NavigationMenuItem>
        </NavigationMenuList>
      </NavigationMenu>
    </>
  )
}
import { NavbarBeranda } from "src/component/organisms/nav-bar/beranda";
import { cn } from 'src/util';

export function HeaderBeranda({ className }: { className?: string }) {
  return (
    <header className={cn(`sticky top-0 z-10 bg-white px-12`, className)}>
      <NavbarBeranda className="h-[60px] lg:h-[70px]" />
    </header>
  )
}
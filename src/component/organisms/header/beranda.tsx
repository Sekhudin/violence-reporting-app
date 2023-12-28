import { NavbarBeranda } from "src/component/organisms/nav-bar/beranda";
import { cn } from 'src/util';

export function HeaderBeranda({ className, id }: { className?: string; id?: string }) {
  return (
    <header id={id} className={cn(`sticky top-0 z-10 bg-white px-12 py-1`, className)}>
      <NavbarBeranda className="h-[52px] lg:h-[62px]" />
    </header>
  )
}
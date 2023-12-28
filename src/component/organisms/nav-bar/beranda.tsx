import Image from "next/image";
import { NavmenuBeranda } from "src/component/molecules/nav-menu/beranda";
import { PngLogo } from "src/component/static-file/logo";
import { cn } from "src/util";

export function NavbarBeranda({ className }: { className?: string }) {
  return (
    <div className={cn(`flex items-center justify-between`, className)}>
      <a href="/">
        <Image className='w-10 lg:w-12'
          src={PngLogo.large}
          alt="Logo"
          priority/>
      </a>
      <NavmenuBeranda />
    </div>
  )
}
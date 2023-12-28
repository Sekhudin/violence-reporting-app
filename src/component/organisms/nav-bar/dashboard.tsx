import Image from "next/image";
import { PngLogo } from "src/component/static-file/logo";
import { DropdownDashboard } from 'src/component/organisms/drop-down/dashboard';
import { cn } from "src/util";

export function NavbarDashboard({ className }: { className?: string }) {
  return (
    <div className={cn(`flex items-center justify-between`, className)}>
      <a href="/">
        <Image
          className="w-10 lg:w-12"
          src={PngLogo.largeWhite}
          alt="Logo"
          priority />
      </a>
      <DropdownDashboard />
    </div>
  )
}
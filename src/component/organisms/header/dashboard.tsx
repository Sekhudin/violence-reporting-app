import Image from "next/image";
import { PngLogo } from 'src/component/static-file/logo'
import { cn } from "src/util";

export const HeaderBerandaGap = ({ className }: { className?: string }) => (
  <div className={cn(`relative h-[60px] w-full bg-background`, className)} />)

export function HeaderDashboard({ className }: { className?: string }) {
  return (
    <header className={cn(`h-[60px] w-full fixed top-0 z-50 inset-x-0
      flex items-center px-12 bg_blue`, className)}>
      <div className='flex justify-between'>
        <a href="/">
          <Image
            className="w-10 lg:w-12"
            src={PngLogo.largeWhite}
            alt="Logo" />
        </a>
      </div>
    </header>
  )
}
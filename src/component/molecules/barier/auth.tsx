import Image from 'next/image';
import { DotIcon } from 'lucide-react'
import { PngLogo } from 'src/component/static-file/logo'
import { cn } from "src/util";


type AuthShieldProps = {
  show: boolean;
  authorized: boolean;
  className?: string;
} & React.PropsWithChildren;

export function AuthShield({ children, show, authorized, className }: AuthShieldProps) {
  return (
    <>
      <div className={cn(`fixed z-50 inset-0 flex flex-col justify-center items-center
      bg-white text-center ${!authorized && show ? '' : 'hidden'}`, className)}>
        <Image
          src={PngLogo.large}
          alt='logo'
        />
        <h2 className='pt-3 text-gray-800 text-2xl xl:text-3xl font-bold'>
          Lawan id
        </h2>
        <p className='font-light xl:text-lg pt-2 xl:pt-4'>
          Tak Ada Kekuatan Sejati dalam Pukulan.
          <span className="block">Pilih Damai, Tolak Kekerasan!</span>
        </p>
        <div className='flex justify-center space-x-3 mt-4'>
          <DotIcon className='h-4 w-4 text-transparent rounded-full dot_loader1' />
          <DotIcon className='h-4 w-4 text-transparent rounded-full dot_loader2' />
          <DotIcon className='h-4 w-4 text-transparent rounded-full dot_loader3' />
        </div>
      </div>
      {children}
    </>
  )
}
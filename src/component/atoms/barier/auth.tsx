import React from 'react';
import Image from 'next/image';
import { useRouter, usePathname } from "next/navigation";
import { DotIcon } from 'lucide-react';
import { useToast } from 'src/component/ui/use-toast';
import { useAuth } from 'src/component/context/use-ctx';
import { PngLogo } from 'src/component/static-file/logo';
import { cn } from "src/util";

const BarierAnimation = ({ className }: { className?: string }) => (
  <div className={cn(`flex justify-center space-x-3 mt-4`, className)}>
    <DotIcon className='h-4 w-4 text-transparent rounded-full dot_loader1' />
    <DotIcon className='h-4 w-4 text-transparent rounded-full dot_loader2' />
    <DotIcon className='h-4 w-4 text-transparent rounded-full dot_loader3' />
  </div>)

const BarierLogo = ({ className }: { className?: string }) => (
  <div className={cn(``, className)}>
    <Image className=''
      alt='logo'
      src={PngLogo.large} />
  </div>)

const BarierText = ({ className }: { className?: string }) => (
  <div className={cn(`mt-3`, className)}>
    <h2 className='text-gray-800 text-2xl xl:text-3xl font-bold'>
      Lawan id
    </h2>
    <p className='font-light xl:text-lg mt-2 xl:mt-4'>
      Tak Ada Kekuatan Sejati dalam Pukulan.
      <span className="block">Pilih Damai, Tolak Kekerasan!</span>
    </p>
  </div>)

const Barier = ({ children, className }: { className?: string } & React.PropsWithChildren) => (
  <div className={cn(`fixed z-[999] inset-0 flex flex-col justify-center items-center
    bg-white text-center`, className)}>
    {children}
  </div>)

export function BarierAuth({ className }: { className?: string }) {
  const { toast } = useToast();
  const { authUser, user } = useAuth();
  const router = useRouter();
  const pathname = usePathname();
  const isDashboardPage: boolean = pathname.startsWith('/dashboard');
  const isLoginPage: boolean = pathname.startsWith('/login');


  const barierHandler = React.useCallback(() => {
    if (authUser && user) {
      if (isLoginPage) {
        router.push("/dashboard", { scroll: false });
      }

      if (isDashboardPage) {
        toast({
          title: `Hello ${user.name}`,
          description: `Selamat datang kembali`
        });
      }
    }

  }, [authUser, isDashboardPage, isLoginPage, router, toast, user]);

  React.useEffect(() => {
    barierHandler();
    return () => {
      barierHandler();
    }
  }, [barierHandler]);

  if (authUser && user && isDashboardPage) return null;
  return (
    <Barier className={cn(``, className)}>
      <BarierLogo />
      <BarierText />
      <BarierAnimation />
    </Barier>
  )
}
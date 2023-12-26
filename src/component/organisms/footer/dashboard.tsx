import { cn } from "src/util";

export function FooterDashboard({ className }: { className?: string }) {
  var year = new Date().getFullYear();
  const children: string = `${year} Lawan.id - All Rights Reserved.`;

  return (
    <div className={cn(`absolute hidden lg:flex h-[30px] w-full bottom-0 inset-x-0 justify-center
      items-center px-12 bg-cyan-900`, className)}>
      <p className='text-white text-center font-light
        text-xs lg:text-sm truncate'>
        &copy; {children}
      </p>
    </div>
  )
}
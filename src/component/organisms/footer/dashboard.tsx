import { cn } from "src/util";

export const FooterDashboardGap = ({ className }: { className?: string }) => (
  <div className={cn(`h-[15vh] w-full relative bottom-0
    bg-gray-100`, className)} />)

export function FooterDashboard({ className }: { className?: string }) {
  var year = new Date().getFullYear();
  const children: string = `${year} Lawan.id - All Rights Reserved.`;

  return (
    <div className={cn(`h-[30px] w-full hidden lg:flex fixed bottom-0 z-50
      justify-center items-center px-12 bg_blue`, className)}>
      <p className='text-white text-center font-light
        text-xs lg:text-sm truncate'>
        &copy; {children}
      </p>
    </div>
  )
}
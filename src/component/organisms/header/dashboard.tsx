import { NavbarDashboard } from "src/component/organisms/nav-bar/dashboard";
import { cn } from "src/util";

export function HeaderDashboard({ className }: { className?: string }) {
  return (
    <header className={cn(`fixed top-0 inset-x-0 z-10 bg-cyan-900 px-12 py-1`, className)}>
      <NavbarDashboard className="h-[52px] lg:h-[62px]" />
    </header>
  )
}
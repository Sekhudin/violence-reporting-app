import { cn } from "src/util";

export type LawanCrossTextProps = {
  className?: string
}

const CrossText: React.ReactNode = Array.from({ length: 24 }).map((x, key) => (
  <p key={key} className="w-fit">{"@Lawan!"}</p>
))

const ContainerCrossText = ({ children, className }: { className?: string } & React.PropsWithChildren) => (
  <div className={cn(`w-full font-semibold flex justify-center items-center space-x-4 overflow-hidden
      absolute z-[1] px-12 py-2 md:py-4 bg-gradient-to-t`, className)}>
    {children}
  </div>)

export const LawanCrossText = ({ className }: LawanCrossTextProps) => (
  <div className={cn("relative h-fit max-w-[100vw] overflow-hidden py-6 pb-24 xl:pb-28", className)}>
    <ContainerCrossText className="from-cyan-900 to-cyan-600 text-white -rotate-6 lg:-rotate-3">
      {CrossText}
    </ContainerCrossText>
    <ContainerCrossText className="from-amber-500 to-amber-400 text-cyan-900 rotate-6 lg:rotate-3">
      {CrossText}
    </ContainerCrossText>
  </div>)
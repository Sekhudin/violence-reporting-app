import { TextMapper } from "src/component/molecules/text/mapper";

export type LawanCrossTextProps = {
  className?: string
}
export function LawanCrossText({ className }: LawanCrossTextProps) {
  return (
    <div className={className || "relative py-6 pb-24 xl:pb-28"}>
      <TextMapper
        className="w-full font-semibold flex justify-center items-center
        space-x-4 overflow-hidden absolute z-[1]
        px-12 py-2 md:py-4 bg-gradient-to-t from-cyan-900 to-cyan-600 text-white
        rotate-6 lg:rotate-3"
        mapper={{ text: "-Lawan!", numOfText: 24 }} />
      <TextMapper
        className="w-full font-semibold flex justify-center items-center
        space-x-4 overflow-hidden absolute z-[1]
        px-12 py-2 md:py-4 bg-gradient-to-t from-amber-500 to-amber-400 text-cyan-900
        -rotate-6 lg:-rotate-3"
        itemClassName=""
        mapper={{ text: "-Lawan!", numOfText: 24 }} />
    </div>
  )
}
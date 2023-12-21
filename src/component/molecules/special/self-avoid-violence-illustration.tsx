import Image, { StaticImageData } from "next/image";
import { Illus } from "src/component/static-file/illustration";
import { cn } from "src/util";

export const avoidIllustation: AvoidIllustration = [
  {
    src: Illus.file01,
  },
  {
    src: Illus.file02,
  },
  {
    src: Illus.file03,
  },
  {
    src: Illus.file04,
  }
]

type AvoidIllustration = { src: StaticImageData }[]
export const SelfAvoidViolenceIllustration = ({ className }: { className?: string }) => (
  <ul className={cn(`grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2
    lg:grid-rows-2 gap-4 md:gap-6 lg:gap-10 lg:mt-14`, className)}>{
      avoidIllustation.map((v, key) => (
        <li className="w-32 sm:40 md:w-56" key={key}>
          <Image
            className="object-cover"
            src={v.src}
            alt="image" />
        </li>))}
  </ul>)
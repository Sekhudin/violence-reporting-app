import Image from "next/image";
import { Illus } from 'src/component/static-file/illustration';
import { cn } from "src/util";

export const IllustrationEdukasiBeranda = ({ className, ...props }: Omit<React.HTMLAttributes<HTMLElement>, 'children'>) => (
  <section className={cn("sticky top-[60px] flex flex-col md:items-center lg:flex-row bg-black", className)}>
    <Image
      className="flex-none"
      src={Illus.file05}
      alt="illustarion-image" />
    <div className="text-white grow flex items-center px-12 py-4 md:px-6 bg-pink">
      <p className="max-w-lg lg:max-w-lg xl:max-w-xl 2xl:max-w-4xl
      text-center lg:text-start text-base 2xl:text-xl">
        {`" Tidak ada yang lebih`}
        <span className="text-red-500 font-medium">
          {" berbahaya "}
        </span>daripada
        <span className="text-red-500 font-medium">
          {" kekerasan "}
        </span>yang dilakukan oleh orang-orang yang
        <span className="text-red-500 font-medium">
          {" bermaksud buruk "}
        </span>
        {`untuk tujuan yang menguntungkan ".`}
      </p>
    </div>
  </section>);
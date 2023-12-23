import Image from "next/image";
import React from "react";
import { Card, CardContent, CardFooter, } from 'src/component/ui/card';
import { TooltipAnchor } from "src/component/molecules/tooltip/achor";
import { useFireStorageUrl } from "src/component/hooks/use-firebase";
import { User } from 'src/service/user/user.service';
import { cn, FunStr } from "src/util";

type CardUserContactProps = {
  values: User.Expose;
  className?: string
}

const TextName = ({ text, className, }: { text: string; className?: string }) => (
  <p className={cn(`flex justify-start text-sm sm:text-base font-semibold capitalize`,
    className)}>
    {FunStr.abbrevName(text, 3)}
  </p>);

const TextEmail = ({ text, className, }: { text: string; className?: string }) => (
  <p className={cn(`flex justify-start text-sm sm:text-base font-light lowercase truncate`,
    className)}>
    {FunStr.capitalFirst(FunStr.foldWord(text, 25))}
  </p>);

const TextSendMsg = ({ className }: { className?: string }) => (
  <p className={cn(`h-fit w-fit hover:bg-transparent 
    text-cyan-800 hover:text-cyan-800 text-sm font-normal hover:font-medium cursor-pointer
    p-0 duration-500`,
    className)}>
    Kirim email
  </p>);

export const CardUserContact = React.forwardRef<HTMLDivElement, CardUserContactProps>(({
  values: v,
  className
}, ref) => {

  const { loading, error, src } = useFireStorageUrl(v.image);

  return (
    <Card ref={ref}
      className={cn(`w-64 sm:w-96 overflow-hidden rounded-lg lg:rounded-xl p-2`, className)}>
      <CardContent className="flex items-center text-base space-x-0 sm:space-x-4 p-0">
        <div className="w-24 h-24 rounded-full overflow-hidden hidden sm:block">
          <Image className={`w-full h-full object-cover`}
            src={src}
            width={500}
            height={500}
            loading="lazy"
            alt={v.name} />
        </div>

        <div className="h-20 grow flex flex-col justify-between">
          <div className="flex flex-col items-center sm:items-start">
            <TextName text={v.name} />
            <TextEmail text={v.email} />
          </div>

          <div className="flex justify-center sm:justify-start items-center">
            <TooltipAnchor
              className="hover:bg-transparent p-0"
              href={`mailto:${v.email}?Subject=Lapor%20ID`}
              tooltip={`email ke ${v.email}`}>
              <TextSendMsg />
            </TooltipAnchor>
          </div>
        </div>
      </CardContent>

      <CardFooter className="p-0">
      </CardFooter>
    </Card>
  )
});
CardUserContact.displayName = 'CardUserContact';
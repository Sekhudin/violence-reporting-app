"use client"
import React from "react";
import Image from "next/image";
import { Skeleton } from "src/component/ui/skeleton";
import { Card, CardContent, } from 'src/component/ui/card';
import { useFirebase, useImage } from 'src/component/hooks/use-firebase';
import { UserService, User } from 'src/service/user/user.service';
import { cn, FunStr } from "src/util";

type CardArticleAuthorProps = {
  authorId: string;
  className?: string
}

const TextName = ({ text, className, }: { text: string; className?: string }) => (
  <p className={cn(`flex justify-start text-sm sm:text-base text-cyan-800 font-semibold capitalize`,
    className)}>
    {FunStr.abbrevName(text, 3)}
  </p>);

const TextEmail = ({ text, className, }: { text: string; className?: string }) => (
  <p className={cn(`flex justify-start text-sm sm:text-base text-cyan-800 font-light lowercase truncate`,
    className)}>
    {FunStr.capitalFirst(FunStr.foldWord(text, 25))}
  </p>);

export const CardArticleAuthor = React.forwardRef<HTMLDivElement, CardArticleAuthorProps>(({
  authorId: id,
  className
}, ref) => {

  const { data: v, } = useFirebase<User.Expose>(UserService.findUserById(id));
  const { src, loading } = useImage(v?.image);

  return (
    <Card ref={ref}
      className={cn(`w-64 sm:w-96 overflow-hidden rounded-none border-0 shadow-none p-0`, className)}>
      <CardContent className="flex items-center text-base space-x-0 sm:space-x-4 p-0">
        <div className="relative w-16 h-16 rounded-full overflow-hidden hidden sm:block">
          {!loading && v && (
            <Image className={`w-full h-full object-cover`}
              fill
              src={src}
              loading="lazy"
              alt={v.name} />)}

          {loading && (<Skeleton className="w-full h-full" />)}
        </div>

        <div className="flex flex-col items-start">
          {!loading && v && (<>
            <TextName text={v.name} />
            <TextEmail text={v.email} />
          </>)}

          {loading && (<Skeleton className="w-full h-full" />)}
        </div>
      </CardContent>
    </Card>
  )
});
CardArticleAuthor.displayName = 'CardArticleAuthor';
import Image from "next/image";
import React from "react";
import { Card, CardContent, CardFooter, } from 'src/component/ui/card';
import { useImage } from "src/component/hooks/use-firebase";
import { Article } from 'src/service/article/article.service';
import { cn, FunStr } from "src/util";

type CardArticleEdukasiProps = {
  values: Article.Expose;
  className?: string
}

const TextTitle = ({ text, className, }: { text: string; className?: string }) => (
  <h2 className={cn(`flex justify-center text-lg font-semibold text-center capitalize px-2 pt-2 pb-1`,
    className)}>
    {FunStr.foldSentence(text, 3)}
  </h2>);

const ReadMore = ({ className }: { className?: string }) => (
  <a className={cn(`h-fit w-fit hover:bg-transparent 
    text-cyan-800 hover:text-cyan-800 text-base font-normal hover:font-medium cursor-pointer
    p-0 duration-500`,
    className)}>
    Selengkapnya
  </a>);


export const CardArticleEduksi = React.forwardRef<HTMLDivElement, CardArticleEdukasiProps>(({
  values: v,
  className
}, ref) => {
  const { loading, error, src } = useImage(v.image);
  return (
    <Card ref={ref}
      className={cn(`overflow-hidden w-full sm:w-96 rounded-lg lg:rounded-xl p-4`, className)}>
      <CardContent className="text-base p-0">
        <div className="h-64 overflow-hidden bg-white/20 backdrop-blur-md rounded-lg lg:rounded-xl">
          <Image className={`w-full h-full object-cover`}
            src={src}
            width={500}
            height={500}
            loading="lazy"
            alt="article" />
        </div>

        <TextTitle text={v.title} />
        <div className="text-justify">
          {FunStr.foldSentence(FunStr.capitalFirst(v.article), 10) + " "}
          <ReadMore />
        </div>
      </CardContent>

      <CardFooter className="p-0">
      </CardFooter>
    </Card>
  )
});
CardArticleEduksi.displayName = "CardArticleEduksi";
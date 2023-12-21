import Image from "next/image";
import React from "react";
import { useFireStorageUrl } from "src/component/hooks/use-firebase";
import { Button, ButtonProps } from "src/component/ui/button";
import { Card, CardHeader, CardTitle, CardContent, CardFooter, CardDescription, } from 'src/component/ui/card';
import { Article } from 'src/service/article/article.service';
import { cn, FunStr } from "src/util";

type CardArticleEdukasiProps = {
  values: Article.Expose;
  className?: string
}

const Selanjutnya = ({ className, ...props }: Omit<ButtonProps, 'children'>) => (
  <Button variant="ghost" className={cn(`h-fit w-fit hover:bg-transparent 
    text-cyan-800 hover:text-cyan-800 text-base font-normal hover:font-medium
    p-0 pl-1 duration-500`,
    className)}>
    Selanjutnya
  </Button>);


export const CardArticleEduksi = React.forwardRef<HTMLDivElement, CardArticleEdukasiProps>(({
  values: v,
  className
}, ref) => {
  const url = useFireStorageUrl(v.image);
  console.log('url :>> ', url);

  return (
    <Card ref={ref}
      className={cn(`overflow-hidden w-10/12 sm:w-2/5 lg:w-72
      rounded-lg lg:rounded-xl shadow-md mb-4 lg:mb-6`, className)}>
      <CardHeader>
        <CardTitle className="text-base font-semibold capitalize">
          {v.title}
        </CardTitle>
      </CardHeader>

      <CardContent className="text-base">
        <div>
          {/* <Image 
          loader={img}
            alt="article" /> */}
        </div>

        <div>
          {FunStr.capitalFirst(v.article)}
          <Selanjutnya />
        </div>
      </CardContent>

      <CardFooter>
      </CardFooter>
    </Card>
  )
});
CardArticleEduksi.displayName = "CardArticleEduksi";
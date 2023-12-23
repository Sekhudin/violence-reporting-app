"use client";
import React from "react";
import { CardArticleEduksi } from "src/component/molecules/card/article/edukasi";
import { Button, ButtonProps } from "src/component/ui/button";
import { TooltipAnchor } from "src/component/molecules/tooltip/achor";
import { useArticleSlice } from 'src/component/context/use-ctx';
import { cn } from "src/util";

export const TitleCardListArticleEdukasi = ({ children, className }: { className?: string } & React.PropsWithChildren) => (
  <h2 className={cn("text-center font-semibold text-lg md:text-xl xl:text-2xl mb-6 lg:mb-12", className)}>
    {children}
  </h2>)

const SeeMore = ({ className, ...props }: ButtonProps) => (
  <Button className={cn('', className)}
    variant="blue"
    {...props}>
    Lihat Lainya
  </Button>)

export function CardListArticleEdukasi({ className }: { className?: string }) {
  const { slice, loading, error } = useArticleSlice(3);

  if (!slice.length) return null;
  return (
    <div className={cn("relative flex flex-wrap justify-center", className)}>{
      slice.map((v, key) => (
        <CardArticleEduksi key={key}
          className="m-4"
          values={v} />
      ))}

      <TooltipAnchor className="absolute -bottom-12 hover:bg-transparent p-0"
        tooltip="Artikel lainya"
        href="/">
        <SeeMore />
      </TooltipAnchor>
    </div>)
}
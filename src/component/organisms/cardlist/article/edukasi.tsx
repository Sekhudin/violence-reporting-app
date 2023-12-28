"use client";
import React from "react";
import { Skeleton } from "src/component/ui/skeleton";
import { CardArticleEdukasi } from "src/component/molecules/card/article/edukasi";
import { TooltipAnchor } from "src/component/molecules/tooltip/achor";
import { useArticleSlice } from 'src/component/context/use-ctx';
import { cn } from "src/util";

export const TitleCardListArticleEdukasi = ({ children, className }: { className?: string } & React.PropsWithChildren) => (
  <h2 className={cn("text-center font-semibold text-lg md:text-xl xl:text-2xl mb-6 lg:mb-12", className)}>
    {children}
  </h2>)

const SeeMore = () => (
  <TooltipAnchor className={`absolute -bottom-12 hover:bg-transparent p-0 
    text-cyan-800 hover:text-cyan-900 hover:font-medium`}
    tooltip="Artikel lainya"
    href="/edukasi/artikel">
    Lihat Lainnya
  </TooltipAnchor>)

export function CardListArticleEdukasi({ className }: { className?: string }) {
  const { slice, loading, error } = useArticleSlice(3);

  return (
    <div className={cn("relative flex flex-wrap justify-center", className)}>
      {!loading && slice.map((v, key) => (
        <CardArticleEdukasi key={key}
          className="m-4"
          values={v} />
      ))}

      {loading && Array.from({ length: 3 }).map((_, key) => (
        <Skeleton key={key} className='h-80 w-full sm:w-96 rounded-lg lg:rounded-xl m-4' />
      ))}
      <SeeMore />
    </div>)
}
"use client"
import React from "react";
import { Loader2 } from 'lucide-react';
import { Skeleton } from 'src/component/ui/skeleton';
import { CardArticleEdukasi } from "src/component/molecules/card/article/edukasi";
import { FloatButtonToTop } from 'src/component/organisms/float-button/to-top';
import { useIntersection } from 'src/component/hooks/use-intersection';
import { useArticleSlice } from 'src/component/context/use-ctx';
import { cn } from "src/util";


const CardMemo = React.memo(CardArticleEdukasi)
const CardListMemo = React.memo(({ nSlice }: { nSlice: number }) => {
  const { slice, loading } = useArticleSlice(nSlice);
  return (
    <div className="flex flex-wrap justify-center gap-8 xl:gap-12">
      {loading && Array.from({ length: nSlice }).map((_, key) => (
        <Skeleton key={key} className='h-64 w-full sm:w-96
          rounded-lg lg:rounded-xl' />
      ))}

      {!loading &&
        slice.map((v, key) => {
          return (
            <CardMemo className=''
              key={key}
              values={v} />
          )
        })}
    </div>
  )
});
CardListMemo.displayName = 'CardListMemo';


export function CardListArticleInfinite({ className }: { className?: string }) {
  const [nSlice, setNSlice] = React.useState<number>(15);
  const [loading, setLoading] = React.useState<boolean>(false);

  const topRef = React.useRef<HTMLDivElement>(null);
  const scrollRef = React.useRef<HTMLDivElement>(null);
  const refList = React.useRef<HTMLDivElement>(null);

  const entry = useIntersection(refList, {
    threshold: 0.9,
    freeZeOnceVisible: false
  });

  const handler = React.useCallback(() => {
    let timmer: NodeJS.Timeout;
    const cleanUp = () => {
      if (timmer) {
        clearTimeout(timmer);
      }
    }

    if (entry?.isIntersecting) {
      setLoading(true);
      if (navigator.onLine) {
        timmer = setTimeout(() => {
          setLoading(false);
          setNSlice(nSlice + 15);
        }, 2000);
      }
    }
    return cleanUp;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry])


  React.useEffect(handler, [handler])

  return (
    <>
      <div className="h-6 lg:h-12 w-full" ref={topRef} />
      <div className='mb-3 lg:mb-6'>
        <p className='text-lg lg:text-2xl font-medium lg:text-center'>
          Artikel
        </p>
      </div>
      <div
        className={cn('min-h-screen w-full relative', className)}>
        <CardListMemo nSlice={nSlice} />
        <div
          ref={refList}
          className="h-8 w-full mt-24 flex justify-center items-center">
          {loading && (
            <Loader2 className='animate-spin w-7 h-7 text-cyan-800' />
          )}
        </div>
        <FloatButtonToTop
          topRef={topRef}
          scrollRef={'#scroll-area-beranda'} />
      </div>
    </>
  )

}
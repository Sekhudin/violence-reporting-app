"use client"
import React from "react";
import { Skeleton } from 'src/component/ui/skeleton';
import { CardArticleEdukasi } from "src/component/molecules/card/article/edukasi";
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
  const refList = React.useRef<HTMLDivElement>(null);
  const entry = useIntersection(refList, {
    threshold: 0.9,
    freeZeOnceVisible: false
  });


  React.useEffect(() => {
    if (entry?.isIntersecting) {
      setNSlice(nSlice + 15);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry])

  return (
    <div className={cn('min-h-screen w-full relative', className)}>
      <CardListMemo nSlice={nSlice} />
      <div ref={refList}
        className="h-6 w-full mt-24" />
    </div>
  )

}
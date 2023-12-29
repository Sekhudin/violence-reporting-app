"use client"
import React from "react";
import { Loader2, PackageOpen } from 'lucide-react';
import { Skeleton } from 'src/component/ui/skeleton';
import { CardArticleEdukasi } from "src/component/molecules/card/article/edukasi";
import { useIntersection } from 'src/component/hooks/use-intersection';
import { useArticleByAuthor, useArticleByAuthorSlice } from 'src/component/context/use-ctx';
import { cn } from "src/util";


const CardMemo = React.memo(CardArticleEdukasi)
const CardListMemo = React.memo(({ nSlice, authorId }: { nSlice: number, authorId: string }) => {
  const { articles } = useArticleByAuthor(authorId);
  const { slice, loading } = useArticleByAuthorSlice(nSlice, authorId);
  return (
    <div className="flex flex-wrap justify-center gap-8 xl:gap-12">
      {loading && Array.from({ length: nSlice }).map((_, key) => (
        <Skeleton key={key} className='h-64 w-full sm:w-96
          rounded-lg lg:rounded-xl' />
      ))}

      {!loading && articles && articles.length === 0 && (
        <div className="flex flex-col mt-20 items-center space-y-2 text-cyan-800">
          <PackageOpen className="h-20 w-20 opacity-40" />
          <p>Belum ada artikel</p>
        </div>
      )}

      {!loading &&
        slice.map((v, key) => {
          return (
            <CardMemo className='shadow-none'
              key={key}
              values={v} />
          )
        })}
    </div>
  )
});
CardListMemo.displayName = 'CardListMemo';


export function CardListArticleInfiniteAuthor({
  nItem,
  authorId,
  className,
}: { nItem: number, authorId: string, className?: string, }) {
  const [nSlice, setNSlice] = React.useState<number>(nItem);
  const [loading, setLoading] = React.useState<boolean>(false);

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
          setNSlice(nSlice + nItem);
        }, 2000);
      }
    }
    return cleanUp;
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [entry])


  React.useEffect(handler, [handler])

  return (
    <>
      <div className='mb-3 lg:mb-6'>
        <p className='text-lg lg:text-2xl font-medium lg:text-center'>
          Artikel Anda
        </p>
      </div>

      <div className={cn('min-h-screen w-full relative', className)}>
        <CardListMemo nSlice={nSlice} authorId={authorId} />
        <div
          ref={refList}
          className="h-8 w-full mt-24 flex justify-center items-center">
          {loading && (
            <Loader2 className='animate-spin w-7 h-7 text-cyan-800' />
          )}
        </div>
      </div>
    </>
  )

}
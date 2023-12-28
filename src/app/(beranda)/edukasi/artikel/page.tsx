"use client"
import { Skeleton } from 'src/component/ui/skeleton';
import { CardArticleEdukasi } from "src/component/molecules/card/article/edukasi";
import { useArticle, useArticleSlice } from 'src/component/context/use-ctx';

export default function Page() {
  const { slice, loading } = useArticleSlice(10);

  return (
    <>
      {loading && (
        <div className="flex flex-wrap justify-center gap-8 px-6 lg:px-12">{
          Array.from({ length: 5 }).map((_, key) => (
            <Skeleton key={key} className='h-64 w-full sm:w-96 rounded-lg lg:rounded-xl' />
          ))}</div>)}

      {!loading && (
        <div className="flex flex-wrap justify-center gap-8 px-6 lg:px-12">{
          slice.map((v, key) => (
            <CardArticleEdukasi className=''
              key={key}
              values={v} />
          ))}</div>
      )}
    </>
  )
}
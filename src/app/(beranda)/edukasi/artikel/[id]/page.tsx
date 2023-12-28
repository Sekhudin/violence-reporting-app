"use client"
import Image from 'next/image';
import { notFound, useParams } from 'next/navigation';
import { Skeleton } from 'src/component/ui/skeleton';
import { CardArticleAuthor } from 'src/component/molecules/card/article/author';
import { useFirebase, useImage } from 'src/component/hooks/use-firebase';
import { ArticleService, Article } from 'src/service/article/article.service';

export default function Page() {
  const { id } = useParams<{ id: string }>();
  const { data: article, error } = useFirebase<Article.Expose>(ArticleService.findById(id));
  const { src, loading } = useImage(article?.image, 'article');

  if (error && !article) notFound();

  return (
    <div className='px-6 lg:px-12 pt-3 lg:pt-6 mt-10 flex flex-col items-center'>
      {!article && (
        <>
          <Skeleton className='h-10 lg:h-12 w-[80%] lg:w-[70%] 2xl:w-[60%]' />
          <Skeleton className='h-64 w-[80%] lg:w-[70%] 2xl:w-[60%] mt-6' />
          <Skeleton className='h-96 w-[80%] lg:w-[70%] 2xl:w-[60%] mt-12' />
        </>
      )}

      {article && (
        <>
          <div className='w-[80%] lg:w-[70%] 2xl:w-[60%]'>
            <p className='text-lg lg:text-2xl font-semibold text-center capitalize'>
              {article.title}</p>
          </div>

          <div className='relative h-64 w-[90%] lg:w-[80%] 2xl:w-[70%] mt-6'>
            {!loading && src && (
              <Image className='object-cover'
                src={src} alt="image"
                objectFit='cover'
                fill />)}

            {loading && (
              <Skeleton className='absolute inset-0' />)}
          </div>

          <div className='w-[90%] lg:w-[80%] 2xl:w-[70%] mt-12 text-justify'>
            <p className='indent-8 first-letter:font-semibold first-letter:uppercase'>
              {article.article}</p>
          </div>

          <div className='w-[90%] lg:w-[80%] 2xl:w-[70%] mt-24 text-justify'>
            <CardArticleAuthor
              className='mt-2'
              authorId={article.author_id} />
          </div>
        </>
      )}
    </div>
  )
}
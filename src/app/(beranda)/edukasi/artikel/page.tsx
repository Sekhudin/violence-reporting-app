import { CardListArticleInfinite } from 'src/component/organisms/cardlist/article/infinite';

export default function Page() {
  return (
    <div className='w-full relative flex flex-col items-center px-6 lg:px-12'>
      <div className='mt-6 mb-3 lg:mt-12 lg:mb-6'>
        <p className='text-lg lg:text-2xl font-medium lg:text-center'>
          Artikel
        </p>
      </div>

      <CardListArticleInfinite
        className='xl:w-11/12 2xl:w-10/12' />
    </div>
  )
}
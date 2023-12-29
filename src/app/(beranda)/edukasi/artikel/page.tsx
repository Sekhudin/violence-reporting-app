import { CardListArticleInfinite } from 'src/component/organisms/cardlist/article/infinite';

export default function Page() {
  return (
    <div className='w-full relative flex flex-col items-center px-6 lg:px-12'>
      <CardListArticleInfinite
        className='xl:w-11/12 2xl:w-10/12' />
    </div>
  )
}
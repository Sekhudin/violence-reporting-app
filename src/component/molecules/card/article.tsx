import Image from 'next/image';
import { cn } from 'src/util';
import { Props } from './article.type';

export type CardArticleProps = Props.CardArticle;
export function CardArticle({
  articleList,
  className,
  itemClassName,
  imageClassName,
  textClassName
}: CardArticleProps) {
  return (
    <>
      <ul className={className}>
        {articleList.map(({
          image,
          title,
          description,
          link,
          widthImg,
          heightImg,
        }, key) => (
          <a
            key={key}
            href={link}
            target='_blank'
            className={cn(`hover:bg-gray-50`, itemClassName)}>
            <Image
              className={cn(``, imageClassName)}
              width={widthImg}
              height={heightImg}
              src={image}
              alt={title} />
            <div className={cn(``, textClassName)}>
              <h2 className='font-medium'>{title}</h2>
              <p className='mt-2 font-light'>{description}</p>
            </div>
          </a>
        ))}
      </ul>
    </>
  )}
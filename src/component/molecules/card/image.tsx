import Image from 'next/image';
import { Props } from './image.type';


export type CardImageProps = Props.CardImage;
export function CardImage({
  imageList,
  className,
  itemClassName,
  imageClassName,
  textClassName
}: CardImageProps) {
  return (
    <>
      <ul className={className}>
        {imageList.map(({
          image,
          title,
          description,
          imageClassName: imgClass,
          className: textClass,
          widthImg,
          heightImg,
        }, key) => (
          <div
            key={key}
            className={`${itemClassName}`}>
            <Image
              className={`${imageClassName} ${imgClass}`}
              width={widthImg}
              height={heightImg}
              src={image}
              alt={title} />
            <div className={`${textClassName} ${textClass}`}>
              <h2 className='font-semibold'>{title}</h2>
              <p>{description}</p>
            </div>
          </div>
        ))}
      </ul>
    </>
  )
}
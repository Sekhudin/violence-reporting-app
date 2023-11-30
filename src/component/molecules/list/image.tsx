import Image from "next/image";
import { Props } from './image.type';

export type ListImageProps = Props.ListImage;
export function ListImage({ imageList, className, itemClassName }: ListImageProps) {
  return (
    <>
      <div className={className}>
        {imageList.map(({ src, alt, height, width }, key) => (
          <Image
            key={key}
            className={itemClassName}
            src={src}
            alt={alt || `image${key}`}
            width={width}
            height={height} />
        ))}
      </div>
    </>
  )
}
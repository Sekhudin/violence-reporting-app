import type { StaticImport } from "next/dist/shared/lib/get-img-props"

export namespace Props {
  type Image = {
    image: string | StaticImport;
    title: string;
    description: string;
    className?:string;
    imageClassName?:string;
    widthImg?: number;
    heightImg?: number;
  }

  export type CardImage = {
    imageList: Image[];
    className?:string;
    itemClassName?:string;
    imageClassName?:string;
    textClassName?:string;
  }
}
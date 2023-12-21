import type { StaticImport } from "next/dist/shared/lib/get-img-props"

export namespace Props {
  type Article = {
    image: string | StaticImport;
    title: string;
    description: string;
    link?:string;
    widthImg?: number;
    heightImg?: number;
  }

  export type CardArticle = {
    articleList: Article[];
    className?:string;
    itemClassName?:string;
    imageClassName?:string;
    textClassName?:string;
  }
}
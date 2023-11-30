import type { StaticImport } from "next/dist/shared/lib/get-img-props";

export namespace Props {
  type Image = {
    src: string | StaticImport;
    alt?: string;
    width?: number;
    height?: number
  }

  export type ListImage = {
    imageList: Image[];
    className?:string;
    itemClassName?:string;
  }
}
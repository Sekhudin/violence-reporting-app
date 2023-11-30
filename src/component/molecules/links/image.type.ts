import { StaticImport } from "next/dist/shared/lib/get-img-props";

export namespace Props {
  type Image = {
    title: string;
    src: string | StaticImport;
    href: string;
    imageClassName?: string;
    labelClassName?: string;
    width?:number;
    height?: number;
  }

  export type LinksImage = {
    linkList: Image[];
    className?: string;
    itemsClassName?: string;
    imageClassName?: string,
    labelClassName?: string,
    withLabel?:boolean;
  }
}
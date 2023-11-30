import { ListOddEven } from "./odd-even";

export namespace Props {
  type Text = {
    text: string;
    label?: string;
  }

  export type ListOddEven ={
    textList: Text[];
    className?: string;
    oddItemClassName?:string;
    evenItemClassName?:string;
    oddClassName?: string;
    evenClassName?: string;
    withLabel?:boolean
  }
}
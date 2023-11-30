export namespace Props {
  type Mapper = {
    text: string | number;
    numOfText: number;
  }

  export type TextMapper = {
    mapper: Mapper;
    className?: string;
    itemClassName?: string;
  }
}
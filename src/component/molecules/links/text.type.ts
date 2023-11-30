export namespace Props {
  type Text = {
    title: string;
    href: string;
    className?: string;
  }

  export type LinksText = {
    linkList: Text[];
    className?: string;
    itemsClassName?: string;
  }
}
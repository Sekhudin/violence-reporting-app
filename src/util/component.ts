import { FunStr } from './str';
export namespace FunComponent {
  export function parseNode(node: React.ReactNode): React.ReactNode {
    if (typeof node === 'string') return FunStr.capitalFirst(node);
    return node;
  }

  export const getImageFile = (event: React.ChangeEvent<HTMLInputElement>): File | null => {
    const image: File | null = event.target.files && event.target.files[0];
    return image;
  }
}
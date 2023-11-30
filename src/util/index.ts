import { type ClassValue, clsx } from "clsx"
import { twMerge } from "tailwind-merge"
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}

export namespace Str {
  export function capitalFirst(str:string) {
    return str.charAt(0).toUpperCase() + str.slice(1);
  }
}


export namespace cNode {
  export function parse(node: React.ReactNode): React.ReactNode {
    if (typeof node === 'string') return Str.capitalFirst(node);
    return node;
  }
}

export namespace FromCom {
  export const getImageFile = (event: React.ChangeEvent<HTMLInputElement>): File | null => {
    const image: File | null = event.target.files && event.target.files[0];
    return image;
  }
}
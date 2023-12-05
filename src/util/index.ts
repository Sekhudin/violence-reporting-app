import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";
export * from './component';
export * from './str';
export * from './date';
 
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs))
}
import type * as z from "zod";

export type TypeZod<T> = {
  [K in keyof T]: T[K] extends (string | number | boolean | Date | null | undefined)
    ? (undefined extends T[K] ? z.ZodOptional<z.ZodType<Exclude<T[K], undefined>>> : z.ZodType<T[K]>)
    : z.ZodObject<TypeZod<T[K]>>
};

export type Params<T extends Record<string, string>> = {
  params: T
}
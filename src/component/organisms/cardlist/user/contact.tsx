"use client";
import React from "react";
import { CardUserContact } from "src/component/molecules/card/user/contact";
import { useUserSlice } from 'src/component/context/use-ctx';
import { cn } from "src/util";

export const TitleCardListUserContact = ({ children, className }: { className?: string } & React.PropsWithChildren) => (
  <h2 className={cn("text-center font-semibold text-lg md:text-2xl mb-4", className)}>
    {children}
  </h2>)

export function CardListUserContact({ className }: { className?: string }) {
  const { slice, loading, error } = useUserSlice(3);

  return (
    <div className={cn("relative flex flex-wrap justify-center", className)}>{
      slice.map((v, key) => (
        <CardUserContact key={key}
          className="m-4"
          values={v} />
      ))}
    </div>)
}
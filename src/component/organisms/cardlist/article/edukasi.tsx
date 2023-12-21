"use client";
import React from "react";
import { CardArticleEduksi } from "src/component/molecules/card/article/edukasi";
import { ArticleService } from 'src/service/article/article.service';
import { cn } from "src/util";

export const TitleCardListArticleEdukasi = ({ children, className }: { className?: string } & React.PropsWithChildren) => (
  <h2 className={cn("text-center font-semibold text-lg md:text-xl xl:text-2xl mb-6 lg:mb-12", className)}>
    {children}
  </h2>)

export function CardListArticleEdukasi({ className }: { className?: string }) {
  const articles = [1];

  if (articles.length) return (
    <ul className={cn("flex flex-wrap justify-center", className)}>{
      [1].map((v, key) => (
        <CardArticleEduksi key={key}
          values={{
            id: "id",
            author_id: "Sekhudin",
            title: "ini artikel pertama saya",
            article: "ini adalah article pertama, isis artikel",
            image: "/uploads/articles/-Nlz4Dxnt9iXyaf8dGgD.jpg",
          }} />
      ))}
    </ul>)
  return "loading";
}
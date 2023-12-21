"use client"
import React from "react";
import { type Article } from 'src/service/article/article.service';

export type ArticleList = Article.Expose[];
export type ArticleCtx = {
  articles: ArticleList | [];
}

export const ArticleContext = React.createContext<ArticleCtx>({
  articles: [],
});
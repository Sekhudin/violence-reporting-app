"use client"
import React from "react";
import { type Article } from 'src/service/article/article.service';
import { HooksWithStatus } from 'src/util/exception/catch';

type ArticleList = Article.Expose[];
export type ArticleCtx = {
  articles: ArticleList | [];
} & HooksWithStatus;

export const ArticleContext = React.createContext<ArticleCtx>({
  articles: [],
  loading: false,
});
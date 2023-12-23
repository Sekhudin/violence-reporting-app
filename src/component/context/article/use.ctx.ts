"use client"
import React from "react";
import { ArticleContext, ArticleCtx } from './ctx';

export function useArticle() {
  const ctx = React.useContext(ArticleContext);
  return ctx;
}

export function useArticleSlice(n:number) {
  const { articles, loading, error } = React.useContext(ArticleContext);
  let slice: ArticleCtx['articles'] = [];
  if(articles.length < n) {
    slice = articles;
  } else {
    slice = articles.slice(0, n);
  }
  return { slice, loading, error };
}
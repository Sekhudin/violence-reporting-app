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

export function useArticleByAuthor(authorID:string) {
  const { articles, loading, error } = React.useContext(ArticleContext);
  let byAuthor: ArticleCtx['articles'] = [];
  if(articles.length >=1){
    byAuthor = articles.filter((v)=>v.author_id === authorID);
  }
  return { articles: byAuthor, loading, error };
}

export function useArticleByAuthorSlice(n:number, authorID:string) {
  const { articles, loading, error } = React.useContext(ArticleContext);
  let byAuthor: ArticleCtx['articles'] = [];
  if(articles.length >=1){
    byAuthor = articles.filter((v)=>v.author_id === authorID);
  }

  let slice: ArticleCtx['articles'] = [];
  if(byAuthor.length < n) {
    slice = byAuthor;
  } else {
    slice = byAuthor.slice(0, n);
  }
  return { slice, loading, error };
}
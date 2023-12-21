"use client"
import React from "react";
import { catchError } from "src/util/exception/catch";
import { useToast } from "src/component/ui/use-toast";
import { ArticleContext } from './ctx';

export function useArticle() {
  const { toast } = useToast();
  try {
    const ctx = React.useContext(ArticleContext);
    if (!ctx) throw "error";
    return ctx
  } catch (error) {
    const { forToast, errorDetail } = catchError(error,
      "gagal mendapatkan data 'code: article-01'");
    toast(forToast);
    throw error;
  }
}

export function useArticleList() {
  const { toast } = useToast();
  try {
    const ctx = React.useContext(ArticleContext);
    if (!ctx || !ctx.articles) throw "error";
    return ctx.articles;
  } catch (error) {
    const { forToast, errorDetail } = catchError(error,
      "gagal mendapatkan data 'code: article-01'");
    toast(forToast);
    throw error;
  }
}

export function useArticleSlice(n:number) {
  const { toast } = useToast();
  try {
    const ctx = React.useContext(ArticleContext);
    if (!ctx || !ctx.articles) throw "error";
    if(ctx.articles.length < n) return ctx.articles;
    return ctx.articles.slice(0, n);
  } catch (error) {
    const { forToast, errorDetail } = catchError(error,
      "gagal mendapatkan data 'code: article-01'");
    toast(forToast);
    throw error;
  }
}
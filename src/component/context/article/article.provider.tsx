"use client"
import React from "react";
import { ArticleOn, ArticleOff, ArticleUtil, Snapshot } from 'src/service/article/article.service';
import { ArticleContext, ArticleCtx } from './ctx'

export function ArticleProvider({ children }: React.PropsWithChildren) {
  const [articles, setArticles] = React.useState<ArticleCtx['articles']>([]);

  const articleHandler = React.useCallback((ds: Snapshot) => {
    const result = ArticleUtil.returnData(ds);
    setArticles(result);
  }, []);

  React.useEffect(() => {
    ArticleOn.Value(articleHandler)
    return () => {
      ArticleOff.Value(articleHandler)
    }
  }, [articleHandler]);

  return (
    <ArticleContext.Provider value={{ articles }}>
      {children}
    </ArticleContext.Provider>
  )
}
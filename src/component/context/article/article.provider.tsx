"use client"
import React from "react";
import { useError } from 'src/component/hooks/use-error';
import { ArticleOn, ArticleOff, ArticleUtil, Snapshot, ErrorCB } from 'src/service/article/article.service';
import { ArticleContext, ArticleCtx } from './ctx';

export function ArticleProvider({ children }: React.PropsWithChildren) {
  const [articles, setArticles] = React.useState<ArticleCtx['articles']>([]);
  const [loading, setLoading] = React.useState<ArticleCtx['loading']>(true);
  const { error, catchError, catchErrorHandler } = useError();

  const articleHandler = React.useCallback((ds: Snapshot) => {
    const result = ArticleUtil.returnData(ds);
    setArticles(result);
    setLoading(false);
  }, []);

  const errorCallback = React.useCallback<ErrorCB>((err) => {
    const { errorDetail } = catchError(err, 'FAILED_GET articles');
    catchErrorHandler(errorDetail);
    setLoading(false);
  }, [catchError, catchErrorHandler]);

  React.useEffect(() => {
    setLoading(true);
    ArticleOn.Value(articleHandler, errorCallback);
    return () => {
      ArticleOff.Value(articleHandler);
    }
  }, [articleHandler, catchErrorHandler, errorCallback]);

  return (
    <ArticleContext.Provider value={{ articles, loading, error }}>
      {children}
    </ArticleContext.Provider>
  )
}
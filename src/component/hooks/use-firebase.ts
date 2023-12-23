"use client"
import React from "react";
import { useToast } from "src/component/ui/use-toast";
import { ArticleStorage as Service } from "src/service/article/article.service";
import { useError } from './use-error';

export function useFireStorageUrl(path: string){
  const { toast } = useToast();
  const [src, setSrc] = React.useState<string>("/");
  const [loading, setLoading] = React.useState<boolean>(true);
  const { error, catchError, catchErrorHandler } = useError();

  const defaultSourceHandler = async (url: string): Promise<string> => {
    const defaultPath ='/default/';
    if(url.includes("default.jpg")){
      if(url.includes("articles")) return defaultPath.concat("article.webp");
      if(url.includes("cases")) return defaultPath.concat("case.webp");
      if(url.includes("users")) return defaultPath.concat("user.webp");
    }
    return await Service.getUrl(url);
  }

  const sourceHandler = React.useCallback(async () => {
    try {
      setLoading(true);
      const source = await defaultSourceHandler(path);
      setSrc(source);
      setLoading(false);
      return source;
    } catch (error) {
      const { forToast, errorDetail } = catchError(error,
        "gagal mendapatkan resource");
        catchErrorHandler(errorDetail);
      toast(forToast);
    }
  }, [catchError, catchErrorHandler, path, toast]);

  React.useEffect(() => {
    sourceHandler();
    return ()=>{
      sourceHandler();
    }
  }, [sourceHandler]);
  return { src, loading, error }
}
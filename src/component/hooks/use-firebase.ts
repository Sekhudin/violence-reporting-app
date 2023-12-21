"use client"
import React from "react";
import { HttpErrorDetail, catchError } from 'src/util/exception/catch';
import { useToast } from "../ui/use-toast";
import { ArticleStorage } from "src/service/article/article.service";

export function useFireStorageUrl(path: string){
  const { toast } = useToast();
  const [src, setSrc] = React.useState<string>("/");
  const [loading, setLoading] = React.useState<boolean>(true);
  const [error, setError] = React.useState<HttpErrorDetail | null>(null);

  const sourceHandler = React.useCallback(async () => {
    try {
      setLoading(true);
      const source = await ArticleStorage.getUrl(path);
      setSrc(source);
      setLoading(false);
      return source;
    } catch (error) {
      const { forToast, errorDetail } = catchError(error,
        "gagal mendapatkan resource");
      setError(errorDetail);
      toast(forToast);
    }
  }, [path, toast]);

  React.useEffect(() => {
    sourceHandler();
    return ()=>{
      sourceHandler();
    }
  }, [sourceHandler]);
  return { src, loading, error }
}
"use client"
import React from "react";
import { ArticleStorage as Service } from "src/service/article/article.service";
import { Firebase } from 'src/database/collection/_type';
import { useError } from './use-error';

type TypeFile = "user" | "case" | "article";
export function useImage(path?: string | null, type?: TypeFile){
  const [src, setSrc] = React.useState<string>("/");
  const [loading, setLoading] = React.useState<boolean>(true);
  const { error, catchError, catchErrorHandler } = useError();

  const defaultSourceHandler = React.useCallback(async (): Promise<string> => {
    const defaultPath ='/default/';
    if(!path){
      switch (type) {
        case "article":
          return defaultPath.concat("article.webp");
        case "case":
          return defaultPath.concat("case.webp");
        case "user":
          return defaultPath.concat("user.webp");
        default:
          return defaultPath;
      }
    };

    if(path.includes("default.jpg")){
      if(path.includes("articles")) return defaultPath.concat("article.webp");
      if(path.includes("cases")) return defaultPath.concat("case.webp");
      if(path.includes("users")) return defaultPath.concat("user.webp");
    }
    return await Service.getUrl(path);
  }, [path, type])

  const sourceHandler = React.useCallback(async () => {
    try {
      setLoading(true);
      const source = await defaultSourceHandler();
      setSrc(source);
      setLoading(false);
      return source;
    } catch (error) {
      const { errorDetail } = catchError(error,
        "gagal mendapatkan resource");
      catchErrorHandler(errorDetail);
    }
  }, [catchError, catchErrorHandler, defaultSourceHandler]);

  React.useEffect(() => {
    sourceHandler();
    return ()=>{
      sourceHandler();
    }
  }, [sourceHandler]);
  return { src, loading, error }
}

type PromiseData<T extends Record<string, any>> = Promise<Firebase.Collection.Data<T>>
export function useFirebase<T extends Record<string, any>>(promiseData: PromiseData<T>){
  const [data, setData] = React.useState<T>();
  const [keys, setKeys] = React.useState<(keyof T)[]>([]);
  const [loading, setLoading] = React.useState<boolean>(true);
  const { error, catchError, catchErrorHandler } = useError();

  const serviceHandler = React.useCallback(async ()=> {
    try {
      const res = await promiseData;
      setData(res.values);
      setKeys(res.keys);
      setLoading(false);
    } catch (error) {
      const { errorDetail } = catchError(error,
        "gagal memuat artikel");
      catchErrorHandler(errorDetail);
      setLoading(false);
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  React.useEffect(()=> {
    serviceHandler();
    return ()=> {
      serviceHandler();
    }
  }, [serviceHandler])

  return { data, keys, loading, error };
}
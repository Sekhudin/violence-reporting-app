"use client"
import React from 'react';
import { useToast } from 'src/component/ui/use-toast';
import { HttpException, catchError, BadRequestException } from 'src/util/exception/catch';

type UseError = () => {
  catchErrorHandler: (e?: any)=> void;
  catchError: typeof catchError;
  error?: HttpException | null;
}

export const useError: UseError = ()=>{
  const { toast } = useToast();
  const [error, setError] = React.useState<HttpException | null>();

  const errorHandler = React.useCallback(()=>{
    try {
      const isOnline: boolean = navigator.onLine;
      if(!isOnline) throw new BadRequestException("internet disconect");
      setError(null);
    } catch (e) {
      const { forToast, errorDetail } = catchError(e);
      setError(errorDetail);
      toast(forToast);
    }
  }, [toast]);

  const catchErrorHandler = React.useCallback((e?: any) => {
    if(e){
      const { forToast, errorDetail } = catchError(e);
      setError(errorDetail);
      toast(forToast);
    }
  }, [toast]);

  React.useEffect(()=>{
    errorHandler();
    return ()=>{
      errorHandler();
    }
  }, [errorHandler]);

  return { error, catchError, catchErrorHandler };
}
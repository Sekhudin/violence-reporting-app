"use client"
import React from 'react';

const minWidthDictionary: DictionaryMinWidth = {
  xs: 0,
  sm: 640,
  md: 768,
  lg: 1024,
  xl: 1280,
  "2xl": 1536,
}

type DictionaryMinWidth = Record<ScreenType, number>;
type ScreenType = "xs" | "sm" | "md" | "lg" | "xl" | "2xl";

type UseScreenMax = (type: ScreenType) => [
  boolean | undefined,
  (v:boolean)=> void,
];

export const useMaxScreenAs: UseScreenMax = (type) => {
  const [result, setResult] = React.useState<boolean>(false);
  const maxWidth = minWidthDictionary[type];

  const screenHandler = React.useCallback(() => {
    const innerWidth = window.innerWidth;
    if (innerWidth <= maxWidth) {
      setResult(true);
    }

    if (innerWidth > maxWidth) {
      setResult(false);
    }
  }, [maxWidth])

  const setValueHandler = React.useCallback((v: boolean)=> {
    setResult(v);
  }, []);

  React.useEffect(() => {
    screenHandler();
    window.addEventListener("resize", screenHandler);
    return () => {
      screenHandler();
      window.removeEventListener("resize", screenHandler);
    }
  }, [screenHandler]);
  return [result, setValueHandler];
}
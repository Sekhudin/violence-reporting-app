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
type BaseUseScreen = (screen: ScreenType, defaultValue?: boolean) => [
  boolean | undefined,
  (v:boolean)=> void,
];

type BaseUseScreenAs = ([type, valueIfTrue]: [ScreenType, boolean], defaultValue?: boolean) => [
  boolean | undefined,
  (v:boolean)=> void,
];

export const useMinScreenAs: BaseUseScreenAs = ([screenType, valueIfTrue], defaultValue) => {
  const [result, setResult] = React.useState<boolean | undefined>(defaultValue);
  const minWidth = minWidthDictionary[screenType];

  const screenHandler = React.useCallback(() => {
    const innerWidth = window.innerWidth;
    if (innerWidth >= minWidth) {
      setResult(valueIfTrue);
    }

    if (innerWidth < minWidth) {
      setResult(!valueIfTrue);
    }
  }, [minWidth, valueIfTrue]);

  const setValueHandler = React.useCallback((v: boolean)=> {
    setResult(v);
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", screenHandler);
    return () => {
      window.removeEventListener("resize", screenHandler);
    }
  }, [screenHandler]);
  return [result, setValueHandler];
}

export const useMaxScreenAs: BaseUseScreenAs = ([screenType, valueIfTrue], defaultValue) => {
  const [result, setResult] = React.useState<boolean | undefined>(defaultValue);
  const maxWidth = minWidthDictionary[screenType];

  const screenHandler = React.useCallback(() => {
    const innerWidth = window.innerWidth;
    if (innerWidth < maxWidth) {
      setResult(valueIfTrue);
    }

    if (innerWidth >= maxWidth) {
      setResult(!valueIfTrue);
    }
  }, [maxWidth, valueIfTrue])

  const setValueHandler = React.useCallback((v: boolean)=> {
    setResult(v);
  }, []);

  React.useEffect(() => {
    window.addEventListener("resize", screenHandler);
    return () => {
      window.removeEventListener("resize", screenHandler);
    }
  }, [screenHandler]);
  return [result, setValueHandler];
}
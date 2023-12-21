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
  React.Dispatch<React.SetStateAction<boolean | undefined>>,
];

export const useMinScreen: BaseUseScreen = (screen, defaultValue) => {
  const [isValidScreen, setIsValidScreen] = React.useState<boolean | undefined>(defaultValue);
  const minWidth = minWidthDictionary[screen];

  const screenHandler = React.useCallback(() => {
    const innerWidth = window.innerWidth;
    if (innerWidth < minWidth) {
      setIsValidScreen(false);
    }

    if (innerWidth >= minWidth) {
      setIsValidScreen(true);
    }
  }, [minWidth])

  React.useEffect(() => {
    window.addEventListener("resize", screenHandler);
    return () => {
      window.removeEventListener("resize", screenHandler);
    }
  }, [screenHandler]);
  return [isValidScreen, setIsValidScreen];
}

export const useMaxScreen: BaseUseScreen = (screen, defaultValue) => {
  const [isValidScreen, setIsValidScreen] = React.useState<boolean | undefined>(defaultValue);
  const maxWidth = minWidthDictionary[screen];

  const screenHandler = React.useCallback(() => {
    const innerWidth = window.innerWidth;
    if (innerWidth < maxWidth) {
      setIsValidScreen(true);
    }

    if (innerWidth >= maxWidth) {
      setIsValidScreen(false);
    }
  }, [maxWidth])

  React.useEffect(() => {
    window.addEventListener("resize", screenHandler);
    return () => {
      window.removeEventListener("resize", screenHandler);
    }
  }, [screenHandler]);
  return [isValidScreen, setIsValidScreen];
}
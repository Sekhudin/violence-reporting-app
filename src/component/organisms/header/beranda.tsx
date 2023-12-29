"use client"
import React from "react";
import { NavbarBeranda } from "src/component/organisms/nav-bar/beranda";
import { cn } from 'src/util';

export function HeaderBeranda({
  className,
  scrollRef
}: { className?: string; scrollRef?: React.RefObject<HTMLDivElement> | string }) {
  const [style, setStyle] = React.useState<string>("");

  const getElement = (): HTMLDivElement | null => {
    if (!scrollRef) return null;
    if (typeof scrollRef === 'string') return document.querySelector(scrollRef);
    return scrollRef.current;
  }

  const onScrollHandler = (child: HTMLDivElement) => {
    const top = child.scrollTop;
    if (top > 30) {
      setStyle('drop-shadow-md');
      return;
    }
    setStyle("");
  }

  React.useEffect(() => {
    const element = getElement();
    if (!element) return;
    const child = element.getElementsByTagName('div')[0];
    element.addEventListener('scroll', () => onScrollHandler(child), true);

    return () => {
      element.removeEventListener('scroll', () => onScrollHandler(child), true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <header className={cn(`sticky top-0 z-10 bg-white px-12 py-1`, className, style)}>
      <NavbarBeranda className="h-[52px] lg:h-[62px]" />
    </header>
  )
}
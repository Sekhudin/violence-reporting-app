"use client"
import React from 'react';
import { ArrowUpToLine } from 'lucide-react';
import { Button, ButtonProps } from 'src/component/ui/button';
import { cn } from 'src/util';

export function FloatButtonToTop({
  className,
  children,
  topRef,
  scrollRef,
  ...props
}: ButtonProps & { topRef: React.RefObject<Element>, scrollRef?: React.RefObject<HTMLDivElement> | string }) {
  const [show, setShow] = React.useState<boolean>(true);

  const scrollTopHandler = () => {
    if (topRef && topRef.current) {
      const element = topRef.current;
      element.scrollIntoView({ behavior: "smooth" });
      return;
    }
  }

  const getElement = (): HTMLDivElement | null => {
    if (!scrollRef) return null;
    if (typeof scrollRef === 'string') return document.querySelector(scrollRef);
    return scrollRef.current;
  }

  const onScroll = () => {
    setShow(false);
  }

  const onScrollEnd = () => {
    setShow(true);
  }

  React.useEffect(() => {
    const element = getElement();
    if (!element) return;
    element.addEventListener('scroll', onScroll, true);
    element.addEventListener('scrollend', onScrollEnd, true);

    return () => {
      element.removeEventListener('scroll', onScroll, true);
      element.removeEventListener('scrollend', onScrollEnd, true);
    }

    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);


  return (
    <>
      {show && (
        <Button
          className={cn(`h-fit w-fit fixed bottom-5 right-5 p-3 rounded-full
          text-white hover:text-white bg-cyan-800 hover:bg-cyan-700 shadow-lg drop-shadow-xl`, className)}
          variant="ghost"
          onClick={scrollTopHandler}
          {...props}>
          {!children && (<ArrowUpToLine className='w-6 h-6' />)}
          {children}
        </Button>
      )}
    </>
  )
}
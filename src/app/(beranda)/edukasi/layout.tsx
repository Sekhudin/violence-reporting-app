import React from 'react';
import { ArticleProvider } from 'src/component/context/provider';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <ArticleProvider>
        {children}
      </ArticleProvider>
    </>
  )
}

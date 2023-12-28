import React from 'react';
import { AuthProvider } from 'src/component/context/provider';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <AuthProvider>
        {children}
      </AuthProvider>
    </>
  )
}

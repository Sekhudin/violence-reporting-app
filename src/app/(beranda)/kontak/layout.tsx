import React from 'react';
import { UserProvider } from 'src/component/context/provider';

export default function Layout({ children }: React.PropsWithChildren) {
  return (
    <>
      <UserProvider>
        {children}
      </UserProvider>
    </>
  )
}

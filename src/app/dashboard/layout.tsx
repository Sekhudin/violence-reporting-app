import { HeaderDashboard } from 'src/component/organisms/header/dashboard';
import {
  TabsDashboard,
  TabsDashboardTrigger,
  TabsDashboardTriggerMobile,
  TabsDashboardContent
} from 'src/component/organisms/tabs/dashboard';
import { AuthProvider } from 'src/component/context/provider';
import React from 'react';

type LayoutProps = Record<'children' | 'masuk' | 'proses' | 'selesai' | 'tolak', React.ReactNode>;

export default function Layout({ children: dashboard, ...v }: LayoutProps) {

  return (
    <AuthProvider>
      <main className='relative h-screen w-screen overflow-hidden
        flex bg-gray-100 pt-[60px] lg:pt-[70px]'>
        <HeaderDashboard />
        <TabsDashboard defaultValue='masuk'>
          <TabsDashboardTrigger />
          <TabsDashboardTriggerMobile />
          <TabsDashboardContent
            content={{ dashboard, ...v }} />
        </TabsDashboard>
      </main>
    </AuthProvider>
  )
}
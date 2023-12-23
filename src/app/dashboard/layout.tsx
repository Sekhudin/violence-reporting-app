import { HeaderDashboard, HeaderBerandaGap } from 'src/component/organisms/header/dashboard';
import { FooterDashboard, FooterDashboardGap } from 'src/component/organisms/footer/dashboard';
import { FloatButtonDashboard } from 'src/component/organisms/float-button/dashboard';
import {
  TabsDashboard,
  TabsDashboardTrigger,
  TabsDashboardTriggerMobile,
  TabsDashboardContent
} from 'src/component/organisms/tabs/dashboard';
import { AuthProvider } from 'src/component/context/provider';

type LayoutProps = {
  children: React.ReactNode;
  masuk: React.ReactNode;
  proses: React.ReactNode;
  selesai: React.ReactNode;
  tolak: React.ReactNode;
}

export default function Layout({
  children: dashboard,
  masuk,
  proses,
  selesai,
  tolak
}: LayoutProps) {

  return (
    <AuthProvider>
      <HeaderDashboard />
      <HeaderBerandaGap />

      <TabsDashboard defaultValue="dashboard">
        <TabsDashboardTrigger />
        <TabsDashboardTriggerMobile />
        <TabsDashboardContent
          content={{ dashboard, masuk, proses, selesai, tolak }} />
      </TabsDashboard>

      <FloatButtonDashboard />
      <FooterDashboardGap />
      <FooterDashboard />
    </AuthProvider>
  )
}
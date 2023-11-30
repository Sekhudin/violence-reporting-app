import { HeaderBeranda } from 'src/component/organisms/header/beranda';
import { FooterBeranda } from 'src/component/organisms/footer/beranda';

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <>
      <HeaderBeranda />
      {children}
      <FooterBeranda />
    </>
  )
}
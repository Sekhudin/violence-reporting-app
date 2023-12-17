import { HeaderDashboard } from 'src/component/organisms/header/dashboard';
import { FooterDashboard } from 'src/component/organisms/footer/dashboard';
import { Tabs, TabsList } from 'src/component/ui/tabs';
import { TabTriggerDashboard } from 'src/component/organisms/tab-trigger/dashboard';
import { TabContentDashboard } from 'src/component/organisms/tab-content/dashboard';
import { AuthorizedContextProvider } from 'src/component/context/authorized.context';
import { Constant } from './page.constant';

type LayoutProps = {
  children: React.ReactNode;
  masuk: React.ReactNode;
  proses: React.ReactNode;
  selesai: React.ReactNode;
  tolak: React.ReactNode;
}

export default function Layout({ children: dashboard, masuk, proses, selesai, tolak }: LayoutProps) {
  // urutan value dan child harus sama
  const contentValue = ['dashboard', 'masuk', 'proses', 'selesai', 'tolak'];
  const contentChild = [dashboard, masuk, proses, selesai, tolak];

  return (
    <AuthorizedContextProvider>
      <main className='w-screen h-screen relative flex flex-col'>
        <header className=''>
          <HeaderDashboard />
        </header>

        <Tabs className='grow flex py-0'
          defaultValue={'dashboard'}>
          <TabsList className='relative overflow-hidden h-full min-w-[250px] lg:w-3/12 max-w-xs hidden lg:flex flex-col
            justify-start bg-white rounded-none shadow-md px-2'>
            <TabTriggerDashboard
              className='w-full my-1 px-10 py-3'
              values={Constant.triggerValues} />
          </TabsList>

          <TabsList className='absolute lg:hidden bottom-8 inset-x-4 bg-transparent'>
            <div className='flex rounded-lg overflow-hidden bg-gray-300'>
              <TabTriggerDashboard
                className='group rounded-none data-[state=active]:rounded-lg
              data-[state=inactive]:hover:bg-gray-200'
                triggerClassName='p-1.5 px-1.5 md:px-2'
                imgIconClassName='w-5 h-5 sm:w-6 sm:h-6'
                labelClassName='hidden'
                withTooltip
                tooltipLabelClass='mb-3 font-light'
                values={Constant.triggerValues} />
            </div>
          </TabsList>

          <TabContentDashboard
            className='pb-24 lg:pb-0 px-2 sm:px-4'
            values={contentValue}
            childrens={contentChild} />
        </Tabs>
        <footer className='relative hidden lg:block'>
          <FooterDashboard />
        </footer>
      </main>
    </AuthorizedContextProvider>
  )
}
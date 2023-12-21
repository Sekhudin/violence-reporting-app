import { Tabs, TabsList, } from 'src/component/ui/tabs';
import { ScrollArea, ScrollBar } from "src/component/ui/scroll-area";
import { HeaderDashboard } from 'src/component/organisms/header/dashboard';
import { FooterDashboard } from 'src/component/organisms/footer/dashboard';
import { TabTriggerDashboard } from 'src/component/organisms/tab-trigger/dashboard';
import { TabContentDashboard } from 'src/component/organisms/tab-content/dashboard';
import { AuthorizedProvider } from 'src/component/context/provider';
import { Constant } from './page.constant';

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
  const contentValue = ['dashboard', 'masuk', 'proses', 'selesai', 'tolak'];
  const contentChild = [dashboard, masuk, proses, selesai, tolak];

  return (
    <AuthorizedProvider>
      <header className='fixed top-0 inset-x-0 z-10'>
        <HeaderDashboard />
      </header>

      <main className='relative h-screen w-screen overflow-hidden pt-16 pb-16 md:pb-10 px-5'>
        <section className='relative h-full w-full max-h-full bg-blue-400'>
          <div className='absolute top-0 inset-x-0 p-5 bg-red-500 text-lg text-white font-semibold z-[100]'>
            {"HALAMAN DASHBOARD SEDANG DALAM PERBAIKAN (ONPROCESS)"}
          </div>
          <Tabs className=''
            defaultValue={'masuk'}>
            <TabsList asChild>
              <ScrollArea>
                {/* <TabTriggerDashboard
                  className='w-full my-1 px-10 py-3'
                  values={Constant.triggerValues} /> */}
              </ScrollArea>
            </TabsList>

            <ScrollArea>
              <TabContentDashboard
                className='pb-24 lg:pb-0 px-2 sm:px-4'
                values={contentValue}
                childrens={contentChild} />
            </ScrollArea>
          </Tabs>
        </section>
      </main>

      {/* <Tabs className='grow flex py-0'
          defaultValue={'dashboard'}>
          <TabsList className='relative overflow-hidden h-full min-w-[250px]
            lg:w-3/12 max-w-xs hidden lg:flex flex-col justify-start
            bg-pink-500 rounded-none shadow-md px-2'>
            <TabTriggerDashboard
              className='w-full my-1 px-10 py-3'
              values={Constant.triggerValues} />
          </TabsList>

          <TabsList className='absolute lg:hidden bottom-8 inset-x-4 bg-transparent'>
            <div className='flex rounded-lg overflow-hidden bg-blue-300'>
              <TabTriggerDashboard
                className='group rounded-none data-[state=active]:rounded-lg
              data-[state=inactive]:hover:bg-gray-200'
                triggerClassName='p-1.5 px-1.5 md:px-2'
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
        </Tabs> */}

      <footer className='fixed bottom-0 inset-x-0 hidden lg:block'>
        <FooterDashboard />
      </footer>
    </AuthorizedProvider>
  )
}
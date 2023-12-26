import Image from "next/image";
import { AppMission } from 'src/component/molecules/special/app-mission';
import { AppVission } from 'src/component/molecules/special/app-vission';
import { AppReportingFlow } from 'src/component/molecules/special/app-reporting-flow';
import { TitleBorder } from 'src/component/molecules/special/atoms';
import { Icon2 } from 'src/component/static-file/icon2';
import { Mockup } from 'src/component/static-file/mockup';

export default function Page() {
  return (
    <>
      <section className="sticky top-[60px] flex flex-col items-center md:flex-row md:items-stretch">
        <div className="lg:grow w-full md:w-6/12 flex flex-col items-center md:items-end md:justify-center">
          <h1 className="semi_heading_1">
            Lawan.id
          </h1>
          <p className="font-medium text-lg lg:text-xl text-right">
            Lawan dan laporkan tindak kekerasan
          </p>
          <Image
            className="mt-2"
            src={Icon2.googlePlay}
            alt="google-play" />
        </div>
        <div className="h-6 md:w-2/12" />
        <div className="2xl:flex-none w-full md:w-6/12 2xl:w-5/12 px-6 md:px-0">
          <Image
            className="object-cover w-full"
            src={Mockup.file02}
            alt="mock-up" />
        </div>
      </section>

      <section className="relative grow flex flex-col items-center py-24 px-12 bg-white">
        <div className="max-w-7xl flex flex-col items-center text-center">
          <TitleBorder className="border_amber">
            Aplikasi
          </TitleBorder>
          <p className="mt-4 normal_heading_3">
            Lawan.id merupakan aplikasi keluaran tahun 2023 yang dirancang dan dibangun untuk
            penanganan kekerasan sosial di Kota Batam. Aplikasi ini membantu mempermudah
            korban dalam pelaporan tindak kekerasan sosial. Selain itu aplikasi ini membantu
            memudahkan kepolisian dalam mengelola berkas laporan.
          </p>
        </div>

        <div className="max-w-3xl flex flex-col items-center text-center mt-32">
          <TitleBorder className="border_blue">
            Visi
          </TitleBorder>
          <AppVission />
        </div>

        <div className="max-w-3xl flex flex-col items-center text-center mt-32">
          <TitleBorder className="border_amber">
            Misi
          </TitleBorder>
          <AppMission />
        </div>
      </section>

      <section className="relative grow bg-white px-12 md:px-24 lg:px-36 2xl:px-56">
        <h3 className="text-center mb-6 semi_heading_2">
          Alur Pelaporan
        </h3>
        <AppReportingFlow />
      </section>
    </>
  )
}
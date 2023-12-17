import Image from "next/image";
import { ListOddEven } from 'src/component/molecules/list/odd-even';
import { Constant } from './page.contant';

export default function Page() {
  return (
    <main className='min-h-screen max-w-[100vw] overflow-x-hidden relative bg-white flex flex-col pb-24'>
      <section className="sticky top-0 flex flex-col items-center md:flex-row md:items-stretch">
        <div className="lg:grow w-full md:w-6/12 flex flex-col items-center md:items-end md:justify-center">
          <h1 className="semi_heading_1">
            Lawan.id
          </h1>
          <p className="font-medium text-lg lg:text-xl text-right">
            Lawan dan laporkan tindak kekerasan
          </p>
          <Image
            className="mt-2"
            src={Constant.googlePlayIcon}
            alt="google-play" />
        </div>
        <div className="h-6 md:w-2/12" />
        <div className="2xl:flex-none w-full md:w-6/12 2xl:w-5/12 px-6 md:px-0">
          <Image
            className="object-cover w-full"
            src={Constant.mockupIllustration}
            alt="mock-up" />
        </div>
      </section>

      <section className="relative grow flex flex-col items-center py-24 px-12 bg-white">
        <div className="max-w-7xl flex flex-col items-center text-center">
          <h3 className="w-fit py-1 px-6 rounded-lg border_amber semi_heading_3">
            Aplikasi
          </h3>
          <p className="mt-4 normal_heading_3">
            Lawan.id merupakan aplikasi keluaran tahun 2023 yang dirancang dan dibangun untuk penanganan kekerasan sosial di Kota Batam.
            Aplikasi ini membantu mempermudah korban dalam pelaporan tindak kekerasan sosial.
            Selain itu aplikasi ini membantu memudahkan kepolisian dalam mengelola berkas laporan.
          </p>
        </div>

        <div className="max-w-3xl flex flex-col items-center text-center mt-32">
          <h3 className="w-fit py-1 px-12 rounded-lg border_blue semi_heading_3">
            Visi
          </h3>
          <div className="mt-4 flex justify-center items-center px-3 rounded-lg bg-amber-400">
            <p className="py-3 px-6 border-2 border-gray-50 bg-white shadow-lg text_style_label">
              Membantu masyarakat Kota Batam dalam misi pelaporan tindak kekerasan demi mencapai kesejahteraan hidup.
            </p>
          </div>
        </div>

        <div className="max-w-3xl flex flex-col items-center text-center mt-32">
          <h3 className="w-fit py-1 px-12 rounded-lg border_amber semi_heading_3">
            Misi
          </h3>
          <ListOddEven
            className="block mt-4"
            oddItemClassName="bg-blue-700 mb-4 pr-2 shadow-lg rounded-md"
            oddClassName={`flex text-start space-x-4 bg-white px-4 py-6 md:py-10`}
            evenItemClassName="bg-blue-700 mb-4 pl-2 shadow-lg rounded-md"
            evenClassName={`flex text-start space-x-4 bg-white px-4 py-6 md:py-10`}
            withLabel={true}
            textList={Constant.misiList} />
        </div>
      </section>

      <section className="relative grow bg-white pb-24 px-12 md:px-24 lg:px-36 2xl:px-56">
        <h3 className="text-center mb-6 semi_heading_2">
          Alur Pelaporan
        </h3>
        <ListOddEven
          className="flex flex-wrap justify-center"
          oddItemClassName="border-2 p-2 m-4 md:m-6 basis-full md:basis-0 rounded-lg 
          md:font-medium md:text-lg border_color_amber text_blue"
          evenItemClassName="border-2 p-2 m-4 md:m-6 basis-full md:basis-0 rounded-lg 
          md:font-medium md:text-lg border_color_amber text_blue"
          oddClassName="flex items-center space-x-4 p-8"
          evenClassName="flex items-center space-x-4 p-8"
          withLabel={true}
          textList={Constant.reportList} />
      </section>
    </main>
  )
}
import Image from "next/image";
import { ListOddEven } from 'src/component/molecules/list/odd-even';
import { ListImage } from "src/component/molecules/list/image";
import { ListAccordion } from 'src/component/molecules/list/accordion';
import { CardArticle } from 'src/component/molecules/card/article';
import { LawanCrossText } from "src/component/organisms/text-mapper/lawan";
import { Constant } from './page.constant';

export default function Page() {
  return (
    <main className='min-h-screen relative bg-white flex flex-col pb-24'>
      <section className="sticky top-0 flex flex-col md:items-center lg:flex-row bg-black">
        <Image
          className="flex-none"
          src={Constant.IllustartionImage}
          alt="illustarion-image"
        />
        <div className="text-white grow flex items-center px-12 py-4 md:px-6 bg-pink">
          <p className="max-w-lg lg:max-w-lg xl:max-w-xl 2xl:max-w-4xl
            text-center lg:text-start text-base 2xl:text-xl">
            {`" Tidak ada yang lebih`}
            <span className="text-red-500 font-medium">
              {" berbahaya "}
            </span>daripada
            <span className="text-red-500 font-medium">
              {" kekerasan "}
            </span>yang dilakukan oleh orang-orang yang
            <span className="text-red-500 font-medium">
              {" bermaksud buruk "}
            </span>
            {`untuk tujuan yang menguntungkan ".`}
          </p>
        </div>
      </section>

      <section className="sticky top-0 bg-white py-24 flex flex-col md:flex-row
        items-center md:items-start justify-start md:justify-between md:space-x-6
        px-12 xl:px-44 2xl:px-72">
        <ListImage
          className="grid grid-cols-2 md:grid-cols-1 lg:grid-cols-2
          lg:grid-rows-2 gap-4 md:gap-6 lg:gap-10 lg:mt-14"
          itemClassName="w-44 md:w-56"
          imageList={Constant.imageList} />

        <div className="mt-10 md:mt-0">
          <h3 className="semi_heading_3 text_blue">
            Menghindari diri dari kekerasan
          </h3>
          <ListOddEven
            className="block"
            oddItemClassName="mt-4 py-4 px-6 rounded-lg border-2 border-amber-400"
            oddClassName="flex items-center space-x-4 text-lg font-medium"
            evenItemClassName="mt-4 py-4 px-6 rounded-lg border-2 border-blue-400"
            evenClassName="flex items-center space-x-4 text-lg font-medium"
            textList={Constant.protectList} />
        </div>
      </section>

      <section className="relative bg-white pt-12 2xl:pt-20">
        <LawanCrossText />

        <div className="text-center py-12 px-12 md:px-24">
          <ul className="flex flex-col md:flex-row items-center md:items-start md:justify-center
            space-y-6 md:space-y-0 md:space-x-6 2xl:space-x-10">
            <li className="w-fit py-4 md:py-6 px-6 md:px-8 text-white font-medium rounded-xl
              bg-gradient-to-t from-amber-500 to-amber-600">
              Selamatkan diri
            </li>

            <li className="p-4 md:p-6 grow-0 md:w-72 rounded-xl border_blue">
              <h2>
                Yang Harus Dilakukan!
              </h2>
              <p>
                Terdapat beberapa hal yang harus
                dilakukan oleh korban kekerasan
              </p>
            </li>

            <li className="w-fit py-4 md:py-6 px-6 md:px-8 text-white
              font-medium rounded-xl bg-cyan-900">
              Segera melapor
            </li>
          </ul>

          <ul className="flex flex-col md:flex-row items-center md:items-start md:justify-center
              space-y-6 md:space-y-0 md:space-x-6 2xl:space-x-10 pt-6 2xl:pt-10">
            <li className="h-16 w-16 rounded-xl border_amber" />
            <li className="md:w-52 py-4 md:py-6 px-6 md:px-8 text-white
              font-medium rounded-xl bg-cyan-900">
              Hubungi orang terdekat
            </li>

            <li className="grow-0 md:w-52 py-4 md:py-6 px-6 md:px-8 text-white font-medium rounded-xl
              bg-gradient-to-t from-amber-500 to-amber-600">
              Simpan barang bukti
            </li>
            <li className="h-16 w-16 rounded-xl border_blue" />
          </ul>
        </div>

        <div className="mx-6 md:mx-12 2xl:mx-56 rounded-xl bg-cyan-800 px-4 py-4 md:px-12 md:py-12">
          <h2 className="mb-4 text-white text-center font-medium text-lg md:text-xl xl:text-2xl">
            Undang-Undang Kekerasan
          </h2>
          <ListAccordion
            type="multiple"
            className="bg-white p-4 rounded-md"
            contentClassName="text-justify px-4"
            accordionList={Constant.uuList} />
        </div>
      </section>

      <section className="sticky py-12 top-0 bg-white px-6 md:px-12 2xl:px-56">
        <h2 className="text-center font-semibold text-lg md:text-xl xl:text-2xl mb-6 lg:mb-12">
          Artikel
        </h2>
        <CardArticle
          className="flex flex-wrap justify-center sm:space-x-4 lg:space-x-6"
          itemClassName="overflow-hidden w-10/12 sm:w-2/5 lg:w-72
          rounded-lg lg:rounded-xl shadow-md mb-4 lg:mb-6"
          imageClassName="object-cover"
          textClassName="p-5 text-center"
          articleList={Constant.articleList} />
      </section>
    </main>
  )
}
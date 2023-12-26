import { TextBorder, TextBlock, EmptyBorderBox } from "src/component/molecules/special/atoms";
import { LawanCrossText } from "src/component/molecules/special/lawan-cross-text";
import { SelfAvoidViolence } from "src/component/molecules/special/self-avoid-violence";
import { IllustrationEdukasiBeranda } from "src/component/molecules/special/illustration-edukasi-beranda";
import { AccordionViolenceLaw, TitleAccordionVlaw } from "src/component/molecules/special/accordion-violence-law";
import { SelfAvoidViolenceIllustration } from "src/component/molecules/special/self-avoid-violence-illustration";
import { CardListArticleEdukasi, TitleCardListArticleEdukasi } from 'src/component/organisms/cardlist/article/edukasi';
import { ArticleProvider } from 'src/component/context/provider';

export default function Page() {
  return (
    <>
      <IllustrationEdukasiBeranda />
      <section className="relative bg-white py-24 flex flex-col md:flex-row
        items-center md:items-start justify-start md:justify-between md:space-x-6
        px-12 xl:px-44 2xl:px-72">
        <SelfAvoidViolenceIllustration />
        <div className="flex flex-col items-center md:items-start mt-10 md:mt-0 px-12">
          <h3 className="text-center md:text-start semi_heading_3 text_blue">
            Menghindari diri dari kekerasan
          </h3>
          <SelfAvoidViolence />
        </div>
      </section>

      <section className="relative bg-white py-12 2xl:py-20">
        <LawanCrossText />
        <div className="text-center py-12 px-12 md:px-24">
          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center
            space-y-6 md:space-y-0 md:space-x-6 2xl:space-x-10">
            <TextBlock className="bg-gradient-to-t from-amber-500 to-amber-600">
              Selamatkan diri
            </TextBlock>
            <TextBorder className="border_blue">
              <span>Yang Harus Dilakukan!</span>
              Terdapat beberapa hal yang harus dilakukan oleh korban kekerasan
            </TextBorder>
            <TextBlock className="bg-cyan-900">
              Segera melapor
            </TextBlock>
          </div>

          <div className="flex flex-col md:flex-row items-center md:items-start md:justify-center
              space-y-6 md:space-y-0 md:space-x-6 2xl:space-x-10 pt-6 2xl:pt-10">
            <EmptyBorderBox className="border_amber" />
            <TextBlock className="bg-cyan-900">
              Hubungi orang terdekat
            </TextBlock>

            <TextBlock className="bg-gradient-to-t from-amber-500 to-amber-600">
              Simpan barang bukti
            </TextBlock>
            <EmptyBorderBox className="border_blue" />
          </div>
        </div>

        <div className="mx-6 md:mx-12 2xl:mx-56 rounded-xl bg-cyan-800 px-4 py-4 md:px-12 md:py-12">
          <TitleAccordionVlaw>
            Undang-Undang Kekerasan
          </TitleAccordionVlaw>
          <AccordionViolenceLaw />
        </div>
      </section>

      <section className="relative z-10 py-12 bg-pink-300 px-6 md:px-12">
        <TitleCardListArticleEdukasi>
          Artikel
        </TitleCardListArticleEdukasi>
        <ArticleProvider>
          <CardListArticleEdukasi />
        </ArticleProvider>
      </section>
    </>
  )
}
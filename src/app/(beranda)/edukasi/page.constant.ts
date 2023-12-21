import type { ListOddEvenProps } from 'src/component/molecules/list/odd-even';
import type { ListImageProps } from 'src/component/molecules/list/image';
import type { ListAccordionProps } from 'src/component/molecules/list/accordion';
import type { CardArticleProps } from 'src/component/atoms/card/article';
import { Article } from 'src/component/static-file/article';
import { Illus } from 'src/component/static-file/illustration';

export namespace Constant {
  export const IllustartionImage = Illus.file05
  export const protectList: ListOddEvenProps['textList'] = [
    {
      text: "Mengontrol diri sendiri",
      label: "."
    },
    {
      text: "Menahan emosi agar tidak mudah marah",
      label: "."
    },
    {
      text: "Selalu berada di lingkungan yang baik",
      label: "."
    },
    {
      text: "Melakukan hal-hal positif",
      label: "."
    }
  ]

  export const imageList: ListImageProps['imageList'] = [
    {
      src: Illus.file01,
    },
    {
      src: Illus.file02,
    },
    {
      src: Illus.file03,
    },
    {
      src: Illus.file04,
    }
  ]

  export const uuList: ListAccordionProps['accordionList'] = [
    {
      trigger: "Pasal 170 KUHP",
      content: `"Barang siapa dengan terang-terangan dan dengan tenaga bersama menggunakan
      kekerasan terhadap orang atau barang, diancam dengan pidana penjara paling
      lama lima tahun enam bulan"`,
    },
    {
      trigger: "Pasal 351 KUHP",
      content: `"Barang siapa dengan sengaja di muka umum mengeluarkan pernyataan
      atau melakukan perbuatan yang dengan sengaja dapat menimbulkan rasa kebencian
      atau permusuhan atau perasaan permusuhan atau rasa kebencian terhadap suatu
      atau beberapa golongan rakyat Indonesia, diancam dengan pidana penjara paling lama
      sembilan bulan atau pidana denda paling banyak empat ribu lima ratus rupiah"`,
    },
    {
      trigger: "Pasal 338 KUHP",
      content: `"Barang siapa dengan sengaja dan melawan hukum menyerang kehormatan
      atau tubuh seseorang, diancam dengan pidana penjara paling lama dua tahun delapan bulan
      atau pidana denda paling banyak empat ribu lima ratus rupiah."`,
    },
    {
      trigger: "Pasal 44 (1) UU No. 23 Tahun 2004",
      content: `"Korban kekerasan dalam rumah tangga berhak mendapatkan perlindungan dan kesejahteraan."`,
    },
    {
      trigger: "Pasal 80 UU 35 Tahun 2014",
      content: `(1) Setiap orang dilarang melakukan kekerasan terhadap anak.
      (2) Setiap orang yang melakukan tindak pidana kekerasan terhadap anak sebagaimana dimaksud dalam ayat (1)
      dipidana dengan pidana penjara paling lama 5 (lima) tahun dan/atau denda paling banyak
      Rp 5.000.000.000,00 (lima miliar rupiah).
      (3) Dalam hal tindak pidana sebagaimana dimaksud dalam ayat (2) dilakukan oleh 2 (dua) orang atau lebih,
      pidana yang dapat dijatuhkan berupa pidana penjara paling lama 15 (lima belas) tahun dan/atau denda
      paling banyak Rp 15.000.000.000,00 (lima belas miliar rupiah).`
    }, 
    {
      trigger: "UU N. 31 Tahun 2014",
      content: `"Memberikan perlindungan kepada saksi dan korban tindak pidana, termasuk tindak pidana kekerasan"`
    }
  ]

  export const articleList: CardArticleProps['articleList'] = [
    {
      image: Article.file01,
      title: "title-1 bagian title artikel",
      description: "ini artikel satu bagian description",
      link: "/images/artikel-1.png",
    },
    {
      image: Article.file02,
      title: "title-1 bagian title artikel",
      description: "ini artikel dua bagian description",
      link: "/images/artikel-2.png",
    },
    {
      image: Article.file03,
      title: "title-1 bagian title artikel",
      description: "ini artikel tiga bagian description",
      link: "/images/artikel-3.png",
    }
  ]
}
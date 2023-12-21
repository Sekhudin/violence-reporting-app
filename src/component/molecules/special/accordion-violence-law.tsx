import React from 'react';
import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'src/component/ui/accordion';
import { cn } from 'src/util';

const violenveLaw: ViolenceLaw = [
  {
    title: "Pasal 170 KUHP",
    description: `"Barang siapa dengan terang-terangan dan dengan tenaga bersama menggunakan
    kekerasan terhadap orang atau barang, diancam dengan pidana penjara paling
    lama lima tahun enam bulan"`,
  },
  {
    title: "Pasal 351 KUHP",
    description: `"Barang siapa dengan sengaja di muka umum mengeluarkan pernyataan
    atau melakukan perbuatan yang dengan sengaja dapat menimbulkan rasa kebencian
    atau permusuhan atau perasaan permusuhan atau rasa kebencian terhadap suatu
    atau beberapa golongan rakyat Indonesia, diancam dengan pidana penjara paling lama
    sembilan bulan atau pidana denda paling banyak empat ribu lima ratus rupiah"`,
  },
  {
    title: "Pasal 338 KUHP",
    description: `"Barang siapa dengan sengaja dan melawan hukum menyerang kehormatan
    atau tubuh seseorang, diancam dengan pidana penjara paling lama dua tahun delapan bulan
    atau pidana denda paling banyak empat ribu lima ratus rupiah."`,
  },
  {
    title: "Pasal 44 (1) UU No. 23 Tahun 2004",
    description: `"Korban kekerasan dalam rumah tangga berhak mendapatkan perlindungan dan kesejahteraan."`,
  },
  {
    title: "Pasal 80 UU 35 Tahun 2014",
    description: `(1) Setiap orang dilarang melakukan kekerasan terhadap anak.
    (2) Setiap orang yang melakukan tindak pidana kekerasan terhadap anak sebagaimana dimaksud dalam ayat (1)
    dipidana dengan pidana penjara paling lama 5 (lima) tahun dan/atau denda paling banyak
    Rp 5.000.000.000,00 (lima miliar rupiah).
    (3) Dalam hal tindak pidana sebagaimana dimaksud dalam ayat (2) dilakukan oleh 2 (dua) orang atau lebih,
    pidana yang dapat dijatuhkan berupa pidana penjara paling lama 15 (lima belas) tahun dan/atau denda
    paling banyak Rp 15.000.000.000,00 (lima belas miliar rupiah).`
  },
  {
    title: "UU N. 31 Tahun 2014",
    description: `"Memberikan perlindungan kepada saksi dan korban tindak pidana, termasuk tindak pidana kekerasan"`
  }
]

export const TitleAccordionVlaw = ({ children, className }: { className?: string } & React.PropsWithChildren) => (
  <h2 className={cn('mb-4 text-white text-center font-medium text-lg md:text-xl xl:text-2xl', className)}>{children}</h2>)

type ViolenceLaw = Record<'title' | 'description', string>[]
export const AccordionViolenceLaw = ({ className }: { className?: string }) => (
  <Accordion type='multiple' className={cn('bg-white p-4 rounded-md', className)}>
    {violenveLaw.map((v, key) => (
      <AccordionItem key={key}
        className=''
        value={`${key}`}>
        <AccordionTrigger className=''>
          {v.title}
        </AccordionTrigger>
        <AccordionContent className='text-justify px-4'>
          {v.description}
        </AccordionContent>
      </AccordionItem>
    ))}
  </Accordion>)
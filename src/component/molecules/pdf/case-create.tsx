"use client"
import { usePDF } from 'react-to-pdf';
import { Button } from 'src/component/ui/button';
import { ScrollArea } from 'src/component/ui/scroll-area';
import { Case } from 'src/database/collection/case.entity';
import { FunDate } from 'src/util'
import { PdfDocument, PdfHeader, PdfBody, PdfSection, PdfField, getoptions } from './document';

export type PdfCaseCreateProps = {
  status: string;
  phone: string;
  date_incident: string;
  type_incident: string;
} & Omit<Case.Entity, "date_incident" | "type_incident" | "status">;

const exampleCase: PdfCaseCreateProps = {
  id: "pxhKdsyunirtJndkm",
  id_card: "3303032176004",
  name: "Michael Udu Jackson",
  address: "Jl. Kahuripan, RT 001 RW 005, Kecamatan Pasar Ular, Jakarta Utara",
  phone: "085894587098",
  title: "Pembulian disertai pemukulan",
  type_incident: "fisik",
  date_incident: "2023-11-08T17:00:00.000Z",
  location_incident: "SD N 3 Karang Pucung",
  status: "Diterima",
  description: "Kasus ini terjadi sekitar jam 10 pagi waktu indonesia barat",
  evidence: "pulpen",
  evidence_img: "",
}



export function PdfCaseCreate() {
  const {
    id,
    id_card,
    name,
    address,
    phone,
    title,
    type_incident,
    date_incident,
    location_incident,
    status,
    description,
    evidence,
    evidence_img
  } = exampleCase;

  const options = getoptions(id, name)
  const { toPDF, targetRef } = usePDF(options);

  return (
    <div className='w-full flex flex-col items-center bg-white'>
      <ScrollArea className='max-h-screen max-w-full px-2'>
        <PdfDocument ref={targetRef}>
          <PdfHeader>
            <h2 className="text-base font-semibold">Lapor ID</h2>
            <p>Bersama melawan kekerasan</p>
          </PdfHeader>

          <PdfField
            className='my-6'
            textClassName='font-semibold'
            label="ID Aduan"
            value={id} />
          <PdfBody className='space-y-6'>
            <PdfSection
              description="Dengan ini mengadukan telah terjadi kekerasan terhadap:">
              <PdfField
                label="Name"
                value={name}
                alias="Name" />
              <PdfField
                label="Nomor KTP"
                value={id_card}
                alias="ID Card" />
              <PdfField
                label="Alamat"
                value={address}
                alias="Address" />
              <PdfField
                label="Telepon/WA"
                value={phone}
                alias="Phone Number" />
            </PdfSection>

            <PdfSection
              description="Adapaun detail kekerasan yang terjadi sebagai berikut:">
              <PdfField
                label="Judul Aduan"
                value={title} />
              <PdfField
                label="Jenis Kekerasan"
                value={type_incident} />
              <PdfField
                label="Waktu Kejadian"
                value={FunDate.ISOtoLocal(date_incident)} />
              <PdfField
                label="Lokasi Kejadian"
                value={location_incident} />
              <PdfField
                label="Kronologi"
                value={description} />
              <PdfField
                label="Barang Bukti"
                value={evidence || "-"} />
            </PdfSection>
          </PdfBody>
          <div className="mt-6">
            <p>Demikian laporan aduan kekerasan yang dibuat untuk segera ditindak lanjuti.</p>
          </div>
        </PdfDocument>
      </ScrollArea>
      <Button variant="outline" className='w-fit' onClick={() => toPDF()}>
        donwload
      </Button>
    </div>
  )
}
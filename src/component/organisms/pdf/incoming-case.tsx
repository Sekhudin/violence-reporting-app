import React from 'react';
import {
  PdfDocument,
  PdfHeader,
  PdfBody,
  PdfSection,
  PdfField,
  PdfTextWatermark,
  PdfTextWatermarkProps
} from 'src/component/molecules/pdf/document';
import { Case } from 'src/service/case/case.service';
import { cn, FunDate, FunStr } from 'src/util';

export type IncomingValues = {
  phone: string;
  date_incident: string;
  type_incident: string;
} & Omit<Case.Expose, "date_incident" | "type_incident">;

export type PdfIncomingCaseProps = {
  values: IncomingValues;
  className?: string;
}

const watermarks: PdfTextWatermarkProps<Case.Status>['dict'] = {
  masuk: { text: "Masuk" },
  proses: { text: "Diproses", className: "text-cyan-800" },
  selesai: { text: "Selesai", className: "text-green-800" },
  tolak: { text: "Ditolak", className: "text-pink-800" },
}

export const PdfIncomingCase = React.forwardRef<HTMLDivElement, PdfIncomingCaseProps>(({
  values: v,
  className
}, ref) => {

  return (
    <PdfDocument ref={ref} className={cn("relative", className)}>
      <PdfHeader>
        <h2 className="text-base font-semibold">Lapor ID</h2>
        <p>Bersama melawan kekerasan</p>
      </PdfHeader>

      <PdfField
        className='my-6'
        textClassName='font-semibold'
        label="ID Aduan"
        value={v.id} />
      <PdfBody className='space-y-6'>
        <PdfSection
          description="Dengan ini mengadukan telah terjadi kekerasan terhadap:">
          <PdfField label="Name" value={FunStr.title(v.name)} alias="Name" />
          <PdfField label="Nomor KTP" value={v.id_card} alias="ID Card" />
          <PdfField label="Alamat" value={FunStr.title(v.address)} alias="Address" />
          <PdfField label="Telepon/WA" value={v.phone} alias="Phone Number" />
        </PdfSection>

        <PdfSection
          description="Adapaun detail kekerasan yang terjadi sebagai berikut:">
          <PdfField label="Judul Aduan" value={FunStr.capitalFirst(v.title)} />
          <PdfField label="Jenis Kekerasan" value={FunStr.capitalFirst(v.type_incident)} />
          <PdfField label="Waktu Kejadian" value={FunDate.ISOtoLocal(v.date_incident)} />
          <PdfField label="Lokasi Kejadian" value={FunStr.capitalFirst(v.location_incident)} />
          <PdfField label="Kronologi" value={FunStr.capitalFirst(v.description)} />
          <PdfField label="Barang Bukti" value={v.evidence || "-"} />
        </PdfSection>
      </PdfBody>
      <div className="mt-6">
        <p>Demikian laporan aduan kekerasan yang dibuat untuk segera ditindak lanjuti.</p>
      </div>

      <PdfTextWatermark<Case.Status>
        dict={watermarks}
        selected={v.status}
        exclude={['masuk']} />
    </PdfDocument>
  )
})
PdfIncomingCase.displayName = "PdfIncomingCase";
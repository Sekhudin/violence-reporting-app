"use client"
import { Document, Page, View, PDFRenderer, StyleSheet } from "@react-pdf/renderer";
import { Case } from 'src/database/collection/case'

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
  date_incident: "",
  location_incident: "SD N 3 Karang Pucung",
  status: "Diterima",
  description: "Kasus ini terjadi sekitar jam 10 pagi waktu indonesia barat",
  evidence: "pulpen",
  evidence_img: "",
}

export function PdfCaseCreate({ }: PdfCaseCreateProps) {
  const { id, id_card, name, address, phone, title, type_incident, date_incident, location_incident, status, description, evidence, evidence_img } = exampleCase;
  return (
    <Document>
      <Page size="A4">
        <View></View>
      </Page>
    </Document>
  )
}
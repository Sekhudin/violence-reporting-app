"use client"
import React from 'react';
import { PdfCaseCreate } from 'src/component/molecules/pdf/case-create';
import { PDFDownloadLink } from '@react-pdf/renderer';

export default function Page() {
  const [isClient, setIsClient] = React.useState<boolean>(false);

  React.useEffect(() => {
    setIsClient(true)
  }, [])

  return (
    <main className="w-screen flex justify-center p-10">
      <PdfCaseCreate />
    </main>
  )
}
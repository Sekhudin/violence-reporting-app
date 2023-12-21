"use client";
import React from 'react';
import { DownloadCloud, BookOpen } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, } from 'src/component/ui/dialog';
import { ScrollArea, ScrollBar } from 'src/component/ui/scroll-area';
import { TooltipButton } from 'src/component/molecules/tooltip/button';
import { Barierloader } from "src/component/atoms/barier/loader";
import { PdfCase, PdfCaseProps } from 'src/component/organisms/pdf/case';
import { getOptions, generatePdf } from 'src/component/atoms/pdf';
import { Case } from 'src/service/case/case.service';
import { cn } from 'src/util';

type DialogCasePdfProps<DT extends Case.Expose> = {
  values: DT;
  onClose?: (e: Event) => void;
  textTrigger?: string;
  className?: string;
} & Omit<PdfCaseProps, 'values'>;

export function DialogCasePdf<DT extends Case.Expose>({
  values: v,
  onClose,
  textTrigger,
  className,
}: DialogCasePdfProps<DT>) {
  const [loading, setLoading] = React.useState<boolean>(false);
  const pdfTargetRef = React.useRef<HTMLDivElement>(null);

  const savePdfHandler = async () => {
    try {
      setLoading(true);
      const options = getOptions("save", v.id, v.name);
      await generatePdf(pdfTargetRef, options);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  const openPdfHandler = async () => {
    try {
      setLoading(true);
      const options = getOptions("open", v.id, v.name);
      await generatePdf(pdfTargetRef, options);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <Dialog modal>
      <DialogTrigger className={cn(`w-full h-full rounded-sm first-letter:text-sm
        lg:text-base font-light text-start px-2 py-1`, className)}>
        {textTrigger || "Lihat"}
      </DialogTrigger>
      <DialogContent
        className='flex flex-col h-full'
        onPointerDownOutside={(e) => e.preventDefault()}
        onOpenAutoFocus={(e) => e.preventDefault()}
        onCloseAutoFocus={onClose}>

        <DialogHeader className='flex flex-row justify-start items-center space-y-0 space-x-2'>
          <TooltipButton
            tooltip='Download'
            disabled={loading}
            onClick={savePdfHandler}>
            <DownloadCloud className='h-5 w-5 text-cyan-900' />
          </TooltipButton>

          <TooltipButton
            tooltip='Open'
            disabled={loading}
            onClick={openPdfHandler}>
            <BookOpen className='h-5 w-5 text-cyan-900' />
          </TooltipButton>
        </DialogHeader>

        <ScrollArea className='w-fit'>
          <Barierloader isLoading={loading} />
          <PdfCase
            ref={pdfTargetRef}
            values={v} />
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
      </DialogContent>
    </Dialog >
  )
}
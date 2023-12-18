"use client";
import React from 'react';
import { DownloadCloud, BookOpen } from 'lucide-react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, } from 'src/component/ui/dialog';
import { ScrollArea, ScrollBar } from 'src/component/ui/scroll-area';
import { TooltipButton } from 'src/component/molecules/tooltip/button';
import { Barierloader } from "src/component/molecules/barier/loader";
import { PdfIncomingCase, PdfIncomingCaseProps, IncomingValues } from 'src/component/organisms/pdf/incoming-case';
import { getOptions, generatePdf } from 'src/component/molecules/pdf';
import { Case } from 'src/service/case/case.service';
import { cn } from 'src/util';

type DialogCasePdfIncomingProps<DT extends Case.Expose> = {
  values: DT;
  onClose?: (e: Event) => void;
  textTrigger?: string;
  className?: string;
} & Omit<PdfIncomingCaseProps, 'values'>;

export function DialogCasePdfIncoming<DT extends Case.Expose>({
  values: v,
  onClose,
  textTrigger,
  className,
}: DialogCasePdfIncomingProps<DT>) {
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
      <DialogTrigger className={cn('w-full h-full rounded-sm first-letter:text-sm lg:text-base font-light text-start px-2 py-1', className)}>
        {textTrigger || "Lihat"}
      </DialogTrigger>
      <DialogContent
        className='bg-white rounded-lg w-fit max-w-[95vw] flex flex-col'
        onPointerDownOutside={(e) => e.preventDefault()}
        onOpenAutoFocus={(e) => e.preventDefault()}
        onCloseAutoFocus={onClose}>

        <DialogHeader className='flex flex-row justify-start items-center space-y-0 space-x-2'>
          <TooltipButton
            className='hover:bg-cyan-900/20 py-1 px-2'
            text='Download'
            position={['top', 'start']}
            contentClassName='text-xs font-light'
            variant={"ghost"}
            disabled={loading}
            onClick={savePdfHandler}>
            <DownloadCloud className='h-5 w-5 text-cyan-900' />
          </TooltipButton>

          <TooltipButton
            className='hover:bg-cyan-900/20 py-1 px-2'
            text='Open'
            position={['top', 'start']}
            contentClassName='text-xs font-light'
            variant={"ghost"}
            disabled={loading}
            onClick={openPdfHandler}>
            <BookOpen className='h-5 w-5 text-cyan-900' />
          </TooltipButton>
        </DialogHeader>

        <ScrollArea className='w-fit max-w-[85vw] h-[85vh] pr-2'>
          <Barierloader isLoading={loading} />
          <PdfIncomingCase
            ref={pdfTargetRef}
            values={v as IncomingValues} />
          <ScrollBar orientation='horizontal' />
        </ScrollArea>
      </DialogContent>
    </Dialog >
  )
}
"use client"
import React from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from 'src/component/ui/dialog';
import { FormCaseCreate, FormCaseCreateProps } from 'src/component/organisms/form/case/create';
import { cn } from 'src/util';

export type DialogCaseCreateProps = {
  children: React.ReactNode;
  className?: string;
} & FormCaseCreateProps;
export function DialogCaseCreate({ children, className, ...props }: DialogCaseCreateProps) {
  const [open, setOpen] = React.useState<boolean>(false);

  return (
    <Dialog
      modal
      open={open}
      onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent
        className={cn('w-full h-full', className)}
        onPointerDownOutside={(e) => e.preventDefault()}>
        <DialogHeader className='flex flex-col items-center mt-4 text-center'>
          <DialogTitle className='mt-4'>Laporkan Kekerasan</DialogTitle>
          <DialogDescription className='font-light text-center'>
            Tak Ada Kekuatan Sejati dalam Pukulan.
            <span className="block">Pilih Damai, Tolak Kekerasan!</span>
          </DialogDescription>
        </DialogHeader>
        <FormCaseCreate
          itemClassName='px-4'
          submitClassName='absolute z-10 bottom-0 left-0'
          rows={5}
          forceMsgBox
          {...props} />
      </DialogContent>
    </Dialog>
  )
}
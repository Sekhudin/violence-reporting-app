"use client"
import React from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from 'src/component/ui/dialog';
import { FormArticleCreate, FormArticleCreateProps } from 'src/component/organisms/form/article/create';
import { cn } from 'src/util';

export type DialogArticleCreateProps = {
  children: React.ReactNode;
  onClose?: (e: Event) => void;
} & FormArticleCreateProps;
export function DialogArticleCreate({
  children,
  className,
  onClose,
  ...props
}: DialogArticleCreateProps) {
  const [open, setOpen] = React.useState<boolean>(false);
  IntersectionObserver

  return (
    <Dialog
      modal
      open={open}
      onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent
        className={cn('h-full w-full', className)}
        onPointerDownOutside={(e) => e.preventDefault()}
        onCloseAutoFocus={onClose}>
        <DialogHeader className='flex-col items-center text-center mt-4'>
          <DialogTitle>Buat Artikel Baru</DialogTitle>
          <DialogDescription className='max-w-xs text-center'>
            Langkah kecil untuk melawan kekerasan
          </DialogDescription>
        </DialogHeader>
        <FormArticleCreate
          itemClassName='px-4'
          submitClassName='absolute z-10 bottom-0 left-0'
          forceMsgBox
          rows={18}
          {...props} />
      </DialogContent>
    </Dialog>
  )
}
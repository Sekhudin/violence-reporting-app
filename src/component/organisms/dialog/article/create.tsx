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

  return (
    <Dialog
      modal
      open={open}
      onOpenChange={setOpen}>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent
        className={cn('bg-white rounded-xl w-11/12 md:max-w-full xl:max-w-6xl', className)}
        onPointerDownOutside={(e) => e.preventDefault()}
        onCloseAutoFocus={onClose}>
        <DialogHeader className='flex-col items-center text-center mt-4'>
          <DialogTitle>Buat Artikel Baru</DialogTitle>
          <DialogDescription className='max-w-xs text-center'>
            Langkah kecil untuk melawan kekerasan
          </DialogDescription>
        </DialogHeader>
        <FormArticleCreate
          itemClassName='my-4'
          submitClassName='mt-4'
          rows={18}
          {...props} />
      </DialogContent>
    </Dialog>
  )
}
import React from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from 'src/component/ui/dialog';
import { FormUserCreate, FormUserCreateProps } from 'src/component/organisms/form/user/create';
import { cn } from 'src/util';

export type DialogUserCreateProps = {
  children: React.ReactNode;
  onClose?: (e: Event) => void;
} & FormUserCreateProps;
export function DialogUserCreate({
  children,
  className,
  onClose,
  ...props
}: DialogUserCreateProps) {
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
        className={cn('w-11/12 max-w-md bg-white rounded-xl', className)}
        onPointerDownOutside={(e) => e.preventDefault()}
        onCloseAutoFocus={onClose}>
        <DialogHeader className='flex-col items-center text-center mt-4'>
          <DialogTitle>Registrasi Admin Baru</DialogTitle>
          <DialogDescription className='max-w-xs text-center'>
            Email dan password harus oleh calon admin
          </DialogDescription>
        </DialogHeader>
        <FormUserCreate
          itemClassName='my-4'
          submitClassName='mt-4'
          {...props} />
      </DialogContent>
    </Dialog>
  )
}
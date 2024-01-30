"use client"
import React from 'react';
import { Dialog, DialogHeader, DialogContent, DialogTitle, DialogDescription } from 'src/component/ui/dialog';
import { cn } from 'src/util';

const AccountDemo = ({ className, ...v }: { className?: string } & Record<'title' | 'email' | 'password', string | undefined>) => (
  <div className={cn(`text-sm lg:text-base p-2 border rounded-lg`, className)}>
    <h3 className='mb-2 text-center font-medium capitalize'>{v.title}</h3>
    <p className='flex justify-between mb-1'> Email:
      <span className='normal-case'>{v.email}</span>
    </p>

    <p className='flex justify-between'> Password:
      <span className='normal-case'>{v.password}</span>
    </p>
  </div>)

export function ModalDemo({ className, }: { className?: string, }) {
  const [open, setOpen] = React.useState<boolean>(false);

  const modalHandler = React.useCallback(() => {
    if (process.env.NEXT_PUBLIC_APP_MODE === 'development') {
      setOpen(true);
    }
  }, [])

  React.useEffect(() => {
    modalHandler();
    return () => {
      modalHandler();
    }
  }, [modalHandler]);

  return (
    <Dialog modal open={open} onOpenChange={setOpen}>
      <DialogContent
        className={cn(`w-11/12 sm:w-96`, className)}
        onPointerDownOutside={(e) => e.preventDefault()}>
        <DialogHeader className='flex flex-col items-center'>
          <DialogTitle className='text-base font-medium'>
            {`Mode : ${process.env.NEXT_PUBLIC_APP_MODE}`}
          </DialogTitle>
          <DialogDescription className='text-sm lg:text-base text-center'>
            Untuk demo gunakan akun di bawah
          </DialogDescription>
        </DialogHeader>

        <AccountDemo
          title='Admin'
          email={process.env.NEXT_PUBLIC_EMAIL}
          password={process.env.NEXT_PUBLIC_PASSWORD} />

        <AccountDemo
          title='Super Admin'
          email={process.env.NEXT_PUBLIC_SUPER_EMAIL}
          password={process.env.NEXT_PUBLIC_SUPER_PASSWORD} />
      </DialogContent>
    </Dialog>
  )
}
import React from 'react';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from 'src/component/ui/dialog';
import { FormUserLogin, FormUserLoginProps } from 'src/component/organisms/form/user/login';
import { cn } from 'src/util';

export type DialogUserLoginProps = {
  children: React.ReactNode;
} & FormUserLoginProps;
export function DialogUserLogin({ children, className, ...props }: DialogUserLoginProps) {
  return (
    <Dialog modal>
      <DialogTrigger asChild>
        {children}
      </DialogTrigger>
      <DialogContent
        className={cn('h-fit w-full sm:max-w-lg', className)}>
        <DialogHeader className='flex-col items-center text-center mt-4'>
          <DialogTitle>Login Pengelola</DialogTitle>
          <DialogDescription className='max-w-xs text-center'>
            Masuk sebagai pengelola untuk mengakses laporan
          </DialogDescription>
        </DialogHeader>
        <FormUserLogin
          className='p-2'
          submitClassName='mt-4'
          forceMsgBox
          {...props} />
      </DialogContent>
    </Dialog>
  )
}
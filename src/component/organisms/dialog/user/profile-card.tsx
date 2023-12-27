"use client"
import React from 'react';
import { CardUserProfilecard } from 'src/component/molecules/card/user/profile-card';
import { Dialog, DialogTrigger, DialogContent, DialogHeader, DialogTitle, DialogDescription } from 'src/component/ui/dialog';
import { User } from 'src/service/user/user.service';
import { cn } from 'src/util';

export function DialogUserProfileCard({
  img,
  value: v,
  className,
  onClose,
  children
}: { img: string; value: User.Expose; className?: string; onClose?: (e: Event) => void; } & React.PropsWithChildren) {
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
        className={cn(`max-w-[90%] sm:max-w-md`, className)}
        onCloseAutoFocus={onClose}>
        <DialogHeader>
          <DialogTitle className='text-base'>
            {`Profil ${v.name}`}
          </DialogTitle>
          <DialogDescription>

          </DialogDescription>
        </DialogHeader>

        <CardUserProfilecard
          value={v}
          img={img} />
      </DialogContent>
    </Dialog>
  )
}
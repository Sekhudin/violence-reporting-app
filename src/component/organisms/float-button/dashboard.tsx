"use client"
import React from "react"
import { PlusIcon, PencilLineIcon, UserPlusIcon } from 'lucide-react'
import { Button } from 'src/component/ui/button';
import { DropdownMenu } from "src/component/ui/dropdown-menu";
import { DropdownMenuTrigger, DropdownMenuContent } from "src/component/ui/dropdown-menu";
import { DialogArticleCreate } from 'src/component/organisms/dialog/article/create';
import { DialogUserCreate } from 'src/component/organisms/dialog/user/create';
import { cn } from 'src/util';

export type FloatButtonDashboardProps = {
  className?: string;
  itemClassName?: string;
  itemTriggerClassName?: string;
}
export function FloatButtonDashboard({
  className,
  itemClassName = "w-fit h-fit m-0 p-2.5 rounded-full cursor-pointer",
}: FloatButtonDashboardProps) {
  const [open, setOpen] = React.useState<boolean>();

  const closeHandler = () => {
    setOpen(false);
  }

  return (
    <DropdownMenu
      modal={true}
      open={open}
      onOpenChange={setOpen}>
      <DropdownMenuTrigger asChild>
        <div className='fixed z-[10] bottom-[86px] lg:bottom-11 right-4
          p-4 rounded-tl-full rounded-bl-full bg-gray-100'>
          <Button
            className={cn(`rounded-full m-0 p-3 w-fit h-fit bottom-20 right-4
            lg:bottom-10 lg:right-6 2xl:right-10`, className)}
            variant="amber">
            <PlusIcon className='w-6 h-6' />
          </Button>
        </div>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className='h-fit w-fit min-w-0 flex flex-col
        space-y-3 px-5 bg-transparent shadow-none border-none'
        align='end'
        side='top'>

        <DialogUserCreate onClose={closeHandler}>
          <Button
            className={cn('', itemClassName)}
            variant="blue">
            <UserPlusIcon className='w-6 h-6' />
          </Button>
        </DialogUserCreate>

        <DialogArticleCreate onClose={closeHandler}>
          <Button
            className={cn('', itemClassName)}
            variant="blue">
            <PencilLineIcon className='w-6 h-6' />
          </Button>
        </DialogArticleCreate>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
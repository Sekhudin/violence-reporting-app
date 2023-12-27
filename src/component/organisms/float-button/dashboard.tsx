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
        <Button
          className={cn(`h-fit w-fit p-2.5 rounded-full`, className)}
          variant="amber">
          <PlusIcon className='w-5 h-5' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className='h-fit w-fit min-w-0 flex flex-col bg-transparent
        space-y-1.5 px-0 shadow-none border-none mb-2'
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
"use client"
import React from 'react';
import { MoreHorizontal } from "lucide-react";
import { Button } from "src/component/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuTrigger
} from "src/component/ui/dropdown-menu";
import { DialogCasePdf } from 'src/component/organisms/dialog/case/pdf';
import { Case } from 'src/service/case/case.service';
import { BaseCaseActionProps } from './type';

export function ActionFinishedCase<DT extends Case.Expose, DV = unknown>({
  cellContext: ctx
}: BaseCaseActionProps<DT, DV>) {
  const [open, setOpen] = React.useState<boolean>(false);

  const closeHandler = () => {
    setOpen(false)
  }

  return (
    <>
      <DropdownMenu
        modal={true}
        open={open}
        onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Button
            className="h-fit w-fit p-2"
            variant="ghost"
            aria-label='case-action'>
            <MoreHorizontal className="h-6 w-6" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="relative flex flex-col space-y-0.5">
          <DropdownMenuLabel className="text-sm lg:text-base font-medium py-1">
            Aksi
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="cursor-pointer p-0"
            onSelect={(e) => e.preventDefault()}>
            <DialogCasePdf
              values={ctx.row.original}
              onClose={closeHandler} />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
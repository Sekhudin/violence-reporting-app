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
import { DialogCasePdfIncoming } from 'src/component/organisms/dialog/case/pdf-incoming';
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
          <Button variant="ghost" className="h-fit w-fit px-2 py-1">
            <MoreHorizontal className="h-4 w-4" />
          </Button>
        </DropdownMenuTrigger>
        <DropdownMenuContent align="end" className="relative flex flex-col space-y-0.5">
          <DropdownMenuLabel className="text-xs lg:text-sm font-medium py-1">
            Aksi
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuItem
            className="text-xs lg:text-sm font-light cursor-pointer p-0"
            onSelect={(e) => e.preventDefault()}>
            <DialogCasePdfIncoming
              values={ctx.row.original}
              onClose={closeHandler} />
          </DropdownMenuItem>
          <DropdownMenuSeparator />
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
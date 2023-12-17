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
import { AlertActionCancel } from 'src/component/molecules/alert-dialog/action-cancel';
import { Barierloader } from 'src/component/molecules/barier/loader';
import { DialogCasePdfIncoming } from 'src/component/organisms/dialog/case/pdf-incoming';
import { CaseService, Case } from 'src/service/case/case.service';
import { BaseCaseActionProps } from './type';

export function ActionOnProcessCase<DT extends Case.Expose, DV = unknown>({
  cellContext: ctx
}: BaseCaseActionProps<DT, DV>) {
  const [open, setOpen] = React.useState<boolean>(false);
  const [loading, setLoading] = React.useState<boolean>(false);

  const closeHandler = () => {
    setOpen(false)
  }

  const finishHandler = async () => {
    try {
      setLoading(true);
      await CaseService.finish(ctx.row.original.id);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  const rejectHanlder = async () => {
    try {
      setLoading(true);
      await CaseService.reject(ctx.row.original.id);
      setLoading(false);
    } catch (error) {
      setLoading(false);
    }
  }

  return (
    <>
      <Barierloader
        className='fixed z-10'
        isLoading={loading} />
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

          <DropdownMenuItem
            className="p-0"
            onSelect={(e) => e.preventDefault()}>
            <AlertActionCancel
              className="text-xs lg:text-sm font-light text-cyan-600 hover:cursor-pointer hover:bg-transparent
            hover:text-cyan-500 focus:text-cyan-600 focus:bg-cyan-600/10 px-2 py-1
            flex justify-start w-full h-full rounded-sm"
              variant={"ghost"}
              title={`aduan ${ctx.row.original.name}`}
              description={`tandai sebagai selesai aduan dari ${ctx.row.original.name}?`}
              action={{
                actionName: "akhiri kasus",
                onClick: finishHandler,
              }}
              onClose={closeHandler}>
              Akhiri kasus
            </AlertActionCancel>
          </DropdownMenuItem>

          <DropdownMenuItem
            className="p-0"
            onSelect={(e) => e.preventDefault()}>
            <AlertActionCancel
              className="text-xs lg:text-sm font-light text-pink-600 hover:cursor-pointer hover:bg-transparent
            hover:text-pink-500 focus:text-pink-600 focus:bg-pink-600/10 px-2 py-1
            flex justify-start w-full h-full rounded-sm"
              variant={"ghost"}
              title={`aduan ${ctx.row.original.name}`}
              description={`membatalkan aduan dari ${ctx.row.original.name}?`}
              action={{
                actionName: "batalkan kasus",
                className: "bg-pink-600 hover:bg-pink-500",
                onClick: rejectHanlder
              }}
              onClose={closeHandler}>
              Batalkan kasus
            </AlertActionCancel>
          </DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
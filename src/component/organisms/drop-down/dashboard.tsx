"use client"
import React from "react";
import { Barierloader } from 'src/component/atoms/barier/loader';
import { Avatar, AvatarImage, AvatarFallback } from 'src/component/ui/avatar';
import { AlertActionCancel } from 'src/component/molecules/alert-dialog/action-cancel';
import { DialogUserProfileCard } from 'src/component/organisms/dialog/user/profile-card';
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuContent,
  DropdownMenuLabel,
  DropdownMenuSeparator,
  DropdownMenuGroup,
  DropdownMenuItem
} from 'src/component/ui/dropdown-menu';
import { useAuth } from 'src/component/context/use-ctx';
import { useImage } from 'src/component/hooks/use-firebase';
import { UserService } from 'src/service/user/user.service';
import { cn } from "src/util";

export function DropdownDashboard({ className }: { className?: string }) {
  const { user } = useAuth();
  const url = useImage(user?.image, 'user');

  const [loading, setLoading] = React.useState<boolean>(false);
  const [open, setOpen] = React.useState<boolean>(false);

  const signOutHandler = async () => {
    setLoading(true);
    const result = await UserService.signOut();
    if (result) setLoading(false);
  }

  const closeHandler = () => {
    setOpen(false);
  }

  return (
    <>
      <Barierloader isLoading={loading} className="fixed inset-0 z-10" />
      <DropdownMenu
        modal
        open={open}
        onOpenChange={setOpen}>
        <DropdownMenuTrigger asChild>
          <Avatar className="cursor-pointer">
            <AvatarImage src={url.src} />
            <AvatarFallback>NN</AvatarFallback>
          </Avatar>
        </DropdownMenuTrigger>

        <DropdownMenuContent className={cn(`mt-2`, className)}
          side="bottom"
          align="end">
          <DropdownMenuLabel className="text-cyan-800 font-medium">
            Akun Saya
          </DropdownMenuLabel>
          <DropdownMenuSeparator />

          <DropdownMenuGroup className="flex flex-col space-y-1">
            {user && (
              <DialogUserProfileCard
                img={url.src}
                value={user}
                onClose={closeHandler}>
                <DropdownMenuItem
                  className="cursor-pointer py-1.5 font-light"
                  onSelect={(e) => e.preventDefault()}>
                  Profile
                </DropdownMenuItem>
              </DialogUserProfileCard>
            )}

            <DropdownMenuItem
              className="p-0 overflow-hidden"
              onSelect={(e) => e.preventDefault()}>
              <AlertActionCancel
                className="h-full w-full flex justify-start rounded-none px-2 py-1.5 m-0
                text-pink-500 hover:text-pink-500 hover:bg-pink-500/10 font-light"
                variant={"ghost"}
                title={`Keluar`}
                description={`Lanjutkan keluar, ${user?.name}?`}
                action={{
                  actionName: "Keluar",
                  className: "bg-pink-600 hover:bg-pink-500",
                  onClick: signOutHandler
                }}
                onClose={closeHandler}>
                Keluar
              </AlertActionCancel>
            </DropdownMenuItem>

          </DropdownMenuGroup>
        </DropdownMenuContent>
      </DropdownMenu>
    </>
  )
}
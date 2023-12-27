import React from "react";
import Image from "next/image";
import { Card, CardContent, } from 'src/component/ui/card';
import { User } from 'src/service/user/user.service';
import { cn } from "src/util";

export function CardUserProfilecard({
  className,
  img,
  value: v
}: { className?: string; img: string; value: Omit<User.Expose, 'image'> }) {
  const isSuperAdmin: boolean = Object.values(v.role).includes('super admin');

  return (
    <Card className={cn(`border-0 shadow-none p-0 rounded-none`, className)}>
      <CardContent className="w-fit h-fit relative flex flex-col justify-center p-0">
        <div className="w-72 h-72 rounded-full rounded-tr-none overflow-hidden">
          <Image className="object-cover"
            src={img}
            alt={v.name}
            width={500}
            height={500} />
        </div>

        {isSuperAdmin && (
          <p className="text-sm font-medium text-white px-2 py-1 bg-pink-500 rounded-l-full
            absolute top-0 right-0">
            Super Admin</p>)}

        {!isSuperAdmin && (
          <p className="text-sm font-medium text-white px-2 py-1 bg-cyan-800 rounded-l-full
          absolute top-0 right-0">
            Admin</p>)}

        <p className={`text-xs font-medium text-center mt-4 px-2 py-1 text-white
          absolute bottom-0 inset-x-0 ${isSuperAdmin ? 'bg-pink-500' : 'bg-cyan-800'}`}>
          {`ID: ${v.id}`}</p>

        <div className="text-sm lg:text-base font-light flex flex-col space-y-1 items-center mb-10">
          <h3 className="font-medium capitalize">
            {v.name}</h3>

          <p className="lowercase">
            {v.email}</p>
        </div>
      </CardContent>
    </Card>
  )
}
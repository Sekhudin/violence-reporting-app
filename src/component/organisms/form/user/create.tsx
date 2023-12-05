"use client"
import React from 'react';
import { Form, FormField } from "src/component/ui/form";
import { useFormUserCreate } from "src/service/user/form/create";
import { ScrollArea } from 'src/component/ui/scroll-area';
import { Button } from "src/component/ui/button";
import { ItemInput } from 'src/component/molecules/form-item/input';
import { ItemPassword } from 'src/component/molecules/form-item/password';
import { cn } from "src/util";

export type FormUserCreateProps = {
  className?: string;
  itemClassName?: string;
  submitClassName?: string;
  forceMsgBox?: boolean;
}

export function FormUserCreate({ className, itemClassName, submitClassName, forceMsgBox }: FormUserCreateProps) {
  const [form, onSubmit, onValidationError, disable] = useFormUserCreate();

  return (
    <>
      <Form {...form}>
        <form
          method="POST"
          className={cn('flex flex-col', className)}
          onSubmit={form.handleSubmit(onSubmit, onValidationError)}>
          <ScrollArea className='relative max-h-[400px] flex flex-col'>
            <FormField
              name="id_card"
              control={form.control}
              render={({ field }) => (
                <ItemInput
                  itemClassName={cn('px-4', itemClassName)}
                  label="No KTP"
                  placeholder="16 digit nomor KTP"
                  {...field} />
              )} />

            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <ItemInput
                  itemClassName={cn('px-4', itemClassName)}
                  desClassName=""
                  label="Nama"
                  placeholder="Tambah nama admin"
                  {...field} />
              )} />

            <FormField
              name="email"
              control={form.control}
              render={({ field }) => (
                <ItemInput
                  itemClassName={cn('px-4', itemClassName)}
                  desClassName=""
                  label="Email"
                  placeholder="Email"
                  {...field} />
              )} />

            <FormField
              name="password"
              control={form.control}
              render={({ field }) => (
                <ItemPassword
                  itemClassName={cn('px-4', itemClassName)}
                  forceMsgBox={forceMsgBox}
                  desClassName=""
                  label="Password"
                  placeholder="Password"
                  {...field} />
              )} />
          </ScrollArea>

          <Button
            className={cn('grow', submitClassName)}
            variant="blue"
            type="submit"
            disabled={disable} >
            Register
          </Button>
        </form>
      </Form>
    </>
  )
}
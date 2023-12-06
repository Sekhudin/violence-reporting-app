"use client"
import React from 'react';
import { Form, FormField } from "src/component/ui/form";
import { useFormArticleCreate } from "src/service/article/form/create";
import { ScrollArea } from 'src/component/ui/scroll-area';
import { Button } from "src/component/ui/button";
import { ItemInput } from 'src/component/molecules/form-item/input';
import { ItemTextArea } from 'src/component/molecules/form-item/text-area';
import { useToast } from 'src/component/ui/use-toast';
import { cn, FunComponent } from "src/util";

export type FormArticleCreateProps = {
  className?: string;
  itemClassName?: string;
  submitClassName?: string;
  forceMsgBox?: boolean;
  rows?: number
}

export function FormArticleCreate({ className, itemClassName, submitClassName, forceMsgBox, rows }: FormArticleCreateProps) {
  const [form, onSubmit, onValidationError, disable,] = useFormArticleCreate();

  return (
    <>
      <Form {...form}>
        <form
          method="POST"
          className={cn('flex flex-col', className)}
          onSubmit={form.handleSubmit(onSubmit, onValidationError)}>
          <ScrollArea className='relative max-h-[400px] flex flex-col'>
            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <ItemInput
                  itemClassName={cn('px-4', itemClassName)}
                  label="Judul Artikel"
                  placeholder="judul artikel"
                  {...field} />
              )} />

            <FormField
              name="article"
              control={form.control}
              render={({ field }) => (
                <ItemTextArea
                  forceMsgBox={forceMsgBox}
                  itemClassName={cn('px-4', itemClassName)}
                  desClassName=""
                  rows={rows}
                  label="Isi Artikel"
                  placeholder="Type here..."
                  {...field} />
              )} />

            <FormField
              name="image"
              control={form.control}
              render={({ field }) => {
                const { onChange, ...inputProps } = field;
                return (
                  <ItemInput
                    className={`file:text-cyan-800 file:hover:cursor-pointer
                    file:font-semibold font-light bg-cyan-800/10`}
                    itemClassName={cn('px-4', itemClassName)}
                    type="file"
                    accept="image/jpeg, image/jpg, image/png"
                    label="Gambar Illustrasi"
                    placeholder="jika ada"
                    forceMsgBox={forceMsgBox}
                    onChange={(e) => {
                      field.onChange(e);
                      const image = FunComponent.getImageFile(e);
                      form.setValue('imageFile', image)
                    }}
                    {...inputProps} />
                )
              }} />
          </ScrollArea>

          <Button
            className={cn('grow', submitClassName)}
            variant="blue"
            type="submit"
            disabled={disable} >
            Posting
          </Button>
        </form>
      </Form>
    </>
  )
}
"use client"
import { Form, FormField } from "src/component/ui/form";
import { useFormArticleCreate } from "src/service/article/form/create";
import { ScrollArea } from 'src/component/ui/scroll-area';
import { Button } from "src/component/ui/button";
import { ItemInput } from 'src/component/molecules/form-item/input';
import { ItemTextArea } from 'src/component/molecules/form-item/text-area';
import { cn, FunComponent } from "src/util";

export type FormArticleCreateProps = {
  className?: string;
  itemClassName?: string;
  submitClassName?: string;
  forceMsgBox?: boolean;
  rows?: number
}

export function FormArticleCreate({
  className,
  itemClassName,
  submitClassName,
  forceMsgBox,
  rows
}: FormArticleCreateProps) {
  const [form, onSubmit, onValidationError, disable,] = useFormArticleCreate();

  return (
    <ScrollArea>
      <Form {...form}>
        <form
          method="POST"
          className={cn('flex flex-col', className)}
          onSubmit={form.handleSubmit(onSubmit, onValidationError)}>
          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <ItemInput
                itemClassName={cn('', itemClassName)}
                label="Judul Artikel"
                placeholder="judul artikel"
                forceMsgBox={forceMsgBox}
                {...field} />
            )} />

          <FormField
            name="article"
            control={form.control}
            render={({ field }) => (
              <ItemTextArea
                forceMsgBox={forceMsgBox}
                itemClassName={cn('', itemClassName)}
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
                  itemClassName={cn('', itemClassName)}
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
          {submitClassName && submitClassName.includes("absolute") && (
            <>
              <div className="h-16 w-full absolute bottom-0 z-10 bg-white" />
              <div className="h-16 w-full bg-white" />
            </>
          )}
          <Button
            className={cn('', submitClassName)}
            variant="blue"
            type="submit"
            disabled={disable} >
            Posting
          </Button>
        </form>
      </Form>
    </ScrollArea>
  )
}
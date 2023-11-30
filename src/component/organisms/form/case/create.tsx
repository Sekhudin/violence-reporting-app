"use client"
import { Form, FormField } from "src/component/ui/form";
import { useFormCaseCreate, TypeCase } from "src/service/case/form/create";
import { Button } from "src/component/ui/button";
import { ScrollArea } from 'src/component/ui/scroll-area';
import { ItemInput } from 'src/component/molecules/form-item/input';
import { ItemTextArea } from 'src/component/molecules/form-item/text-area';
import { ItemCombobox } from 'src/component/molecules/form-item/combo-box';
import { ItemDateTimePicker } from 'src/component/molecules/form-item/datetime-picker';
import { useToast } from "src/component/ui/use-toast";
import { FromCom, cn } from "src/util";
import { Constant } from './case.constant';

export type FormCaseCreateProps = {
  className?: string;
  itemClassName?: string;
  submitClassName?: string;
  forceMsgBox?: boolean;
  rows?: number;
}

export function FormCaseCreate({ className, itemClassName, submitClassName, forceMsgBox, rows }: FormCaseCreateProps) {
  const [form, onSubmit, disable] = useFormCaseCreate();
  const { toast } = useToast();

  return (
    <>
      <Form {...form}>
        <form
          method="POST"
          className={cn('flex flex-col', className)}
          onSubmit={form.handleSubmit(onSubmit)}>
          <ScrollArea className='relative max-h-96 flex flex-col'>
            <FormField
              name="id_card"
              control={form.control}
              render={({ field }) => (
                <ItemInput
                  itemClassName={cn('px-4', itemClassName)}
                  label="No KTP"
                  placeholder="16 digit nomot ktp"
                  description="Ex: 334302xxxxxx002"
                  {...field} />
              )} />

            <FormField
              name="name"
              control={form.control}
              render={({ field }) => (
                <ItemInput
                  itemClassName={cn('px-4', itemClassName)}
                  label="Nama"
                  placeholder="Nama sesuai KTP"
                  description="Ex: John Doe"
                  {...field} />
              )} />

            <FormField
              name="address"
              control={form.control}
              render={({ field }) => (
                <ItemTextArea
                  itemClassName={cn('px-4', itemClassName)}
                  label="Alamat"
                  rows={rows}
                  placeholder="Alamat sesuai ktp"
                  {...field} />
              )} />

            <FormField
              name="phone"
              control={form.control}
              render={({ field }) => (
                <ItemInput
                  itemClassName={cn('px-4', itemClassName)}
                  label="Telepon/WA"
                  placeholder="Nomor telephone"
                  {...field} />
              )} />

            <FormField
              name="title"
              control={form.control}
              render={({ field }) => (
                <ItemTextArea
                  itemClassName={cn('px-4', itemClassName)}
                  label="Judul"
                  rows={rows}
                  placeholder="Judul aduan"
                  {...field} />
              )} />

            <FormField
              name="type_incident"
              control={form.control}
              render={({ field }) => (
                <ItemCombobox
                  itemClassName={cn('px-4', itemClassName)}
                  label="Jenis Kekerasan"
                  placeholder="Cari tipe..."
                  listValue={Constant.typeCaseList}
                  onSelect={(val) => form.setValue('type_incident', val as TypeCase)}
                  {...field}
                />
              )} />

            <FormField
              name="location_incident"
              control={form.control}
              render={({ field }) => (
                <ItemTextArea
                  itemClassName={cn('px-4', itemClassName)}
                  label="Lokasi Kejadian"
                  rows={rows}
                  placeholder="Lokasi rinci"
                  {...field} />
              )} />

            <FormField
              name="date_incident"
              control={form.control}
              render={({ field }) => (
                <ItemDateTimePicker
                  itemClassName={cn('px-4', itemClassName)}
                  mode="single"
                  label="Waktu Kejadian"
                  placeholder="Hari tanggal kejadian"
                  selected={field.value}
                  onSelect={field.onChange}
                  toDate={new Date()}
                  {...field} />
              )} />

            <FormField
              name="description"
              control={form.control}
              render={({ field }) => (
                <ItemTextArea
                  itemClassName={cn('px-4', itemClassName)}
                  label="Deskripsi"
                  rows={rows}
                  placeholder="Deskripsi rinci"
                  {...field} />
              )} />

            <FormField
              name="evidence"
              control={form.control}
              render={({ field }) => (
                <ItemTextArea
                  itemClassName={cn('px-4', itemClassName)}
                  label="Barang Bukti"
                  rows={rows}
                  placeholder="Jika ada"
                  {...field} />
              )} />

            <FormField
              name="evidence_img"
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
                    label="Gambar Bukti"
                    placeholder="Jika ada"
                    forceMsgBox={forceMsgBox}
                    onChange={(e) => {
                      field.onChange(e);
                      const image = FromCom.getImageFile(e);
                      form.setValue('imageFile', image);
                      if (!image) {
                        toast({
                          variant: "error",
                          title: "File Not Found",
                          description: "Lokasi gambar tidak ditemukan"
                        })

                      }

                    }}
                    {...inputProps} />
                )
              }} />
          </ScrollArea>


          <Button
            className={cn("grow", submitClassName)}
            variant="blue"
            type="submit"
            disabled={disable}>
            Laporkan
          </Button>
        </form>
      </Form>
    </>
  )
}
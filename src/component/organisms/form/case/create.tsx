"use client"
import { Form, FormField } from "src/component/ui/form";
import { useFormCaseCreate, CaseType } from "src/service/case/form/create";
import { Button } from "src/component/ui/button";
import { ScrollArea } from 'src/component/ui/scroll-area';
import { ItemInput } from 'src/component/molecules/form-item/input';
import { ItemTextArea } from 'src/component/molecules/form-item/text-area';
import { ItemCombobox, ItemComboboxProps } from 'src/component/molecules/form-item/combo-box';
import { ItemDateTimePicker } from 'src/component/molecules/form-item/datetime-picker';
import { cn, FunComponent } from "src/util";

const typeCaseList: ItemComboboxProps<CaseType>['listValue'] = [
  { label: 'Verbal', value: 'verbal' },
  { label: 'Fisik', value: 'fisik' },
  { label: 'Psikologis', value: 'psikologis' },
  { label: 'Seksual', value: 'seksual' },
  { label: 'KDRT', value: 'kekerasan dalam rumah tangga' },
  { label: 'Lainya', value: 'lainya' },
]

export type FormCaseCreateProps = {
  className?: string;
  itemClassName?: string;
  submitClassName?: string;
  forceMsgBox?: boolean;
  rows?: number;
}

export function FormCaseCreate({
  className,
  itemClassName,
  submitClassName,
  forceMsgBox,
  rows
}: FormCaseCreateProps) {
  const [form, onSubmit, onValidationError, disable] = useFormCaseCreate();

  return (
    <ScrollArea>
      <Form {...form}>
        <form
          method="POST"
          className={cn('flex flex-col', className)}
          onSubmit={form.handleSubmit(onSubmit, onValidationError)}>
          <FormField
            name="id_card"
            control={form.control}
            render={({ field }) => (
              <ItemInput
                itemClassName={cn('', itemClassName)}
                label="No KTP"
                placeholder="16 digit nomot ktp"
                description="Ex: 334302xxxxxx002"
                forceMsgBox={forceMsgBox}
                {...field} />
            )} />

          <FormField
            name="name"
            control={form.control}
            render={({ field }) => (
              <ItemInput
                itemClassName={cn('', itemClassName)}
                label="Nama"
                placeholder="Nama sesuai KTP"
                description="Ex: John Doe"
                forceMsgBox={forceMsgBox}
                {...field} />
            )} />

          <FormField
            name="address"
            control={form.control}
            render={({ field }) => (
              <ItemTextArea
                itemClassName={cn('', itemClassName)}
                label="Alamat"
                rows={rows}
                placeholder="Alamat sesuai ktp"
                forceMsgBox={forceMsgBox}
                {...field} />
            )} />

          <FormField
            name="phone"
            control={form.control}
            render={({ field }) => (
              <ItemInput
                itemClassName={cn('', itemClassName)}
                label="Telepon/WA"
                placeholder="Nomor telephone"
                forceMsgBox={forceMsgBox}
                {...field} />
            )} />

          <FormField
            name="title"
            control={form.control}
            render={({ field }) => (
              <ItemInput
                itemClassName={cn('', itemClassName)}
                label="Judul"
                placeholder="Judul aduan"
                forceMsgBox={forceMsgBox}
                {...field} />
            )} />

          <FormField
            name="type_incident"
            control={form.control}
            render={({ field }) => (
              <ItemCombobox
                itemClassName={cn('', itemClassName)}
                label="Jenis Kekerasan"
                placeholder="Cari tipe..."
                listValue={typeCaseList}
                onSelect={(val) => form.setValue('type_incident', val as CaseType)}
                forceMsgBox={forceMsgBox}
                {...field}
              />
            )} />

          <FormField
            name="location_incident"
            control={form.control}
            render={({ field }) => (
              <ItemTextArea
                itemClassName={cn('', itemClassName)}
                label="Lokasi Kejadian"
                rows={rows}
                placeholder="Lokasi rinci"
                forceMsgBox={forceMsgBox}
                {...field} />
            )} />

          <FormField
            name="date_incident"
            control={form.control}
            render={({ field }) => (
              <ItemDateTimePicker
                itemClassName={cn('', itemClassName)}
                mode="single"
                label="Waktu Kejadian"
                placeholder="Hari tanggal kejadian"
                selected={field.value}
                onSelect={field.onChange}
                toDate={new Date()}
                forceMsgBox={forceMsgBox}
                {...field} />
            )} />

          <FormField
            name="description"
            control={form.control}
            render={({ field }) => (
              <ItemTextArea
                itemClassName={cn('', itemClassName)}
                label="Deskripsi"
                rows={rows}
                placeholder="Deskripsi rinci"
                forceMsgBox={forceMsgBox}
                {...field} />
            )} />

          <FormField
            name="evidence"
            control={form.control}
            render={({ field }) => (
              <ItemTextArea
                itemClassName={cn('', itemClassName)}
                label="Barang Bukti"
                rows={rows}
                placeholder="Jika ada"
                forceMsgBox={forceMsgBox}
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
                  itemClassName={cn('', itemClassName)}
                  type="file"
                  accept="image/jpeg, image/jpg, image/png"
                  label="Gambar Bukti"
                  placeholder="Jika ada"
                  forceMsgBox={forceMsgBox}
                  onChange={(e) => {
                    field.onChange(e);
                    const image = FunComponent.getImageFile(e);
                    form.setValue('imageFile', image);
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
            className={cn("grow", submitClassName)}
            variant="blue"
            type="submit"
            disabled={disable}>
            Laporkan
          </Button>
        </form>
      </Form>
    </ScrollArea>
  )
}
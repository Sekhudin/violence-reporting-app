"use client"
import { Form, FormField } from "src/component/ui/form";
import { useFormUserLogin } from "src/service/user/form/login";
import { Button } from "src/component/ui/button";
import { ItemInput } from 'src/component/molecules/form-item/input';
import { ItemPassword } from "src/component/molecules/form-item/password";
import { cn } from "src/util";

export type FormUserLoginProps = {
  className?: string;
  itemClassName?: string;
  forceMsgBox?: boolean;
}

export function FormUserLogin({ className, itemClassName, forceMsgBox }: FormUserLoginProps) {
  const [form, onSubmit, disable] = useFormUserLogin()

  return (
    <>
      <Form {...form}>
        <form
          method="POST"
          className={cn('flex flex-col space-y-4', className)}
          onSubmit={form.handleSubmit(onSubmit)}>
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <ItemInput
                itemClassName={cn('', itemClassName)}
                label="Email"
                placeholder="Email"
                description="Ex: johndoe@mail.com"
                {...field} />
            )} />

          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <ItemPassword
                forceMsgBox={forceMsgBox}
                itemClassName={cn('', itemClassName)}
                desClassName=""
                label="Password"
                placeholder="Password"
                {...field} />
            )} />
          <Button
            variant="blue"
            type="submit"
            disabled={disable} >Masuk</Button>
        </form>
      </Form>
    </>
  )
}
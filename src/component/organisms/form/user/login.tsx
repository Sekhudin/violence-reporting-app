"use client"
import { Form, FormField } from "src/component/ui/form";
import { useFormUserLogin } from "src/service/user/form/login";
import { Button } from "src/component/ui/button";
import { ItemInput } from 'src/component/molecules/form-item/input';
import { ItemPassword } from "src/component/molecules/form-item/password";
import { ScrollArea } from "src/component/ui/scroll-area";
import { cn } from "src/util";

export type FormUserLoginProps = {
  className?: string;
  itemClassName?: string;
  submitClassName?: string;
  forceMsgBox?: boolean;
}

export function FormUserLogin({
  className,
  itemClassName,
  submitClassName,
  forceMsgBox,
}: FormUserLoginProps) {
  const [form, onSubmit, onValidationError, disable] = useFormUserLogin()

  return (
    <ScrollArea>
      <Form {...form}>
        <form
          method="POST"
          className={cn('flex flex-col', className)}
          onSubmit={form.handleSubmit(onSubmit, onValidationError)}>
          <FormField
            name="email"
            control={form.control}
            render={({ field }) => (
              <ItemInput
                itemClassName={cn('', itemClassName)}
                label="Email"
                placeholder="Email"
                description="Ex: johndoe@mail.com"
                forceMsgBox={forceMsgBox}
                {...field} />
            )} />

          <FormField
            name="password"
            control={form.control}
            render={({ field }) => (
              <ItemPassword
                itemClassName={cn('', itemClassName)}
                desClassName=""
                label="Password"
                placeholder="Password"
                forceMsgBox={forceMsgBox}
                {...field} />
            )} />
          {submitClassName && submitClassName.includes("absolute") && (
            <>
              <div className="h-16 w-full absolute bottom-0 z-10 bg-white" />
              <div className="h-16 w-full bg-white" />
            </>
          )}
          <Button
            className={cn("", submitClassName)}
            variant="blue"
            type="submit"
            disabled={disable} >Masuk</Button>
        </form>
      </Form>
    </ScrollArea>
  )
}
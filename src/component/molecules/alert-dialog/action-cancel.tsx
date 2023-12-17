import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "src/component/ui/alert-dialog";
import { Button, ButtonProps } from "src/component/ui/button";
import { FunStr, cn } from "src/util";

export type AlertActionCancelProps = {
  description: string;
  action: {
    actionName?: string;
  } & Omit<ButtonProps, 'children'>;
  cancel?: {
    actionName?: string;
  } & Omit<ButtonProps, 'children'>;
  onClose?: (e: Event) => void;
  title?: string
} & ButtonProps;

export function AlertActionCancel({
  children,
  title,
  description,
  action,
  cancel = {},
  onClose,
  ...triggerProps
}: AlertActionCancelProps) {
  const { actionName, className: actionClassName, ...actionProps } = action;
  const { actionName: cancelName, className: cancelClassname, ...cancelProps } = cancel;

  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button {...triggerProps}>{children}</Button>
      </AlertDialogTrigger>

      <AlertDialogContent
        className="p-4 rounded-lg w-10/12 sm:w-[450px] max-w-[80vw]"
        onCloseAutoFocus={onClose}>
        <AlertDialogHeader>
          <AlertDialogTitle className="text-base lg:text-lg font-medium">
            {FunStr.capitalFirst(title || "Konfirmasi")}
          </AlertDialogTitle>

          <AlertDialogDescription className="text-sm lg:text-base font-light">
            {FunStr.capitalFirst(description)}
          </AlertDialogDescription>
        </AlertDialogHeader>

        <AlertDialogFooter>
          <AlertDialogCancel
            className={cn(`px-3 py-1.5 h-fit rounded-sm md:rounded-md font-medium`,
              cancelClassname)}
            {...cancelProps}>
            {FunStr.capitalFirst(cancelName || "batal")}
          </AlertDialogCancel>

          <AlertDialogAction
            className={cn(`px-3 py-1.5 h-fit rounded-sm md:rounded-md font-medium text-white
            bg-cyan-900 hover:bg-cyan-900/90`,
              actionClassName)}
            {...actionProps}>
            {FunStr.capitalFirst(actionName || "ok")}
          </AlertDialogAction>
        </AlertDialogFooter>

      </AlertDialogContent>
    </AlertDialog>
  )
}
import { Button } from "src/component/ui/button";
import { cn } from "src/util";

export const TextParagraph = ({ children, className }: { className?: string } & React.PropsWithChildren) => (
  <p className={cn('mt-4 text-center font-medium text-lg md:text-2xl', className)}>
    {children}
  </p>);

export const TextSpan = ({ text, className }: { text: string; className?: string }) => (
  <span className={cn('text-red-500', className)}>
    {text}
  </span>);

export const AnchorButton = ({ className, children, asButton, ...props }: { asButton?: boolean } & React.AnchorHTMLAttributes<HTMLAnchorElement>) => (
  <>{asButton ? (
    <Button className={cn(`w-9/12 md:w-fit truncate hover:bg-amber-500 hover:text-white
        px-12 text-xl font-medium max-w-xs`, className)}>
      {children}
    </Button>
  ) : (
    <a className={cn(`inline-flex items-center justify-center whitespace-nowrap
      rounded-md ring-offset-background transition-colors focus-visible:outline-none
      focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2
      disabled:cursor-not-allowed disabled:opacity-60 w-9/12 md:w-fit truncate
      hover:bg-amber-500 hover:text-white px-12 text-xl
      font-medium max-w-xs h-10 py-2`, className)} {...props}>
      {children}
    </a>
  )}
  </>
);

export const TitleBorder = ({ children, className }: { className?: string } & React.PropsWithChildren) => (
  <p className={cn('w-fit py-1 px-12 rounded-lg semi_heading_3', className)}>
    {children}
  </p>)

export const TextBorder = ({ children, className }: { className?: string } & React.PropsWithChildren) => (
  <p className={cn('w-fit flex flex-col items-center text-base font-normal rounded-xl p-4 md:p-6', className)}>
    {children}
  </p>)

export const TextBlock = ({ children, className }: { className?: string } & React.PropsWithChildren) => (
  <p className={cn("w-fit py-4 md:py-6 px-6 md:px-8 text-white font-medium rounded-xl", className)}>
    {children}
  </p>)

export const EmptyBorderBox = ({ className }: { className?: string }) => (<div className={cn("h-16 w-16 rounded-xl", className)} />)
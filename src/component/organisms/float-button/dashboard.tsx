import { PlusIcon, PencilLineIcon, UserPlusIcon } from 'lucide-react'
import { Button } from 'src/component/ui/button';
import { DropdownMenu } from "src/component/ui/dropdown-menu";
import { DropdownMenuTrigger, DropdownMenuContent } from "src/component/ui/dropdown-menu";
import { DialogArticleCreate } from 'src/component/organisms/dialog/article/create';
import { DialogUserCreate } from 'src/component/organisms/dialog/user/create';
import { cn } from 'src/util';

export type FloatButtonDashboardProps = {
  className?: string;
  itemClassName?: string;
  itemTriggerClassName?: string;
}
export function FloatButtonDashboard({
  className,
  itemClassName = "w-fit h-fit m-0 p-2.5 rounded-full cursor-pointer",
}: FloatButtonDashboardProps) {
  return (
    <DropdownMenu modal>
      <DropdownMenuTrigger
        asChild
        className={cn('', className)}>
        <Button
          className="fixed z-50 rounded-full m-0 p-3 w-fit h-fit bottom-32 right-12
          lg:bottom-20"
          variant="amber">
          <PlusIcon className='w-8 h-8' />
        </Button>
      </DropdownMenuTrigger>

      <DropdownMenuContent
        className='min-w-0 shadow-none drop-shadow-none border-none rounded-none
          bg-transparent flex flex-col items-center space-y-2 mb-2 py-0 px-1.5'
        align='end'
        side='top'>

        <DialogUserCreate>
          <Button
            className={cn('', itemClassName)}
            variant="blue">
            <UserPlusIcon className='w-6 h-6' />
          </Button>
        </DialogUserCreate>

        <DialogArticleCreate>
          <Button
            className={cn('', itemClassName)}
            variant="blue">
            <PencilLineIcon className='w-6 h-6' />
          </Button>
        </DialogArticleCreate>

      </DropdownMenuContent>
    </DropdownMenu>
  )
}
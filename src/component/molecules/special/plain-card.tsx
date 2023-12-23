import { Card, CardContent } from 'src/component/ui/card';
import { cn } from "src/util";

export const PlainCard = ({ children, className }: { className?: string } & React.PropsWithChildren) => (
  <Card className={cn('p-4', className)}>
    <CardContent className='p-0'>
      {children}
    </CardContent>
  </Card>)
import { cn } from 'src/util';
import { Props } from './map.type';
import { Card, CardTitle, CardHeader, CardContent, CardDescription, CardFooter } from 'src/component/ui/card';

export type ContactsMapProps = Props.ContactsMap
export function ContactsMap({ contactList, className, itemClassName }: ContactsMapProps) {
  return (
    <>
      <div className={cn(`flex`, className)}>
        {contactList.map(({ type, name, telp, address, maps, widthMap, heightMap }, key) => (
          <Card key={key} className={cn(`grow`, itemClassName)}>
            <CardHeader>
              <CardTitle className='font-medium text-base'>{name}</CardTitle>
              <CardDescription className='text-sm'>{address}</CardDescription>
              <CardDescription className='text-sm'>{telp}</CardDescription>
            </CardHeader>
            <CardContent>
              {/* <iframe
                style={{ border: 0 }}
                src={maps}
                width={widthMap}
                height={heightMap}
                title={name}
                allowFullScreen
                loading='lazy'
                referrerPolicy='no-referrer-when-downgrade'
              /> */}
              <CardFooter>

              </CardFooter>
            </CardContent>
          </Card>
        ))}
      </div>
    </>
  )
}
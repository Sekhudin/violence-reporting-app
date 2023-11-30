import { Accordion, AccordionItem, AccordionTrigger, AccordionContent } from 'src/component/ui/accordion';
import { Props } from './accordion.type';

export type ListAccordionProps = Props.ListAccordion;
export function ListAccordion({
  accordionList,
  type,
  className,
  itemClassName,
  triggerClassName,
  contentClassName
}: ListAccordionProps) {
  const defType = type || 'single'
  const props = defType === 'multiple' ? {} : { collapsible: true }
  return (
    <>
      <Accordion className={className} type={defType} {...props}>
        {accordionList.map(({
          trigger,
          content,
          triggerClassName: tgClass,
          contentClassName: ctClass }, key) => (
          <AccordionItem key={key} className={itemClassName} value={`item-${key}`}>
            <AccordionTrigger className={`${triggerClassName} ${tgClass}`}>
              {trigger}
            </AccordionTrigger>
            <AccordionContent className={`${contentClassName} ${ctClass}`}>
              {content}
            </AccordionContent>
          </AccordionItem>
        ))}
      </Accordion>
    </>
  )
}
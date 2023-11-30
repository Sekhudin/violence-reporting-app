import { Props } from './text.type';

export type LinksTextProps = Props.LinksText;
export function LinksText({ linkList, className, itemsClassName }: LinksTextProps) {
  return (
    <>
      <div className={className}>
        {linkList.map(({ title, href, className: clsName }, key) => (
          <a
            key={key}
            href={href}
            className={`${itemsClassName} ${clsName}`}>
            {title}
          </a>
        ))}
      </div>
    </>
  )
}
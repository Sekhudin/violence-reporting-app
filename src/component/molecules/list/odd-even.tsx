import { Props } from './odd-even.type';

export type ListOddEvenProps = Props.ListOddEven;
export function ListOddEven({
  textList,
  className,
  oddItemClassName,
  evenItemClassName,
  oddClassName,
  evenClassName,
  withLabel
}: ListOddEvenProps) {
  return (
    <>
      <ul className={className}>
        {textList.map(({ text, label }, key) => (
          <li key={key} className={`${key % 2 === 0 ? evenItemClassName : oddItemClassName}`}>
            <div className={`${key % 2 === 0 ? evenClassName : oddClassName}`}>
              {withLabel && <span>{label}</span>}
              <span>{text}</span>
            </div>
          </li>
        ))}
      </ul>
    </>
  )
}
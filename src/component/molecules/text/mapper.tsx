import { Props } from './mapper.type';

export type TextMapperProps = Props.TextMapper;
export function TextMapper({ mapper, className, itemClassName }: TextMapperProps) {
  const array = Array.from({ length: mapper.numOfText })
  return (
    <div className={className}>
      {array.map((value, key) => (
        <p key={key} className={itemClassName}>
          {mapper.text}
        </p>
      ))}
    </div>
  )
}
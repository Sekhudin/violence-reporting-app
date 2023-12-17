import { cn } from "src/util";

type TextWMDictionary = {
  text: string;
  className?: string
}

export type PdfTextWatermarkProps<RT extends string> = {
  dict: Record<RT, TextWMDictionary>;
  selected: RT;
  exclude?: RT[];
  className?: string;
}

export function PdfTextWatermark<RT extends string>({
  dict,
  selected,
  exclude,
  className
}: PdfTextWatermarkProps<RT>) {
  const watermark: string = dict[selected].text;
  const watermarkStyle: string | undefined = dict[selected].className || className;

  if (exclude?.includes(selected)) return null;
  return (
    <p className={cn(`text-4xl font-bold absolute top-5 left-10 opacity-70`,
      watermarkStyle)}>
      {watermark}
    </p>
  )
}
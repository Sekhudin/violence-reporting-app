import { cn } from "src/util";

export const avoidViolence: AvoidViolence = [
  {
    text: "Mengontrol diri sendiri",
    label: "1"
  },
  {
    text: "Menahan emosi agar tidak mudah marah",
    label: "2"
  },
  {
    text: "Selalu berada di lingkungan yang baik",
    label: "3"
  },
  {
    text: "Melakukan hal-hal positif",
    label: "4"
  }
]

type AvoidViolence = Record<'text' | 'label', string>[];
export const SelfAvoidViolence = ({ className }: { className?: string }) => (
  <div className={cn('block', className)}>{avoidViolence.map((v, key) => {

    if (key % 2 === 0) return (
      <div key={key} className={`mt-4 py-4 px-6 rounded-lg border-2 border-amber-400`}>
        <div className={`flex items-start space-x-4 text-lg font-medium`}>
          <span>{v.label}</span>
          <span>{v.text}</span>
        </div>
      </div>);

    if (key % 2 !== 0) return (
      <div key={key} className={`mt-4 py-4 px-6 rounded-lg border-2 border-blue-400`}>
        <div className={`flex items-start space-x-4 text-lg font-medium`}>
          <span>{v.label}</span>
          <span>{v.text}</span>
        </div>
      </div>)

  })}
  </div>)
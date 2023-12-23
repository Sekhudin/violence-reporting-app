import { cn } from "src/util";

const appVision: AppVision = [
  {
    label: "01",
    text: "Membantu masyarakat Kota Batam dalam misi pelaporan tindak kekerasan demi mencapai kesejahteraan hidup."
  },
]

type AppVision = Record<'label' | 'text', string>[];
export const AppVission = ({ className }: { className?: string }) => (
  <ul className={cn('block mt-4', className)}>
    {appVision.map((v, key) => {

      if (key % 2 === 0) return (
        <li key={key} className={`bg-amber-400 shadow-lg rounded-md mb-4 p-1`}>
          <div className={`flex space-x-4 bg-white px-4 py-6 md:py-10 text-center`}>
            <span className="hidden">{v.label}</span>
            <span>{v.text}</span>
          </div>
        </li>);

      if (key % 2 !== 0) return (
        <li key={key} className={`bg-blue-700 shadow-lg rounded-md mb-4 p-1`}>
          <div className={`flex space-x-4 bg-white px-4 py-6 md:py-10 text-center`}>
            <span className="hidden">{v.label}</span>
            <span>{v.text}</span>
          </div>
        </li>);
    })}
  </ul>)
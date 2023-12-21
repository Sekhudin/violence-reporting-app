import { cn } from "src/util";

const appMission: AppMission = [
  {
    label: "01",
    text: "Menyediakan sarana pelaporan kekerasan dalam bentuk aplikasi"
  },
  {
    label: "02",
    text: "Membantu upaya pencegahan dan penanganan atas berbagai tindak kekerasan"
  },
  {
    label: "03",
    text: "Memberikan edukasi dan informasi terkait pencegahan serta penanganan kekerasan"
  }
]

type AppMission = Record<'label' | 'text', string>[];
export const AppMission = ({ className }: { className?: string }) => (
  <ul className={cn('block mt-4', className)}>
    {appMission.map((v, key) => {

      if (key % 2 === 0) return (
        <li key={key} className={`bg-blue-700 mb-4 pl-2 shadow-lg rounded-md`}>
          <div className={`flex text-start space-x-4 bg-white px-4 py-6 md:py-10`}>
            <span>{v.label}</span>
            <span>{v.text}</span>
          </div>
        </li>);

      if (key % 2 !== 0) return (
        <li key={key} className={`bg-blue-700 mb-4 pr-2 shadow-lg rounded-md`}>
          <div className={`flex text-start space-x-4 bg-white px-4 py-6 md:py-10`}>
            <span>{v.label}</span>
            <span>{v.text}</span>
          </div>
        </li>);
    })}
  </ul>)
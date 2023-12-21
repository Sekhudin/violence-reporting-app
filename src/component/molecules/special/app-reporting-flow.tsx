import { cn } from "src/util";

const reportFlow: ReportFlow = [
  { label: "1", text: "Buat Laporan" },
  { label: "2", text: "Laporan diverifikasi" },
  { label: "3", text: "Laporan diproses" },
  { label: "4", text: "Laporan selesai" }
]

type ReportFlow = { label: string; text: string }[];
export const AppReportingFlow = ({ className }: { className?: string }) => (
  <ul className={cn('flex flex-wrap justify-center', className)}>
    {reportFlow.map((v, key) => {

      if (key % 2 === 0) return (
        <li key={key} className={`border-2 p-2 m-4 md:m-6 basis-full md:basis-0 rounded-lg 
          md:font-medium md:text-lg border_color_amber text_blue`}>
          <div className={`flex items-center space-x-4 p-8`}>
            <span>{v.label}</span>
            <span>{v.text}</span>
          </div>
        </li>);

      if (key % 2 !== 0) return (
        <li key={key} className={`border-2 p-2 m-4 md:m-6 basis-full md:basis-0 rounded-lg 
          md:font-medium md:text-lg border_color_amber text_blue`}>
          <div className={`flex items-center space-x-4 p-8`}>
            <span>{v.label}</span>
            <span>{v.text}</span>
          </div>
        </li>);
    })}
  </ul>);
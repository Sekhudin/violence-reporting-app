import Image, { StaticImageData } from "next/image"
import { Icon } from "src/component/static-file/icon"
import { cn } from "src/util"

const objectives: AppObjective[] = [{
  image: Icon.file01,
  title: "Kesejahteraan",
  description: `Membantu membela kesejahteraan korban
  tindakan kekerasan dengan membantu melaporkan.`,
},
{
  image: Icon.file03,
  title: "Perlindungan",
  description: `Membantu memberi perlindungan dari
  pihak kepolisian, lembaga sosial, atau pihak lainnya`,
},
{
  image: Icon.file02,
  title: "Kesehatan",
  description: `Membantu memberi layanan kesehatan
  meliputi pemeriksaan, tindakan, dan perawatan medis.`,
}]

type AppObjective = { image: StaticImageData } & Record<'title' | 'description', string>
export const AppObjective = ({ className }: { className?: string }) => (
  <ul className={cn('flex flex-wrap justify-center', className)}>{objectives.map((v, key) => (
    <li key={key} className={`sm:max-w-sm flex flex-col items-center mb-6 mx-3 p-8 rounded-xl border_amber`}>
      <div className="mb-6">
        <Image src={v.image} alt={v.title} />
      </div>
      <div className={`flex flex-col items-center text-center space-y-4`}>
        <h2 className='font-semibold'>{v.title}</h2>
        <p>{v.description}</p>
      </div>
    </li>
  ))}
</ul>)
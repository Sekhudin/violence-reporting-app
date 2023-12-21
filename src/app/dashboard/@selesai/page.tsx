import { PlainCard } from 'src/component/molecules/special/plain-card';
import { DataTableCases } from "src/component/organisms/data-table/case";
import { CaseProvider } from 'src/component/context/provider';

export default async function Page() {
  return (
    <CaseProvider>
      <section className="h-full flex flex-col items-center space-y-2 lg:space-y-4">
        <PlainCard className="grow h-full lg:rounded-b-none w-fit md:w-full">
          <DataTableCases
            className="max-w-[83vw] sm:max-w-[90vw] md:max-w-[90vw]
            lg:max-w-[67vw] xl:max-w-full"
            status="selesai"
            title="kasus kekerasan selesai"
            subtitle="cases of violence resolved"
            pageSize={10} />
        </PlainCard>
      </section>
    </CaseProvider>
  )
}
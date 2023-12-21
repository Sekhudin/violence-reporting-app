import { CardBasic } from "src/component/atoms/card/basic";
import { DataTableCases } from "src/component/organisms/data-table/case";
import { CaseProvider } from 'src/component/context/provider';

export default async function Page() {
  return (
    <CaseProvider>
      <section className="h-full flex flex-col items-center space-y-2 lg:space-y-4">
        <CardBasic className="grow h-full lg:rounded-b-none w-fit md:w-full">
          <DataTableCases
            className="max-w-[83vw] sm:max-w-[90vw] md:max-w-[90vw]
            lg:max-w-[67vw] xl:max-w-full"
            status="proses"
            title="kasus kekerasan diproses"
            subtitle="case of violence is being processed"
            pageSize={10} />
        </CardBasic>
      </section>
    </CaseProvider>
  )
}
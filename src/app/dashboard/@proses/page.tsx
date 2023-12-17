import { CardBasic } from "src/component/molecules/card/basic";
import { DataTableCases } from "src/component/organisms/data-table/case";
import { CaseContextProvider } from 'src/component/context/case.context';

export default async function Page() {
  return (
    <CaseContextProvider>
      <main className="h-full flex flex-col items-center space-y-2 lg:space-y-4">
        <CardBasic className="grow h-full lg:rounded-b-none w-fit md:w-full">
          <DataTableCases
            className="max-w-[83vw] sm:max-w-[90vw] md:max-w-[90vw]
            lg:max-w-[67vw] xl:max-w-full"
            status="proses"
            title="kasus kekerasan diproses"
            subtitle="case of violence is being processed"
            pageSize={10} />
        </CardBasic>
      </main>
    </CaseContextProvider>
  )
}
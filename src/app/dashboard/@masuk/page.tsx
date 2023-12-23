import { PlainCard } from 'src/component/molecules/special/plain-card';
import { DataTableCase, DataTableCaseHeader, DataTableCaseTitle, DataTableCaseSubTitle } from "src/component/organisms/data-table/case";
import { CaseProvider } from "src/component/context/provider";

export default async function Page() {
  return (
    <CaseProvider>
      <PlainCard className="h-full overflow-hidden">
        <DataTableCaseHeader>
          <DataTableCaseTitle text='laporan baru' />
          <DataTableCaseSubTitle text='incoming violence report' />
        </DataTableCaseHeader>
        <DataTableCase status="masuk"
          className="h-[50vh]"
          pageSize={10} />
      </PlainCard>
    </CaseProvider>
  )
}
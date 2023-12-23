import { PlainCard } from 'src/component/molecules/special/plain-card';
import { DataTableCase, DataTableCaseHeader, DataTableCaseTitle, DataTableCaseSubTitle } from "src/component/organisms/data-table/case";
import { CaseProvider } from "src/component/context/provider";

export default async function Page() {
  return (
    <CaseProvider>
      <PlainCard className="h-full overflow-hidden">
        <DataTableCaseHeader>
          <DataTableCaseTitle text='kasus selesai' />
          <DataTableCaseSubTitle text='case closed' />
        </DataTableCaseHeader>
        <DataTableCase status="selesai"
          className="h-[55vh]"
          pageSize={10} />
      </PlainCard>
    </CaseProvider>
  )
}
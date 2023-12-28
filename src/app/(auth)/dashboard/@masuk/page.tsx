import { PlainCard } from 'src/component/molecules/special/plain-card';
import { DataTableCase, DataTableCaseHeader, DataTableCaseTitle, DataTableCaseSubTitle } from "src/component/organisms/data-table/case";

export default async function Page() {
  return (
    <PlainCard className="h-full w-full overflow-hidden">
      <DataTableCaseHeader>
        <DataTableCaseTitle text='laporan baru' />
        <DataTableCaseSubTitle text='incoming report' />
      </DataTableCaseHeader>
      <DataTableCase status="masuk"
        className="h-[50vh] w-full"
        pageSize={10} />
    </PlainCard>
  )
}
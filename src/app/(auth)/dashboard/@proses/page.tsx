import { PlainCard } from 'src/component/molecules/special/plain-card';
import { DataTableCase, DataTableCaseHeader, DataTableCaseTitle, DataTableCaseSubTitle } from "src/component/organisms/data-table/case";

export default async function Page() {
  return (
    <PlainCard className="h-full w-full overflow-hidden">
      <DataTableCaseHeader>
        <DataTableCaseTitle text='laporan diproses' />
        <DataTableCaseSubTitle text='report in progress' />
      </DataTableCaseHeader>
      <DataTableCase status="proses"
        className="h-[50vh]"
        pageSize={10} />
    </PlainCard>
  )
}
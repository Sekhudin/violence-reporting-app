import { ColumnDef } from "@tanstack/react-table";
import { column } from 'src/component/molecules/data-table';
import { Case } from 'src/service/case/case.service';
import { CaseDropdownAction } from './action';

type GetColumnParam = {
  status: Case.Status;
}
export function getColumns({ status }: GetColumnParam): ColumnDef<Case.Expose>[] {
  const columns: ColumnDef<Case.Expose>[] = [
    column({ accessorKey: "id_card", header: "No. KTP", headerType: "order", cellType: "fold-wrd" }),
    column({ accessorKey: "type_incident", header: "Tipe", cellType: "abbrev" }),
    column({ accessorKey: "date_incident", header: "Tanggal", headerType: "order", cellType: "date", }),
    column({ accessorKey: "title", header: "Aduan", cellType: "fold-stc" }),
    column({ accessorKey: "name", header: "Pengadu", headerType: "order", cellType: "abbrev-name" }),
    { id: "actions", enableHiding: false, cell: (ctx) => <CaseDropdownAction status={status} cellContext={ctx} /> },
  ]
  return columns;
}
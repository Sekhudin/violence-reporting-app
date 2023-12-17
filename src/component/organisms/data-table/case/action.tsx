import { Case } from 'src/service/case/case.service';
import { ActionIncomingCase } from './action.incoming';
import { ActionOnProcessCase } from './action.onprocess';
import { ActionFinishedCase } from './action.finished';
import { ActionRejectCase } from './action.reject';
import { BaseCaseActionProps } from './type'

type CaseDropdownActionProps<DT extends Case.Expose, DV = unknown> = {
  status: Case.Status;
} & BaseCaseActionProps<DT, DV>;

export function CaseDropdownAction<DT extends Case.Expose, DV = unknown>({
  status,
  cellContext
}: CaseDropdownActionProps<DT, DV>) {
  switch (status) {
    case "masuk":
      return (<ActionIncomingCase cellContext={cellContext} />);
    case "proses":
      return (<ActionOnProcessCase cellContext={cellContext} />);
    case "selesai":
      return (<ActionFinishedCase cellContext={cellContext} />);
    case "tolak":
      return (<ActionRejectCase cellContext={cellContext} />);
    default:
      return (<ActionIncomingCase cellContext={cellContext} />);
  }
}
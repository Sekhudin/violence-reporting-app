import { type CellContext } from '@tanstack/react-table';
import { type Case } from 'src/service/case/case.service';

export type BaseCaseActionProps<DT extends Case.Expose, DV = unknown> = {
  cellContext: CellContext<DT, DV>;
}
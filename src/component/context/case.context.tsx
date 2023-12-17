"use client"
import React from "react";
import { CaseService, Case, Snapshot } from 'src/service/case/case.service';
import { InternalServerErrorException } from "src/util/exception/http.exception";

export type CaseDetail = Case.Expose;
export type CaseStatus = Case.Status;
type CaseList = Case.Expose[];
type CaseCtx = {
  incoming: CaseList | [];
  process: CaseList | [];
  finish: CaseList | [];
  reject: CaseList | [];
}

const CaseContext = React.createContext<CaseCtx>({
  incoming: [],
  process: [],
  finish: [],
  reject: []
});

export function useCaseContext(): CaseCtx {
  const ctx = React.useContext(CaseContext);
  if (!ctx) throw new InternalServerErrorException();
  return ctx;
}

export function useCaseFilterContext(status: CaseStatus) {
  const ctx = React.useContext(CaseContext);
  if (!ctx) throw new InternalServerErrorException();
  let data: CaseList | [] = [];
  if (status === 'masuk') { data = ctx.incoming; };
  if (status === 'proses') { data = ctx.process; };
  if (status === 'selesai') { data = ctx.finish; };
  if (status === 'tolak') { data = ctx.reject; };
  const isEmpty: boolean = data.length === 0;
  return { data, isEmpty };
}

export function CaseContextProvider({ children }: React.PropsWithChildren) {
  const [incoming, setIncoming] = React.useState<CaseList | []>([]);
  const [process, setProcess] = React.useState<CaseList | []>([]);
  const [finish, setFinish] = React.useState<CaseList | []>([]);
  const [reject, setReject] = React.useState<CaseList | []>([]);

  const caseHandler = React.useCallback((ds: Snapshot) => {
    const caseIncoming = CaseService.filterStatusCase(ds, "masuk");
    const caseProcess = CaseService.filterStatusCase(ds, "proses");
    const caseFinish = CaseService.filterStatusCase(ds, "selesai");
    const caseReject = CaseService.filterStatusCase(ds, "tolak");
    setIncoming(caseIncoming);
    setProcess(caseProcess);
    setFinish(caseFinish);
    setReject(caseReject);
  }, []);

  React.useEffect(() => {
    CaseService.onCaseValue(caseHandler)
    return () => {
      CaseService.offValue(caseHandler)
    }
  }, [caseHandler]);

  return (
    <CaseContext.Provider value={{ incoming, process, finish, reject }}>
      {children}
    </CaseContext.Provider>
  )
}
"use client"
import React from "react";
import { CaseOn, CaseOff, CaseUtil, Snapshot } from 'src/service/case/case.service';
import { CaseContext, CaseCtx } from './ctx'

export function CaseProvider({ children }: React.PropsWithChildren) {
  const [incoming, setIncoming] = React.useState<CaseCtx['incoming']>([]);
  const [process, setProcess] = React.useState<CaseCtx['process']>([]);
  const [finish, setFinish] = React.useState<CaseCtx['finish']>([]);
  const [reject, setReject] = React.useState<CaseCtx['reject']>([]);

  const caseHandler = React.useCallback((ds: Snapshot) => {
    const caseIncoming = CaseUtil.filterCase(ds, "masuk");
    const caseProcess = CaseUtil.filterCase(ds, "proses");
    const caseFinish = CaseUtil.filterCase(ds, "selesai");
    const caseReject = CaseUtil.filterCase(ds, "tolak");
    setIncoming(caseIncoming);
    setProcess(caseProcess);
    setFinish(caseFinish);
    setReject(caseReject);
  }, []);

  React.useEffect(() => {
    CaseOn.Value(caseHandler)
    return () => {
      CaseOff.Value(caseHandler)
    }
  }, [caseHandler]);

  return (
    <CaseContext.Provider value={{ incoming, process, finish, reject }}>
      {children}
    </CaseContext.Provider>
  )
}
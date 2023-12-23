"use client"
import React from "react";
import { useError } from "src/component/hooks/use-error";
import { CaseOn, CaseOff, CaseUtil, Snapshot, ErrorCB } from 'src/service/case/case.service';
import { CaseContext, CaseCtx } from './ctx'

export function CaseProvider({ children }: React.PropsWithChildren) {
  const [incoming, setIncoming] = React.useState<CaseCtx['incoming']>([]);
  const [process, setProcess] = React.useState<CaseCtx['process']>([]);
  const [finish, setFinish] = React.useState<CaseCtx['finish']>([]);
  const [reject, setReject] = React.useState<CaseCtx['reject']>([]);
  const [loading, setLoading] = React.useState<CaseCtx['loading']>(true);
  const { error, catchError, catchErrorHandler } = useError();

  const caseHandler = React.useCallback((ds: Snapshot) => {
    const caseIncoming = CaseUtil.filterCase(ds, "masuk");
    const caseProcess = CaseUtil.filterCase(ds, "proses");
    const caseFinish = CaseUtil.filterCase(ds, "selesai");
    const caseReject = CaseUtil.filterCase(ds, "tolak");
    setIncoming(caseIncoming);
    setProcess(caseProcess);
    setFinish(caseFinish);
    setReject(caseReject);
    setLoading(false);
  }, []);

  const errorCallback = React.useCallback<ErrorCB>((err) => {
    const { errorDetail } = catchError(err, 'FAILED_GET cases');
    catchErrorHandler(errorDetail);
    setLoading(false);
  }, [catchError, catchErrorHandler]);

  React.useEffect(() => {
    setLoading(true);
    CaseOn.Value(caseHandler, errorCallback)
    return () => {
      CaseOff.Value(caseHandler)
    }
  }, [caseHandler, errorCallback]);

  return (
    <CaseContext.Provider value={{ incoming, process, finish, reject, loading, error }}>
      {children}
    </CaseContext.Provider>
  )
}
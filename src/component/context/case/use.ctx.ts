"use client"
import React from "react";
import { type Case } from 'src/service/case/case.service';
import { CaseContext, CaseCtx } from './ctx';

export type CaseDetail = Case.Expose;
export type CaseStatus = Case.Status;
export function useCase() {
  const ctx = React.useContext(CaseContext);
  return ctx;
}

export function useCaseFilter(status: CaseStatus) {
  const { loading, error, ...v } = React.useContext(CaseContext);
  let cases: CaseCtx['incoming'] = [];
  switch (status) {
    case 'masuk':
      cases = v.incoming;
      break;
    case 'proses':
      cases = v.process;
      break;
    case 'selesai':
      cases = v.finish;
      break;
    case 'tolak':
      cases = v.reject;
      break;
  }
  return { cases, loading, error };
}
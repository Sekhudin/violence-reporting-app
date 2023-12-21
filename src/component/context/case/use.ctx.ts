"use client"
import React from "react";
import { useToast } from "src/component/ui/use-toast";
import { type Case } from 'src/service/case/case.service';
import { catchError } from "src/util/exception/catch";
import { CaseContext, CaseList } from './ctx';

export type CaseDetail = Case.Expose;
export type CaseStatus = Case.Status;
export function useCase() {
  const { toast } = useToast();
  try {
    const ctx = React.useContext(CaseContext);
    if (!ctx) throw "error";
    return ctx
  } catch (error) {
    const { forToast, errorDetail } = catchError(error,
      "gagal mendapatkan data 'code: case-01'");
    toast(forToast);
    throw error;
  }
}

export function useCaseFilter(status: CaseStatus) {
  const { toast } = useToast();
  try {
    const ctx = React.useContext(CaseContext);
    if (!ctx) throw "error";
    let data: CaseList | [] = [];
    if (status === 'masuk') { data = ctx.incoming; };
    if (status === 'proses') { data = ctx.process; };
    if (status === 'selesai') { data = ctx.finish; };
    if (status === 'tolak') { data = ctx.reject; };
    const isEmpty: boolean = data.length === 0;
    return { data, isEmpty };
  } catch (error) {
    const { forToast, errorDetail } = catchError(error,
      "gagal mendapatkan data 'code: case-02'");
    toast(forToast);
    throw error;
  }
}
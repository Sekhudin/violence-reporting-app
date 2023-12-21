"use client"
import React from "react";
import { type Case } from 'src/service/case/case.service';
import { InternalServerErrorException } from "src/util/exception/http.exception";
import { CaseContext, CaseCtx, CaseList } from './ctx';

export type CaseDetail = Case.Expose;
export type CaseStatus = Case.Status;

export function useCase(): CaseCtx {
  const ctx = React.useContext(CaseContext);
  if (!ctx) throw new InternalServerErrorException();
  return ctx;
}

export function useCaseFilter(status: CaseStatus) {
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
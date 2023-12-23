"use client"
import React from "react";
import { type Case } from 'src/service/case/case.service';
import { HooksWithStatus } from 'src/util/exception/catch';

type CaseList = Case.Expose[];
export type CaseCtx = {
  incoming: CaseList | [];
  process: CaseList | [];
  finish: CaseList | [];
  reject: CaseList | [];
} & HooksWithStatus;

export const CaseContext = React.createContext<CaseCtx>({
  incoming: [],
  process: [],
  finish: [],
  reject: [],
  loading: false,
});
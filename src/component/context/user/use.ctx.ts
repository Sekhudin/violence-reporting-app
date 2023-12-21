"use client"
import React from "react";
import { useToast } from "src/component/ui/use-toast";
import { catchError } from 'src/util/exception/catch';
import { AuthorizedContext, UserContext } from './ctx';

export function useAuthorized() {
  const { toast } = useToast()
  try {
    const ctx = React.useContext(AuthorizedContext);
    if (!ctx) throw "error";
    return ctx.isAuthorized;
  } catch (error) {
    const { forToast, errorDetail } = catchError(error,
      "gagal mendapatkan data  'code: user-01'");
    toast(forToast);
    throw error;
  }
}

export function useUser(){
  const { toast } = useToast()
  try {
    const ctx = React.useContext(UserContext);
    if (!ctx) throw "error";
    return ctx;
  } catch (error) {
    const { forToast, errorDetail } = catchError(error,
      "gagal mendapatkan data  'code: user-02'");
    toast(forToast);
    throw error;
  }
}

export function useUserList(){
  const { toast } = useToast()
  try {
    const ctx = React.useContext(UserContext);
    if (!ctx || !ctx.users) throw "error";
    return ctx.users;
  } catch (error) {
    const { forToast, errorDetail } = catchError(error,
      "gagal mendapatkan data  'code: user-02'");
    toast(forToast);
    throw error;
  }
}

export function useUserSlice(n:number){
  const { toast } = useToast()
  try {
    const ctx = React.useContext(UserContext);
    if (!ctx || !ctx.users) throw "error";
    if(ctx.users.length < n) return ctx.users;
    return ctx.users.slice(0, n);
  } catch (error) {
    const { forToast, errorDetail } = catchError(error,
      "gagal mendapatkan data  'code: user-03'");
    toast(forToast);
    throw error;
  }
}
"use client"
import React from "react";
import { AuthContext, UserContext, UserCtx } from './ctx';

export function useAuth() {
  const ctx = React.useContext(AuthContext);
  return ctx;
}

export function useUser(){
  const ctx = React.useContext(UserContext);
  return ctx;
}

export function useUserSlice(n:number){
  const { users, loading, error } = React.useContext(UserContext);
  let slice: UserCtx['users'] = [];
  if(users.length < n) {
    slice = users;
  } else {
    slice = users.slice(0, n);
  }
  return { slice, loading, error };
}
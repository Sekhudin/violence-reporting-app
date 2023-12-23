"use client"
import React from "react";
import { type User, CurrentUser } from 'src/service/user/user.service';
import { HooksWithStatus } from 'src/util/exception/catch';

export type AuthCtx = {
  authUser: CurrentUser | null;
  user: User.Expose | null;
  redirected: boolean;
  setRedirected: (v:boolean)=> void;
} & HooksWithStatus;

export const AuthContext = React.createContext<AuthCtx>({
  authUser: null,
  user: null,
  redirected: false,
  loading: false,
  setRedirected: ()=> {},
});

type UserList = User.Expose[];
export type UserCtx = {
  users: UserList | [];
} & HooksWithStatus;

export const UserContext = React.createContext<UserCtx>({
  users: [],
  loading: false
})
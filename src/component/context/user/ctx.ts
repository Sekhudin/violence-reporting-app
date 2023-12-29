"use client"
import React from "react";
import { type User, CurrentUser } from 'src/service/user/user.service';
import { HooksWithStatus } from 'src/util/exception/catch';

export type UserRole = User.Role;
export type AuthCtx = {
  authUser: CurrentUser | null;
  user: User.Expose | null;
  isSuperAdmin: boolean;
  redirected: boolean;
  setRedirected: (v:boolean)=> void;
} & HooksWithStatus;

export const AuthContext = React.createContext<AuthCtx>({
  authUser: null,
  user: null,
  isSuperAdmin: false,
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
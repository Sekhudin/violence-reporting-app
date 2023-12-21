"use client"
import React from "react";
import { type User } from 'src/service/user/user.service';

export type AuthorizedCtx = {
  isAuthorized: boolean;
  isBarierShow: boolean;
}

export const AuthorizedContext = React.createContext<AuthorizedCtx>({
  isAuthorized: false,
  isBarierShow: true
});

export type UserList = User.Expose[];
export type UserCtx = {
  users: UserList | [];
}

export const UserContext = React.createContext<UserCtx>({
  users: []
})
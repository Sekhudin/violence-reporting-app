"use client"
import React from "react";

export type AuthorizedCtx = {
  isAuthorized: boolean;
  isBarierShow: boolean;
}

export const AuthorizedContext = React.createContext<AuthorizedCtx>({
  isAuthorized: false,
  isBarierShow: true
})
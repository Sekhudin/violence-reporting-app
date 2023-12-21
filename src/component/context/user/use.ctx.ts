"use client"
import React from "react";
import { InternalServerErrorException } from 'src/util/exception/http.exception';
import { AuthorizedContext } from './ctx';

export function useAuthorized() {
  const authCtx = React.useContext(AuthorizedContext);
  if (!authCtx) throw new InternalServerErrorException();
  return authCtx.isAuthorized;
}
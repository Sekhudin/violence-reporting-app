"use client"
import React from "react";
import { UserOn, UserOff, UserUtil, Snapshot } from 'src/service/user/user.service';
import { UserContext, UserCtx } from './ctx';

export function UserProvider({ children }: React.PropsWithChildren) {
  const [users, setUsers] = React.useState<UserCtx['users']>([])

  const userHandler = React.useCallback((ds: Snapshot) => {
    const result = UserUtil.returnData(ds);
    setUsers(result);
  }, [])

  React.useEffect(() => {
    UserOn.Value(userHandler);
    return () => {
      UserOff.Value(userHandler);
    }
  }, [userHandler])

  return (
    <UserContext.Provider value={{ users }}>
      {children}
    </UserContext.Provider>
  )
}
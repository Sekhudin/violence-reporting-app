"use client"
import React from "react";
import { useError } from "src/component/hooks/use-error";
import { UserOn, UserOff, UserUtil, Snapshot, ErrorCB } from 'src/service/user/user.service';
import { UserContext, UserCtx } from './ctx';

export function UserProvider({ children }: React.PropsWithChildren) {
  const [users, setUsers] = React.useState<UserCtx['users']>([]);
  const [loading, setLoading] = React.useState<UserCtx['loading']>(true);
  const { error, catchError, catchErrorHandler } = useError();

  const userHandler = React.useCallback((ds: Snapshot) => {
    const result = UserUtil.returnData(ds);
    setUsers(result);
    setLoading(false);
  }, []);

  const errorCallback = React.useCallback<ErrorCB>((err) => {
    const { errorDetail } = catchError(err, 'FAILED_GET users');
    catchErrorHandler(errorDetail);
    setLoading(false);
  }, [catchError, catchErrorHandler]);

  React.useEffect(() => {
    setLoading(true);
    UserOn.Value(userHandler, errorCallback);
    return () => {
      UserOff.Value(userHandler);
    }
  }, [errorCallback, userHandler])

  return (
    <UserContext.Provider value={{ users, loading, error }}>
      {children}
    </UserContext.Provider>
  )
}
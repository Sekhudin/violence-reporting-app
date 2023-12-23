"use client"
import React from "react";
import { BarierAuth } from "src/component/atoms/barier/auth";
import { useError } from "src/component/hooks/use-error";
import { UserOn, UserService, UserUtil, CurrentUser } from 'src/service/user/user.service';
import { FloatButtonDashboard } from "src/component/organisms/float-button/dashboard";
import { AuthContext, AuthCtx } from './ctx';

export function AuthProvider({ children }: React.PropsWithChildren) {
  const [authUser, setAuthUser] = React.useState<AuthCtx['authUser']>(null);
  const [user, setUser] = React.useState<AuthCtx['user']>(null);
  const [redirected, setRedirected] = React.useState<AuthCtx['redirected']>(false);
  const [loading, setLoading] = React.useState<AuthCtx['loading']>(true);
  const { error, catchError, catchErrorHandler } = useError();

  const authHandler = React.useCallback(async (v: CurrentUser | null) => {
    if (v) {
      const result = await UserService.findUserById(v.uid);
      const profile = UserUtil.payload(result);
      setAuthUser(v);
      setUser(profile);
      setLoading(false);
    }
  }, []);

  const setRedirectedHandler = React.useCallback((v: boolean) => {
    setRedirected(v);
  }, [])

  React.useEffect(() => {
    setLoading(true);
    UserOn.AuthStateChange(authHandler);
    return () => {
      UserOn.AuthStateChange(authHandler);
    }
  }, [authHandler])

  return (
    <AuthContext.Provider value={{
      authUser,
      user,
      redirected,
      setRedirected: setRedirectedHandler,
      loading,
      error
    }}>
      {children}
      <BarierAuth />
      {/* <FloatButtonDashboard className={!loading && isDashboardPage ? 'block' : 'hidden'} /> */}
    </AuthContext.Provider>
  )
}
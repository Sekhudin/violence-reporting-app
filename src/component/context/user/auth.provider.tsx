"use client"
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { BarierAuth } from "src/component/atoms/barier/auth";
import { useToast } from "src/component/ui/use-toast";
import { useError } from "src/component/hooks/use-error";
import { UserOn, UserService, UserUtil, CurrentUser } from 'src/service/user/user.service';
import { AuthContext, AuthCtx } from './ctx';

export function AuthProvider({ children }: React.PropsWithChildren) {
  const { toast } = useToast();
  const [authUser, setAuthUser] = React.useState<AuthCtx['authUser']>(null);
  const [user, setUser] = React.useState<AuthCtx['user']>(null);
  const [redirected, setRedirected] = React.useState<AuthCtx['redirected']>(false);
  const [loading, setLoading] = React.useState<AuthCtx['loading']>(true);
  const { error, catchError, catchErrorHandler } = useError();

  const [open, setOpen] = React.useState<boolean>(true);
  const router = useRouter();
  const pathname = usePathname();
  const isDashboardPage: boolean = pathname.startsWith('/dashboard');
  const isLoginPage: boolean = pathname.startsWith('/login');

  const authHandler = React.useCallback(async (v: CurrentUser | null) => {
    if (v) {
      const result = await UserService.findUserById(v.uid);
      const profile = UserUtil.payload(result);
      setAuthUser(v);
      setUser(profile);
      setLoading(false);

      if (isLoginPage) {
        router.push("/dashboard");
      }

      if (isDashboardPage) {
        setOpen(false);
        toast({
          title: `Hello ${profile.name}`,
          description: `Selamat datang kembali`
        });
      }
    }

    if (!v || !v.uid) {
      if (isDashboardPage) {
        router.push("/login");
      }

      if (!isDashboardPage) {
        setOpen(false);
      }
    }
  }, [isDashboardPage, isLoginPage, router, toast]);

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
      <BarierAuth open={open} />
    </AuthContext.Provider>
  )
}
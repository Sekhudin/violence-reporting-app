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
  const [isSuperAdmin, setIsSuperAdmin] = React.useState<AuthCtx['isSuperAdmin']>(false);
  const [redirected, setRedirected] = React.useState<AuthCtx['redirected']>(false);
  const [loading, setLoading] = React.useState<AuthCtx['loading']>(true);
  const { error, catchError, catchErrorHandler } = useError();

  const [open, setOpen] = React.useState<boolean>(true);
  const router = useRouter();
  const pathname = usePathname();
  const isDashboardPage: boolean = pathname.startsWith('/dashboard');
  const isLoginPage: boolean = pathname.startsWith('/login');

  const errorHandler = React.useCallback(() => {
    if (error && isDashboardPage) {
      router.push("/login", { scroll: false });
    }

    if (error && !isDashboardPage) {
      setOpen(false);
    }
    setLoading(false);
    return;
  }, [error, isDashboardPage, router]);

  const validHandler = React.useCallback(async (v: CurrentUser) => {
    const result = await UserService.findUserById(v.uid);
    const profile = UserUtil.payload(result);
    const userIsSuperAdmin = Object.values(profile.role).includes('super admin');
    setAuthUser(v);
    setUser(profile);
    setIsSuperAdmin(userIsSuperAdmin);
    setLoading(false);

    if (isLoginPage) {
      router.push("/dashboard", { scroll: false });
      return;
    }

    if (isDashboardPage) {
      setOpen(false);
      toast({
        title: `Hello ${profile.name}`,
        description: `Selamat datang kembali`
      });
    }
    return;
  }, [isDashboardPage, isLoginPage, router, toast]);

  const invalidHandler = React.useCallback(() => {
    if (isDashboardPage) {
      router.push("/login", { scroll: false });
    }

    if (!isDashboardPage) {
      setOpen(false);
    }
    setLoading(false);
    return;
  }, [isDashboardPage, router]);

  const handler = React.useCallback(async (v: CurrentUser | null) => {
    if (error) return errorHandler();
    if (!v) return invalidHandler();
    if (v) return await validHandler(v);
  }, [error, errorHandler, invalidHandler, validHandler]);

  const setRedirectedHandler = React.useCallback((v: boolean) => {
    setRedirected(v);
  }, [])

  React.useEffect(() => {
    setLoading(true);
    UserOn.AuthStateChange(handler);
    return () => {
      UserOn.AuthStateChange(handler);
    }
  }, [handler])

  return (
    <AuthContext.Provider value={{
      authUser,
      user,
      isSuperAdmin,
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
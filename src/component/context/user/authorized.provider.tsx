"use client"
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { BarierAuthShield } from "src/component/atoms/barier/auth";
import { UserService, CurrentUser } from 'src/service/user/user.service';
import { FloatButtonDashboard } from "src/component/organisms/float-button/dashboard";
import { AuthorizedContext, AuthorizedCtx } from './ctx';

export function AuthorizedProvider({ children }: React.PropsWithChildren) {
  const [isAuthorized, setIsAuthorized] = React.useState<AuthorizedCtx['isAuthorized']>(false);
  const [isBarierShow, setIsBarierShow] = React.useState<AuthorizedCtx['isBarierShow']>(true);

  const router = useRouter();
  const pathname = usePathname();
  const isDashboardPage: boolean = pathname.startsWith('/dashboard');
  const isLoginPage: boolean = pathname.startsWith('/login');

  const authorizedHandler = React.useCallback((currentUser: CurrentUser | null) => {
    if (!currentUser) return;
    setIsAuthorized(true);
    if (isLoginPage) {
      setIsBarierShow(true);
    }

    if (isDashboardPage) {
      setIsBarierShow(false);
    }
  }, [isDashboardPage, isLoginPage])

  const unAuthorizedHandler = React.useCallback((currentUser: CurrentUser | null) => {
    if (currentUser) return;
    setIsAuthorized(false);
    if (isLoginPage) {
      setIsBarierShow(false);
    }

    if (isDashboardPage) {
      router.push("/login")
    }
  }, [router, isDashboardPage, isLoginPage])

  React.useEffect(() => UserService.onAuthStateChange((currentUser) => {
    authorizedHandler(currentUser);
    unAuthorizedHandler(currentUser);
  }), [authorizedHandler, unAuthorizedHandler])

  return (
    <AuthorizedContext.Provider value={{ isAuthorized, isBarierShow }}>
      <BarierAuthShield show={isBarierShow} authorized={isAuthorized}>
        {children}
      </BarierAuthShield>
      <FloatButtonDashboard className={!isBarierShow && isDashboardPage ? 'block' : 'hidden'} />
    </AuthorizedContext.Provider>
  )
}
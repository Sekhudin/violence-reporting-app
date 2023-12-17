"use client"
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { BarierAuthShield } from "src/component/molecules/barier/auth";
import { UserService, CurrentUser } from 'src/service/user/user.service';
import { InternalServerErrorException } from 'src/util/exception/http.exception';
import { FloatButtonDashboard } from "src/component/organisms/float-button/dashboard";


type AuthorizedCtx = {
  isAuthorized: boolean;
}

const AuthorizedContext = React.createContext<AuthorizedCtx>({
  isAuthorized: false,
})

export function useAuthorizedContext() {
  const authCtx = React.useContext(AuthorizedContext);
  if (!authCtx) throw new InternalServerErrorException();
  return authCtx.isAuthorized;
}

export function AuthorizedContextProvider({ children }: React.PropsWithChildren) {
  const [isAuthorized, setIsAuthorized] = React.useState<boolean>(false);
  const [barierShow, setBarierShow] = React.useState<boolean>(true);

  const router = useRouter();
  const pathname = usePathname();
  const isDashboardPage: boolean = pathname.startsWith('/dashboard');
  const isLoginPage: boolean = pathname.startsWith('/login');

  const authorizedHandler = React.useCallback((currentUser: CurrentUser | null) => {
    if (!currentUser) return;
    setIsAuthorized(true);
    if (isLoginPage) {
      setBarierShow(true);
    }

    if (isDashboardPage) {
      setBarierShow(false);
    }
  }, [isDashboardPage, isLoginPage])

  const unAuthorizedHandler = React.useCallback((currentUser: CurrentUser | null) => {
    if (currentUser) return;
    setIsAuthorized(false);
    if (isLoginPage) {
      setBarierShow(false);
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
    <AuthorizedContext.Provider value={{ isAuthorized }}>
      <BarierAuthShield show={barierShow} authorized={isAuthorized}>
        {children}
      </BarierAuthShield>
      <FloatButtonDashboard className={!barierShow && isDashboardPage ? 'block' : 'hidden'} />
    </AuthorizedContext.Provider>
  )
}
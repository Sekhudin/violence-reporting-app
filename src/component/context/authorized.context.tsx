"use client"
import React from "react";
import { useRouter, usePathname } from "next/navigation";
import { AuthShield } from "src/component/molecules/barier/auth";
import { ObserveOn, CurrentUser } from 'src/service/observer';
import { InternalServerErrorException } from 'src/util/exception/http.exception';
import { FloatButtonDashboard } from "src/component/organisms/float-button/dashboard";
import { useToast } from "../ui/use-toast";


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

  const { toast } = useToast();
  const router = useRouter();
  const pathname = usePathname();
  const isDashboardPage: boolean = pathname.startsWith('/dashboard');
  const isLoginPage: boolean = pathname.startsWith('/login');

  const authorizedHandler = React.useCallback((currentUser: CurrentUser | null) => {
    if (!currentUser) return;
    // ada user
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
    // tidak ada user
    setIsAuthorized(false);
    if (isLoginPage) {
      setBarierShow(false);
    }

    if (isDashboardPage) {
      router.push("/login")
    }
  }, [router, isDashboardPage, isLoginPage])

  React.useEffect(() => ObserveOn.AuthStateChange((currentUser) => {
    authorizedHandler(currentUser);
    unAuthorizedHandler(currentUser);
  }), [authorizedHandler, unAuthorizedHandler])

  return (
    <AuthorizedContext.Provider value={{ isAuthorized }}>
      <AuthShield show={barierShow} authorized={isAuthorized}>
        {children}
      </AuthShield>
      <FloatButtonDashboard className={!barierShow && isDashboardPage ? 'block' : 'hidden'} />
    </AuthorizedContext.Provider>
  )
}
import { createContext, useCallback, useEffect, useState } from "react";
import { useQuery } from "@tanstack/react-query";

import { LocalStorageKeys } from "../config/localStorageKeys";
import { usersService } from "../services/users";
import { httpClient } from "../services";
import toast from "react-hot-toast";
export interface AuthContextValue {
  signedIn: boolean
  signin: (accessToken: string) => void
  signout: () => void
}

export const AuthContext = createContext<AuthContextValue>({} as AuthContextValue);

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [ signedIn, setSignedIn ] = useState<boolean>(() => {
    const accessToken = localStorage.getItem(LocalStorageKeys.accessToken)
    return !!accessToken
  })

  const { isError } = useQuery({
    queryKey: ["users", "me"],
    queryFn: async () => usersService.me(),
    enabled: signedIn
  })

  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(LocalStorageKeys.accessToken, accessToken)
    httpClient.setAuthHeader(accessToken)

    setSignedIn(true)
  }, [])

  const signout = useCallback(() => {
    localStorage.removeItem(LocalStorageKeys.accessToken)
    setSignedIn(false)
  }, [])

  useEffect(() => {
    if(isError) {
      toast.error("Sua sessão expirou, faça login novamente")
      signout()
    }
  }, [isError, signout])
  

  return (
    <AuthContext.Provider value={{ signedIn, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
};
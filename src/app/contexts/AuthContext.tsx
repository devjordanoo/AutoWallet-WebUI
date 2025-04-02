import { createContext, useCallback, useState } from "react";
import { LocalStorageKeys } from "../config/localStorageKeys";

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
  
  const signin = useCallback((accessToken: string) => {
    localStorage.setItem(LocalStorageKeys.accessToken, accessToken)
    setSignedIn(true)
  }, [])

  const signout = useCallback(() => {
    localStorage.removeItem(LocalStorageKeys.accessToken)
    setSignedIn(false)
  }, [])

  return (
    <AuthContext.Provider value={{ signedIn, signin, signout }}>
      {children}
    </AuthContext.Provider>
  )
};
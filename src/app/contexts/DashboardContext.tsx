import { createContext, useCallback, useState } from "react";

export interface DashboardContextValue {
  areValuesVisible: boolean
  toggleValuesVisiblity: () => void
}

export const DashboardContext = createContext({} as DashboardContextValue);

export const DashboardProvider = ({ children }: { children: React.ReactNode }) => {
  const [ areValuesVisible, setAreValuesVisible ] = useState(true);

  const toggleValuesVisiblity = useCallback(() => {
    setAreValuesVisible(prev => !prev);
  }, [])

  return (
    <DashboardContext.Provider value={{ areValuesVisible, toggleValuesVisiblity }}>
      {children}
    </DashboardContext.Provider>
  )
}
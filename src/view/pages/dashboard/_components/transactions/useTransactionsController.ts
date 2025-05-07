import { useDashboard } from "@/app/hooks/_useDashboard"
import { useCallback, useState } from "react"

export const useTransactionsController = () => {
  const { areValuesVisible } = useDashboard()
  const [ isLoading, setIsLoading ] = useState(false);
  const [ transactions, setTransactions ] = useState([]);

  return {
    areValuesVisible,
    isInitialLoading: false,
    isLoading,
    transactions
  }
}
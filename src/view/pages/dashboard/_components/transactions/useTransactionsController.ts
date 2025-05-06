import { useDashboard } from "@/app/hooks/_useDashboard"

export const useTransactionsController = () => {
  const { areValuesVisible } = useDashboard()

  return {
    areValuesVisible
  }
}
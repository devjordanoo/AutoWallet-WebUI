import { formatCurrency } from "@/app/utils/formatCurrency"
import { CategoryIcon } from "@/view/components"
import { useTransactionsController } from "./useTransactionsController";
import { cn } from "@/app/utils/cn";

interface TransactionProps {
  type: 'EXPENSE' | 'INCOME';
  name: string
  date: string
  amount: number
}

export const Transaction = ({ amount, date, name, type }: TransactionProps) => {
  const { areValuesVisible } = useTransactionsController()

  return (
    <div className="rounded-2xl p-4 bg-white flex items-center justify-between gap-4">
      <div className="flex-1 flex items-center gap-3">
        <CategoryIcon type={type} />

        <div>
          <strong className="font-bold tracking-tighter block">{name}</strong>
          <span  className="text-sm text-gray-600">{date}</span>
        </div>
      </div>
      
      <span className={
        cn("tracking-tighter text-red-800 font-medium", !areValuesVisible &&  "blur-sm")
      }>
        - {formatCurrency(amount)}
      </span>
    </div>
  )
}
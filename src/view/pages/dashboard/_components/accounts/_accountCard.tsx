import { formatCurrency } from "@/app/utils/formatCurrency"
import { BankAccountTypeIcon, BankAccountTypeIconProps } from "@/view/components"
import { useAccountsController } from "./useAccountsController"
import { cn } from "@/app/utils/cn"

interface AccountCardProps {
  color: string
  name: string
  balance: number
  type: BankAccountTypeIconProps["type"]
}

export const AccountCard = ({ balance, color, name, type }: AccountCardProps) => {
  const { areValuesVisible } = useAccountsController()

  return (
    <div 
      className="border-b-4 border-teal-950 p-4 bg-white rounded-2xl h-[200px] flex flex-col justify-between"
      style={{ borderColor: color }}
    >
      <div>
        <BankAccountTypeIcon type={type} />
        <span className="text-gray-800 font-medium tracking-[-0.5px] mt-4 block">{name}</span>
      </div>

      <div className="mt-8">
        <span className={
          cn("text-gray-800 font-medium tracking-[-0.5px] block", !areValuesVisible && "blur-sm")
        }>{formatCurrency(balance)}</span>
        <span className="text-gray-600 text-sm">Saldo atual</span>
      </div>
    </div>
  )
}
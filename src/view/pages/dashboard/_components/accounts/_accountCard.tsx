import { formatCurrency } from "@/app/utils/formatCurrency"
import { BankAccountTypeIcon, BankAccountTypeIconProps } from "@/view/components"

interface AccountCardProps {
  color: string
  name: string
  balance: number
  type: BankAccountTypeIconProps["type"]
}

export const AccountCard = ({ balance, color, name, type }: AccountCardProps) => {
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
        <span className="text-gray-800 font-medium tracking-[-0.5px] block">{formatCurrency(balance)}</span>
        <span className="text-gray-600 text-sm">Saldo atual</span>
      </div>
    </div>
  )
}
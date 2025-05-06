import { EyeIcon } from "@/view/components"
import { Accounts } from "./accounts/_accounts"
import { formatCurrency } from "@/app/utils/formatCurrency"
import { useAccountsController } from "./accounts/useAccountsController"
import { cn } from "@/app/utils/cn"

export const Wallet = () => {
  const { toggleValuesVisiblity, areValuesVisible } = useAccountsController();

  return (
    <div className="bg-teal-900 rounded-2xl h-full px-4 py-8 md:p-10 flex flex-col justify-between">
      <div className="text-white">
        <span className="tracking-[-0.5px]">Saldo total</span>
        <div className="flex items-center gap-2">
          <strong 
            className={cn("text-2xl tracking-[-1px]", !areValuesVisible && "blur-md")}
          >{formatCurrency(1000)}</strong>
          <button 
            className="w-8 h-8 flex items-center justify-center"
            onClick={toggleValuesVisiblity}
          >
            <EyeIcon open={!areValuesVisible} />
          </button>
        </div>
      </div>

      <Accounts />
    </div>
  )
}
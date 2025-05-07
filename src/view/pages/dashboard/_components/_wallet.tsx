import { EyeIcon, Spinner } from "@/view/components"
import { Accounts } from "./accounts/_accounts"
import { formatCurrency } from "@/app/utils/formatCurrency"
import { useAccountsController } from "./accounts/useAccountsController"
import { cn } from "@/app/utils/cn"

export const Wallet = () => {
  const { toggleValuesVisiblity, areValuesVisible, isInitialLoading } = useAccountsController();

  return (
    <div className="bg-teal-900 rounded-2xl h-full px-4 py-8 md:p-10 flex flex-col justify-between">
      {
        isInitialLoading &&
        <div className="w-full h-full flex justify-center items-center">
          <Spinner className="text-teal-950 fill-white w-10 h-10" />
        </div>
      }

      {
        !isInitialLoading &&
        <>
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
        </>
      }
    </div>
  )
}
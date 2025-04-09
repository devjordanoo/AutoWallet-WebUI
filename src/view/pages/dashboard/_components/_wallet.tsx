import { EyeIcon } from "@/view/components"
import { Accounts } from "./accounts/_accounts"

export const Wallet = () => {
  return (
    <div className="md:w-1/2 w-full bg-teal-900 rounded-2xl h-full px-4 py-8 md:p-10 flex flex-col justify-between">
      <div className="text-white">
        <span className="tracking-[-0.5px]">Saldo total</span>
        <div className="flex items-center gap-2">
          <strong className="text-2xl tracking-[-1px]">R$ 1000,00</strong>
          <button className="w-8 h-8 flex items-center justify-center">
            <EyeIcon open />
          </button>
        </div>
      </div>

      <Accounts />
    </div>
  )
}
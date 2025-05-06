import { DashboardContext, DashboardProvider } from "@/app/contexts/DashboardContext"
import { Transactions, Wallet } from "./_components"

export const Dashboard = () => {

  return (
    <DashboardProvider>
      <div className="flex flex-1 h-full gap-4 flex-col md:flex-row">
        <div className="md:w-1/2 w-full">
          <Wallet />
        </div>

          <div className="md:w-1/2 w-full ">
            <Transactions />
          </div>
      </div>
    </DashboardProvider>
  )
}
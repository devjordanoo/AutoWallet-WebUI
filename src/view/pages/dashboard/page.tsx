import { Transactions, Wallet } from "./_components"

export const Dashboard = () => {

  return (
    <div className="flex flex-1 h-full gap-4 flex-col md:flex-row">
        <Wallet />
        <Transactions />
    </div>
  )
}
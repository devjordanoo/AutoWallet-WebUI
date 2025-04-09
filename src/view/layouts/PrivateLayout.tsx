import { Outlet } from "react-router-dom"
import { Logo, UserMenu } from '@/view/components'

export const PrivateLayout = () => {

  return (
    <div className="h-full w-full p-4 md:p-8 md:pt-6 flex flex-col gap-4">
      <header className="h-12 flex justify-between items-center">
        <Logo className="h-6 text-teal-900" />
        <UserMenu />
      </header>

      <main className="flex-1">
        <Outlet />
      </main>
    </div>
  )
}
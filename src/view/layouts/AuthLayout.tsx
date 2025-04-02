import { Outlet } from "react-router-dom"
import { Logo } from "../components"

import LoginImage from "@/assets/images/login.png"

export const AuthLayout = () => {
  return (
    <div className="flex w-full h-full">
      <div className="w-full p-8 lg:w-1/2 h-full flex flex-col justify-center items-center">
        <Logo className="text-gray-500 h-6" />

        <div className="mt-16 w-full max-w-[504px]">
          <Outlet />
        </div>
      </div>

      <div className="hidden lg:flex w-1/2 h-full p-8 flex-col justify-center items-center">
        <div className="relative max-w-[656px]">
          <img 
            src={LoginImage} 
            className="rounded-[32px] object-cover w-full h-full max-w-[656px] max-h-[980px] select-none" 
            alt=""
          />

          <div 
            className="absolute bottom-0 w-full max-w-[656px] bg-white p-10 rounded-b-[32px]"
          >
            <Logo className="text-teal-900 h-8" />
            
            <p className="text-gray-700 font-medium text-xl mt-6">
              Gerencie suas finanças pessoais de uma forma simples com o fincheck, e o melhor, totalmente de graça!
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
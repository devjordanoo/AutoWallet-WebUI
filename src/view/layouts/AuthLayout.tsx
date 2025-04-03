import { Outlet } from "react-router-dom"
import { Logo } from "../components"

import LoginImage from "@/assets/images/login.png"

export const AuthLayout = () => {
  return (
    <div className="container mx-auto h-full">
      <div className="flex items-center p-8 h-full">

        <div className="w-full h-full lg:w-1/2 px-8 flex flex-col justify-center items-center">
          <Logo className="text-gray-500 h-6" />

          <div className="mt-16 w-full max-w-[504px]">
            <Outlet />
          </div>
        </div>

        <div className="h-full hidden lg:flex px-8 w-1/2 flex-col justify-center items-center">
          <div className="relative max-w-[656px] h-full">
            <div className="max-w-[656px] h-full">
              <img 
                src={LoginImage} 
                className="object-cover rounded-[32px] w-full h-full select-none" 
                alt=""
              />
            </div>

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
    </div>
  )
}
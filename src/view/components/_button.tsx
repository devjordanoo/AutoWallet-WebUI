import { cn } from "@/app/utils/cn"
import { ComponentProps } from "react"
import { Spinner } from "./_spinner"

interface ButtonProps extends ComponentProps<'button'> {
  isLoading?: boolean
}


const buttonClassesBase = "bg-teal-900 text-white font-medium rounded-lg px-4 h-12 rounded-2xl font-medium transition-all hover:bg-teal-800 hover:text-white disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-all active:bg-teal-950 flex items-center justify-center"

export const Button = ({ className, isLoading, disabled, children,...props }: ButtonProps) => {
  return ( 
    <button 
      {...props} 
      disabled={isLoading || disabled}
      className={cn(buttonClassesBase, className)}
    >
      {isLoading ? <Spinner className="w-g h-6" /> : children}
    </button> )
}
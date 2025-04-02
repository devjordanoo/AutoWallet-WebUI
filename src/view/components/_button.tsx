import { cn } from "@/app/utils/cn"
import { ComponentProps } from "react"

interface ButtonProps extends ComponentProps<'button'> {}


const buttonClassesBase = "bg-teal-900 text-white font-medium rounded-lg px-4 h-12 rounded-2xl font-medium transition-all hover:bg-teal-800 hover:text-white disabled:bg-gray-100 disabled:text-gray-400 disabled:cursor-not-allowed transition-all active:bg-teal-950"

export const Button = ({ className,...props }: ButtonProps) => {
  return <button {...props} className={cn(buttonClassesBase, className)}>Button</button>
}
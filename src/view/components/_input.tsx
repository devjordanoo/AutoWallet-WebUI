import { ComponentProps } from "react"

interface InputProps extends ComponentProps<'input'> {
  name: string
}

const inputLabelClasses = "transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 text-xs pointer-events-none text-gray-700 font-medium absolute left-[13px] top-2" 

const inputClasses = "pt-4 w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none"

export const Input = ({placeholder, name, ...props}: InputProps) => {
  return (
    <label className="flex flex-col gap-2 relative">
      <input name={name} {...props} className={inputClasses} placeholder=" " />

      <span 
        // className="pointer-events-none text-gray-700 font-medium absolute left-[13px] top-3.5"
        className={inputLabelClasses}
      >{placeholder}</span>
    </label>
  )
}
import { ComponentProps, forwardRef } from "react"
import { CrossCircledIcon } from "@radix-ui/react-icons"
import { cn } from "@/app/utils/cn"

interface InputProps extends ComponentProps<'input'> {
  name: string
  error?: string
}

const inputLabelClassesBase = "transition-all peer-placeholder-shown:text-base peer-placeholder-shown:top-4 text-xs pointer-events-none text-gray-700 font-medium absolute left-[13px] top-2" 

const INPUT_BASE_CLASSES = {
  base: "pt-4 w-full rounded-lg border border-gray-500 px-3 h-[52px] text-gray-800 peer placeholder-shown:pt-0 focus:border-gray-800 transition-all outline-none",

  error: "border-red-900 focus:border-red-900",
}


export const Input = forwardRef<HTMLInputElement, InputProps>(
  ({ placeholder, className, error, ...props }, ref) => {

    const inputClasseName = cn(
      INPUT_BASE_CLASSES.base,
      className,
      error && INPUT_BASE_CLASSES.error
    )

    return (
      <label className="flex flex-col gap-2 relative">
        <input 
          {...props}
          ref={ref}
          className={inputClasseName} 
          placeholder=" " /> 

        <span className={inputLabelClassesBase}>{placeholder}</span>

        {
          error && (
            <div className="flex text-red-900 gap-2 items-center">
              <CrossCircledIcon />
              <span className="text-xs">{error}</span>
            </div>
          )
        }
      </label>
    )
  }
)

Input.displayName = "Input";
import { cn } from "@/app/utils/cn"
import { useSwiper } from "swiper/react"

interface SliderOptionProps {
  isActive: boolean
  month: string
  index: number
}
export const SliderOption = ({ isActive, month, index
 }: SliderOptionProps) => {
  const swiper = useSwiper();

  return (
    <button
      onClick={(() => swiper.slideTo(index))}
      className={cn(
        "w-full rounded-full h-12 text-sm text-gray-800 tracking-[-0.5px] font-medium", 
        isActive && "bg-white"
      )} 
    >
      {month}
    </button>
  )
}
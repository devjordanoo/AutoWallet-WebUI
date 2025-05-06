import { cn } from "@/app/utils/cn"
import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { useSwiper } from "swiper/react"

const buttonChevronClass = "w-12 h-12 flex z-10 bg-gray-100 rounded-full items-center justify-center py-3 pl-2.5 pr-3.5 enabled:cursor-pointer disabled:opacity-40"

export const SliderNavigation = () => {
   const slider = useSwiper()

  return (
    <>
      <button className={cn(buttonChevronClass, "absolute left-0 top-1/2 -translate-y-1/2")}>
        <ChevronLeftIcon
          className="w-6 h-6"
          onClick={() => slider.slidePrev()}
        />
      </button>

      <button className={cn(buttonChevronClass, "absolute right-0 top-1/2 -translate-y-1/2")}>
        <ChevronRightIcon
          className="w-6 h-6"
          onClick={() => slider.slideNext()}
        />
      </button>
    </>
  )
}
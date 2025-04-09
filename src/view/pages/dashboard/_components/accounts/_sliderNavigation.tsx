import { ChevronLeftIcon, ChevronRightIcon } from "@radix-ui/react-icons"
import { useSwiper } from "swiper/react"

const buttonChevronClass = "py-3 pl-2.5 pr-3.5 rounded-full enabled:cursor-pointer enabled:hover:bg-white/10 transition-colors disabled:opacity-40"

export const SliderNavigation = () => {
   const slider = useSwiper()

  return (
    <div>
      <button className={buttonChevronClass}>
        <ChevronLeftIcon
         className="text-white w-6 h-6"
         onClick={() => slider.slidePrev()}
        />
      </button>

      <button className={buttonChevronClass}>
        <ChevronRightIcon
          className="text-white w-6 h-6"
          onClick={() => slider.slideNext()}
        />
      </button>
    </div>
  )
}
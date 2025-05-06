import { MONTHS } from "@/app/config/constants"
import { CategoryIcon, FilterIcon, TransactionsIcon } from "@/view/components"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { SliderOption } from "./transactions/_sliderOption"
import { SliderNavigation } from "./transactions/_sliderNavigation"
import { formatCurrency } from "@/app/utils/formatCurrency"
import { Transaction } from "./transactions/_transaction"

export const Transactions = () => {

  return (
    <div className="bg-gray-100 rounded-2xl h-full h-full px-4 py-8 md:p-10 flex flex-col">
      <header>
        <div className="flex justify-between">
          <button className="flex items-center gap-4">
            <TransactionsIcon />
            <span className="text-sm text-gray-800 tracking-[-0.5px] font-medium">Transações</span>
            <ChevronDownIcon className="text-gray-900" />
          </button>

          <button>
            <FilterIcon />
          </button>
        </div>

        <div className="mt-6 relative">
          <Swiper
            slidesPerView={3}
            centeredSlides
          >
            {
              MONTHS.map((month, i) => (
                <SwiperSlide key={i}>
                  {
                    ({ isActive }) => <SliderOption isActive={isActive} month={month} index={i} />
                  }
                </SwiperSlide>
              ))
            }
            <SliderNavigation />
          </Swiper>
        </div>
      </header>

      <div className="mt-4 space-y-2 flex-1 overflow-auto">
        
        <Transaction amount={123} date="12/01/2011" name="Almoço" type="EXPENSE" />
        <Transaction amount={123} date="12/01/2011" name="Almoço" type="EXPENSE" />
        <Transaction amount={123} date="12/01/2011" name="Almoço" type="EXPENSE" />
        <Transaction amount={123} date="12/01/2011" name="Almoço" type="EXPENSE" />
        <Transaction amount={123} date="12/01/2011" name="Almoço" type="EXPENSE" />
        <Transaction amount={123} date="12/01/2011" name="Almoço" type="EXPENSE" />
        <Transaction amount={123} date="12/01/2011" name="Almoço" type="EXPENSE" />
        <Transaction amount={123} date="12/01/2011" name="Almoço" type="EXPENSE" />
        <Transaction amount={123} date="12/01/2011" name="Almoço" type="EXPENSE" />
        <Transaction amount={123} date="12/01/2011" name="Almoço" type="EXPENSE" />
        <Transaction amount={123} date="12/01/2011" name="Almoço" type="EXPENSE" />
        <Transaction amount={123} date="12/01/2011" name="Almoço" type="EXPENSE" />
        <Transaction amount={123} date="12/01/2011" name="Almoço" type="EXPENSE" />
        <Transaction amount={123} date="12/01/2011" name="Almoço" type="EXPENSE" />

      </div>
    </div>
  )
}
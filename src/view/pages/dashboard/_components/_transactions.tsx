import { MONTHS } from "@/app/config/constants"
import { FilterIcon, Spinner, TransactionsIcon } from "@/view/components"
import { ChevronDownIcon } from "@radix-ui/react-icons"
import { Swiper, SwiperSlide, useSwiper } from "swiper/react"
import { SliderOption } from "./transactions/_sliderOption"
import { SliderNavigation } from "./transactions/_sliderNavigation"
import { Transaction } from "./transactions/_transaction"
import { useTransactionsController } from "./transactions/useTransactionsController"
import EmptyStateImage from "@/assets/images/empty-state.svg"

export const Transactions = () => {
  const { isInitialLoading, transactions, isLoading } = useTransactionsController()

  return (
    <div className="bg-gray-100 rounded-2xl h-full h-full px-4 py-8 md:p-10 flex flex-col">
      {
        isInitialLoading &&
          <div className="w-full h-full flex justify-center items-center">
            <Spinner className="w-10 h-10" />
          </div>
      }

      {
        !isInitialLoading &&
        <>
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
                centeredSlides              >
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
          
          {
            isLoading &&
              <div className="w-full h-full flex justify-center items-center">
                <Spinner className="w-10 h-10" />
              </div>
          }

          {
            !isLoading &&
              <div className="mt-4 space-y-2 flex-1 overflow-auto">
                {
                  transactions.length === 0 &&
                    <div className="h-full flex items-center flex-col justify-center">
                      <img src={EmptyStateImage} alt="Empty State" />
                      <p className="text-gray-700">Não encontramos nenhuma transação</p>
                    </div>
                }

                {
                  transactions.length > 0 &&
                    <>
                      <Transaction amount={123} date="12/01/2011" name="Almoço" type="EXPENSE" />
                      <Transaction amount={123} date="12/01/2011" name="Almoço" type="EXPENSE" />
                    </>
                }
              </div>
          }
        </>
      }
    </div>
  )
}
import { Swiper, SwiperSlide } from 'swiper/react';

import { AccountCard } from "./_accountCard"
import { SliderNavigation } from "./_sliderNavigation";
import { useAccountsController } from './useAccountsController';
import { PlusIcon } from '@radix-ui/react-icons';

export const Accounts = () => {
  const { sliderState, setSliderState, windowWidth, accounts } = useAccountsController();

  return (
    <div className="flex-1 flex flex-col justify-end mt-10 md:mt-0">
      {
        accounts.length === 0 &&
        <>
          <div className="mb-4">
            <strong className="text-white trancking-[-1px] text-lg">Minhas contas</strong>
          </div>

          <button className="mt-4 h-52 rounded-2xl border-2 border-dashed border-teal-600 flex flex-col items-center justify-center text-white gap-4">
            <div className='w-11 h-11 rounded-full border-2 border-dashed border-white flex items-center justify-center'>
              <PlusIcon className='w-6 h-6' />
            </div>
            <span className='font-medium tracking-tighter block w-[102px]'>Cadastre uma nova conta</span>
          </button>
        </>
      }

      {
        accounts.length > 0 &&
          <div>
            <Swiper
              spaceBetween={16}
              slidesPerView={windowWidth >= 500 ? 2.1 : 1.2}
              onSlideChange={({ isBeginning, isEnd }) => {
                setSliderState({
                  isBeginning, isEnd
                })
              }}
            >
              <div slot="container-start" className="flex items-center justify-between mb-4">
                <strong className="text-white trancking-[-1px] text-lg">Minhas contas</strong>

                <SliderNavigation 
                  isBeginning={sliderState.isBeginning}
                  isEnd={sliderState.isEnd}
                />
              </div>

              <div className="">
                  <SwiperSlide>
                    <AccountCard balance={1000.23} color="red" name="Nubank" type="CHECKING" />
                  </SwiperSlide>

                  <SwiperSlide>
                    <AccountCard balance={1000.23} color="red" name="Nubank" type="CHECKING" />
                  </SwiperSlide>

                  <SwiperSlide>
                    <AccountCard balance={1000.23} color="red" name="Nubank" type="CHECKING" />
                  </SwiperSlide>

                  <SwiperSlide>
                    <AccountCard balance={1000.23} color="red" name="Nubank" type="CHECKING" />
                  </SwiperSlide>
              </div>
            </Swiper>
          </div>
      }
    </div>
  )
}
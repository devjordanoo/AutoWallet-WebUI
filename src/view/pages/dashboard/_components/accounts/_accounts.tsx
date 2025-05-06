import { Swiper, SwiperSlide } from 'swiper/react';

import { AccountCard } from "./_accountCard"
import { SliderNavigation } from "./_sliderNavigation";
import { useAccountsController } from './useAccountsController';

export const Accounts = () => {
  const { sliderState, setSliderState, windowWidth } = useAccountsController();

  return (
    <div className="flex-1 flex flex-col justify-end mt-10 md:mt-0">
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
    </div>
  )
}
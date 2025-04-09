import { Swiper, SwiperSlide } from 'swiper/react';

import { AccountCard } from "./_accountCard"
import { SliderNavigation } from "./_sliderNavigation";

export const Accounts = () => {
  return (
    <div className="flex-1 flex flex-col justify-end">
      <div>
        <Swiper
          spaceBetween={16}
          slidesPerView={2.1}
        >
          <div slot="container-start" className="flex items-center justify-between mb-4">
            <strong className="text-white trancking-[-1px] text-lg">Minhas contas</strong>

            <SliderNavigation />
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
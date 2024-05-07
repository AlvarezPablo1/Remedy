'use client'
import { reviewsData } from "./data"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const CarouselReviews = () => {
  return (
    <Swiper
      // Install Swiper modules
      modules={[Autoplay, A11y]}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      slidesPerView={2}
      breakpoints= {{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 300,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 2,
          spaceBetween:5,
        },
        1024:{
          spaceBetween:10
        },
        1440:{
          Navigation
        },
        2560:{
          slidesPerView:4
        }
      }}
    >
      {reviewsData.map((data) => {
        return (
          <SwiperSlide key={data.id}>
            <section className="ml-2 min-[375px]:ml-9 min-[425px]:ml-16 md:ml-12 lg:ml-0 flex flex-col justify-center items-center gap-y-10 px-[20px] min-[1440px]:ml-28 2xl:ml-52 py-[28px] w-[300px] lg:w-[513px] h-[460px] lg:h-[408px] bg-white border-2 font-[800] text-center rounded-[8px] text-[#181818]">
              <p className="font-[700] text-[20px]">{data.title}</p>
              <p className="text-[14px] font-[300] ">{data.info}</p>
              <p className="font-[300]">- {data.author} -</p>
            </section>
          </SwiperSlide>
        );
      })}
    </Swiper>
  );
};

export default CarouselReviews;
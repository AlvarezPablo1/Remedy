'use client'
import Image from "next/image"
import { productData } from "./data"
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

const Carousel = () => {
  return (
      <Swiper
      // Install Swiper modules
      modules={[Autoplay, A11y]}
      autoplay={{
        delay: 1000,
        disableOnInteraction: false,
      }}
      breakpoints= {{
        // when window width is >= 320px
        320: {
          slidesPerView: 1,
          spaceBetween: 300,
        },
        // when window width is >= 640px
        768: {
          slidesPerView: 2,
        },
        1024:{
          slidesPerView:3,
        },
        1440:{
          Navigation,
          slidesPerView:4,
        },
        2560:{
          slidesPerView:4
        }
      }}
    >
      {productData.map((data) => {
        return(
          <SwiperSlide key={data.id}>
            <section className="ml-12 min-[375px]:ml-20 min-[425px]:ml-28 md:ml-[4.5rem] lg:ml-[4rem] min-[1440px]:ml-18 2xl:ml-96   flex flex-col items-center px-[20px] py-[24px] w-[216px] h-[314px] bg-white border-2 font-[800] text-center rounded-[8px]">
              <Image src={data.img} width={200} height={200} alt="product"/>
              <p className="text-[#FF3388] text-[14px]">{data.info}</p>
              <p className="text-[#181818]">{data.price}</p>
            </section>
          </SwiperSlide>
        )
      })}
      </Swiper>
  )
}
export default Carousel
import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
// import required modules
import { Pagination,Autoplay } from "swiper/modules";
const Produtcarscel = () => {
  return (
    <div className='lg:px-[50px] max-md:px-[20px]'>
      <Swiper
        pagination={{
          dynamicBullets: true,
        }}
        loop={true}
        autoplay={{
          delay: 2500
        }}
        
        modules={[Autoplay, Pagination]}
        className="mySwiper"
      >
        <SwiperSlide>
          <Image
            src="/image/birthday_d_igp_banner_20230626.jpg"
            alt="slider image"
            width="1440"
            height="554"
            className="w-full cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/anniversary_d_igp_banner_20230626.jpg"
            alt="slider image"
            width="1440"
            height="554"
            className="w-full  cursor-pointer"
          />
        </SwiperSlide>
        <SwiperSlide>
          <Image
            src="/image/cakes_d_igp_banner_20230626.jpg"
            alt="slider image"
            width="1440"
            height="554"
            className="w-full cursor-pointer"
          />
        </SwiperSlide>

        <SwiperSlide>
          <Image
            src="/image/flowers_d_igp_banner_20230626.jpg"
            alt="slider image"
            width="1440"
            height="554"
            className="w-full cursor-pointer"
          />
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default Produtcarscel;

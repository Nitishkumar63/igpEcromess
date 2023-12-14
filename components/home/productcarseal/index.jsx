import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";
// import required modules
import { Pagination,Autoplay } from "swiper/modules";

const ProductIamge = [
  {
    path:"/image/birthday_d_igp_banner_20230626.jpg",
  },
  {
    path:"/image/anniversary_d_igp_banner_20230626.jpg",
  },
  {
    path:"/image/flowers_d_igp_banner_20230626.jpg",
  },
]


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
        {
          ProductIamge.map((item,index)=>(
            <SwiperSlide key={index}>
          <Image
            src={item.path}
            alt="slider image"
            width="1440"
            height="554"
            className="w-full cursor-pointer"
          />
        </SwiperSlide>
          ))
        }
     
      </Swiper>
    </div>
  );
};

export default Produtcarscel;

import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";

const menus = [
  {
    path:'/image/birthday_igp_lenses_20230627.webp',
    title:'Birthday Gifts'
  },
  {
    path:'/image/anniversary_igp_lenses_20230627 (1).jpg',
    title:'Anniversary Gifts'
  },
  {
    path:'/image/wedding_gifts_igp_lenses_20230627.webp',
    title:'Wedding Gifts'
  },
  {
    path:'/image/gourmet_igp_lenses_20230627.webp',
    title:'Gourment'
  },
  {
    path:'/image/fashion_living_igp_lenses_20230627.webp',
    title:'Fashion & Lifestyle'
  },
  {
    path:'/image/jewellery_igp_lenses_20230627.webp',
    title:'Jewellery'
  },
  {
    path:'/image/home_living_igp_lenses_20230627.webp',
    title:'Home & Living'
  },
  {
    path:'/image/new_arrival_igp_lenses_20230627.webp',
    title:'New Arrivals'
  },
  {
    path:'/image/international_igp_lenses_20230118.webp',
    title:'International'
  },
  {
    path:'/image/disney_igp_polaroid_20230630.webp',
    title:'Disney Collenction'
  },
  {
    path:'/image/marvel_igp_polaroid_20230630.webp',
    title:'Mervel Collenction'
  },
  
]


const MarvelCarseal = () => {
  return (
    <div className='lg:px-[30px] max-md:px-[20px]'>
      <div className="flex md:justify-center max-md: md:items-center md:gap-5 py-5 mt-5 mb-5">
        <Image
          src="/image/unique_gifts_igp_d_title (1).svg"
          alt="unique"
          width="175"
          height="100"
        />
        <div>
          <h1 className="font-bold max-md:text-lg md:text-4xl">Unique Gifts Online</h1>
          <p className="text-gray-500 max-md:text-sm md:text-lg">
            Curated to make every special moment a celebration
          </p>
        </div>
      </div>

      <Swiper
        slidesPerView={8}
        centeredSlides={false}
        spaceBetween={25}
        grabCursor={true}
        pagination={{
          clickable: true,
        }}
        className="mySwiper mb-[50px] "
      >

        {
          menus.map((item,index)=>(
            <SwiperSlide key={index}>
            <div  className="flex flex-col max-md:w-[50px] ">
            <Image
              src={item.path}
              alt={item.title}
              width="180"
              height="180"
              className="cursor-pointer"
            />
            <h1 className=" md:text-lg mt-3 max-md:text-xs text-center ">{item.title}</h1>
          </div>
          </SwiperSlide>
          ))
          
        }
     
      </Swiper>
    </div>
  );
};

export default MarvelCarseal;

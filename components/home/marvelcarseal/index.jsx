import { Swiper, SwiperSlide } from "swiper/react";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";

import Image from "next/image";

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
        <SwiperSlide >
          <div className=" max-md:w-[50px] ">
            <Image
              src="/image/birthday_igp_lenses_20230627.webp"
              alt="birthday"
              width="180"
              height="180"
              className="cursor-pointer"
            />
            <h1 className=" md:text-lg mt-3 max-md:text-xs text-center ">Birthday Gifts</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" max-md:w-[50px] ">
            <Image
              src="/image/anniversary_igp_lenses_20230627 (1).jpg"
              alt="birthday"
              width="180"
              height="180"
              className="cursor-pointer"
            />
            <h1 className=" md:text-lg mt-3 max-md:text-xs text-center">Anniversary Gifts</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" max-md:w-[50px] ">
            <Image
              src="/image/wedding_gifts_igp_lenses_20230627.webp"
              alt="birthday"
              width="180"
              height="180"
              className="cursor-pointer"
            />
            <h1 className=" md:text-lg mt-3 max-md:text-xs text-center">Wedding Gifts</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className=" max-md:w-[50px] ">
            <Image
              src="/image/gourmet_igp_lenses_20230627.webp"
              alt="birthday"
              width="180"
              height="180"
              className="cursor-pointer"
            />
            <h1 className=" md:text-lg mt-3 max-md:text-xs text-center ">Gourment</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col max-md:w-[50px] ">
            <Image
              src="/image/fashion_living_igp_lenses_20230627.webp"
              alt="birthday"
              width="180"
              height="180"
              className="cursor-pointer"
            />
            <h1 className=" md:text-lg mt-3 max-md:text-xs text-center">Fashion & Lifestyle</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col max-md:w-[50px] ">
            <Image
              src="/image/jewellery_igp_lenses_20230627.webp"
              alt="birthday"
              width="180"
              height="180"
              className="cursor-pointer"
            />
            <h1 className=" md:text-lg mt-3 max-md:text-xs text-center ">Jewellery</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col max-md:w-[50px] ">
            <Image
              src="/image/home_living_igp_lenses_20230627.webp"
              alt="birthday"
              width="180"
              height="180"
              className="cursor-pointer"
            />
            <h1 className=" md:text-lg mt-3 max-md:text-xs text-center ">Home & Living</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          <div className="flex flex-col max-md:w-[50px] ">
            <Image
              src="/image/new_arrival_igp_lenses_20230627.webp"
              alt="birthday"
              width="180"
              height="180"
              className="cursor-pointer"
            />
            <h1 className=" md:text-lg mt-3 max-md:text-xs text-center">New Arrivals</h1>
          </div>
        </SwiperSlide>
        <SwiperSlide>
          {" "}
          <div className="flex flex-col max-md:w-[50px] ">
            <Image
              src="/image/international_igp_lenses_20230118.webp"
              alt="birthday"
              width="180"
              height="180"
              className="cursor-pointer"
            />
            <h1 className=" md:text-lg mt-3 max-md:text-xs text-center ">International</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div className="flex flex-col max-md:w-[50px] ">
            <Image
              src="/image/disney_igp_polaroid_20230630.webp"
              alt="birthday"
              width="180"
              height="180"
              className="cursor-pointer"
            />
            <h1 className="md:text-lg mt-3 max-md:text-xs text-center">Disney Collenction</h1>
          </div>
        </SwiperSlide>

        <SwiperSlide>
          {" "}
          <div className="flex flex-col max-md:w-[50px] ">
            <Image
              src="/image/marvel_igp_polaroid_20230630.webp"
              alt="birthday"
              width="180"
              height="180"
              className="cursor-pointer"
            />
            <h1 className=" md:text-lg mt-3 max-md:text-xs text-center ">Mervel Collenction</h1>
          </div>
        </SwiperSlide>
      </Swiper>
    </div>
  );
};

export default MarvelCarseal;

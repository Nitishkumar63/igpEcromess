// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";
// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { Navigation } from "swiper/modules";

import Image from "next/image";

const categorymenu = [
  {
    path:'/image/p-elegant-rose-bouquet-139330-m.jpg',
    title:'Cool Dude Personalized Caricature',
    price:'325',
    icon:'bx bxs-star',
    per:'Personalizable',
    dis:'445'
  },
  {
    path:'/image/p-adorable-birthday-pink-floral-arrangement-203947-m.webp',
    title:'Cool Dude Personalized Caricature',
    price:'325',
    icon:'bx bxs-star',
    per:'Personalizable',
    dis:'445'
  },
  {
    path:'/image/p-wholesome-treats-gourmet-hamper-263666-m.jpg',
    title:'Cool Dude Personalized Caricature',
    price:'325',
    icon:'bx bxs-star',
    per:'Personalizable',
    dis:'445'
  },
  {
    path:'/image/p-birthday-sprinkles-personalized-magic-mug-19292-m.webp',
    title:'Cool Dude Personalized Caricature',
    price:'325',
    icon:'bx bxs-star',
    per:'Personalizable',
    dis:'445'
  },
  {
    path:'/image/p-pastel-delight-hamper-223308-m.webp',
    title:'Cool Dude Personalized Caricature',
    price:'325',
    icon:'bx bxs-star',
    per:'Personalizable',
    dis:'445'
  },
  {
    path:'/image/p-cool-dude-personalized-caricature-117913-m.webp',
    title:'Cool Dude Personalized Caricature',
    price:'325',
    icon:'bx bxs-star',
    per:'Personalizable',
    dis:'445'
  },
  {
    path:'/image/p-work-in-progress-personalized-stainless-steel-mug-yellow-262981-m.webp',
    title:'Cool Dude Personalized Caricature',
    price:'325',
    icon:'bx bxs-star',
    per:'Personalizable',
    dis:'445'
  },
  {
    path:'/image/p-smiling-splendor-personalized-birthday-hamper-264759-m.webp',
    title:'Cool Dude Personalized Caricature',
    price:'325',
    icon:'bx bxs-star',
    per:'Personalizable',
    dis:'445'
  },
  {
    path:'/image/p-delicious-truffle-cake-half-kg--145982-m.webp',
    title:'Cool Dude Personalized Caricature',
    price:'325',
    icon:'bx bxs-star',
    per:'Personalizable',
    dis:'445'
  },
  {
    path:'/image/p-3d-initial-and-name-penstand-263442-m.webp',
    title:'Cool Dude Personalized Caricature',
    price:'325',
    icon:'bx bxs-star',
    per:'Personalizable',
    dis:'445'
  },
  {
    path:'/image/p-elegant-rose-bouquet-139330-m.jpg',
    title:'Cool Dude Personalized Caricature',
    price:'325',
    icon:'bx bxs-star',
    per:'Personalizable',
    dis:'445'
  },
  {
    path:'/image/p-protective-evil-eye-hamper-personalized-263352-m.webp',
    title:'Cool Dude Personalized Caricature',
    price:'325',
    icon:'bx bxs-star',
    per:'Personalizable',
    dis:'445'
  },
  {
    path:'/image/p-delicious-kaju-katli-400-gm--101059-m.webp',
    title:'Cool Dude Personalized Caricature',
    price:'325',
    icon:'bx bxs-star',
    per:'Personalizable',
    dis:'445'
  },
  {
    path:'/image/p-magic-cuppa-personalized-mug-186583-m.webp',
    title:'Cool Dude Personalized Caricature',
    price:'325',
    icon:'bx bxs-star',
    dis:'445',
    per:'Personalizable'
  },
  {
    path:'/image/p-zen-oasis-2-layer-bamboo-plant-with-pot-personalized-240950-m.webp',
    title:'Cool Dude Personalized Caricature',
    price:'325',
    icon:'bx bxs-star',
    per:'Personalizable',
    dis:'445'
  },
  {
    path:'/image/p-hues-of-savories-263825-m.webp',
    title:'Cool Dude Personalized Caricature',
    price:'325',
    icon:'bx bxs-star',
    per:'Personalizable',
    dis:'445'
  },
]


const BestSelling = () => {
  return (
    <div className="px-0 mb-10 lg:px-[50px] max-md:px-[20px] md:px-5">
      <h1 className="text-2xl font-semibold mt-10 text-gray-700">
        Best Selling Gifts
      </h1>
      <span className="text-lg text-gray-500 ">Packed with love</span>

      <Swiper
        slidesPerView={4}
        centeredSlides={false}
        slidesPerGroupSkip={4}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper mt-5 gap-5"
      >
      
      {
          categorymenu.map((item,index)=>(
          <SwiperSlide key={index} className='px-2' >
           
           <div className="border border-gray-300 rounded-xl">
          <Image
            src={item.path}
            className="rounded-t-xl mb-3 cursor-pointer"
            width={349}
            height={349}
            alt="productimage"
          />
          <Link
            href="#"
            className="text-sm px-3 font-semibold cursor-pointer"
          >
            {item.title}
          </Link>
          <div className="flex gap-2 mt-2 px-5 ">
            <Link href="#" className="text-lg ">
            
              ₹ <span className="font-bold">{item.price}</span>
            </Link>
            <p className="line-through text-lg text-gray-500"> ₹ {item.dis}</p>
          </div>

          <div className="px-5 pb-3">
            <Link href="#" className="text-sm">
              4.4 <i className={`${item.icon} text-yellow-500 text-sm`}></i>
              ({item.dis}) {item.per}
            </Link>
          </div>
            </div>
          
          </SwiperSlide>
          ))
          
        }

     
      </Swiper>
    </div>
  );
};

export default BestSelling;

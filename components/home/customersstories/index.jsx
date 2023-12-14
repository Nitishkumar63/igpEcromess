import Link from "next/link"
import Image from "next/image"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rate } from 'antd';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import {  Navigation } from 'swiper/modules';

const cartMenu = [
  {
    path:'/image/p-elegant-rose-bouquet-139330-m.jpg',
    title:'Delivery service was so good think you',
    date:'| 23 November 2023',
    custumername:'-Nitish kumar -'
  },
  {
    path:'/image/p-elegant-rose-bouquet-139330-m.jpg',
    title:'Delivery service was so good think you',
    date:'| 23 November 2023',
    custumername:'-Nitish kumar -'
  },
  {
    path:'/image/p-elegant-rose-bouquet-139330-m.jpg',
    title:'Delivery service was so good think you',
    date:'| 23 November 2023',
    custumername:'-Nitish kumar -'
  },
  {
    path:'/image/p-elegant-rose-bouquet-139330-m.jpg',
    title:'Delivery service was so good think you',
    date:'| 23 November 2023',
    custumername:'-Nitish kumar -'
  },
  {
    path:'/image/p-elegant-rose-bouquet-139330-m.jpg',
    title:'Delivery service was so good think you',
    date:'| 23 November 2023',
    custumername:'-Nitish kumar -'
  },
  {
    path:'/image/p-elegant-rose-bouquet-139330-m.jpg',
    title:'Delivery service was so good think you',
    date:'| 23 November 2023',
    custumername:'-Nitish kumar -'
  },
  {
    path:'/image/p-elegant-rose-bouquet-139330-m.jpg',
    title:'Delivery service was so good think you',
    date:'| 23 November 2023',
    custumername:'-Nitish kumar -'
  },
  {
    path:'/image/p-elegant-rose-bouquet-139330-m.jpg',
    title:'Delivery service was so good think you',
    date:'| 23 November 2023',
    custumername:'-Nitish kumar -'
  },
]






const CustomersStories = () =>{
    return(
        <div className='bg-[#45485E] w-full py-5 pb-10 gap-10 mb-10 '>
          <div className='px-[55px]'>
            <h1 className='text-2xl font-bold text-white'>Customers Stories</h1>
            <span className="text-sm text-white">(Rated 4.8/5 based on 209326 ratings)</span>
          </div>
          <Swiper
  slidesPerView={3}
  centeredSlides={false}
  slidesPerGroupSkip={4}
  spaceBetween={20}
  keyboard={{
    enabled: true,
  }}
  
  navigation={true}
  loop={true}
  modules={[Navigation]}
  className="mySwiper px-50 mt-5"
>
  {cartMenu.map((item, index) => (
    <div key={index}>
      <SwiperSlide className="p-[15px]">
      <div className="bg-white rounded-xl border border-white w-[470px] ">
        <div className="border-4 border-[#45485E] flex flex-col items-center justify-content-center py-3 rounded-xl">
          <div className='border border-gary-400 p-1 rounded-xl mb-2'>
            <Image src={item.path} width={62} height={62} alt='flower' className="rounded-lg" />
          </div>

          <div className="mb-3">
            <h1 className="text-sm text-gray-400 flex gap-3 items-center">
              <Rate disabled defaultValue={5} className="text-sm" /> {item.date}
            </h1>
          </div>

          <div className="mb-[60px]">
            <h1 className="text-gray-400 text-sm">{item.title}</h1>
          </div>

          <h1 className="text-gray-400 text-lg">{item.custumername}</h1>
        </div>
      </div>
    </SwiperSlide>
    </div>
  ))}
         </Swiper>

        </div>
    )
}
export default CustomersStories
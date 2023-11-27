import Link from "next/link"
import Image from "next/image"
// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import { Rate } from 'antd';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';



// import required modules
import {  Navigation } from 'swiper/modules';

const CustomersStories = () =>{
    return(
        <div className='bg-[#45485E] w-full py-5 gap-10 mb-10'>
          <div className='px-10'>
            <h1 className='text-2xl font-bold text-white'>Customers Stories</h1>
            <span className="text-sm text-white">(Rated 4.8/5 based on 209326 ratings)</span>
          </div>
       <Swiper
       slidesPerView={1}
       centeredSlides={false}
       slidesPerGroupSkip={4}
       
        keyboard={{
          enabled: true,
        }}
      
        navigation={true}
        loop={true}
        modules={[ Navigation]}
        className="mySwiper mt-5 px-5"
      >
        <SwiperSlide className='px-10 '>
            
        <div className='grid grid-cols-3 gap-5'>
         <div className="bg-white rounded-xl border border-white">
    <div className="border-4 border-[#45485E] flex flex-col items-center py-3 rounded-xl">
      <div className='border border-gary-400 p-1 rounded-xl mb-2'>
        <Image src='/image/p-elegant-rose-bouquet-139330-m.jpg' width={62} height={62} alt='flower' className="rounded-lg"/>
      </div>
      
      <div className="mb-3">
      <h1 className="text-sm text-gray-400 flex gap-3 items-center"> <Rate disabled defaultValue={5} className="text-sm" /> | 23 November 2023</h1>
      </div>

      <div className="mb-[60px]">
        <h1 className="text-gray-400 text-sm">Delivery service was so good think you</h1>
      </div>


      <h1 className="text-gray-400 text-lg">-Nitish kumar-</h1>
    </div>
        </div>

        <div className="bg-white rounded-xl border border-white">
    <div className="border-4 border-[#45485E] flex flex-col items-center py-3 rounded-xl">
      <div className='border border-gary-400 p-1 rounded-xl mb-2'>
        <Image src='/image/p-elegant-rose-bouquet-139330-m.jpg' width={62} height={62} alt='flower' className="rounded-lg"/>
      </div>
      
      <div className="mb-3">
      <h1 className="text-sm text-gray-400 flex gap-3 items-center"> <Rate disabled defaultValue={5} className="text-sm" /> | 23 November 2023</h1>
      </div>

      <div className="mb-[60px]">
        <h1 className="text-gray-400 text-sm">Delivery service was so good think you</h1>
      </div>


      <h1 className="text-gray-400 text-lg">-Nitish kumar-</h1>
    </div>
        </div>

        <div className="bg-white rounded-xl border border-white">
    <div className="border-4 border-[#45485E] flex flex-col items-center py-3 rounded-xl">
      <div className='border border-gary-400 p-1 rounded-xl mb-2'>
        <Image src='/image/p-elegant-rose-bouquet-139330-m.jpg' width={62} height={62} alt='flower' className="rounded-lg"/>
      </div>
      
      <div className="mb-3">
      <h1 className="text-sm text-gray-400 flex gap-3 items-center"> <Rate disabled defaultValue={5} className="text-sm" /> | 23 November 2023</h1>
      </div>

      <div className="mb-[60px]">
        <h1 className="text-gray-400 text-sm">Delivery service was so good think you</h1>
      </div>


      <h1 className="text-gray-400 text-lg">-Nitish kumar-</h1>
    </div>
        </div>

        </div>

        

        </SwiperSlide>


        <SwiperSlide className='px-10 pb-5'>
            
            <div className='grid grid-cols-3 gap-5'>
             <div className="bg-white rounded-xl border border-white">
        <div className="border-4 border-[#45485E] flex flex-col items-center py-3 rounded-xl">
          <div className='border border-gary-400 p-1 rounded-xl mb-2'>
            <Image src='/image/p-elegant-rose-bouquet-139330-m.jpg' width={62} height={62} alt='flower' className="rounded-lg"/>
          </div>
          
          <div className="mb-3">
          <h1 className="text-sm text-gray-400 flex gap-3 items-center"> <Rate disabled defaultValue={5} className="text-sm" /> | 23 November 2023</h1>
          </div>
    
          <div className="mb-[60px]">
            <h1 className="text-gray-400 text-sm">Delivery service was so good think you</h1>
          </div>
    
    
          <h1 className="text-gray-400 text-lg">-Nitish kumar-</h1>
        </div>
            </div>
    
            <div className="bg-white rounded-xl border border-white">
        <div className="border-4 border-[#45485E] flex flex-col items-center py-3 rounded-xl">
          <div className='border border-gary-400 p-1 rounded-xl mb-2'>
            <Image src='/image/p-elegant-rose-bouquet-139330-m.jpg' width={62} height={62} alt='flower' className="rounded-lg"/>
          </div>
          
          <div className="mb-3">
          <h1 className="text-sm text-gray-400 flex gap-3 items-center"> <Rate disabled defaultValue={5} className="text-sm" /> | 23 November 2023</h1>
          </div>
    
          <div className="mb-[60px]">
            <h1 className="text-gray-400 text-sm">Delivery service was so good think you</h1>
          </div>
    
    
          <h1 className="text-gray-400 text-lg">-Nitish kumar-</h1>
        </div>
            </div>
    
            <div className="bg-white rounded-xl border border-white">
        <div className="border-4 border-[#45485E] flex flex-col items-center py-3 rounded-xl">
          <div className='border border-gary-400 p-1 rounded-xl mb-2'>
            <Image src='/image/p-elegant-rose-bouquet-139330-m.jpg' width={62} height={62} alt='flower' className="rounded-lg"/>
          </div>
          
          <div className="mb-3">
          <h1 className="text-sm text-gray-400 flex gap-3 items-center"> <Rate disabled defaultValue={5} className="text-sm" /> | 23 November 2023</h1>
          </div>
    
          <div className="mb-[60px]">
            <h1 className="text-gray-400 text-sm">Delivery service was so good think you</h1>
          </div>
    
    
          <h1 className="text-gray-400 text-lg">-Nitish kumar-</h1>
        </div>
            </div>
    
            </div>
    
            
    
        </SwiperSlide>

        <SwiperSlide className='px-10 pb-5'>
            
            <div className='grid grid-cols-3 gap-5'>
             <div className="bg-white rounded-xl border border-white">
        <div className="border-4 border-[#45485E] flex flex-col items-center py-3 rounded-xl">
          <div className='border border-gary-400 p-1 rounded-xl mb-2'>
            <Image src='/image/p-elegant-rose-bouquet-139330-m.jpg' width={62} height={62} alt='flower' className="rounded-lg"/>
          </div>
          
          <div className="mb-3">
          <h1 className="text-sm text-gray-400 flex gap-3 items-center"> <Rate disabled defaultValue={5} className="text-sm" /> | 23 November 2023</h1>
          </div>
    
          <div className="mb-[60px]">
            <h1 className="text-gray-400 text-sm">Delivery service was so good think you</h1>
          </div>
    
    
          <h1 className="text-gray-400 text-lg">-Nitish kumar-</h1>
        </div>
            </div>
    
            <div className="bg-white rounded-xl border border-white">
        <div className="border-4 border-[#45485E] flex flex-col items-center py-3 rounded-xl">
          <div className='border border-gary-400 p-1 rounded-xl mb-2'>
            <Image src='/image/p-elegant-rose-bouquet-139330-m.jpg' width={62} height={62} alt='flower' className="rounded-lg"/>
          </div>
          
          <div className="mb-3">
          <h1 className="text-sm text-gray-400 flex gap-3 items-center"> <Rate disabled defaultValue={5} className="text-sm" /> | 23 November 2023</h1>
          </div>
    
          <div className="mb-[60px]">
            <h1 className="text-gray-400 text-sm">Delivery service was so good think you</h1>
          </div>
    
    
          <h1 className="text-gray-400 text-lg">-Nitish kumar-</h1>
        </div>
            </div>
    
            <div className="bg-white rounded-xl border border-white">
        <div className="border-4 border-[#45485E] flex flex-col items-center py-3 rounded-xl">
          <div className='border border-gary-400 p-1 rounded-xl mb-2'>
            <Image src='/image/p-elegant-rose-bouquet-139330-m.jpg' width={62} height={62} alt='flower' className="rounded-lg"/>
          </div>
          
          <div className="mb-3">
          <h1 className="text-sm text-gray-400 flex gap-3 items-center"> <Rate disabled defaultValue={5} className="text-sm" /> | 23 November 2023</h1>
          </div>
    
          <div className="mb-[60px]">
            <h1 className="text-gray-400 text-sm">Delivery service was so good think you</h1>
          </div>
    
    
          <h1 className="text-gray-400 text-lg">-Nitish kumar-</h1>
        </div>
            </div>
    
            </div>
    
            
    
         </SwiperSlide>


        </Swiper>
        </div>
    )
}
export default CustomersStories
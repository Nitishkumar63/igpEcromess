// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';
import Link from 'next/link';
// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import {  Navigation } from 'swiper/modules';

import Image from "next/image";




const BestSelling = ()=>{
    return(
        <div className='px-0 mb-10'>
        <h1 className="text-2xl font-semibold mt-10 text-gray-700">Best Selling Gifts</h1>
        <span className="text-lg text-gray-500 ">Packed with love</span>


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
        className="mySwiper mt-5 "
      >
        <SwiperSlide>
           <div className='flex gap-3'>

            <div className='border border-gray-300 rounded-xl'>
           <Image src={"/image/p-elegant-rose-bouquet-139330-m.jpg"} className='rounded-t-xl mb-3 cursor-pointer' width={349} height={349} alt="productimage" />
           <Link href="#" className='text-sm px-3 font-semibold cursor-pointer'>Cool Dude Personalized Caricature</Link>
          <div className='flex gap-2 mt-2 px-5 '>
          <Link href="#" className='text-lg '> ₹ <span className='font-bold'>325</span></Link>
          <p className='line-through text-lg text-gray-500'> ₹ 445</p>
          </div>

          <div className='px-5 pb-3'>
            <Link href="#" className='text-sm'>4.4 <i className='bx bxs-star text-yellow-500 text-sm' ></i>(450) Personalizable</Link>
          </div>

             </div>

         <div className='border border-gray-300 rounded-xl'>
           <Image src={"/image/p-adorable-birthday-pink-floral-arrangement-203947-m.webp"} className='rounded-t-xl' width={349}  height={349} alt="productimage" />
           <Link href="#" className='text-sm px-3 font-semibold cursor-pointer'>Cool Dude Personalized Caricature</Link>
          <div className='flex gap-2 mt-2 px-5 '>
          <Link href="#" className='text-lg '> ₹ <span className='font-bold'>325</span></Link>
          <p className='line-through text-lg text-gray-500'> ₹ 445</p>
          </div>

          <div className='px-5 pb-3'>
            <Link href="#" className='text-sm'>4.4 <i className='bx bxs-star text-yellow-500 text-sm' ></i>(450) Personalizable</Link>
          </div>

         </div>

         <div className='border border-gray-300 rounded-xl'>
           <Image src={"/image/p-wholesome-treats-gourmet-hamper-263666-m.jpg"} className='rounded-t-xl' width={349} height={349} alt="productimage" />
           <Link href="#" className='text-sm px-3 font-semibold cursor-pointer'>Cool Dude Personalized Caricature</Link>
          <div className='flex gap-2 mt-2 px-5 '>
          <Link href="#" className='text-lg '> ₹ <span className='font-bold'>325</span></Link>
          <p className='line-through text-lg text-gray-500'> ₹ 445</p>
          </div>

          <div className='px-5 pb-3'>
            <Link href="#" className='text-sm'>4.4 <i className='bx bxs-star text-yellow-500 text-sm' ></i>(450) Personalizable</Link>
          </div>

         </div> 

         <div className='border border-gray-300 rounded-xl'>
           <Image src={"/image/p-birthday-sprinkles-personalized-magic-mug-19292-m.webp"} className='rounded-t-xl' width={349} height={349} alt="productimage" />
           <Link href="#" className='text-sm px-3 font-semibold cursor-pointer'>Cool Dude Personalized Caricature</Link>
          <div className='flex gap-2 mt-2 px-5 '>
          <Link href="#" className='text-lg '> ₹ <span className='font-bold'>325</span></Link>
          <p className='line-through text-lg text-gray-500'> ₹ 445</p>
          </div>

          <div className='px-5 pb-3'>
            <Link href="#" className='text-sm'>4.4 <i className='bx bxs-star text-yellow-500 text-sm' ></i>(450) Personalizable</Link>
          </div>

         </div>

       

           </div>
            
        </SwiperSlide>
       

        <SwiperSlide>
            <div className='flex gap-3'>

            <div className='border border-gray-300 rounded-xl'>
           <Image src={"/image/p-pastel-delight-hamper-223308-m.webp"} className='rounded-t-xl mb-3 cursor-pointer' width={349} height={349} alt="productimage" />
           <Link href="#" className='text-sm px-3 font-semibold cursor-pointer'>Cool Dude Personalized Caricature</Link>
          <div className='flex gap-2 mt-2 px-5 '>
          <Link href="#" className='text-lg '> ₹ <span className='font-bold'>325</span></Link>
          <p className='line-through text-lg text-gray-500'> ₹ 445</p>
          </div>

          <div className='px-5 pb-3'>
            <Link href="#" className='text-sm'>4.4 <i className='bx bxs-star text-yellow-500 text-sm' ></i>(450) Personalizable</Link>
          </div>

             </div>

         <div className='border border-gray-300 rounded-xl'>
           <Image src={"/image/p-cool-dude-personalized-caricature-117913-m.webp"} className='rounded-t-xl' width={349}  height={349} alt="productimage" />
           <Link href="#" className='text-sm px-3 font-semibold cursor-pointer'>Cool Dude Personalized Caricature</Link>
          <div className='flex gap-2 mt-2 px-5 '>
          <Link href="#" className='text-lg '> ₹ <span className='font-bold'>325</span></Link>
          <p className='line-through text-lg text-gray-500'> ₹ 445</p>
          </div>

          <div className='px-5 pb-3'>
            <Link href="#" className='text-sm'>4.4 <i className='bx bxs-star text-yellow-500 text-sm' ></i>(450) Personalizable</Link>
          </div>

         </div>

         <div className='border border-gray-300 rounded-xl'>
           <Image src={"/image/p-work-in-progress-personalized-stainless-steel-mug-yellow-262981-m.webp"} className='rounded-t-xl' width={349} height={349} alt="productimage" />
           <Link href="#" className='text-sm px-3 font-semibold cursor-pointer'>Cool Dude Personalized Caricature</Link>
          <div className='flex gap-2 mt-2 px-5 '>
          <Link href="#" className='text-lg '> ₹ <span className='font-bold'>325</span></Link>
          <p className='line-through text-lg text-gray-500'> ₹ 445</p>
          </div>

          <div className='px-5 pb-3'>
            <Link href="#" className='text-sm'>4.4 <i className='bx bxs-star text-yellow-500 text-sm' ></i>(450) Personalizable</Link>
          </div>

         </div> 

         <div className='border border-gray-300 rounded-xl'>
           <Image src={"/image/p-smiling-splendor-personalized-birthday-hamper-264759-m.webp"} className='rounded-t-xl' width={349} height={349} alt="productimage" />
           <Link href="#" className='text-sm px-3 font-semibold cursor-pointer'>Cool Dude Personalized Caricature</Link>
          <div className='flex gap-2 mt-2 px-5 '>
          <Link href="#" className='text-lg '> ₹ <span className='font-bold'>325</span></Link>
          <p className='line-through text-lg text-gray-500'> ₹ 445</p>
          </div>

          <div className='px-5 pb-3'>
            <Link href="#" className='text-sm'>4.4 <i className='bx bxs-star text-yellow-500 text-sm' ></i>(450) Personalizable</Link>
          </div>

         </div>

       

           </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className='flex gap-3'>

<div className='border border-gray-300 rounded-xl'>
<Image src={"/image/p-delicious-truffle-cake-half-kg--145982-m.webp"} className='rounded-t-xl mb-3 cursor-pointer' width={349} height={349} alt="productimage" />
<Link href="#" className='text-sm px-3 font-semibold cursor-pointer'>Cool Dude Personalized Caricature</Link>
<div className='flex gap-2 mt-2 px-5 '>
<Link href="#" className='text-lg '> ₹ <span className='font-bold'>325</span></Link>
<p className='line-through text-lg text-gray-500'> ₹ 445</p>
</div>

<div className='px-5 pb-3'>
<Link href="#" className='text-sm'>4.4 <i className='bx bxs-star text-yellow-500 text-sm' ></i>(450) Personalizable</Link>
</div>

 </div>

<div className='border border-gray-300 rounded-xl'>
<Image src={"/image/p-3d-initial-and-name-penstand-263442-m.webp"} className='rounded-t-xl' width={349}  height={349} alt="productimage" />
<Link href="#" className='text-sm px-3 font-semibold cursor-pointer'>Cool Dude Personalized Caricature</Link>
<div className='flex gap-2 mt-2 px-5 '>
<Link href="#" className='text-lg '> ₹ <span className='font-bold'>325</span></Link>
<p className='line-through text-lg text-gray-500'> ₹ 445</p>
</div>

<div className='px-5 pb-3'>
<Link href="#" className='text-sm'>4.4 <i className='bx bxs-star text-yellow-500 text-sm' ></i>(450) Personalizable</Link>
</div>

</div>

<div className='border border-gray-300 rounded-xl'>
<Image src={"/image/p-elegant-rose-bouquet-139330-m.jpg"} className='rounded-t-xl' width={349} height={349} alt="productimage" />
<Link href="#" className='text-sm px-3 font-semibold cursor-pointer'>Cool Dude Personalized Caricature</Link>
<div className='flex gap-2 mt-2 px-5 '>
<Link href="#" className='text-lg '> ₹ <span className='font-bold'>325</span></Link>
<p className='line-through text-lg text-gray-500'> ₹ 445</p>
</div>

<div className='px-5 pb-3'>
<Link href="#" className='text-sm'>4.4 <i className='bx bxs-star text-yellow-500 text-sm' ></i>(450) Personalizable</Link>
</div>

</div> 

<div className='border border-gray-300 rounded-xl'>
<Image src={"/image/p-protective-evil-eye-hamper-personalized-263352-m.webp"} className='rounded-t-xl' width={349} height={349} alt="productimage" />
<Link href="#" className='text-sm px-3 font-semibold cursor-pointer'>Cool Dude Personalized Caricature</Link>
<div className='flex gap-2 mt-2 px-5 '>
<Link href="#" className='text-lg '> ₹ <span className='font-bold'>325</span></Link>
<p className='line-through text-lg text-gray-500'> ₹ 445</p>
</div>

<div className='px-5 pb-3'>
<Link href="#" className='text-sm'>4.4 <i className='bx bxs-star text-yellow-500 text-sm' ></i>(450) Personalizable</Link>
</div>

</div>



        </div>
        </SwiperSlide>


        <SwiperSlide>
        <div className='flex gap-3'>

<div className='border border-gray-300 rounded-xl'>
<Image src={"/image/p-delicious-kaju-katli-400-gm--101059-m.webp"} className='rounded-t-xl mb-3 cursor-pointer' width={349} height={349} alt="productimage" />
<Link href="#" className='text-sm px-3 font-semibold cursor-pointer'>Cool Dude Personalized Caricature</Link>
<div className='flex gap-2 mt-2 px-5 '>
<Link href="#" className='text-lg '> ₹ <span className='font-bold'>325</span></Link>
<p className='line-through text-lg text-gray-500'> ₹ 445</p>
</div>

<div className='px-5 pb-3'>
<Link href="#" className='text-sm'>4.4 <i className='bx bxs-star text-yellow-500 text-sm' ></i>(450) Personalizable</Link>
</div>

 </div>

<div className='border border-gray-300 rounded-xl'>
<Image src={"/image/p-magic-cuppa-personalized-mug-186583-m.webp"} className='rounded-t-xl' width={349}  height={349} alt="productimage" />
<Link href="#" className='text-sm px-3 font-semibold cursor-pointer'>Cool Dude Personalized Caricature</Link>
<div className='flex gap-2 mt-2 px-5 '>
<Link href="#" className='text-lg '> ₹ <span className='font-bold'>325</span></Link>
<p className='line-through text-lg text-gray-500'> ₹ 445</p>
</div>

<div className='px-5 pb-3'>
<Link href="#" className='text-sm'>4.4 <i className='bx bxs-star text-yellow-500 text-sm' ></i>(450) Personalizable</Link>
</div>

</div>

<div className='border border-gray-300 rounded-xl'>
<Image src={"/image/p-zen-oasis-2-layer-bamboo-plant-with-pot-personalized-240950-m.webp"} className='rounded-t-xl' width={349} height={349} alt="productimage" />
<Link href="#" className='text-sm px-3 font-semibold cursor-pointer'>Cool Dude Personalized Caricature</Link>
<div className='flex gap-2 mt-2 px-5 '>
<Link href="#" className='text-lg '> ₹ <span className='font-bold'>325</span></Link>
<p className='line-through text-lg text-gray-500'> ₹ 445</p>
</div>

<div className='px-5 pb-3'>
<Link href="#" className='text-sm'>4.4 <i className='bx bxs-star text-yellow-500 text-sm' ></i>(450) Personalizable</Link>
</div>

</div> 

<div className='border border-gray-300 rounded-xl'>
<Image src={"/image/p-hues-of-savories-263825-m.webp"} className='rounded-t-xl' width={349} height={349} alt="productimage" />
<Link href="#" className='text-sm px-3 font-semibold cursor-pointer'>Cool Dude Personalized Caricature</Link>
<div className='flex gap-2 mt-2 px-5 '>
<Link href="#" className='text-lg '> ₹ <span className='font-bold'>325</span></Link>
<p className='line-through text-lg text-gray-500'> ₹ 445</p>
</div>

<div className='px-5 pb-3'>
<Link href="#" className='text-sm'>4.4 <i className='bx bxs-star text-yellow-500 text-sm' ></i>(450) Personalizable</Link>
</div>

</div>



        </div>
        </SwiperSlide>
        
       
      </Swiper>

        </div>
    )
}

export default BestSelling
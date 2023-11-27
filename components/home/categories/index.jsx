import Image from "next/image";
import Link from "next/link";
const col_six = [
    {
        path:'/image/igp_Personalized_d_categories_20220203.jpg',
        label:'Personalized',
        home:'Home & Leaving',
        coll:'Collectibles',
        cush:'Cushions',
        cari:'Caricatures',
        mug:'Mugus'
    },
    {
        path:'/image/igp_Cakes_d_categories_20220203.webp',
        label:'Personalized',
        home:'Home & Leaving',
        coll:'Collectibles',
        cush:'Cushions',
        cari:'Caricatures',
        mug:'Mugus'
    }
]

const col_three = [
    {
        path:'/image/igp_Flowers_d_categories_20220126.webp',
        label:'Personalized',
        home:'Home & Leaving',
        coll:'Collectibles',
        cush:'Cushions',
        cari:'Caricatures',
        mug:'Mugus'
    },
    {
        path:'/image/igp_Gourmet_d_categories_20220131.webp',
        label:'Personalized',
        home:'Home & Leaving',
        coll:'Collectibles',
        cush:'Cushions',
        cari:'Caricatures',
        mug:'Mugus'
    },
    {
        path:'/image/igp_Plants_d_categories_20220127.webp',
        label:'Personalized',
        home:'Home & Leaving',
        coll:'Collectibles',
        cush:'Cushions',
        cari:'Caricatures',
        mug:'Mugus'
    }
]

const col_four = [
    {
        path:'/image/igp_Home_Living_d_categories_20220127.webp',
        label:'Personalized',
        home:'Home & Leaving',
        coll:'Collectibles',
        cush:'Cushions',
        cari:'Caricatures',
        mug:'Mugus'
    },
    {
        path:'/image/igp_Jewellery_d_categories_20220128.webp',
        label:'Personalized',
        home:'Home & Leaving',
        coll:'Collectibles',
        cush:'Cushions',
        cari:'Caricatures',
        mug:'Mugus'
    },
    {
        path:'/image/igp_Fashion_d_categories_20220126 (1).jpg',
        label:'Personalized',
        home:'Home & Leaving',
        coll:'Collectibles',
        cush:'Cushions',
        cari:'Caricatures',
        mug:'Mugus',
        

    }
]



const Categories = ()=>{
    return(
        <div className='lg:px-[50px] md:px-5 max-md:px-[20px]'>
        <div className='mb-5'>
        <h1 className="text-2xl font-semibold text-gray-700">Categories</h1>
        <span className="text-lg text-gray-500 mb-5 ">Wide range of gifts for your celebration</span>
        </div>
          <div className='grid max-lg:grid-cols-1 lg:grid-cols-2 gap-5 mb-5'>
            {
               col_six.map((item,index)=>(
                <div key={index} >
                   <div className="border border-gray-400 p-2 rounded-xl flex gap-10" >
                    <Image src={item.path} width={434} height={217} alt='prduct' className='rounded-xl'/>
                     
                     <div className='flex flex-col'>
                        <Link href='#' className="font-bold text-xl mb-5">{item.label}</Link>

                        <Link href='#' className="text-gray-500 text-sm mb-3">{item.home}</Link>

                        <Link href='#' className="text-gray-500 text-sm mb-3">{item.coll}</Link>

                        <Link href='#' className="text-gray-500 text-sm mb-3">{item.cush}</Link>

                        <Link href='#' className="text-gray-500 text-sm mb-3">{item.cari}</Link>

                        <Link href='#' className="text-gray-500 text-sm ">{item.mug}</Link>
                     </div>
                  
                   </div>
                </div>
               ))
            }
          </div>

          <div className='grid  max-lg:grid-cols-1 lg:grid-cols-3 gap-5 mb-5'>
            {
               col_three.map((item,index)=>(
                <div key={index} >
                   <div className="border border-gray-400 p-2 rounded-xl flex gap-10" >
                    <Image src={item.path} width={218} height={218} alt='prduct' className='rounded-xl'/>
                     
                     <div className='flex flex-col'>
                        <Link href='#' className="font-bold text-xl mb-5">{item.label}</Link>

                        <Link href='#' className="text-gray-500 text-sm mb-3">{item.home}</Link>

                        <Link href='#' className="text-gray-500 text-sm mb-3">{item.coll}</Link>

                        <Link href='#' className="text-gray-500 text-sm mb-3">{item.cush}</Link>

                        <Link href='#' className="text-gray-500 text-sm mb-3">{item.cari}</Link>

                        <Link href='#' className="text-gray-500 text-sm ">{item.mug}</Link>
                     </div>
                  
                   </div>
                </div>
               ))
            }
          </div>

          <div className='grid max-lg:grid-rows-1 lg:grid-cols-3 gap-5 mb-20'>
            {
               col_four.map((item,index)=>(
                <div key={index} >
                   <div className="border border-gray-400 p-2 justify-between rounded-xl flex gap-20" >

                     <div className='flex flex-col pl-5'>
                        <Link href='#' className="font-bold text-xl mb-5">{item.label}</Link>

                        <Link href='#' className="text-gray-500 text-sm mb-3">{item.home}</Link>

                        <Link href='#' className="text-gray-500 text-sm mb-3">{item.coll}</Link>

                        <Link href='#' className="text-gray-500 text-sm mb-3">{item.cush}</Link>

                        <Link href='#' className="text-gray-500 text-sm mb-3">{item.cari}</Link>

                        <Link href='#' className="text-gray-500 text-sm ">{item.mug}</Link>
                     </div>
                     <Image src={item.path} width={218} height={218} alt='prduct' className='rounded-xl float-right'/>
                   </div>
                </div>
               ))
            }
          </div>





        </div>
    )
}

export default Categories
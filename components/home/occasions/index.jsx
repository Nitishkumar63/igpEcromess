import { Button } from "antd"
import Image from "next/image"
import Link from "next/link"
const Occasions = ()=>{
    return(
        <div className='lg:px-[50px] max-md:px-[20px]'>
        <div className="mb-5 max-lg:px-5 max-md:px-0   ">
        <h1 className="text-2xl font-semibold text-gray-700">Occasions</h1>
        <span className="text-lg text-gray-500 ">Celebrate each occasion with a gift that has a lasting impression</span>
        </div>
        
        <div className="grid md:grid-cols-4 mb-10 max-md:px-[20px] max-lg:px-5  md:gap-5 lg:gap-0 max-md:grid-cols-1 lg:grid-cols-7 ">
            {/*first image code */}
            <div className="col-span-2 max-md:w-[300px] max-lg:w-[350px] lg:w-[382px]">
                <div className='border border-gray-300 mb-5 rounded-2xl cursor-pointer'>
                    <Image src='/image/igp_Birthday_d_collections_20220309.webp' width={382} height={328} alt="cakes" className="rounded-t-2xl"/>
                     <div className="text-center py-2">
                     <Link href='#' className="text-center text-xl font-semibold text-gray-500">Birthday</Link>
                     </div>
                </div>

                  <div className='border mb-5 border-gray-300 rounded-2xl cursor-pointer'>
                    <Image src='/image/igp_Baby_Shower_d_collections_20220309.webp' width={382} height={328} alt="cakes" className="rounded-t-2xl"/>
                     <div className="text-center py-2">
                     <Link href='#' className="text-center text-xl font-semibold text-gray-500">Baby Shower</Link>
                     </div>
                </div>
            </div>

              {/*second image code */}
              <div className="col-span-2 max-md:w-[300px] max-lg:w-[350px] lg:w-[382px]">
            <div className='border border-gray-300 mb-5 rounded-2xl cursor-pointer'>
                    <Image src='/image/igp_Wedding_d_collections_20220309.webp' width={382} height={328} alt="cakes" className="rounded-t-2xl"/>
                     <div className="text-center py-2">
                     <Link href='#' className="text-center text-xl font-semibold text-gray-500">Wedding</Link>
                     </div>
                </div>

                <div className='border border-gray-300  rounded-2xl cursor-pointer'>
                    <Image src='/image/igp_House_Warming_d_collections_20220309.webp' width={382} height={328} alt="cakes" className="rounded-t-2xl"/>
                     <div className="text-center py-2">
                     <Link href='#' className="text-center text-xl font-semibold text-gray-500">House Warming</Link>
                     </div>
                </div>

            </div>
            {/*thired image code */}
            <div className="col-span-2 max-md:w-[300px] max-lg:w-[350px] lg:w-[382px]">
            <div className='border border-gray-300 mb-5 rounded-2xl cursor-pointer'>
                    <Image src='/image/igp_Anniversary_d_collections_20220309.webp' width={382} height={328} alt="cakes" className="rounded-t-2xl"/>
                     <div className="text-center py-2">
                     <Link href='#' className="text-center text-xl font-semibold text-gray-500">Anniversary</Link>
                     </div>
                </div>

                  <div className='border border-gray-300 rounded-2xl cursor-pointer'>
                    <Image src='/image/igp_Best_Wishes_d_collections_20220309 (1).jpg' width={382} height={328} alt="cakes" className="rounded-t-2xl"/>
                     <div className="text-center py-2">
                     <Link href='#' className="text-center text-xl font-semibold text-gray-500">Best Wishes</Link>
                     </div>
                </div>
            </div>
            {/*four image code */}
            <div>
         
                <div className="flex justify-center"><Image src='/image/bor.jpeg' width={40} height={70} alt="border" className="mb-5"/></div>
              <div className="flex justify-center mb-5">  <Button style={{width:'180px', height:'70px'}} className="bg-[#E2E8F0] font-bold text-gray-500 text-xl">Explore<br className='mb-0 p-0 pb-0'/> More</Button></div>
              <div className="flex justify-center"><Image src='/image/border.jpeg' width={25} height={30} alt="border" className="mb-5"/></div>
             
            </div>
        </div>

        </div>
    )
}
export default Occasions
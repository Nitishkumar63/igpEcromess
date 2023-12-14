import { Button } from "antd"
import Image from "next/image"
import Link from "next/link"

const Perfect = ()=>{
    return(
        <div className='lg:px-[50px] max-md:px-[20px] md:px-5'>
       <div className="border rounded-lg relative cursor-pointer mb-10 border-red-400 py-5 h-[130px] px-5 items-center flex justify-between bg-[#F5E3E5]">
  <div className="flex px-[30px] flex-col">
    <Link href='#' className="font-semibold max-lg:text-xl lg:text-5xl text-red-500">Find The Perfect Gifts</Link>
    <Link href='#' className="text-red-500">Discover Gifts by Recipient, Relationships & Occasions.</Link>
  </div>
  <div className="absolute -top-28  right-80 h-60">
    <Image
      src='/image/gift-boxes.webp'
      className='object-cover w-full h-full rounded-lg cursor-pointer max-lg:hidden'
      width={490}
      height={50}
      alt='gift-boxes'
    />
  </div>
  <Button className="bg-[#DD2745] text-white" style={{ width: '262px', height: '70px' }}>START SEARCH</Button>
</div>

        </div>
    )
}

export default Perfect
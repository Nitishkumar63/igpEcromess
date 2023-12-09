import Link from "next/link"
import Image from "next/image"


const image= [
    {
        path:'/image/chocolate_cakes_igp_frames_20221011.webp',
        title:'CHACOLATE CAKES'
    },
    {
        path:'/image/designer_cakes_igp_frames_20221011.webp',
        title:'CHACOLATE CAKES'
    },
    {
        path:'/image/photo_cakes_igp_frames_20221011.webp',
        title:'CHACOLATE CAKES'
    },
    {
        path:'/image/cartoon_cakes_igp_frames_20221011.webp',
        title:'CHACOLATE CAKES'
    },
    
]





const Cakes = () =>{
    return(
        <div className='lg:px-[50px] max-md:px-[20px] md:px-5'>
        <div className="border-b border-black flex justify-between mb-5  ">
              <Link href="#" className="text-lg font-semibold">
              CAKES
              </Link>
              <Link href="#" className="text-gray-500 font-semibold">
                View All
              </Link>
            </div>

            <div className='grid max-lg:grid-cols-2 max-md:grid-cols-1 mb-10   max-md:px-[10px] lg:grid-cols-4 gap-5'>
             {
                image.map((item,index)=>(
                    <div key={index}>
                         <div className="relative md:flex md:justify-center">
                <Image
                  src={item.path}
                  className="rounded-2xl"
                  width={334}
                  height={334}
                  alt="image"
                />
                <Link
                  href="#"
                  className="absolute bottom-3 text-lg text-gray-500 left-[25%] font-semibold"
                >
                  {item.title}
                </Link>
              </div>

                    </div>
                ))
             }
            </div>
        </div>
    )
}

export default Cakes
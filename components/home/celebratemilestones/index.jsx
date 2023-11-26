import Link from "next/link"
import Image from "next/image"



const CelebrateMilestones =()=>{
    return(
        <div className="md:px-5 lg:px-0">
         <h1 className="text-2xl font-semibold text-gray-700">Celebrate Milestones</h1>
        <span className="text-lg text-gray-500 ">With our memorable gifts</span>

            
           



            <div className="grid max-lg:grid-cols-1 lg:grid-cols-2 mt-5 gap-10 ">
              <div>
              <div className="border-b border-black flex justify-between mb-5">
               <Link href="#" className="text-lg font-semibold">BIRTHDAY GIFTS</Link>
               <Link href="#" className="text-gray-500 font-semibold">View All</Link>

             </div>
                <div className="grid grid-cols-2 gap-5 max-lg:flex max-lg:justify-center max-md:gap-5 max-lg:gap-10">
                    <div className="gap-10">
                    <div className="relative mb-5">
        <Image src="/image/igp_Birthday_For_Her_d_frames_20220309.webp" className="rounded-2xl" width={334} height={200} alt="image" />
        <Link href="#" className="absolute bottom-3 text-lg text-gray-500 left-[40%] font-semibold">FOR HER</Link>
    
             </div>
             <div className="relative mb-5">
        <Image src="/image/igp_Birthday_Cakes_d_frames_20220309.webp" className="rounded-2xl" width={334} height={251} alt="image" />
        <Link href="#" className="absolute bottom-3 text-lg text-gray-500 left-[43%] font-semibold">CAKES</Link>
    </div>
    <div className="relative mb-5">
        <Image src="/image/igp_Birthday_Personalized_d_frames_20220309.webp" className="rounded-2xl" width={334} height={200} alt="image" />
        <Link href="#" className="absolute bottom-3 text-lg text-gray-500 left-[30%] font-semibold">PERSONALIZED</Link>
    
             </div>
                    </div>
                    <div>
                    <div className="relative mb-5">
        <Image src="/image/igp_Birthday_Flowers_d_frames_20220309.webp" className="rounded-2xl" width={334} height={251} alt="image" />
        <Link href="#" className="absolute bottom-4 text-lg text-gray-500 left-[37%] font-semibold">FLOWERS</Link>
    
             </div>
             <div className="relative mb-5">
        <Image src="/image/igp_Birthday_For_Him_d_frames_20220309.webp" className="rounded-2xl" width={334} height={200} alt="image" />
        <Link href="#" className="absolute bottom-3 text-lg text-gray-500 left-[37%] font-semibold">FOR HIM</Link>
    </div>
    <div className="relative mb-5">
        <Image src="/image/igp_Birthday_Plants_d_frames_20220309.webp" className="rounded-2xl" width={334} height={200} alt="image" />
        <Link href="#" className="absolute bottom-3 text-lg text-gray-500 left-[40%] font-semibold">PLANTS</Link>
    
             </div>
                    </div>
                </div>
              </div>

<div>

<div className="border-b border-black flex justify-between mb-5">
               <Link href="#" className="text-lg font-semibold">ANNIVERSARY GIFTS</Link>
               <Link href="#" className="text-gray-500 font-semibold">View All</Link>
             </div>

<div className="grid md:grid-cols-2 gap-5 max-lg:flex  max-lg:justify-center max-md:gap-5 max-lg:gap-10">
                    <div className="gap-10">
                    <div className="relative mb-5">
        <Image src="/image/igp_Anniversary_Flowers_d_frames_20220309.jpg" className="rounded-2xl" width={334} height={200} alt="image" />
        <Link href="#" className="absolute bottom-3 max-md:text-sm md:text-lg text-gray-500 left-[40%] font-semibold">FLOWERS</Link>
    
             </div>
             <div className="relative mb-5">
        <Image src="/image/igp_Anniversary_Husband_d_frames_20220309.jpg" className="rounded-2xl" width={334} height={251} alt="image" />
        <Link href="#" className="absolute bottom-3 text-lg text-gray-500 left-[40%] font-semibold">HUSBAND</Link>
    </div>
    <div className="relative mb-5">
        <Image src="/image/igp_Anniversary_Personalized_d_frames_20220309.webp" className="rounded-2xl" width={334} height={200} alt="image" />
        <Link href="#" className="absolute bottom-3 text-lg text-gray-500 left-[32%] font-semibold">PERSONALIZED</Link>
    
             </div>
                    </div>
                    <div>
                    <div className="relative mb-5">
        <Image src="/image/igp_Anniversary_Wife_d_frames_20220309 (1).webp" className="rounded-2xl" width={334} height={251} alt="image" />
        <Link href="#" className="absolute bottom-4 text-lg text-gray-500 left-[43%] font-semibold">WIFE</Link>
    
             </div>
             <div className="relative mb-5">
        <Image src="/image/igp_Anniversary_Couples_d_frames_20220309.webp" className="rounded-2xl" width={334} height={200} alt="image" />
        <Link href="#" className="absolute bottom-3 text-lg text-gray-500 left-[37%] font-semibold">COUPLES</Link>
    </div>
    <div className="relative mb-5">
        <Image src="/image/igp_Anniversary_Cakes_d_frames_20220309.webp" className="rounded-2xl" width={334} height={200} alt="image" />
        <Link href="#" className="absolute bottom-3 text-lg text-gray-500 left-[43%] font-semibold">CAKES</Link>
    
             </div>
                    </div>
                </div>


</div>


</div>







        </div>
    )
}

export default CelebrateMilestones
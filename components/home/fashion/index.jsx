import Link from "next/link";
import Image from "next/image";
const Fashion = () =>{
    return(
        <>
        <div className="mb-10 max-lg:px-5 max-md:px-0 lg:px-[50px]">
        
        <div className="grid max-lg:grid-cols-1 lg:grid-cols-2 mt-5 gap-10 ">


       {/*first image coding */}
        <div>
            <div className="border-b border-black flex justify-between mb-5">
              <Link href="#" className="text-lg font-semibold">
              FASHION
              </Link>
              <Link href="#" className="text-gray-500 font-semibold">
                View All
              </Link>
            </div>

            <div className="grid md:grid-cols-1 gap-5 max-lg:flex max-md:mb-5 md:mb-12 max-lg:justify-center max-md:gap-5 max-lg:gap-10">
              <div className="relative ">
                <Image
                  src="/image/igp_Fashion_Jewellery_d_frames_20220309.webp"
                  className="rounded-2xl"
                  width={694}
                  height={250}
                  alt="image"
                />
                <Link
                  href="#"
                  className="absolute bottom-3 text-lg text-gray-500 left-[43%] font-semibold"
                >
                  SWEETS
                </Link>
              </div>
            </div>

            <div className="grid md:grid-cols-2 gap-5 max-lg:flex mb-5  max-lg:justify-center max-md:gap-5 max-lg:gap-10">
              <div className="relative">
                <Image
                  src="/image/igp_Fashion_Accessories_d_frames_20220309.webp"
                  className="rounded-2xl"
                  width={334}
                  height={334}
                  alt="image"
                />
                <Link
                  href="#"
                  className="absolute bottom-3 text-lg text-gray-500 left-[35%] font-semibold"
                >
                  CHOCOLATES
                </Link>
              </div>

              <div className="relative">
                <Image
                  src="/image/igp_Fashion_Bags_and_Clutches_d_frames_20220309.webp"
                  className="rounded-2xl"
                  width={334}
                  height={334}
                  alt="image"
                />
                <Link
                  href="#"
                  className="absolute bottom-3 text-lg text-gray-500 left-[35%] font-semibold"
                >
                  DRY FRUITS
                </Link>
              </div>
            </div>
          </div>


 {/*second image coding */}

          <div>
            <div className="border-b border-black flex justify-between mb-5">
              <Link href="#" className="text-lg font-semibold">
              HOME
              </Link>
              <Link href="#" className="text-gray-500 font-semibold">
                View All
              </Link>
            </div>

            
            <div className="grid grid-cols-2 gap-5 max-lg:flex max-lg:justify-center max-md:gap-5 max-lg:gap-10">
              <div className="gap-10">
                <div className="relative mb-5">
                  <Image
                    src="/image/igp_Home_Home_Decor_d_frames_20220309.webp"
                    className="rounded-2xl"
                    width={334}
                    height={200}
                    alt="image"
                  />
                  <Link
                    href="#"
                    className="absolute bottom-3 text-lg text-gray-500 left-[30%] font-semibold"
                  >
                    HOME & LIVING
                  </Link>
                </div>
                <div className="relative mb-5">
                  <Image
                    src="/image/personalized_caricatures_d_igp_frames_20230526.webp"
                    className="rounded-2xl"
                    width={334}
                    height={251}
                    alt="image"
                  />
                  <Link
                    href="#"
                    className="absolute bottom-3 text-lg text-gray-500 left-[33%] font-semibold"
                  >
                    CARICATURES
                  </Link>
                </div>
                <div className="relative mb-5">
                  <Image
                    src="/image/igp_Home_Plants_d_frames_20220309.jpg"
                    className="rounded-2xl"
                    width={334}
                    height={200}
                    alt="image"
                  />
                  <Link
                    href="#"
                    className="absolute bottom-3 text-lg text-gray-500 left-[35%] font-semibold"
                  >
                    PHOTO GIFTS
                  </Link>
                </div>
              </div>
              <div>

                
                <div className="relative mb-5">
                  <Image
                    src="/image/igp_Home_Poster_and_Prints_d_frames_20220309.webp"
                    className="rounded-2xl"
                    width={334}
                    height={251}
                    alt="image"
                  />
                  <Link
                    href="#"
                    className="absolute bottom-4 text-lg text-gray-500 left-[37%] font-semibold"
                  >
                    BIRTHDAY
                  </Link>
                </div>
                <div className="relative mb-5">
                  <Image
                    src="/image/igp_Home_Kitchen_and_Barware_d_frames_20220309.webp"
                    className="rounded-2xl"
                    width={334}
                    height={200}
                    alt="image"
                  />
                  <Link
                    href="#"
                    className="absolute bottom-3 text-lg text-gray-500 left-[37%] font-semibold"
                  >
                    FOR HIM
                  </Link>
                </div>
                <div className="relative mb-5">
                  <Image
                    src="/image/igp_Home_Home_Furnishings_d_frames_20220309.webp"
                    className="rounded-2xl"
                    width={334}
                    height={200}
                    alt="image"
                  />
                  <Link
                    href="#"
                    className="absolute bottom-3 text-lg text-gray-500 left-[37%] font-semibold"
                  >
                    JEWELLERY
                  </Link>
                </div>
              </div>
            </div>
          </div>

        </div>
      </div>
        </>
    )
}

export default Fashion
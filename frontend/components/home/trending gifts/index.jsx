import  Image  from 'next/image';
import Link from 'next/link';
const flower = [
    {
        imagepath:'/image/flowers_igp_slides_20230510.jpg',
        href:"#"
    },
    {
        imagepath:'/image/cakes_igp_slides_20230510.jpg',
        href:"#"
    },
    {
        imagepath:'/image/personalized_igp_slides_20230510.jpg',
        href:"#"
    },
    {
        imagepath:'/image/hampers_igp_slides_20230510.jpg',
        href:"#"
    },
    {
        imagepath:'/image/plants_igp_slides_20230510.jpg',
        href:"#"
    },
]


const TrendingGifts = () =>{
    return(
        <div className="md:px-5  lg:px-[50px] max-md:px-[20px]">

        
        <h1 className="text-2xl font-semibold text-gray-700">Trending Gifts</h1>
        <span className="text-lg text-gray-500 ">Handpicked for your gifting needs</span>
        
            <div className="grid max-md:grid-cols-2  md:grid-cols-3 max-md:gap-5 md:gap-5 lg:gap-0 lg:grid-cols-5 mt-[20px] gap-x-0 mb-10 lg:gap-x-5">

                {
                    flower.map((item,index)=>(
                        <div key={index}>
                            <Link href="#"><Image src={item.imagepath}  className='rounded-xl' width={256} height={256} alt='flower'/></Link>
                        </div>
                    ))
                }

            </div>
        
        </div>
    )
}

export default TrendingGifts
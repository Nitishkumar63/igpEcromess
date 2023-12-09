import Link from 'next/link';
import  Image  from 'next/image';
const lang = [
    {
        path:'/image/igp_USA_d_country_20220127.webp',
        title:'USA'
    },
    {
        path:'/image/igp_Canada_d_country_20220127.webp',
        title:'CANADA'
    },
    {
        path:'/image/igp_Australia_d_country_20220127.webp',
        title:'AUSTRALIA'
    },
    {
        path:'/image/igp_UK_d_country_20220127.webp',
        title:'UK'
    },
    {
        path:'/image/D-Germany.jpg',
        title:'GERMANY'
    },
    {
        path:'/image/igp_UAE_d_country_20220127.webp',
        title:'UAE'
    },
    {
        path:'/image/igp_Singapore_d_country_20220127.webp',
        title:'SINGAPORE'
    },
    {
        path:'/image/igp_New_Zealand_d_country_20220127.jpg',
        title:'NEW ZEALAND'
    },
    {
        path:'/image/igp_Netherlands_d_country_20220127.jpg',
        title:'NETHERLANDS'
    },
    {
        path:'/image/igp_Other_Countries_d_country_20220127.webp',
        title:'OTHERS COUNTRIES'
    },
  
]


const SendGifts = () =>{
    return(
        <div className='lg:px-[50px] max-md:px-[20px] md:px-5 mb-20'>
        <div className="mb-5 max-lg:px-5 max-md:px-0  ">
        <h1 className="text-2xl font-semibold text-gray-700">Send Gifts World Wide</h1>
        <span className="text-lg text-gray-500 ">A gift to every part of the world</span>
        </div>


      <div className="grid max-lg:grid-cols-4 max-md:grid-cols-2 mb-8 lg:grid-cols-5 gap-10">
        {
            lang.map((item,index)=>(
                <div key={index}>
                    <div className="bg-[#F1F5F9] p-4 rounded-xl">
                       <Image src={item.path} width={238} height={136} alt='image' className=' mb-3 cursor-pointer rounded-xl'/>
                      <div className='text-center bg'>  <Link href='#' className='text-lg text-gray-500'>{item.title}</Link></div>
                    </div>
                </div>
            ))
        }
      </div>





        </div>
    )
}


export default SendGifts
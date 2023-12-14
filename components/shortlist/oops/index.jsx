import { Button } from "antd"
import Image from "next/image"
import ViewedProducts from "@/components/home/viewedproducts"
import Stats from "@/components/home/stats"
import { useRouter } from "next/router"
const ShortIMage = [
    {
        path:'/image/sdd_cart_collections_20220823_20230217211812.webp',
        title:'Same Day'
    },
    {
        path:'/image/sdd_cart_collections_20220823_20230217211812.webp',
        title:'Same Day'
    },
    {
        path:'/image/sdd_cart_collections_20220823_20230217211812.webp',
        title:'Same Day'
    },
]


const Oops = () =>{

    const router = useRouter()

    const loginpage = () =>{
        router.push('/login')
    }

    const Homepage = () =>{
        router.push('/')
    }



    return(
        <>
        <div className='px-[50px]'>
        <div>
      <div className="grid grid-cols-2 py-5 gap-5 mb-[20px]">
        <div className="flex justify-center py-[50px] mt-10 items-center">
           <div>
           <Image src='/image/empty-wishlist-new.svg' width={496} height={500} alt='logo'/>
           </div>
        </div>
        <div className="flex justify-center ">
            <div className="shadow-lg border px-[60px] w-[550px] mt-10 rounded-lg h-[550px]">
                <div className='text-center mt-7 mb-8'>
                    <h1 className="text-3xl font-bold py-6  text-red-400">Oops! </h1>
                    <p className='text-gray-600 text-lg mb-7'>Your wishlist seems to be empty.<br/>
Lets find something for you.</p>
                     <h1 className='text-xs flex  gap-5 justify-center items-center text-gray-400'>Can t see the items in your cart. Try logging in  <Button onClick={loginpage} className="bg-[#EFF4FE]  font-semibold text-blue-700">Log in</Button> </h1>
                </div>

                <div className="flex justify-center mb-8">
                    <div className=" w-[241px] border-b-2"></div>
                </div>



                <div className="flex  justify-between items-center mb-3">
                    <h1 className='font-semibold text-blue-500 text-sm'>Browse Collection</h1>
                    <Button onClick={Homepage} style={{ border: 'none' }} className="className='font-semibold text-gray-500 text-sm">Go to Home</Button>
                </div>
                <div className='flex gap-5'>
                {
                    ShortIMage.map((item,index)=>(
                        <div key={index} className='border'>
                           <Image src={item.path} width={144} height={144} alt='flower' />
                          <div className='text-center'>
                          <Button  style={{ border: 'none' }} className='font-semibold text-gray-500 text-sm'>{item.title}</Button>
                          </div>
                        </div>
                    ))
                }
                </div>
            </div>
        </div>
      </div>
    </div>
    </div>
    <div className="w-full py-2 bg-gray-200 mb-5"></div>
    <div>
     <ViewedProducts/>
     <Stats/>
    </div>

    </>
    )
}

export default Oops
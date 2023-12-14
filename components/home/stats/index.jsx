import { Button } from "antd"
import Image from 'next/image'
const Stats = ()=>{
    return(
        <>
        <div className="bg-[#45485E] py-5 mb-10">
            <div className="grid max-lg:grid-cols-1 lg:grid-cols-2 gap-x-5 ">
                <div className="border-r-2  border-white px-10">
                    
                   
                   <div className="flex flex-col py-5 ">

                   <div className="items-center flex md:flex md:justify-center">
                  <h1 className="lg:text-5xl max-lg:text-xl  font-semibold text-white">Newsletter updates!!</h1></div>
                  <div className='md:flex md:justify-center'> <span className="text-lg text-gray-400">Get unique & trendy gifts ideas and best offers delivered to your inbox</span></div>
                    
                    </div>
                  
                </div>
                <div className="border-r-2 border-white flex items-center py-5 md:flex md:justify-center">
                   <div className="flex gap-5 ">
                   <input type="serech" name="serech" placeholder="Enter E-mail Id " className="bg-white outline-none px-5 w-[450px] py-2" />
                   <Button className="bg-[#DD2745] text-white" style={{width:'250px',height:'50px' }}>Submit</Button>
                   </div>
                    </div>
            </div>
        </div>
        
        <div className="lg:px-[50px] max-md:px-[20px] mb-10 md:px-5  ">

            <div className="grid grid-cols-7 gap-15">
                <div>
                    <Image src='/image/stare.jpeg' width={100} height={200} alt='start'/>
                </div>
                <div className="col-span-2 items-center flex flex-col  ">
                    <p style={{fontSize:'80px'}} className=" font-semibold text-gray-400">400+</p>
                    <span className="lg:text-lg max-lg:text-sm text-red-400 font-semibold">Cities having same day delivery</span>
                </div>
                <div className="col-span-2 items-center flex flex-col">
                <p style={{fontSize:'80px'}} className=" font-semibold text-gray-400">100+</p>
                    <span className="lg:text-lg max-lg:text-sm text-red-400 font-semibold">Cities having same day delivery</span>
                </div>
                <div className="col-span-2 items-center flex flex-col">
                <p style={{fontSize:'80px'}} className=" font-semibold text-gray-400">5<span className="text-xl">Million</span>+</p>
                    <span className="lg:text-lg max-lg:text-sm text-red-400 font-semibold">Cities having same day delivery</span>
                </div>
            </div>

        </div>


        </>
    )
}

export default Stats
import Image from 'next/image'
import { Button,Input} from 'antd';
import { useState } from 'react';
import Link from 'next/link'

const Cart = () =>{
    const [count ,setCount] = useState(1)
    return(
        <>
        <div className="px-[50px]">
            <div className="text-center mt-2 mb-5">
            <h1 className='text-4xl font-bold'>Shopping Cart</h1>    
            </div>


            <div className='flex items-center justify-center mb-[30px] gap-5 '>


                <div className='w-[1400px] shadow-xl  px-5 border bg-white p-2 rounded-lg'>

                    <div className='grid grid-cols-4'>
                        <div className='flex gap-3 col-span-2'>
                            <div className=''>
                                <Image src='/image/p-choco-chip-truffle-cake-300-gm--265855-m.webp' alt='logo' width={200} height={174}/>
                            </div>
                            <div>
                                <h1 className='text-gray-600 text-lg mb-3'>Choco Chip Truffle Cake (300 gm)</h1>
                                 <div>
                                  <h1 className='text-sm text-gray-500'>Flavour : <span className='bg-gray-200 p-1 text-xs rounded-lg px-3'>Truffle</span> </h1>
                                 </div>
                            </div>
                        </div>
                        <div>
                            <h1 className='text-sm mb-2 font-semibold '>Fixed Time- ₹ 200</h1>
                            <h1 className='text-xs mb-2 font-semibold text-gray-500'>On 04-Dec-2023 between 12:00 hrs - 14:00 hrs</h1>
                            <h1 className='text-xs font-semibold text-gray-500'>Pincode - 500001</h1>
                        </div>
                        <div>
                            <div className='flex justify-end gap-1'>
                                <h1 className='text-red-500 text-xl font-bold'>₹ 645</h1>
                                <Image src='/image/info-cart.svg' className='mt-2' width={20} height={20} alt='icon' />
                              
                            </div>
                            <div className='flex justify-end mt-[100px]'>
                            <div className='w-[100px] border-2 py-5 justify-center px-2 items-center h-[30px] flex ' style={{ borderRadius: 0}} >
                                    <h1 className='text-2xl text-gray-500 cursor-pointer' onClick={()=> count ? setCount(count-1) : null}>-</h1>
                                     <Input value={count} className='border-0 text-center outline-none' style={{ borderRadius: 0}} />
                                     <h1 className='text-2xl text-gray-500 cursor-pointer' onClick={()=>setCount(count+1)}>+</h1>
                                </div>
                            </div>
                        </div>
                    </div>





                </div>



                <div className='flex flex-col'>

                <div className=' flex mb-3 items-center justify-center shadow-lg bg-white cursor-pointer border-2 rounded-full cu w-[40px] h-[40px]'>
                <i class='bx bx-heart text-2xl text-gray-500 p-2'></i>
                </div>
                
                <div className=' flex items-center justify-center shadow-lg bg-white cursor-pointer border-2 rounded-full cu w-[40px] h-[40px]'>
                <i class='bx bx-trash text-2xl text-gray-500 p-2'></i>
                </div>

                </div>
                
            </div>









        </div>

        
<div className="shadow-5xl border py-3 fixed bottom-0 bg-white w-full z-50">
<div className='flex justify-between items-center px-[50px]'>

<div className='flex gap-5'>
    <Button style={{ borderRadius: 0}} className=" pr-[50px] border-t-0 border-l-0 border-b-0  w-[220px] h-[50px] text-xl font-semibold text-gray-500">Total Product : <span className='text-red-500 px-5 text-lg'>1</span></Button>
    <Button style={{ borderRadius: 0}} className=" pr-[50px] border-0 w-[220px] h-[50px] text-xl font-semibold text-gray-500">Total Amount : <span className='text-red-500 px-5 text-lg'>₹ 665</span></Button>
</div>

<div>
<Link href='/checkout'>
    <Button style={{ borderRadius: 0}} className="w-[500px] h-[60px] text-lg font-semibold  text-white bg-[#DD2745]">PROCEED TO CHECKOUT</Button>
</Link>
</div>

</div>
</div>

</>

    )
}
export default Cart
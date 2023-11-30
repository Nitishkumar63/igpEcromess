import { Button } from "antd"
import Image from "next/image"
import Link from "next/link"
import { useRouter } from "next/router"




const AddRember =() =>{
 const router = useRouter();

    const add = () =>{
     router.push('/login')
    }




    return(
        <div className="px-[45px]">
         <div className="grid grid-cols-3">
            <div className="col-span-2 py-10">
            <h1 className="font-bold text-[#DD2745] text-5xl">Reminders</h1>
            <p className="text-lg text-gray-400 mb-5">Never miss loved ones special days with timely prompts, tailor-made offers & personalised gifts</p>
            
            <div className='shadow-sm w-[891px] rounded-3xl border h-[450px] relative'>
            <div className="grid grid-cols-4  py-5 md:grid-cols-2">


              <div className=" gap-5  py-5">
               <div className="border border-t-0 pb-10 border-b-3 border-l-0 border-r-2 flex p-5 items-center  gap-5  ">
               <Image src='/image/Reminders_Special_Promps.svg' width={300} height={300} alt="'logo"/>
                <div className="flex flex-col">
                <h1 className="text-2xl mb-2 font-semibold">Special Prompts</h1>
                 <p className="leading-tight text-gray-400 text-sm">To Ensure you always remember your loved one s Birthday or Anniversary with our timely reminders</p>
                </div>
               </div>
              </div>
              


              <div className=" gap-5 py-5">
               <div className="border border-t-0 pb-10 border-b-2 border-l-0 border-r-0 flex p-5 items-center gap-5">
               <Image src='/image/Reminders_Curated_Catalogue.svg' width={300} height={300} alt="'logo"/>
                <div className="flex flex-col">
                <h1 className="text-2xl mb-2 font-semibold">Special Prompts</h1>
                 <p className="leading-tight text-gray-400 text-sm">To Ensure you always remember your loved one s Birthday or Anniversary with our timely reminders</p>
                </div>
               </div>
              </div>

              
              <div className="absolute inset-0  flex items-center justify-center">
      <div className="rounded-full p-4 cursor-pointer bg-[#F4F1FA]">
        <Image src='/image/calendar-heart-fill.svg' width={32} height={32} alt="icon"/>
      </div>
    </div>


              <div className=" gap-5 ">
               <div className="border border-t-0 border-b-0 border-l-0 border-r-2 flex p-5 items-center gap-5">
               <Image src='/image/Reminders_Personalized_offers.svg' width={300} height={300} alt="'logo"/>
                <div className="flex flex-col">
                <h1 className="text-2xl mb-2 font-semibold">Special Prompts</h1>
                 <p className="leading-tight text-gray-400 text-sm">To Ensure you always remember your loved one s Birthday or Anniversary with our timely reminders</p>
                </div>
               </div>
              </div>

              <div className=" gap-5 ">
               <div className=" flex p-5 items-center gap-5">
               <Image src='/image/Reminders_Unlock.svg' width={300} height={300} alt="'logo"/>
                <div className="flex flex-col">
                <h1 className="text-2xl mb-2 font-semibold">Special Prompts</h1>
                 <p className="leading-tight text-gray-400 text-sm">To Ensure you always remember your loved one s Birthday or Anniversary with our timely reminders</p>
                </div>
               </div>
              </div>

            
            </div>
            </div>
        
            
            
            </div>
            <div>
                <div className="shadow-xl w-full rounded-lg px-5 py-5 mb-20">
                     <div className='flex gap-5 items-center justify-center mb-5'>
                        <Image src='/image/reminder-bell.svg' width={48} height={48} alt="bell" />
                        <Link  href='#' className="text-3xl font-semibold">Add a <span className="font-semibold text-3xl text-red-400">Remember</span></Link>
                     </div>
                     <Button onClick={add} className="bg-[#DD2745] flex justify-center items-center gap-x-3 text-white font-semibold text-sm"  style={{width:'430px', height:'50px'}}>
                     <Image src='/image/plus-circle-fill.svg' width={24} height={24} alt="bell" />
                        Sign in to  add
                    </Button>
                </div>
                <Image src='/image/reminder_arrow_text.svg' width={165} height={121} alt="bell" />
            </div>
         </div>
        </div>
    )
}

export default AddRember
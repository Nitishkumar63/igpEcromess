import { Button } from "antd"
import Link from "next/link";
import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";
import Image from 'next/image'
const heights = [328, 192, 328, 328, 192, 192];


const Occa = [
  {
    path: "/image/igp_Birthday_d_collections_20220309.webp",
    title: "Birthday",
  },
  {
    path: "/image/igp_Wedding_d_collections_20220309.webp",
    title: "Wedding",
  },
  
  {
    path: "/image/igp_Anniversary_d_collections_20220309.webp",
    title: "Anniversary",
  },
  {
    path: "/image/igp_House_Warming_d_collections_20220309.webp",
    title: "House Warming",
  },
  
  {
    path: '/image/igp_Best_Wishes_d_collections_20220309 (1).jpg',
    title: "Best Wishes",
  },
  {
    path: "/image/igp_Baby_Shower_d_collections_20220309.webp",
    title: "Baby Shower",
  },
];


const Item = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  overflow: "hidden",
}));




const Occasions = ()=>{
    return(
        <div className='lg:px-[50px] max-md:px-[20px]'>

        <div className="mb-5 max-lg:px-5 max-md:px-0   ">
        <h1 className="text-2xl font-semibold text-gray-700">Occasions</h1>
        <span className="text-lg text-gray-500 ">Celebrate each occasion with a gift that has a lasting impression</span>
        </div>

      
       
      <div className='grid grid-cols-6'>
        <div className="col-span-5">
        {
             <Box sx={{ width: "100%", minHeight: 594 }}>
             <Masonry columns={3} spacing={2}>
               {Occa.map((milestone, index) => (
                <div key={index} className='border border-gray-300  rounded-3xl cursor-pointer' >
                 <Item  sx={{ height: heights[index] }} className='rounded-t-3xl'>
                   <img
                     src={milestone.path}
                     alt={milestone.title}
                     style={{
                       width: "100%",
                       height: "100%",
                       objectFit: "cover",
                     }}
                    
                   />
                  
                 </Item>
               <div className='text-center py-2'>
               <Link
                     href="#"
                     className="  font-semibold text-lg text-gray-500"
                   >
                     {milestone.title}
                   </Link>
               </div>
                 </div>
               ))}
             </Masonry>
           </Box>
          }
        </div>
        <div className="mt-10">
        <div className="flex justify-center"><Image src='/image/bor.jpeg' width={40} height={70} alt="border" className="mb-5"/></div>
              <div className="flex justify-center mb-5">  <Button style={{width:'180px', height:'70px'}} className="bg-[#E2E8F0] font-bold text-gray-500 text-xl">Explore<br className='mb-0 p-0 pb-0'/> More</Button></div>
              <div className="flex justify-center"><Image src='/image/border.jpeg' width={25} height={30} alt="border" className="mb-5"/></div>
        </div>
      </div>


       
   
       
        
     

        </div>
    )
}
export default Occasions
import Link from "next/link";
import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";
const heights = [167, 251, 251, 167, 167, 167];


const heightTwo = [244, 334, 334];

const Celebrate = [
  {
    path: "/image/igp_Fashion_Jewellery_d_frames_20220309.webp",
    title: " SWEETS",
  },
  {
    path: "/image/igp_Fashion_Accessories_d_frames_20220309.webp",
    title: "CHOCOLATES",
  },
  {
    path: "/image/igp_Fashion_Bags_and_Clutches_d_frames_20220309.webp",
    title: " DRY FRUITS",
  },
 
];

const Milestones = [
  {
    path: "/image/igp_Home_Home_Decor_d_frames_20220309.webp",
    title: "HOME & LIVING",
  },
  {
    path: "/image/igp_Home_Poster_and_Prints_d_frames_20220309.webp",
    title: "CARICATURES",
  },
  {
    path: "/image/igp_Home_Stationary_Desk_Accessories_d_frames_20220309.jpg",
    title: "PHOTO GIFTS",
  },
  {
    path: "/image/igp_Home_Kitchen_and_Barware_d_frames_20220309.webp",
    title: "FOR HIM",
  },
  {
    path: "/image/igp_Home_Plants_d_frames_20220309.webp",
    title: "BIRTHDAY",
  },
 
 
  {
    path: "/image/igp_Home_Home_Furnishings_d_frames_20220309.webp",
    title: "JEWELLERY",
  },
];




const Item = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "20px",
  overflow: "hidden",
}));



const Items = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "20px",
  overflow: "hidden",
}));





const Fashion = () =>{
    return(
        <>
          <div className="md:px-5  lg:px-[50px] max-md:px-[20px]">
    <div className='mb-8'>
      <h1 className="text-2xl font-semibold text-gray-700">
      Popular in Gifting
      </h1>
    <span className="text-lg text-gray-500 ">Indulge your loved ones with these</span>
    
    </div>

    <div className="grid max-lg:grid-cols-1 lg:grid-cols-2 mb-5  gap-x-5 ">
      <div className="pr-5 ">
      <div className="border-b border-black flex justify-between px-0 ">
          <Link href="#" className="text-lg font-semibold text-gray-500">
          PERSONALIZED
          </Link>
          <Link href="#" className=" font-semibold text-gray-500">
            View All
          </Link>
        </div>
      </div>
      <div className="pr-1 ">
      <div className="border-b border-black flex justify-between ">
          <Link href="#" className="text-lg font-semibold text-gray-500">
          GOURMET
          </Link>
          <Link href="#" className=" font-semibold text-gray-500">
            View All
          </Link>
        </div>
      </div>
      </div>



    <div className="grid max-lg:grid-cols-1 lg:grid-cols-2 mt-5 gap-x-5 ">

    <div>
        <Box sx={{ width: '100%', minHeight: 334,   }}>
    <Masonry columns={2} spacing={3} >
      {Celebrate.map((milestone, index) => (
        <Item key={index} sx={{ height: heightTwo[index] }}>
          <img
            src={milestone.path}
            alt={milestone.title}
            style={{
              width: '100%', 
              height: "100%",
              objectFit: "cover",
            }}
            className="relative"
          />
          <Link
            href="#"
            className="absolute mt-[210px] font-semibold text-lg text-gray-500"
          >
            {milestone.title}
          </Link>
        </Item>
      ))}
    </Masonry>
  </Box>
  
  
    </div>



      <div>
        <Box sx={{ width: "100%", minHeight: 594 }}>
          <Masonry columns={2} spacing={3}>
            {Milestones.map((milestone, index) => (
              <Items key={index} sx={{ height: heights[index] }}>
                <img
                  src={milestone.path}
                  alt={milestone.title}
                  style={{
                    width: "100%",
                    height: "100%",
                    objectFit: "cover",
                  }}
                  className="relative"
                />
                <Link
                  href="#"
                  className="absolute mt-[130px] font-semibold text-lg text-gray-500"
                >
                  {milestone.title}
                </Link>
              </Items>
            ))}
          </Masonry>
        </Box>
      </div>

     
    </div>
  </div>
        </>
    )
}

export default Fashion
import Link from "next/link";
import * as React from "react";
import Box from "@mui/material/Box";
import Masonry from "@mui/lab/Masonry";
import Paper from "@mui/material/Paper";
import { styled } from "@mui/system";
const heights = [167, 251, 251, 167, 167, 167];

const Milestones = [
  {
    path: "/image/igp_Birthday_For_Her_d_frames_20220309.webp",
    title: "FOR HER",
  },
  {
    path: "/image/igp_Birthday_Flowers_d_frames_20220309.webp",
    title: "FLOWERS",
  },
  {
    path: "/image/igp_Birthday_Cakes_d_frames_20220309.webp",
    title: "CAKES",
  },
  {
    path: "/image/igp_Birthday_For_Him_d_frames_20220309.webp",
    title: "PLANTS",
  },
  {
    path: "/image/igp_Birthday_Personalized_d_frames_20220309.webp",
    title: "PERSONALIZED",
  },
  {
    path: "/image/igp_Birthday_Plants_d_frames_20220309.webp",
    title: "FLOWERS",
  },
];

const heightTwo = [167, 251, 251, 167, 167, 167];

const Celebrate = [
  {
    path: "/image/igp_Anniversary_Flowers_d_frames_20220309.jpg",
    title: "FLOWERS",
  },
  {
    path: "/image/igp_Anniversary_Wife_d_frames_20220309.webp",
    title: "WIFE",
  },
  {
    path: "/image/igp_Anniversary_Husband_d_frames_20220309.jpg",
    title: "HUSBAND",
  },
  {
    path: "/image/igp_Anniversary_Couples_d_frames_20220309.webp",
    title: "COUPLES",
  },
  {
    path: "/image/igp_Anniversary_Personalized_d_frames_20220309.webp",
    title: "PERSONALIZED",
  },
  {
    path: "/image/igp_Anniversary_Cakes_d_frames_20220309.webp",
    title: "CAKES",
  },
];

const Items = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "20px",
  overflow: "hidden",
}));

const Item = styled(Paper)(({ theme }) => ({
  display: "flex",
  alignItems: "center",
  justifyContent: "center",
  borderRadius: "20px",
  overflow: "hidden",
}));

const CelebrateMilestones = () => {
  return (
    <div className="md:px-5  lg:px-[50px] max-md:px-[20px]">
      <div className='mb-8'>
        <h1 className="text-2xl font-semibold text-gray-700">
        Celebrate Milestones
        </h1>
      <span className="text-lg text-gray-500 ">With our memorable gifts</span>
      
      </div>

      <div className="grid max-lg:grid-cols-1 lg:grid-cols-2 mb-5  gap-x-5 ">
        <div className="pr-5 ">
        <div className="border-b border-black flex justify-between px-0 ">
            <Link href="#" className="text-lg font-semibold text-gray-500">
              BIRTHDAY GIFTS
            </Link>
            <Link href="#" className=" font-semibold text-gray-500">
              View All
            </Link>
          </div>
        </div>
        <div className="pr-7 ">
        <div className="border-b border-black flex justify-between ">
            <Link href="#" className="text-lg font-semibold text-gray-500">
              ANNIVERSARY GIFTS
            </Link>
            <Link href="#" className=" font-semibold text-gray-500">
              View All
            </Link>
          </div>
        </div>
        </div>



      <div className="grid max-lg:grid-cols-1 lg:grid-cols-2 mt-5 gap-x-5 ">
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

        <div>
          

          <Box sx={{ width: "100%", minHeight: 393 }}>
            <Masonry columns={2} spacing={3}>
              {Celebrate.map((milestone, index) => (
                <Item key={index} sx={{ height: heightTwo[index] }}>
                  <img
                    src={milestone.path}
                    alt={milestone.title}
                    style={{
                      width: "334px",
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
                </Item>
              ))}
            </Masonry>
          </Box>
        </div>
      </div>
    </div>
  );
};

export default CelebrateMilestones;

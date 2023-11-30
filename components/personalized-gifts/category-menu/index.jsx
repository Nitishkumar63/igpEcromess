import Image from "next/image";
import Link from "next/link";
import {  Select, Modal } from 'antd';
import { useState } from "react";
const menus = [
    {
        lable:'Occasions'
    },
    {
        lable:'Same Day Delivery'
    },
    {
        lable:'Recipients'
    },
    {
        lable:'Photo Gifts'
    },
    {
        lable:'Name Gifts'
    },
    {
        lable:'Home'
    },
    {
        lable:'Stationery & Gifts Cart'
    },
    {
        lable:'Fashion & Accerssories'
    },
    {
        lable:'Offical Merchandise'
    },
]



const Categorymenu = () =>{
    const [open, setOpen] = useState(false);

    const handleChange = (value) => {
        console.log(value);
      };

    return(
       <div className="border-b mb-20 ">
        <div className="px-[60px]">
          <div className="flex gap-x-1">
            {
                menus.map((item,index)=>(
                    <div key={index} className='mb-2 '>
                    
  <Select onClick={setOpen(true)} className="h-10 bg-slate-100 hover:bg-slate-200 "  bordered={false}  open={false} defaultValue={item.lable} onChange={handleChange} style={{ borderRadius: "0" }} />

   
                    </div>
                ))
            }

        <Modal
        title="Modal 1000px width"
        centered
        open={open}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1000}
      >
        <p>some contents...</p>
        <p>some contents...</p>
        <p>some contents...</p>
      </Modal>



          </div>
        </div>
    </div>
    )
}
export default Categorymenu

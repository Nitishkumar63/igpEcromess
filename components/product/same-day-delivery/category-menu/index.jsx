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
       <div className="border-b fixed top-[53px] left-0 right-0 z-50 w-full bg-white py-2">
        <div className="px-[60px]">
          <div className="flex gap-x-1">
            {
                menus.map((item,index)=>(
                    <div key={index} >
                    
  <Select onClick={()=>setOpen(true)} className="h-10 bg-slate-100 hover:bg-slate-200 "  bordered={false}  open={false} defaultValue={item.lable} onChange={handleChange} style={{ borderRadius: "0" }} />

   
                    </div>
                ))
            }

       <Modal
       className='mt-[15px]'
        open={open}
        footer={null}
        onOk={() => setOpen(false)}
        onCancel={() => setOpen(false)}
        width={1480}
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
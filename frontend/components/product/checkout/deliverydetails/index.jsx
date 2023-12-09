import { Tabs, Input, Form, DatePicker, Select, Button, Radio } from 'antd';
const { Option } = Select;
const { TabPane } = Tabs;
import Image from 'next/image';
import { useState, useRef } from 'react'; 



const Delivery = () =>{
   const [value, setValue] = useState(1);
   const [index,setIndex] = useState(1);
   const [form,setForm] = useState('hidden');
   const [add,setAdd] = useState('block');
  const onFinish = (value) =>{
    console.log(value)
  }


  const tabindex = (value) =>{
    setIndex(value)
  }


  const onChange = (e) => {
    console.log( e.target.value);
    setValue(e.target.value);
  };

    return(
        <div className='px-[50px]'>
          <div className="grid grid-cols-3 mt-5 gap-10">
            <div className="col-span-2">
              <div className='shadow-xl bg-white border px-5 py-5 '>
              <Tabs defaultActiveKey="1" onTabClick={tabindex}>
      <TabPane  tab="Delivery Details" key="1">
        
        <div>
        <div className='flex justify-between border-b pb-2 mt-5 mb-5'>
         <h1 className='font-semibold text-lg'>EDITING ADDRESS</h1>
         <Image src='/image/checkout-close.svg' className='cursor-pointer' width={20} height={20} alt='close' />
        </div>

        <Form layout="vertical" onFinish={onFinish}>

<Form.Item
 label="Full Name"
 name="fullname"
 className="font-semibold text-lg"
 rules={[
   { required: true, message: "Please input fullname" },
 ]}
>
<Input
   className="py-2 h-[44px] w-[485px]"
   placeholder="Full Name"
   style={{ borderRadius: "0" }}
 />
</Form.Item>




 
<div className='flex gap-5'>
<Form.Item
 label="Pincode"
 name="pinecode"
 className="font-semibold text-lg"
 rules={[
   { required: true, message: "Please input Pincode" },
 ]}
>
<Input
   className="py-2 h-[44px] w-[232px]"
   placeholder="Pin Code"
   style={{ borderRadius: "0" }}
 />
 </Form.Item>


 <Form.Item
 label="Country"
 name="country"
 className="font-semibold text-lg"
 rules={[
   { required: true, message: "Please input Country" },
 ]}
>
<Input
   className="py-2 h-[44px] w-[232px]"
   placeholder="Country"
   style={{ borderRadius: "0" }}
 />
 </Form.Item>

</div>


<div className='flex gap-5'>
<Form.Item
 label="City"
 name="city"
 className="font-semibold text-lg"
 rules={[
   { required: true, message: "Please input City" },
 ]}
>
<Input
   className="py-2 h-[44px] w-[232px]"
   placeholder="City"
   style={{ borderRadius: "0" }}
 />
 </Form.Item>


 <Form.Item
 label="State"
 name="statr"
 className="font-semibold text-lg"
 rules={[
   { required: true, message: "Please input state" },
 ]}
>
<Input
   className="py-2 h-[44px] w-[232px]"
   placeholder="State"
   style={{ borderRadius: "0" }}
 />
 </Form.Item>

</div>


<Form.Item
 label="Address one-1"
 name="address-one"
 className="font-semibold text-lg"
 rules={[
   { required: true, message: "Please input address" },
 ]}
>
<Input
   className="py-2 h-[44px] w-[485px]"
   placeholder="Address-one"
   style={{ borderRadius: "0" }}
 />
</Form.Item>

<Form.Item
 label="Address one-2"
 name="address-two"
 className="font-semibold text-lg"
 rules={[
   { required: true, message: "Please input address" },
 ]}
>
<Input
   className="py-2 h-[44px] w-[485px]"
   placeholder="Address-two"
   style={{ borderRadius: "0" }}
 />
</Form.Item>




<div className='flex gap-5'>
<Form.Item
 label="Mobile Number"
 name="mobile"
 className="font-semibold text-lg"
 rules={[
   { required: true, message: "Please input Mobile Number" },
 ]}
>
<Input
   className="py-2 h-[44px] w-[232px]"
   placeholder="City"
   style={{ borderRadius: "0" }}
 />
 </Form.Item>


 <Form.Item
 label="Alternate number"
 name="alternate"
 className="font-semibold text-lg"
 rules={[
   { required: true, message: "Please input Alternate number" },
 ]}
>
<Input
   className="py-2 h-[44px] w-[232px]"
   placeholder="Alternate Number"
   style={{ borderRadius: "0" }}
 />
 </Form.Item>

</div>


<Form.Item
 label="Email-id"
 name="email"
 className="font-semibold text-lg"
 rules={[
   { required: true, message: "Please input Email" },
 ]}
>
<Input
   className="py-2 h-[44px] w-[485px]"
   placeholder="Email-Id"
   style={{ borderRadius: "0" }}
 />
</Form.Item>

<Form.Item
 label="What3Words(optional)"
 name="word"
 className="font-semibold text-lg"
 rules={[
   { required: true, message: "Please input What3 Words" },
 ]}
>
<Input
   className="py-2 h-[44px] w-[485px]"
   placeholder="What3-Words"
   style={{ borderRadius: "0" }}
 />
</Form.Item>


<Form.Item
 label="Address Type"
 name="type"
 className="font-semibold text-lg"
 rules={[
   { required: true, message: "Please input Address Type" },
 ]}
>
<Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>Home</Radio>
      <Radio value={2}>Office</Radio>
      <Radio value={3}>Other</Radio>
  </Radio.Group>
</Form.Item>


<div className='flex justify-between'>
<Button style={{ borderRadius: 0}} className="w-[400px] h-[60px] text-lg font-semibold   border">DELETE ADDRESS</Button>
<Button style={{ borderRadius: 0}} className="w-[400px] h-[60px] text-lg font-semibold  text-white bg-[#DD2745]">SAVE ADDRESS</Button>
  
</div>






        </Form>

          
       </div>

       






        





      </TabPane>



      <TabPane tab="Order Summary" key="2">
        Content of Tab Pane 2
      </TabPane>








      <TabPane tab="Payment" key="3">
        <div className='text-center'>
        <h1 className='font-semibold text-lg'>DEBIT CARD</h1>
        </div>
      <div className='flex justify-center'>
               <Form layout="vertical" onFinish={onFinish}>

               <Form.Item
                label="Card Number"
                name="cardnumbar"
                className="font-semibold text-lg"
                rules={[
                  { required: true, message: "Please input Card Number!" },
                ]}
              >
                <Input
                  className="py-2 h-[44px] w-[485px]"
                  placeholder="Debit Cart Number"
                  style={{ borderRadius: "0" }}
                />
              </Form.Item>

              <Form.Item
                label="Name on Card "
                name="namecard"
                className="font-semibold text-lg"
                rules={[
                  { required: true, message: "Please input Card Holder Name" },
                ]}
              >
                <Input
                  className="py-2 h-[44px] w-[485px]"
                  placeholder="Card Holders'Name"
                  style={{ borderRadius: "0" }}
                />
              </Form.Item>
             
             <Form.Item
        label="Expiry Date"
        name="expiryDate"
        rules={[{ required: true, message: 'Please select the expiry date!' }]}
      >
     <Select
    style={{ borderRadius: "0" }}
  >
    <Option value="01">1 (Jan)</Option>
    <Option value="02">2 (Feb)</Option>
  </Select>
             </Form.Item>

             <Form.Item
        label="Expiry Month"
        name="expirymonth"
        rules={[{ required: true, message: 'Please select the expiry Month!' }]}
      
      >
     <Select
   
  >
    <Option value="2023">2023</Option>
    <Option value="2024">2024</Option>
  </Select>
             </Form.Item>
             
              

             <Form.Item
                label="CVV"
                name="cvv"
                className="font-semibold text-lg"
                rules={[
                  { required: true, message: "Please input Cvv" },
                ]}
              >
                <Input
                  className="py-2 h-[44px] w-[485px]"
                  placeholder="CVV"
                  style={{ borderRadius: "0" }}
                />
              </Form.Item>

              <Form.Item>
              <Button htmlType="submit" style={{ borderRadius: 0}} className="w-[500px] h-[50px] text-lg font-semibold  text-white bg-[#DD2745]">MAKE PAYMENT</Button>
              </Form.Item>

            
  


               </Form>
      </div>
      </TabPane>
              </Tabs>
              </div>
            </div>
            <div>
           {
              index == 1 ?  <div defaultActiveKey="1" className='px-5 py-5 shadow-xl border '>
              <Button style={{ borderRadius: 0}}  onClick={() => { setForm('block'), setAdd('hidden')  }} className={`w-[400px] ${add} text-red-500 h-[60px] text-lg  border-red-500 font-semibold   border`}>Add address</Button>
                
                <div className={form} >
                  <div className='border-b mb-3 pb-2 flex justify-between'>
                    <h1 className='font-semibold text-lg'>Add Address</h1>
                    <Image src='/image/checkout-close.svg' className='' onClick={() => { setForm('hidden'),setAdd('block') }} width={20} height={20}/>
                  </div>

                  <Form layout="vertical" onFinish={onFinish}>

<Form.Item
 label="Full Name"
 name="fullname"
 className="font-semibold text-lg"
 rules={[
   { required: true, message: "Please input fullname" },
 ]}
>
<Input
   className="py-2 h-[44px] "
   placeholder="Full Name"
   style={{ borderRadius: "0" }}
 />
</Form.Item>




 
<div className='flex gap-5'>
<Form.Item
 label="Pincode"
 name="pinecode"
 className="font-semibold text-lg"
 rules={[
   { required: true, message: "Please input Pincode" },
 ]}
>
<Input
   className="py-2 h-[44px] "
   placeholder="Pin Code"
   style={{ borderRadius: "0" }}
 />
 </Form.Item>


 <Form.Item
 label="Country"
 name="country"
 className="font-semibold text-lg"
 rules={[
   { required: true, message: "Please input Country" },
 ]}
>
<Input
   className="py-2 h-[44px] "
   placeholder="Country"
   style={{ borderRadius: "0" }}
 />
 </Form.Item>

</div>


<div className='flex gap-5'>
<Form.Item
 label="City"
 name="city"
 className="font-semibold text-lg"
 rules={[
   { required: true, message: "Please input City" },
 ]}
>
<Input
   className="py-2 h-[44px] "
   placeholder="City"
   style={{ borderRadius: "0" }}
 />
 </Form.Item>


 <Form.Item
 label="State"
 name="statr"
 className="font-semibold text-lg"
 rules={[
   { required: true, message: "Please input state" },
 ]}
>
<Input
   className="py-2 h-[44px] "
   placeholder="State"
   style={{ borderRadius: "0" }}
 />
 </Form.Item>

</div>


<Form.Item
 label="Address one-1"
 name="address-one"
 className="font-semibold text-lg"
 rules={[
   { required: true, message: "Please input address" },
 ]}
>
<Input
   className="py-2 h-[44px] "
   placeholder="Address-one"
   style={{ borderRadius: "0" }}
 />
</Form.Item>

<Form.Item
 label="Address one-2"
 name="address-two"
 className="font-semibold text-lg"
 rules={[
   { required: true, message: "Please input address" },
 ]}
>
<Input
   className="py-2 h-[44px] "
   placeholder="Address-two"
   style={{ borderRadius: "0" }}
 />
</Form.Item>




<div className='flex gap-5'>
<Form.Item
 label="Mobile Number"
 name="mobile"
 className="font-semibold text-lg"
 rules={[
   { required: true, message: "Please input Mobile Number" },
 ]}
>
<Input
   className="py-2 h-[44px] "
   placeholder="City"
   style={{ borderRadius: "0" }}
 />
 </Form.Item>


 <Form.Item
 label="Alternate number"
 name="alternate"
 className="font-semibold text-lg"
 rules={[
   { required: true, message: "Please input Alternate number" },
 ]}
>
<Input
   className="py-2 h-[44px] "
   placeholder="Alternate Number"
   style={{ borderRadius: "0" }}
 />
 </Form.Item>

</div>


<Form.Item
 label="Email-id"
 name="email"
 className="font-semibold text-lg"
 rules={[
   { required: true, message: "Please input Email" },
 ]}
>
<Input
   className="py-2 h-[44px] "
   placeholder="Email-Id"
   style={{ borderRadius: "0" }}
 />
</Form.Item>

<Form.Item
 label="What3Words(optional)"
 name="word"
 className="font-semibold text-lg"
 rules={[
   { required: true, message: "Please input What3 Words" },
 ]}
>
<Input
   className="py-2 h-[44px] "
   placeholder="What3-Words"
   style={{ borderRadius: "0" }}
 />
</Form.Item>


<Form.Item
 label="Address Type"
 name="type"
 className="font-semibold text-lg"
 rules={[
   { required: true, message: "Please input Address Type" },
 ]}
>
<Radio.Group onChange={onChange} value={value}>
      <Radio value={1}>Home</Radio>
      <Radio value={2}>Office</Radio>
      <Radio value={3}>Other</Radio>
  </Radio.Group>
</Form.Item>


<div className='flex justify-between'>
<Button style={{ borderRadius: 0}} className=" h-[60px] text-lg font-semibold   border">DELETE ADDRESS</Button>
<Button style={{ borderRadius: 0}} className=" h-[60px] text-lg font-semibold  text-white bg-[#DD2745]">SAVE ADDRESS</Button>
  
</div>






                  </Form>

                </div>

                </div> : null
           }
           
           {
              index == 2 ?  
              <div  className='px-5 py-5 shadow-xl border'>
              
              </div> : null
           }
           
           {
             index == 3 ?  <div className='px-5 py-5 shadow-xl border '>
             <h1>addressname</h1>
             </div> : null
           }

            </div>
          </div>
        </div>
    )
}
export default Delivery
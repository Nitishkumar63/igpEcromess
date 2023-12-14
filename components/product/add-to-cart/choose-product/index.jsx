import { Breadcrumb ,Button, Form,Collapse,Tabs, Input,Select, Rate} from "antd";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import Link from "next/link";

// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";
import { Navigation } from "swiper/modules";
import { useState ,useEffect} from "react";
const productcarceal = [
  {
    path:'/image/p-elegant-rose-bouquet-139330-m.jpg',
    title:'Cool Dude ',
    price:'325',
    btnname:'Add'
  },
  {
    path:'/image/p-adorable-birthday-pink-floral-arrangement-203947-m.webp',
    title:'Cool Dude ',
    price:'325',
    btnname:'Add'
  },
  {
    path:'/image/p-wholesome-treats-gourmet-hamper-263666-m.jpg',
    title:'Cool Dude',
    price:'325',
    btnname:'Add'
  },
  {
    path:'/image/p-birthday-sprinkles-personalized-magic-mug-19292-m.webp',
    title:'Cool Dude ',
    price:'325',
    btnname:'Add'
  },
  {
    path:'/image/p-pastel-delight-hamper-223308-m.webp',
    title:'Cool Dude',
    price:'325',
    btnname:'Add'
  },
  {
    path:'/image/p-cool-dude-personalized-caricature-117913-m.webp',
    title:'Cool Dude',
    price:'325',
    btnname:'Add'
  },
  {
    path:'/image/p-work-in-progress-personalized-stainless-steel-mug-yellow-262981-m.webp',
    title:'Cool Dude ',
    price:'325',
    btnname:'Add'
  },
  {
    path:'/image/p-smiling-splendor-personalized-birthday-hamper-264759-m.webp',
    title:'Cool Dude',
    price:'325',
    btnname:'Add'
  },
  {
    path:'/image/p-delicious-truffle-cake-half-kg--145982-m.webp',
    title:'Cool Dude',
    price:'325',
    btnname:'Add'
  },
  {
    path:'/image/p-3d-initial-and-name-penstand-263442-m.webp',
    title:'Cool Dude',
    price:'325',
    btnname:'Add'
  },
  {
    path:'/image/p-elegant-rose-bouquet-139330-m.jpg',
    title:'Cool Dude',
    price:'325',
    btnname:'Add'
  },
  {
    path:'/image/p-protective-evil-eye-hamper-personalized-263352-m.webp',
    title:'Cool Dude',
    price:'325',
    btnname:'Add'
  },
  {
    path:'/image/p-delicious-kaju-katli-400-gm--101059-m.webp',
    title:'Cool Dude',
    price:'325',
    btnname:'Add'
  },
  {
    path:'/image/p-magic-cuppa-personalized-mug-186583-m.webp',
    title:'Cool Dude',
    price:'325',
    btnname:'Add'
  },
  {
    path:'/image/p-zen-oasis-2-layer-bamboo-plant-with-pot-personalized-240950-m.webp',
    title:'Cool Dude',
    price:'325',
    btnname:'Add'
  },
  {
    path:'/image/p-hues-of-savories-263825-m.webp',
    title:'Cool Dude',
    price:'325',
    btnname:'Add'
 
  },
]

const Cakes = [
    {
        path:'/image/p-choco-chip-truffle-cake-300-gm--265855-m.webp'
    },
    {
        path:'/image/p-choco-chip-truffle-cake-300-gm--265855-m.webp'
    },
    {
        path:'/image/p-choco-chip-truffle-cake-300-gm--265855-m.webp'
    },
]

const onFinish = (values) => {
    console.log( values);
  };

  const text = `Truffie`;

const items = [
    {
      key: '1',
      title:'Truffle',
      children: <p>{text}</p>,
    },
]

const onChange = (strings) => {
    console.log(strings);
  };


  const itemss = [
    {
      key: '1',
      label: 'Description',
      children: 'Unwrap a world of chocolate bliss with this yummy cake. Made with the finest ingredients, this mini cake is baked to perfection and will delight your taste buds. The cake is topped with yummy chocolate ganache that is rich and decadent, along with choco chip coated on its sides. Each bite of this cake is a delightful explosion of flavour that will transport you to paradise. You can also send this delicious cake to your friends and family and make their birthdays, anniversaries, and other special events unforgettable.',
    },
    {
      key: '2',
      label: 'Product Info',
      children: 'Content of Tab Pane 2',
    },
    {
      key: '3',
      label: 'More Info',
      children: 'Content of Tab Pane 3',
    },
  ];

  const user = [
    {
      rate : 4,
      name : 'Nitish',
      address:'.Bengaluru . 29-11-2023',
      date : 'Nov 2 2023',
      desc : 'mmodi perspiciatis unde omnis iste natus aliquam sit voluptatem exercitationem doloremque laudantium.'
    },
    {
      rate : 3,
      name : 'Nitish',
      date : 'Nov 2 2023',
      address:'.Bengaluru . 29-11-2023',
      desc : 'mmodi perspiciatis unde omnis iste natus aliquam sit voluptatem exercitationem doloremque laudantium.'
    },
    {
      rate : 4.5,
      name : 'Nitish',
      date : 'Nov 2 2023',
      address:'.Bengaluru . 29-11-2023',
      desc : 'mmodi perspiciatis unde omnis iste natus aliquam sit voluptatem exercitationem doloremque laudantium.'
    },
  
  ]



const colitems = [
  {
    key: '1',
    label: 'Get Flat 10% off, for first time users',
    children: <ul><li className='font-semibold'>Terms & conditions</li><li></li></ul>,
  },
  {
    key: '2',
    label: 'Get Flat 15% Cashback, Use Code LOYAL',
    children: <ul><li className='font-semibold'>Terms & conditions</li><li></li></ul>,
  },
  {
    key: '3',
    label: 'Get assured 5% cashback upto INR 750 on using Simpl',
    children: <ul><li className='font-semibold'>Terms & conditions</li><li></li></ul>,
  },
  {
    key: '4',
    label: 'Get assured 5% cashback upto INR 750 on using Simpl',
    children: <ul><li className='font-semibold'>Terms & conditions</li><li></li></ul>,
  },
  {
    key: '',
    label: 'Get assured 5% cashback upto INR 750 on using Simpl',
    children: <ul><li className='font-semibold'>Terms & conditions</li><li></li></ul>,
  },
 
];







const Choose = () =>{

  const [dataFixed,setDatafixed]= useState('absulate');
    const onChange = ( string ) => {
        console.log(string );
      };

      useEffect(()=>{
        window.onscroll = () => {
          const height = Math.floor(window.scrollY);
          const dHeight = window.innerHeight
          
          if (height > 1300 ) {
            setDatafixed('absulate');
          } 
          else{
            setDatafixed('fixed');
          }
        }  
      },[])
    

    return(
        <div className="px-[50px]">
            <div className="grid grid-cols-2 ">
                <div>
                <div className={`{ ${dataFixed} }`}>
                <div className='flex  gap-8 '>
                    <div className='flex flex-col mt-[200px]'>
                    {
                        Cakes.map((item,index)=>(
                            <div key={index} className='mb-2 border-2 cursor-pointer hover:border-red-500 rounded-lg p-1'>
                                <Image src={item.path} width={62} height={62} alt="cakes" />
                            </div>
                        ))
                    }
                    </div>
                    <div>
                    <Breadcrumb className='text-xs'
    separator=">"
    items={[
      {
        title: 'Gifts',
      },
      {
        title: 'Cakes',
        href: '',
      },
      {
        title: 'Flower and Cakes',
        href: '',
      },
      {
        title: 'Regular Cakes',
        href: '',
      }
    
    ]}
  />
                    <Image src='/image/p-choco-chip-truffle-cake-300-gm--265855-m.webp' width={568} height={568} alt='flower'/>
                    </div>
                </div>
                </div>
                </div>
                <div>
                    <div className="flex justify-between items-center mt-5 border-b  pb-5">
                        <div className="flex flex-col">
                           <div className="flex gap-2">
                           <Image src='/image/Icon-Veg.svg' width={22} height={22} alt="logo" />
                             <h1 className='text-2xl font-semibold'>Choco Chip Truffle Cake (300 gm)</h1>
                           </div>

                           <div className="flex gap-2">

                        <Link href='#' className='text-gray-400 text-sm'> <Rate defaultValue={5} className='text-sm' /> . 252 rating <span className="text-blue-500">. 32 review</span></Link>


                      </div>



                           
                           <div>

                           </div>
                        </div>
                        <div>
                            <div className=' flex items-center justify-center cursor-pointer border-2 rounded-full cu w-[40px] h-[40px]'>
                            <i class='bx bx-heart text-2xl text-gray-500 '></i>
                            </div>
                        </div>
                    </div>
                
                



                  <div className='flex gap-2 items-center mt-3'>
                <h1 className='text-2xl text-red-500 font-semibold'>₹ 455</h1>
                <Link href='#' className='underline text-sm font-semibold text-blue-500'>View offers</Link>
            </div>


               <div className=" justify-between flex mt-7 border-b pb-5 w-[670px] items-center">
               <div className="border-2 p-1  flex w-[460px]">
               <Form  onFinish={onFinish}autoComplete="off">
  
<div className='flex h-[40px] '>
<Input
value="INDIA"
className="py-2 w-[120px] text-lg text-center outline-none border-0 bg-gray-100"
     style={{ borderRadius: "0" }}
   />
   <div className='bg-gray-100 items-center justify-center flex w-[15px] cursor-pointer px-3 h-[40px]'><i className='bx bx-edit-alt text-sm  '></i></div>

   <Input

className="py-2 w-[180px] ml-5  outline-white text-lg border-0 bg-gray-white"
placeholder='PinCode/Location'
     style={{ borderRadius: "0" }}
   />

   <Button  style={{ borderRadius: "0" }} className='border-0 text-lg font-semibold bg-[#C9DBFB] text-white h-[40px] w-[100px]'>Check</Button>

</div>

  </Form>
               </div>



               <div>
                <Button  style={{ borderRadius: "0" }} className='border-0 text-sm font-semibold flex items-center gap-3 text-blue-500 h-[40px] w-[200px]'>
                Saved Addresses
                <Image src='/image/saved-address-icon-new.svg' width={20} height={20} alt='location icon'/>
                </Button>
                </div>
               </div>

               

                

                <div className="mt-5 w-[350px] h-[30px]">
                 <label className="text-lg font-semibold ">Flavour</label>
                <Collapse items={items}    style={{ borderRadius: "0" }}  defaultActiveKey={['1']} className='mt-2' onChange={onChange} />
              
                </div>
                <div className="w-full border-b mt-20"></div>


                <div className="mt-6 border-b pb-5">
                <Tabs defaultActiveKey="1" className="font-semibold"  items={itemss} onChange={onChange} />
                </div>


                <h1 className="text-lg font-semibold mt-3">Make it extra special</h1>
                  
                  <div className="flex justify-between items-center mt-3">
                    <h1 className="text-lg font-semibold">Gourmet-Addons</h1>
                    <Button  style={{ borderRadius: "0" }} className='border-0  text-lg font-semibold flex items-center gap-3 text-blue-500 h-[40px] w-[100px]'>Zoom In</Button>
                  </div>


                  <div className='border-b pb-1 mb-5'>
      
      <Swiper
        slidesPerView={5}
        centeredSlides={false}
        slidesPerGroupSkip={5}
        keyboard={{
          enabled: true,
        }}
        navigation={true}
        loop={true}
        modules={[Navigation]}
        className="mySwiper  gap-2 mb-5"
      >
      
      {
          productcarceal.map((item,index)=>(
          <SwiperSlide key={index} className=' border px-1 hover:border-red-500' >
           
           <div className="border border-gray-300 p-1">
          <Image
            src={item.path}
            className=" mb-1 hover:scale-110 cursor-pointer"
            width={133}
            height={133}
            alt="productimage"
          />

          <div className='text-center '>
          <Link
            href="#"
            className="text-xs text-center text-red-500 font-semibold cursor-pointer"
          >
            {item.title}
          </Link>
          </div>
          
          <div className=" text-center  ">
            
            <Link href="#" className="text-xs text-red-500">
              ₹<span className="font-bold text-xs text-red-500">{item.price}</span>
            </Link>
          
          </div>
           
       <Button className='w-full border-red-500 text-red-500 font-semibold' style={{ borderRadius: "0" }}>{item.btnname}</Button>    
        
            </div>
          
          </SwiperSlide>
          ))
          
        }

     
      </Swiper>
    </div>





        <div className='border-b pb-5 mb-5'>
          <h1 className='font-semibold mb-3 text-lg px-5'>Offers</h1>
        <Collapse 
        className='bg-white'
        items={colitems} expandIconPosition='end'  style={{ borderRadius: "0" }}  defaultActiveKey={['1']} onChange={onChange} />
        </div>

   
<div>
<div className=" text-lg font-semibold text-black">
        Reviews<span>(32)</span>
  </div>
  <div className="flex flex-col gap-y-4 "> 
      {
      user.map((item,index)=>(
        <div className="flex items-start gap-3 mb-3 mt-5 " key={index}>
        <button>
        <i className='bx bxs-user-circle text-6xl text-gray-300' ></i>
        </button>
        <div className="flex flex-col gap-y-2">
          <div className="flex flex-col">
            <Rate defaultValue={item.rate} allowHalf className="text-sm text-[#FCC419]"  />
           <div className='gap-x-3'>
            <span className="text-gray-400 capitalize">{item.name} {item.address}</span>
            <span className="text-gray-400"> {item.date}</span>
           </div> 
          </div>
          <h1 className="text-lg text-gray-600 max-md:text-xs">{item.desc}</h1>
        </div>
      </div>
      ))
     }
     <div className='flex justify-center mb-4'>
     <Button className='text-lg font-semibold border-0 hover:scale-110'>Load More</Button>
     </div>
     
     <div className='flex justify-between gap-3 '>
      <Button className='bg-white font-semibold  w-[350px] h-[50px]' style={{ borderRadius: "0" }} >MAKE IT EXTRA SPECIAL</Button>
      <div>
     <Link href='/shopping-cart'>
     <Button className=' flex justify-center items-center gap-2 h-[50px] text-white font-semibold bg-red-500 w-[350px] ' style={{ borderRadius: "0" }} >
        ADD TO 
        <Image src='/image/cart-white.svg'  width={24} height={24} alt='cart'/>
      </Button>
     </Link>
      </div>
     </div>

      </div>
</div>



                </div>

            
          


            </div>
        </div>
    )
}
export default Choose
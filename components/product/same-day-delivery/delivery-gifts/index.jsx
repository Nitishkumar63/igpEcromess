import { Breadcrumb ,Button,Select} from "antd";
import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/router";
const Category = [
    {
        title:'Cakes',
        href:''
    },
    {
        title:'Flowers',
        href:''
    },
    {
        title:'Birthday Gifts',
        href:''
    },
    {
        title:'Hampers',
        href:''
    },
    {
        title:'Personalizes',
        href:''
    },
    {
        title:'Premium',
        href:''
    },
    {
        title:'Gourmet',
        href:''
    },
    {
        title:'Plants',
        href:''
    },
    {
        title:'Annivesary Gifts',
        href:''
    },
    {
        title:'Fashion & LifeStyle',
        href:''
    },
]


const categorymenu = [
    {
      path:'/image/p-elegant-rose-bouquet-139330-m.jpg',
      title:'Cool Dude Personalized Caricature',
      price:'325',
      icon:'bx bxs-star',
      per:'Personalizable',
      dis:'445',
      href:'/add-to-cart'
    },
    {
      path:'/image/p-adorable-birthday-pink-floral-arrangement-203947-m.webp',
      title:'Cool Dude Personalized Caricature',
      price:'325',
      icon:'bx bxs-star',
      per:'Personalizable',
      dis:'445',
      href:'/add-to-cart'
    },
    {
      path:'/image/p-wholesome-treats-gourmet-hamper-263666-m.jpg',
      title:'Cool Dude Personalized Caricature',
      price:'325',
      icon:'bx bxs-star',
      per:'Personalizable',
      dis:'445',
      href:'/add-to-cart'
    },
    {
      path:'/image/p-birthday-sprinkles-personalized-magic-mug-19292-m.webp',
      title:'Cool Dude Personalized Caricature',
      price:'325',
      icon:'bx bxs-star',
      per:'Personalizable',
      dis:'445',
      href:'/add-to-cart'
    },
    {
      path:'/image/p-pastel-delight-hamper-223308-m.webp',
      title:'Cool Dude Personalized Caricature',
      price:'325',
      icon:'bx bxs-star',
      per:'Personalizable',
      dis:'445',
      href:'/add-to-cart'
    },
    {
      path:'/image/p-cool-dude-personalized-caricature-117913-m.webp',
      title:'Cool Dude Personalized Caricature',
      price:'325',
      icon:'bx bxs-star',
      per:'Personalizable',
      dis:'445',
      href:'/add-to-cart'
    },
    {
      path:'/image/p-work-in-progress-personalized-stainless-steel-mug-yellow-262981-m.webp',
      title:'Cool Dude Personalized Caricature',
      price:'325',
      icon:'bx bxs-star',
      per:'Personalizable',
      dis:'445',
      href:'/add-to-cart'
    },
    {
      path:'/image/p-smiling-splendor-personalized-birthday-hamper-264759-m.webp',
      title:'Cool Dude Personalized Caricature',
      price:'325',
      icon:'bx bxs-star',
      per:'Personalizable',
      dis:'445',
      href:'/add-to-cart'
    },
    {
      path:'/image/p-delicious-truffle-cake-half-kg--145982-m.webp',
      title:'Cool Dude Personalized Caricature',
      price:'325',
      icon:'bx bxs-star',
      per:'Personalizable',
      dis:'445',
      href:'/add-to-cart'
    },
    {
      path:'/image/p-3d-initial-and-name-penstand-263442-m.webp',
      title:'Cool Dude Personalized Caricature',
      price:'325',
      icon:'bx bxs-star',
      per:'Personalizable',
      dis:'445',
      href:'/add-to-cart'
    },
    {
      path:'/image/p-elegant-rose-bouquet-139330-m.jpg',
      title:'Cool Dude Personalized Caricature',
      price:'325',
      icon:'bx bxs-star',
      per:'Personalizable',
      dis:'445',
      href:'/add-to-cart'
    },
    {
      path:'/image/p-protective-evil-eye-hamper-personalized-263352-m.webp',
      title:'Cool Dude Personalized Caricature',
      price:'325',
      icon:'bx bxs-star',
      per:'Personalizable',
      dis:'445',
      href:'/add-to-cart'
    },
    {
      path:'/image/p-delicious-kaju-katli-400-gm--101059-m.webp',
      title:'Cool Dude Personalized Caricature',
      price:'325',
      icon:'bx bxs-star',
      per:'Personalizable',
      dis:'445',
      href:'/add-to-cart'
    },
    {
      path:'/image/p-magic-cuppa-personalized-mug-186583-m.webp',
      title:'Cool Dude Personalized Caricature',
      price:'325',
      icon:'bx bxs-star',
      dis:'445',
      per:'Personalizable',
      href:'/add-to-cart'
    },
    {
      path:'/image/p-zen-oasis-2-layer-bamboo-plant-with-pot-personalized-240950-m.webp',
      title:'Cool Dude Personalized Caricature',
      price:'325',
      icon:'bx bxs-star',
      per:'Personalizable',
      dis:'445',
      href:'/add-to-cart'
    },
    {
      path:'/image/p-hues-of-savories-263825-m.webp',
      title:'Cool Dude Personalized Caricature',
      price:'325',
      icon:'bx bxs-star',
      per:'Personalizable',
      dis:'445',
      href:'/add-to-cart'
    },
  ]

  const btn = [
    {
      lable:'Valentines Day Gifts Same Day Delivery'
    },
    {
      lable:'Same Day Delivery Personalized Gifts'
    },
    {
      lable:'Express Delivery Gifts'
    },
    {
      lable:'Same Day Personalized Birthday Gifts'
    },
    {
      lable:'Same Day Flower Delivery'
    },
    {
      lable:'Same Day Cake Delivery'
    },
  ]




const SameGifts = () => {
  const router = useRouter();
  return (
    <>
    <div className="px-[50px] mt-[120px]">
      <div className='flex justify-between mb-5'>
        <div>
          <Breadcrumb className='mb-5 capitalize'
            separator=">"
            items={[
              {
                title: "Gifts",
                href: "",
              },
              {
                title: `${router.query.slug && router.query.slug.split("-").join("-")}`,
                href: "",
              },
            ]}
          />
          <h1 className="text-4xl font-medium flex gap-x-5 items-center capitalize">  {router.query.slug && router.query.slug.split("-").join("-")}-Gifts <span className="text-xl font-bold text-gray-400">2142 Items</span></h1>
        </div>
        <div>
            <div className='mb-2 float-right'>
          <div className="relative w-[200px]  float-right">
          <Select className="pl-[30px] text-right"
        defaultValue='Delivery Location'
        style={{ width: '200px', height: '45px' }}
        />

         <Image
            src="/image/delivery-location-icon.svg"
            width={20}
            height={20}
            alt="icon"
            className='absolute top-[12px] left-10' 
          />
          
          </div>

            </div>
            
            <div className="relative w-[260px]">
          <Select className="pl-[30px] text-right"
         defaultValue='Sort By: Delivery Location'
        style={{ width: '260px', height: '45px' }}
        
        />

         <Image
            src="/image/sort-by-img.svg"
            width={20}
            height={20}
            alt="icon"
            className='absolute top-[65px] left-[45px]' 
          />
          
       
          

            </div>
        </div>
      </div>

      <div className='flex gap-2 items-center mb-5'>
      <h1 className='text-lg text-gray-500'>Quick Filters :</h1>
        {
            Category.map((item,index)=>(
                <div key={index}>
                    <Button className="text-gray-500 bg-[#F6F6F6] h-[35px] rounded-full">{item.title}</Button>
                </div>
            ))
        }
      </div>

{/*image coding */}
<div className="grid grid-cols-4 gap-5 mb-[50px]">
          {
            categorymenu.map((item,index)=>(
              <div  key={index} >
              <div className="border border-gray-300 rounded-xl">
              <Link href={item.href}>
              <Image
                src={item.path}
                className="rounded-t-xl mb-3 cursor-pointer"
                width={349}
                height={349}
                alt="productimage"
              />
              <h1
                className="text-sm px-3 font-semibold cursor-pointer"
              >
                {item.title}
              </h1>
              <div className="flex gap-2 mt-2 px-5 ">
                <Link href="#" className="text-lg ">
                
                  ₹ <span className="font-bold">{item.price}</span>
                </Link>
                <p className="line-through text-lg text-gray-500"> ₹ {item.dis}</p>
              </div>
    
              <div className="px-5 pb-3">
                <Link href="#" className="text-sm">
                  4.4 <i className={`${item.icon} text-yellow-500 text-sm`}></i>
                  ({item.dis}) {item.per}
                </Link>
              </div>
              </Link>
            </div>
            
            </div>
            ))
          }
  </div>

       <div className="flex justify-center mb-10">
          <Button className="bg-[#E03C57] w-[550px] text-lg h-[60px] font-semibold text-white">SHOW MORE PRODUCT (2028) </Button>
        </div> 

    </div>
    <div className="w-full py-2 bg-gray-100 mb-5"></div>

<div className='flex justify-center py-3'>
<div className='mb-5'>
<h1 className='font-medium text-3xl '>Related Collections</h1>
</div>
</div>

<div className='flex gap-5 justify-center mb-10'>
{
   btn.map((item,index)=>(
    <div key={index}  className={`${
      index !== btn.length - 1 ? "border-r-2 lg:pr-5  lg:gap-5" : null
    } gap-5 border-red-500`}>
      <Link href='#' className="  text-xs">{item.lable}</Link>
    </div>
   ))
}


</div>
<div className="w-full py-2 bg-gray-100 mb-5"></div>


    </>


  );
};
export default SameGifts;

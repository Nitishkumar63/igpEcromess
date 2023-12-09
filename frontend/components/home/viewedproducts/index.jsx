import Link from "next/link";
import Image from "next/image";


const View = [
  {
    path:'/image/p-elegant-rose-bouquet-139330-m.jpg',
    title:'Cool Dude Personalized Caricature',
    price:'325',
    icon:'bx bxs-star',
    per:'Personalizable',
    dis:'445'
  },
  {
    path:'/image/p-adorable-birthday-pink-floral-arrangement-203947-m.webp',
    title:'Cool Dude Personalized Caricature',
    price:'325',
    icon:'bx bxs-star',
    per:'Personalizable',
    dis:'445'
  },
  {
    path:'/image/p-wholesome-treats-gourmet-hamper-263666-m.jpg',
    title:'Cool Dude Personalized Caricature',
    price:'325',
    icon:'bx bxs-star',
    per:'Personalizable',
    dis:'445'
  },
]




const ViewedProducts = () => {
  return (
    <div className="lg:px-[50px] max-md:px-[20px] mb-5 md:px-5">
      <h1 className="lg:text-4xl max-lg:text-2xl mb-5 font-bold">Recently Viewed Products</h1>
        <div className="grid grid-cols-4 gap-5">
          {
            View.map((item,index)=>(
              <div  key={index} >
              <div className="border border-gray-300 rounded-xl">
              <Image
                src={item.path}
                className="rounded-t-xl mb-3 cursor-pointer"
                width={349}
                height={349}
                alt="productimage"
              />
              <Link
                href="#"
                className="text-sm px-3 font-semibold cursor-pointer"
              >
                {item.title}
              </Link>
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
            </div>
            </div>
            ))
          }
        </div>
    </div>
  );
};
export default ViewedProducts;

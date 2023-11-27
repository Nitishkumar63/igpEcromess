import Link from "next/link";
import Image from "next/image";
const ViewedProducts = () => {
  return (
    <div className="lg:px-[50px] max-md:px-[20px] mb-5 md:px-5">
      <h1 className="lg:text-4xl max-lg:text-2xl mb-5 font-bold">Recently Viewed Products</h1>
      <div className="flex gap-3">
        <div className="border border-gray-300 rounded-xl">
          <Image
            src={"/image/p-elegant-rose-bouquet-139330-m.jpg"}
            className="rounded-t-xl mb-3 cursor-pointer"
            width={349}
            height={349}
            alt="productimage"
          />
          <Link href="#" className="text-sm px-3 font-semibold cursor-pointer">
            Cool Dude Personalized Caricature
          </Link>
          <div className="flex gap-2 mt-2 px-5 ">
            <Link href="#" className="text-lg ">
              {" "}
              ₹ <span className="font-bold">325</span>
            </Link>
            <p className="line-through text-lg text-gray-500"> ₹ 445</p>
          </div>

          <div className="px-5 pb-3">
            <Link href="#" className="text-sm">
              4.4 <i className="bx bxs-star text-yellow-500 text-sm"></i>(450)
              Personalizable
            </Link>
          </div>
        </div>

        <div className="border border-gray-300 rounded-xl">
          <Image
            src={
              "/image/p-adorable-birthday-pink-floral-arrangement-203947-m.webp"
            }
            className="rounded-t-xl"
            width={349}
            height={349}
            alt="productimage"
          />
          <Link href="#" className="text-sm px-3 font-semibold cursor-pointer">
            Cool Dude Personalized Caricature
          </Link>
          <div className="flex gap-2 mt-2 px-5 ">
            <Link href="#" className="text-lg ">
              {" "}
              ₹ <span className="font-bold">325</span>
            </Link>
            <p className="line-through text-lg text-gray-500"> ₹ 445</p>
          </div>

          <div className="px-5 pb-3">
            <Link href="#" className="text-sm">
              4.4 <i className="bx bxs-star text-yellow-500 text-sm"></i>(450)
              Personalizable
            </Link>
          </div>
        </div>

        <div className="border border-gray-300 rounded-xl">
          <Image
            src={"/image/p-wholesome-treats-gourmet-hamper-263666-m.jpg"}
            className="rounded-t-xl"
            width={349}
            height={349}
            alt="productimage"
          />
          <Link href="#" className="text-sm px-3 font-semibold cursor-pointer">
            Cool Dude Personalized Caricature
          </Link>
          <div className="flex gap-2 mt-2 px-5 ">
            <Link href="#" className="text-lg ">
              {" "}
              ₹ <span className="font-bold">325</span>
            </Link>
            <p className="line-through text-lg text-gray-500"> ₹ 445</p>
          </div>

          <div className="px-5 pb-3">
            <Link href="#" className="text-sm">
              4.4 <i className="bx bxs-star text-yellow-500 text-sm"></i>(450)
              Personalizable
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};
export default ViewedProducts;

import Image from "next/image";
const icon = [
  {
    iconname: "/image/w-tiles-SDD-v202306.png",
    href: "#",
    title: "Same Day Delivery",
  },
  {
    iconname: "/image/w-tiles-personalize-v202306.png",
    href: "#",
    title: "Personalized",
  },
  {
    iconname: "/image/w-tiles-cakes-v202306.png",
    href: "#",
    title: "Cakes",
  },
  {
    iconname: "/image/w-tiles-flower-v202306.png",
    href: "#",
    title: "Flowers",
  },
  {
    iconname: "/image/w-tiles-sweets-v202306.png",
    href: "#",
    title: "Gourmet",
  },
  {
    iconname: "/image/w-tiles-new-arrivals-v202306-v2.png",
    href: "#",
    title: "New Arrivals",
  },
  {
    iconname: "/image/w-tiles-plants-v202306.png",
    href: "#",
    title: "Plants",
  },
  {
    iconname: "/image/w-tiles-bulk-order-v202306.png",
    href: "#",
    title: "Bulk/Corp. Gifts",
  },
];

const Menuicon = () => {
  return (
    
      <div className="max-lg:px-3 max-md:px-0 lg:px-[50px] max-md:px-[20px]">
      <div className="border grid max-lg:grid-cols-4  max-lg:items-center max-md:py-3 lg:grid-cols-8 md:gap-[30px] lg:px-5  rounded-lg max-lg:py-2 lg:py-4 border-red-500 mb-5">
        {icon.map((item, index) => (
          <div
            key={index}
            className={`${
              index !== icon.length - 1 ? "border-r lg:pr-5  lg:gap-5" : null
            } gap-5 border-red-500`}
          >
            <div className=" cursor-pointer items-center">
              <div className="flex justify-center mb-1">
                <Image src={item.iconname} width={40} height={40} alt="icon" />
              </div>
              <h1 className="lg:text-sm max-lg:text-xs text-center ">{item.title}</h1>
            </div>
          </div>
        ))}
      </div>
      </div>
    
  );
};

export default Menuicon;

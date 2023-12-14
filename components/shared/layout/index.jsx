import Head from "next/head";
import Image from "next/image";
import { useState } from "react";
import Link from "next/link";
import {  Tooltip,Dropdown,Menu,Button,Tree,Popover,Form,  Cascader, TreeSelect,  } from 'antd';


const menuicon = [
  {
    path: "/image/reminder-icon.svg",
    href: "/remember",
    title:'Remember',
    dropdow:false
  },
  {
    path: "/image/rupees-logo-new.svg",
    href: "#",  
    title:'Currency',
    dropdow:true,
    dropdownItems: [
      { 
        key: '1',
        label: 'INR',
        path:'/image/IND-Flag.svg',
      },
      { 
      key: '2', 
      label: 'USD',
      path:'/image/US-Flag.svg',
    },
    { 
      key: '3', 
      label: 'CAD',
      path:'/image/CAD-Flag.svg',
    },
    { 
      key: '4', 
      label: 'GBP',
      path:'/image/UK-Flag (1).svg',
    },
    { 
      key: '5', 
      label: 'AED',
      path:'/image/Flag-UAE (1).svg',
    },
    { 
      key: '6', 
      label: 'AUD',
      path:'/image/Flag-AUS (1).svg',
    },
    { 
      key: '7', 
      label: 'NZD',
      path:'/image/Flag-NZ (1).svg',
    },
    { 
      key: '8', 
      label: 'SGD',
      path:'/image/Flag-Singapore (1).svg',
    },
    { 
      key: '9', 
      label: 'EUR',
      path:'/image/Flag-Europe (1).svg', 
    },
    ]
    
  },
  {
    path: "/image/shortlist-new.svg",
    href: "/shortlist",
    title:'Shortlist',
    dropdow:false
  },
  {
    path: "/image/cart-new.svg",
    href: "/cart",
    title:'Cart',
    dropdow:false
  },
  {
    path: "/image/user-logo-new.svg",
    href: "/login",
    title:'Account',
    dropdow:false
  },
];

const socicalicon = [
  {
    icon: "/image/facebook-icon.png",
    backg: "bg-blue-700",
    href: "#",
  },
  {
    icon: "/image/twitter-icon.png",
    backg: "bg-blue-500",
    href: "#",
  },

  {
    icon: "/image/instagram-icon.png",
    backg: "bg-green-400",
    href: "#",
  },

  {
    icon: "/image/linkedin-icon.png",
    backg: "bg-blue-900",
    href: "#",
  },

  {
    icon: "/image/youtube-icon.png",
    backg: "bg-red-500",
    href: "#",
  },
];

const footer = [
  {
    title: "Know About IGP:",
    href: "#",
    desc: "Who We Are  |  Press Releases  |  Blog  |  Contact Us  |  Track Order  |  Order History  | Complaints  |  Terms & Policies  |  FAQ |  Privacy Policy",
  },
  {
    title: "Gifts by Recipient:",
    href: "#",
    desc: "Gifts for Her  |  Gifts for Him  |  Gifts For Girls/Teenage Girls  |  Gifts for Boys  |  Gifts for Couples  |  Gifts for Kids & Infants",
  },
  {
    title: "Gifts by Relationship:",
    href: "#",
    desc: "Gifts for Husband  |  Gifts for Wife  |  Gifts for Boyfriend  |  Gifts for Girlfriend  |  Gifts for Father  |  Gifts for Mother  |  Gifts for Son  |  Gifts for Daughter  |  Gifts for Brother  |  Gifts for Sister  |  Gifts for Friend",
  },
  {
    title: "Gifts by Category:",
    href: "#",
    desc: "Plants  |  Flowers  |  Cakes  |  Handmade Gifts  |  Personalized Gifts  |  Gift Cards  |  Same Day Delivery Gifts  |  Corporate Gifts  |  Home & Living Gifts  |  Kids Toys & Games  |  Fashion Lifestyle Gifts  |  Jewellery Gifts  |  Gourmet Gifts",
  },
  {
    title: "Gift Ideas by Festivals/Occasions:",
    href: "#",
    desc: "Mother s Day  |  Father s Day  |  Parents Day Gifts  |  Friendship Day  |  Rakhi  |  Teacher s Day  |  Grandparents Day  |  Daughter s Day Gifts  |  Boss Day  |  Diwali  |  Bhaidooj  |  Karwa Chauth  |  Christmas  |  New Year  |  Lohri  |  Valentine s Day  |  Holi  |  Women s Day",
  },
  {
    title: "Gift Ideas by Special Occasions:",
    href: "#",
    desc: "Birthday  |  Anniversary  |  Wedding  |  Housewarming  |  Best Wishes  |  Baby Shower",
  },
];

const footerimage = [
  {
    title: "10 Reasons Why Personalized Gifts Are The Best",
    keep: "Keep Reading",
    desc: "10 Reasons Why Personalised Gifts are the Best for Any Occasion",
    path: "/image/Why_Giving_Personalised_Gifts_Are_Uniquely_Special_20230901165328.jpg",
    href: "#",
  },
  {
    title: "How to Choose the Perfect Gift for Your Loved Ones",
    keep: "Keep Reading",
    desc: "10 Reasons Why Personalised Gifts are the Best for Any Occasion",
    path: "/image/How_to_Choose_the_Perfect_Gift_20230802185606.jpg",
    href: "#",
  },

  {
    title: "Gift Etiquette -Dos and Don ts of Giving and Receiving Presents",
    keep: "Keep Reading",
    desc: "10 Reasons Why Personalised Gifts are the Best for Any Occasion",
    path: "/image/Gift_Etiquette_20230627125034.jpg",
    href: "#",
  },
];


const menus = [
  {
    lable:'Same Day Delivery Gifts'
  },
  {
    lable:'Delivery Gifts'
  },
  {
    lable:'Personalized Gifts'
  },
  
]






const Layout = ({ children, title = "",description="" ,keywords="",success=''}) => {
  const [placeholder, setPlaceholder] = useState("Serech for gifts");
  const [open, setOpen] = useState(false);

  const hide = () => {
    setOpen(false);
  };

  const handleOpenChange = (boolean) => {
    setOpen(boolean);
  };

  //menu coding
  return (
    <>
      <Head>
        <link rel='icon' href='/image/unnamed.png' />
            <title>{title+' - '+process.env.NEXT_PUBLIC_DOMAIN}</title>
            <meta name="description" content={description}/>
            <meta name="keywords" content={keywords}/>
            <meta name="robots" content="index,follow"/>
            <meta property="og:title" content={process.env.NEXT_PUBLIC_BRAND_NAME}/>
            <meta property="og:description" content={description}/>
            <meta property="og:image" content={process.env.NEXT_PUBLIC_BRAND_LOGO}/>
            <meta property="og:url" content="website"/>
      </Head>
      <div className=" border-b z-10 bg-[#FFFFFF]  bg- max-md:px-[20px]  md:px-[50px] w-full fixed top-0 left-0 right-0">
        <div className=" flex items-center justify-between">
          <div className="flex md:gap-1 items-center cursor-pointer">
         


            <Popover
      content={
        <div className=" w-[280px] h-[504px] ">
          <div className="border-2 w-[275px] mb-4 h-[170px] rounded-xl " >
            <div className='flex justify-between px-5 py-2 items-center'>
              <h1 className='font-semibold text-lg'>Top Collections</h1>
              <Image src='/image/catTree-col-desktop.svg' width={40} height={40} alt='logo' />
            </div>
            {
              menus.map((item,index)=>(
                <div key={index} className="flex px-5">
                  <Link href='#' className='mb-3 font-semibold'>{item.lable}</Link>
                </div>
              ))
            }
          
          </div>
          <div className='border-b pb-4'>
          <h1 className='font-semibold text-xs'>Shop By:</h1>
          </div>
          
          <div>
          <Form.Item label="Cascader">
        <Cascader
          options={[
            {
              value: 'zhejiang',
              label: 'Zhejiang',
              children: [{ value: 'hangzhou', label: 'Hangzhou' }],
            },
          ]}
        />
      </Form.Item>
          </div>
          
        </div>
      }
      
      trigger="click"
      open={open}
      onOpenChange={handleOpenChange}
    >
     <i className="bx bx-menu-alt-left text-3xl"></i>
    </Popover>


            <Image
              src="/image/igp-logo-revamp.png"
              width={69}
              height={56}
              alt="gip"
            />
          </div>
          <div className="items-center max-lg:hidden border border-zinc-300 flex rounded-2xl w-[535px]  px-3">
            <input
              type="text"
              name="serech"
              className="py-2 border-none px-2 rounded-2xl border w-[500px] outline-none  font-semibold h-[34px]"
              placeholder={placeholder}
              onClick={() => setPlaceholder("")}
            />
            <i className="bx text-2xl bx-search cursor-pointer hidden"></i>
          </div>

          <div className="items-center flex max-md:gap-x-3 md:gap-x-5">
            <div className="lg:hidden flex items-center">
              <i className="bx text-2xl bx-search cursor-pointer  "></i>
            </div>
            {
            menuicon.map((item, index) => (
          <Link href={item.href} key={index}>
          <Tooltip placement="bottom" title={item.title}>
          {item.dropdow ? (
          <Dropdown 
          overlay={
            <Menu  >
              {item.dropdownItems.map((menuItem) => (
                <Menu.Item key={menuItem.key}>
                  <div className="cursor-pointer flex justify-between gap-x-3 items-center">
                  <Image
                    src={menuItem.path}
                    width={24}
                    height={24}
                    alt="icon"
                   
                  />
                  {menuItem.label}
                  </div>
                </Menu.Item>
              ))}
            </Menu>
          }
          trigger={['click']}  arrow>
            <button>
              
              <Image
                src={item.path}
                width={24}
                height={24}
                alt="icon"
                className="cursor-pointer"
              />
            </button>
          </Dropdown>
        ) : (
          <button>
            <Image
              src={item.path}
              width={24}
              height={24}
              alt="icon"
              className="cursor-pointer"
            />
          </button>
        )}
                </Tooltip>
              </Link>
            ))}
          </div>
        </div>
      </div>

      <div className=" mt-[75px]"> {children}</div>

      {/* footer coding */}

      <div className="md:px-[50px] max-md:px-[20px] bg-[#F6F6F6] py-8">
        <div className="lg:px-[150px] max-lg:gap-2 flex lg:flex max-md:flex max-md:flex-col max-md:mb-2   lg:justify-between border-b pb-9 mb-6">
          <div className="flex gap-x-10 flex-col">
            <h1 className="text-center md:text-sm max-md:text-xs font-semibold mb-5">
              Download our IGP app for a better experience !!
            </h1>
            <div className="md:flex max-md:flex max-md:flex-col max-md:mx-auto md:gap-x-10">
              <Image
                src="/image/android-app-download.webp"
                width={166}
                height={48}
                alt="playstore"
                className="max-md:mb-3"
              />
              <Image
                src="/image/apple-app-download.webp"
                width={166}
                height={48}
                alt="playstore"
              />
            </div>
          </div>

          <div className="flex gap-x-10 flex-col">
            <h1 className="text-center text-lg font-semibold max-lg:mb-3 lg:mb-5 text-gray-600">
              Follow us on:
            </h1>
            <div className="flex gap-x-10">
              <div className="flex lg:gap-x-5 max-lg:gap-x-3 max-md:mx-auto items-center">
                {socicalicon.map((item, index) => (
                  <div
                    key={index}
                    className={`  items-center rounded-full     ${item.backg}`}
                  >
                    <Image
                      src={item.icon}
                      className="text-3xl p-3 text-white cursor-pointer"
                      width={50}
                      height={50}
                      alt="icon"
                    />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>

        <div className="border-b pb-9 mb-5">
          <h1 className="text-lg font-semibold mb-5">
            Welcome to IGP.com! The No.1 Online Gift Shop
          </h1>
          <h1 className="text-xs font-semibold mb-2 ">
            Create Blissful Memories with IGP s Unique Gift Items
            #GiftThatFeeling
          </h1>
          <h1 className="text-xs mb-5  ">
            <span className="font-semibold">Online Gifts Delivery</span> - Send
            gifts to India, USA, Canada & Worldwide with FREE shipping from{" "}
            <span className="font-semibold">IGP Gifts</span>. The #1{" "}
            <span className="font-semibold">online gift shop</span>that offers
            gifts, flowers, cakes, personalized gifts, sweets, chocolates, and
            plant delivery in your local areas in India. Get same-day and
            midnight delivery in over 450+ cities in India. Get unique & best
            gift ideas for family & friends. Easy & fast gift delivery anywhere
            in India.
          </h1>
          <h1 className="text-xs mb-8">
            We at IGP are committed to giving you and loved one s experiences
            that are sure to be cherished for a very long time. We are India s
            best <span className="font-semibold">online gift store</span>{" "}
            wherein you will find amazing gift ideas for all your special
            relationships. With an experience of over 20+ years in the gifting
            industry, we at IGP exactly know what impact a thoughtful gift can
            have on the mind of the receiver. Picking a perfect gift is an art.
            Making the right gift selection takes planning, research, and
            personal attention. While selecting the best gifts for loved ones,
            you need to take into consideration the recipients likes and
            dislikes, their personality, and preferences. Also, the gift needs,
            to be thoughtful and user-friendly at the same time. When choosing a
            gift for someone special, you need to put in that extra effort to
            ensure a wow moment for the receiver when the wrapping paper comes
            off. Life is full of varied experiences and experiences count. They
            help us stride through tough times and make our lives meaningful. At
            <span className="font-semibold">IGP</span>.com, we know that you are
            busy. And with special occasions on the way, sometimes you recall
            buying a gift last-minute. Thus, we bring you the coolest and most
            unusual gifts online anywhere gifts delivery in India and ac
          </h1>
          <Button className="border border-black font-semibold">
            SHOW MORE
          </Button>
        </div>

        <div>
          {footer.map((item, index) => (
            <div key={index} className="flex flex-col mb-5">
              <Link href="#" className="font-semibold text-sm mb-1  underline">
                {item.title}
              </Link>
              <p className="text-xs">{item.desc}</p>
            </div>
          ))}
        </div>

        <div className="mt-5 border-b pb-10 mb-5">
          <h1 className="underline mb-5   text-sm font-semibold">Our Blogs</h1>

          <div className="grid md:grid-cols-3 max-md:grid-cols-1 gap-4 w-full  ">
            {footerimage.map((item, index) => (
              <div key={index} className="bg-white p-3 shadow-xl flex gap-3">
                <div>
                  <Image
                    src={item.path}
                    width={175}
                    height={270}
                    alt="product"
                  />
                </div>
                <div>
                  <h1 className="lg:text-sm max-lg:text-xs text mt-2 font-semibold  mb-2">
                    {item.title}
                  </h1>
                  <p className="text-gray-500 text-xs max-lg:hidden">
                    {item.desc}
                  </p>
                  <Link
                    href="#"
                    className="text-sm max-lg:hidden text-blue-400"
                  >
                    {item.keep}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <h1 className="underline font-semibold text-sm">Send Flowers to</h1>
          <Link href="#" className="text-xs">
            Flower Delivery in Delhi | Send Flowers to Gurgaon | Send Flowers to
            Noida | Send Flowers to Faridabad | Send Flowers to Jaipur | Send
            Flowers to Ghaziabad | Flower Delivery in Mumbai | Flower Delivery
            in Ahmedabad | Send Flowers to Bangalore | Send Flowers to Chennai |
            Send Flowers to Pune | Flower Delivery in Hyderabad | Flower
            Delivery in Kolkata | Send Flowers to Chandigarh | Send Flowers with
            Chocolates
          </Link>
        </div>
        <div className="flex flex-col">
          <h1 className="underline font-semibold text-sm">Send Cakes to</h1>
          <Link href="#" className="text-xs">
            Online Cake Delivery in Mumbai | Online Cake Delivery in Delhi |
            Online Cake Delivery in Bangalore | Send Cakes to Hyderabad Online |
            Cake Delivery in Chennai | Cake Delivery in Pune | Cake Delivery in
            Jaipur | Cake Delivery in Gurgaon | Cake Delivery in Ahmedabad |
            Cake Delivery in Kolkata | Cake Delivery in Chandigarh | Cake
            Delivery in Ghaziabad | Cake Delivery in Noida | Cake Delivery in
            Faridabad | Eggless Birthday Cake
          </Link>
        </div>

        <div className="flex justify-center ">
          <Image
            src="/image/igp-logo-revamp.png"
            width={148}
            height={112}
            alt="gip"
          />
        </div>

        <div className="flex justify-end items-center gap-5">
          <h1 className="text-lg font-semibold flex max-md:hidden">
            Payment Methods:
          </h1>
          <Image
            src="/image/payment.jpeg"
            width={300}
            height={10}
            alt="payment"
          />
        </div>
      </div>
    </>
  );
};
export default Layout;

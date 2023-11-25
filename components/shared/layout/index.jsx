import Image from "next/image";
// import { Button } from 'antd';
import Link from "next/link";
const menuicon = [
  {
    path: "/image/reminder-icon.svg",
  },
  {
    path: "/image/rupees-logo-new.svg",
  },
  {
    path: "/image/shortlist-new.svg",
  },
  {
    path: "/image/cart-new.svg",
  },
  {
    path: "/image/user-logo-new.svg",
  },
];

const socicalicon = [
  {
    icon: "/image/facebook-icon.png",
    backg: "bg-blue-700",
  },
  {
    icon: "/image/twitter-icon.png",
    backg: "bg-blue-500",
  },

  {
    icon: "/image/instagram-icon.png",
    backg: "bg-green-400",
  },

  {
    icon: "/image/linkedin-icon.png",
    backg: "bg-blue-900",
  },

  {
    icon: "/image/youtube-icon.png",
    backg: "bg-red-500",
  },
];

const footer = [
  {
    title: "Know About IGP:",
    desc: "Who We Are  |  Press Releases  |  Blog  |  Contact Us  |  Track Order  |  Order History  | Complaints  |  Terms & Policies  |  FAQ |  Privacy Policy",
  },
  {
    title: "Gifts by Recipient:",
    desc: "Gifts for Her  |  Gifts for Him  |  Gifts For Girls/Teenage Girls  |  Gifts for Boys  |  Gifts for Couples  |  Gifts for Kids & Infants",
  },
  {
    title: "Gifts by Relationship:",
    desc: "Gifts for Husband  |  Gifts for Wife  |  Gifts for Boyfriend  |  Gifts for Girlfriend  |  Gifts for Father  |  Gifts for Mother  |  Gifts for Son  |  Gifts for Daughter  |  Gifts for Brother  |  Gifts for Sister  |  Gifts for Friend",
  },
  {
    title: "Gifts by Category:",
    desc: "Plants  |  Flowers  |  Cakes  |  Handmade Gifts  |  Personalized Gifts  |  Gift Cards  |  Same Day Delivery Gifts  |  Corporate Gifts  |  Home & Living Gifts  |  Kids Toys & Games  |  Fashion Lifestyle Gifts  |  Jewellery Gifts  |  Gourmet Gifts",
  },
  {
    title: "Gift Ideas by Festivals/Occasions:",
    desc: "Mother s Day  |  Father s Day  |  Parents Day Gifts  |  Friendship Day  |  Rakhi  |  Teacher s Day  |  Grandparents Day  |  Daughter s Day Gifts  |  Boss Day  |  Diwali  |  Bhaidooj  |  Karwa Chauth  |  Christmas  |  New Year  |  Lohri  |  Valentine s Day  |  Holi  |  Women s Day",
  },
  {
    title: "Gift Ideas by Special Occasions:",
    desc: "Birthday  |  Anniversary  |  Wedding  |  Housewarming  |  Best Wishes  |  Baby Shower",
  },
];

const footerimage = [
  {
    title: "10 Reasons Why Personalized Gifts Are The Best",
    keep: "Keep Reading",
    desc: "10 Reasons Why Personalised Gifts are the Best for Any Occasion",
    path: "/image/Why_Giving_Personalised_Gifts_Are_Uniquely_Special_20230901165328.jpg",
  },
  {
    title: "How to Choose the Perfect Gift for Your Loved Ones",
    keep: "Keep Reading",
    desc: "10 Reasons Why Personalised Gifts are the Best for Any Occasion",
    path: "/image/How_to_Choose_the_Perfect_Gift_20230802185606.jpg",
  },

  {
    title: "Gift Etiquette -Dos and Don ts of Giving and Receiving Presents",
    keep: "Keep Reading",
    desc: "10 Reasons Why Personalised Gifts are the Best for Any Occasion",
    path: "/image/Gift_Etiquette_20230627125034.jpg",
  },
];

const Layout = () => {
  //menu coding
  return (
    <>
      <div className=" border-b-2 px-[50px] w-full mb-40">
        <div className="bg-[#FFFFFF] flex items-center justify-between">
          <div className="flex gap-1 items-center cursor-pointer">
            <i className="bx bx-menu-alt-left text-3xl"></i>
            <Image
              src="/image/igp-logo-revamp.png"
              width={69}
              height={56}
              alt="gip"
            />
          </div>
          <div className="items-center border-2 border-zinc-300 flex rounded-2xl w-[500px]  px-3">
            <input
              type="text"
              name="serech"
              className="py-2 border-none px-2 rounded-2xl border-2 w-[460px] outline-none  font-semibold h-[34px]"
              placeholder="Serech for gifts"
            />
            <i class="bx text-xl bx-search cursor-pointer"></i>
          </div>

          <div className="items-center flex gap-5">
            {menuicon.map((item, index) => (
              <div key={index}>
                <Image
                  src={item.path}
                  width={24}
                  height={24}
                  alt="icon"
                  className="cursor-pointer"
                />
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* footer coding */}

      <div className="px-[50px]  bg-[#F6F6F6] py-8">
        <div className="px-[150px] flex  justify-between border-b-2 pb-9 mb-6">
          <div className="flex gap-x-10 flex-col">
            <h1 className="text-center text-lg font-semibold mb-5">
              Download our IGP app for a better experience !!
            </h1>
            <div className="flex gap-x-10">
              <Image
                src="/image/android-app-download.webp"
                width={166}
                height={48}
                alt="playstore"
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
            <h1 className="text-center text-lg font-semibold mb-5 text-gray-600">
              Follow us on:
            </h1>
            <div className="flex gap-x-10">
              <div className="flex gap-x-5 items-center">
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

        <div className="border-b-2 pb-9 mb-5">
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
            that are sure to be cherished for a very long time. We are India's
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
          {/* <Button className="border border-black font-semibold">SHOW MORE</Button> */}
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

        <div className="mt-5 border-b-2 pb-10 mb-5">
          <h1 className="underline mb-5   text-sm font-semibold">Our Blogs</h1>

          <div class="grid grid-cols-3 gap-4 w-full  ">
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
                  <h1 className="text-sm mt-2 font-semibold  mb-2">
                    {item.title}
                  </h1>
                  <p className="text-gray-500 text-xs">{item.desc}</p>
                  <Link href="#" className="text-sm text-blue-400">
                    {item.keep}
                  </Link>
                </div>
              </div>
            ))}
          </div>
        </div>

        <div className="flex flex-col mb-4">
          <h1 className="underline font-semibold text-sm">Send Flowers to</h1>
          <p className="text-xs">
            {" "}
            Flower Delivery in Delhi | Send Flowers to Gurgaon | Send Flowers to
            Noida | Send Flowers to Faridabad | Send Flowers to Jaipur | Send
            Flowers to Ghaziabad | Flower Delivery in Mumbai | Flower Delivery
            in Ahmedabad | Send Flowers to Bangalore | Send Flowers to Chennai |
            Send Flowers to Pune | Flower Delivery in Hyderabad | Flower
            Delivery in Kolkata | Send Flowers to Chandigarh | Send Flowers with
            Chocolates
          </p>
        </div>
        <div className="flex flex-col">
          <h1 className="underline font-semibold text-sm">Send Cakes to</h1>
          <p className="text-xs">
            {" "}
            Online Cake Delivery in Mumbai | Online Cake Delivery in Delhi |
            Online Cake Delivery in Bangalore | Send Cakes to Hyderabad Online |
            Cake Delivery in Chennai | Cake Delivery in Pune | Cake Delivery in
            Jaipur | Cake Delivery in Gurgaon | Cake Delivery in Ahmedabad |
            Cake Delivery in Kolkata | Cake Delivery in Chandigarh | Cake
            Delivery in Ghaziabad | Cake Delivery in Noida | Cake Delivery in
            Faridabad | Eggless Birthday Cake
          </p>
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
          <h1 className="text-lg font-semibold flex">Payment Methods:</h1>
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

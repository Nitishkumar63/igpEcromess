import Image from "next/image"
import Head from "next/head";
const Navbar = ({ children, title = "",description="" ,keywords=""}) =>{
    return(
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
         <div className=" py-1 border-b flex  justify-center">
          <Image
            src="/image/igp-logo-revamp.png"
            width={60}
            height={56}
            alt="logo"
          />
        </div>
        </>
     
    )
}
export default Navbar
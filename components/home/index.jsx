import Image from "next/image";
import Layout from "../shared/layout";
import Menuicon from './menuicon'
import Produtcarscel from "./productcarseal";
import MarvelCarseal from "./marvelcarseal";
import TrendingGifts from "./trending gifts";
import CelebrateMilestones from "./celebratemilestones";
import BestSelling from "./bestsellingcarseal";
import Categories from "./categories"
import Perfect from "./perfectgifts";
const Home = () =>{
  
    return(
        <Layout title="IGP:Online Gifts Delivery,Buy/Sell">
            <Menuicon/>
            <Produtcarscel/>
            <MarvelCarseal/>
            <TrendingGifts/>
            <CelebrateMilestones/>
            <BestSelling/>
            <Categories/>
            <Perfect/>

        </Layout>
    )
  
}
export default Home
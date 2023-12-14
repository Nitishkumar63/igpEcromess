import Layout from "../shared/layout";
import Menuicon from './menuicon'
import Produtcarscel from "./productcarseal";
import MarvelCarseal from "./marvelcarseal";
import TrendingGifts from "./trending gifts";
import CelebrateMilestones from "./celebratemilestones";
import BestSelling from "./bestsellingcarseal";
import Categories from "./categories"
import Perfect from "./perfectgifts";
import Occasions from "./occasions";
import PopularGifting from "./populargifting";
import Cakes from "./cakes";
import Fashion from "./fashion";
import SendGifts from "./sendgifts";
import CustomersStories from './customersstories'
import ViewedProducts from './viewedproducts'
import Stats from './stats'
const Home = () =>{
  
    return(
        <Layout 
            title="IGP:Online Gifts Delivery,Buy/Sell"
            description = "i am description"
            keywords = 'testing keywords'
         >
            <Menuicon/>
            <Produtcarscel/>
            <MarvelCarseal/>
            <TrendingGifts/>
            <CelebrateMilestones/>
            <BestSelling/>
            <Categories/>
            <Perfect/>
            <Occasions/>
            <PopularGifting/>
            <Cakes/>
            <Fashion/>
            <SendGifts/>
            <CustomersStories/>
            <ViewedProducts/>
            <Stats/>

        </Layout>
    )
  
}
export default Home
import Layout from "../../shared/layout"
import SameGifts from './delivery-gifts'
import Categortmenu from './category-menu'
import CustomersStories from "../../home/customersstories"
import Stats from "../../home/stats"
import ViewedProducts from "../../home/viewedproducts"
const SameDay = () =>{
    return(
        <Layout title='Same-Day-Delivery Gift In 2 Hours'>
        <Categortmenu/>
         <SameGifts/>
         <ViewedProducts/>
         <CustomersStories/>
         <Stats/>
        </Layout>
    )
}

export default SameDay
import Layout from "../shared/layout"
import SameGifts from './delivery-gifts'
import CustomersStories from "../home/customersstories"
import Stats from "../home/stats"
import ViewedProducts from "../home/viewedproducts"
const SameDay = () =>{
    return(
        <Layout title="Same Day Delivery Gifts in 2 Hours">
         <SameGifts/>
         <ViewedProducts/>
         <CustomersStories/>
         <Stats/>
        </Layout>
    )
}

export default SameDay
import Layout from "@/components/shared/layout"
import Choose from './choose-product'
import BestSelling from './../../home/bestsellingcarseal/index';
import ViewedProducts from "@/components/home/viewedproducts";
import Stats from "@/components/home/stats";
const Add = () =>{
    return(
        <Layout title="Order Choco Chip">
         <Choose/>
          <BestSelling/>
          <ViewedProducts/>
          <Stats/>

        </Layout>
    )
}
export default Add
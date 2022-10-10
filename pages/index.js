 import { getProductsInCollection } from "../lib/shopify"
import ProductList from "./components/ProductList"


const Home = ({ products }) => {
  console.log(products)

 return (
   <div>
     <ProductList products={products} />
    </div>
    )
}

export default Home


export async function getStaticProps() {
  const products = await getProductsInCollection()

  return {
    props: { products }, // will be passed to the page component as props
  }
}
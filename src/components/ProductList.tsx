import { useMemo, useState } from "react";
import type {FC} from 'react'
import { useProducts } from "../context/ProductContext";
import Sidebar from "./Sidebar";
import Loading from "./Loading";
import ProductCard from "./ProductCard";


const categories = ["men's clothing", "women's clothing", "jewelery", "electronics"];

const ProductList: FC = () => {
  const {products, isLoading} = useProducts();
  console.log(products);
const [activeCategory, setActiveCategory] = useState("men's clothing");

const filteredProducts = useMemo(
  () => products.filter(product => product.category === activeCategory),
  [products, activeCategory]
)

  return (
    <section className="py-10 bg-gray-100"> 
      <div className="px-6 flex flex-col md:flex-row gap-6">
        {/* Sidebar */}
         <Sidebar
         categories={categories}
         activeCategory={activeCategory}
         onCategoryClick={setActiveCategory}
         />

         {/* Product Grid Listing */}
         <div className="flex-1 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        {isLoading ? (
          <div className="col-span-full">
            <Loading />
          </div>
        ) : filteredProducts.length > 0 ? (
          filteredProducts.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))
        ) : (
          <p className=" text-center col-span-full">No Product Found</p>
        )}
         </div>
      </div>
    </section>
  )
}

export default ProductList;
import { useState } from "react";
import Loading from "../components/Loading";
import { useProducts } from "../context/ProductContext";
import ProductCard from "../components/ProductCard";

const AllProducts = () => {
    const {products, isLoading} = useProducts();
    console.log(products);
    
    const [searchTerm, setSearchTerm] = useState("");

    // filter product by tilte
    const filteredProducts = products.filter((product: any) =>
      product.title.toLowerCase().includes(searchTerm.toLowerCase())
    );

  return (
    <div className="py-16 px-8">
      {/* Search */}
      <div className="mb- sticky top-[5rem] 
      z-10 backdrop-blur-md bg-white/80">
        <input
         type="text"
        placeholder="Search by title"
        onChange={(e) => setSearchTerm(e.target.value)}
        value={searchTerm}
        className="w-full md:w-1/4 italic rounded-lg 
        p-2 border border-gray-300 text-gray-500"
          />
      </div>
      {/* product listing */}
      <div className="flex-1 grid grid-cols-1 
      sm:grid-cols-2 lg:grid-cols-4 gap-6 mt-24 mb-4">
      {isLoading ? (
        <div className="col-span-full">
          <Loading />
        </div>
      ) : filteredProducts.length > 0 ? (
        filteredProducts.map((product:any) => (
          <ProductCard key={product.id} product={product}/>
        ))
      ) : (
        <p>No Found</p>
      )}
      </div>
    </div>
  );
}

export default AllProducts
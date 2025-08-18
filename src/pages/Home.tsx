// const Home = () => { 
//   return <h1 className="text-2xl font-bold">Home Page</h1>; 

// }; export default Home;

import React, { useEffect, useState } from "react";
import axios from "axios";

const Home = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("https://fakestoreapi.com/products") 
      .then((response) => {
        console.log(response.data); //  the product array
        setProducts(response.data);
      })
      .catch((error) => {
        console.error("Error fetching products:", error);
      });
  }, []);

  return (
    <div>
      <h1>Home Page</h1>
    </div>
  );
};

export default Home;

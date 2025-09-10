import axios from "axios";
import { useParams } from "react-router-dom";
import { useEffect, useState } from "react";
import Loading from "../components/Loading";

const SingleProduct = () => {
  const { id } = useParams<{ id: string }>();
  const [product, setProduct] = useState<any>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const getSingleProduct = async () => {
      try {
        const response = await axios.get(
          `https://fakestoreapi.com/products/${id}`
        );
        setProduct(response.data);
      } catch (error) {
        console.error("Error fetching product:", error);
      } finally {
        setLoading(false);
      }
    };

    getSingleProduct();
  }, [id]);

  if (loading) {
    return (
      <div className="flex justify-center items-center h-screen">
        <Loading /> 
      </div>
    );
  }

  return (
    <div className="p-4">
      {product ? (
        <div>
          <h2 className="text-xl font-bold">{product.title}</h2>
          <img src={product.image} alt={product.title} className="w-48" />
          <p className="mt-2">{product.description}</p>
          <p className="font-semibold mt-2">${product.price}</p>
        </div>
      ) : (
        <p>Product not found.</p>
      )}
    </div>
  );
};

export default SingleProduct;

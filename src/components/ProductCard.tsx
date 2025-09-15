import type { FC } from "react";
import type { Product } from "../types/Product";
import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext"; // ✅ import context

const ProductCard: FC<{ product: Product }> = ({ product }) => {
  const { addToCart } = useCart(); // ✅ get addToCart function

  return (
    <Link
      to={`/products/${product.id}`}
      className="bg-white rounded-lg shadow p-8 flex flex-col hover:shadow-lg transition"
    >
      <img
        src={product.image}
        alt={product.title}
        className="h-40 object-contain mb-4"
      />
      <h3 className="font-semibold text-lg text-gray mb-1">
        {product.title}
      </h3>
      <p className="text-sm text-gray mb-2 flex-1">
        {product.description.slice(0, 80)}...
      </p>

      {/* Price and Button on same line */}
      <div className="flex items-center justify-between mt-auto">
        <p className="font-bold text-accent">${product.price}</p>
        <button
          className="bg-gray text-white px-4 py-2 rounded hover:bg-accent transition"
          onClick={(e) => {
            e.preventDefault(); // prevent link navigation
            addToCart(product); // ✅ add item to cart
          }}
        >
          Add to cart
        </button>
      </div>
    </Link>
  );
};

export default ProductCard;


import { Link } from "react-router-dom";
import { useCart } from "../context/CartContext";

const Cart = () => {
  const { cart, removeFromCart, updateQty } = useCart();

  const total = cart.reduce((sum, item) => sum + item.price * item.quantity, 0);

  if (cart.length === 0) {
    return (
      <div className="p-8 text-center">
        <h2 className="text-2xl font-bold mb-4">Your cart is empty 🛒</h2>
        <Link to="/products" className="text-blue-600 underline">
          Go shopping
        </Link>
      </div>
    );
  }

  return (
    <div className="p-8">
      <h2 className="text-2xl font-bold mb-6">Your Cart</h2>

      <div className="space-y-4">
        {cart.map((item) => (
          <div
            key={item.id}
            className="grid grid-cols-12 items-center bg-white shadow p-4 rounded gap-4"
          >
            {/* Product Info */}
            <div className="col-span-6 flex items-center gap-4">
              <img
                src={item.image}
                alt={item.title}
                className="w-16 h-16 object-contain"
              />
              <div>
                <h3 className="font-semibold">{item.title}</h3>
                <p className="text-gray-500">${item.price}</p>
              </div>
            </div>

            {/* Quantity controls */}
            <div className="col-span-3 flex flex-col items-center">
              <div className="flex items-center gap-2">
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() =>
                    item.quantity > 1
                      ? updateQty(item.id, item.quantity - 1)
                      : removeFromCart(item.id)
                  }
                >
                  -
                </button>
                <span>{item.quantity}</span>
                <button
                  className="px-2 py-1 bg-gray-200 rounded"
                  onClick={() => updateQty(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <p className="text-xs text-gray-500 mt-1">
                Use + / – to adjust
              </p>
            </div>

            {/* Subtotal + Remove */}
            <div className="col-span-3 flex flex-col items-end">
              <p className="font-bold">
                ${(item.price * item.quantity).toFixed(2)}
              </p>
              <button
                className="text-red-600 hover:underline mt-1"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
            </div>
          </div>
        ))}
      </div>

      {/* Cart Footer */}
      <div className="mt-8 flex justify-between items-center">
        <p className="text-xl font-bold">Total: ${total.toFixed(2)}</p>
        <Link
          to="/checkout"
          className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700"
        >
          Proceed to Checkout
        </Link>
      </div>
    </div>
  );
};

export default Cart;

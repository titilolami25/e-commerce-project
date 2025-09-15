import React, { useState } from "react";
import { useCart } from "../context/CartContext";

const Checkout: React.FC = () => {
  const { cart, increaseQty, decreaseQty, totalPrice, clearCart } = useCart();
  const [orderPlaced, setOrderPlaced] = useState(false);

  const handlePlaceOrder = (e: React.FormEvent) => {
    e.preventDefault();

    if (cart.length === 0) {
      alert("Your cart is empty!");
      return;
    }

    alert(`✅ Order placed successfully!\nTotal: $${totalPrice.toFixed(2)}`);
    clearCart();
    setOrderPlaced(true);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 mt-28">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>

      {orderPlaced ? (
        <p className="text-center text-green-600 font-semibold mt-8">
          ✅ Your order has been placed successfully!
        </p>
      ) : cart.length > 0 ? (
        <form onSubmit={handlePlaceOrder}>
          {cart.map((item) => (
            <div
              key={item.id}
              className="flex items-center justify-between border-b py-4"
            >
              {/* Product info */}
              <div className="flex items-center space-x-4">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-16 h-16 object-cover rounded"
                />
                <div>
                  <h2 className="text-lg font-semibold">{item.title}</h2>
                  <p className="text-gray-500">${item.price.toFixed(2)}</p>
                </div>
              </div>

              {/* Quantity controls */}
              <div className="flex flex-col items-center space-y-1">
                <button
                  type="button"
                  onClick={() => decreaseQty(item.id)}
                  className="px-2 py-1 border rounded hover:bg-gray-100"
                >
                  –
                </button>

                <span className="font-semibold">{item.quantity}</span>

                <button
                  type="button"
                  onClick={() => increaseQty(item.id)}
                  className="px-2 py-1 border rounded hover:bg-gray-100"
                >
                  +
                </button>
              </div>
            </div>
          ))}

          <div className="flex justify-between items-center mt-6 font-semibold text-lg">
            <span>Total:</span>
            <span>${totalPrice.toFixed(2)}</span>
          </div>

          <button
            type="submit"
            className="mt-6 w-full bg-primary text-white py-3 rounded hover:bg-primary-dark transition"
          >
            Place Order
          </button>
        </form>
      ) : (
        <p className="text-center text-gray-600 mt-8">Your cart is empty 🛒</p>
      )}
    </div>
  );
};

export default Checkout;

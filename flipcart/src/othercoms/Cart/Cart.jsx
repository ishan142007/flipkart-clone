import React, { useState } from "react";

// Sample cart data
const initialCart = [
  {
    id: 1,
    name: "iPhone 14",
    price: 69999,
    image: "https://via.placeholder.com/100",
    qty: 1,
  },
  {
    id: 2,
    name: "Nike Shoes",
    price: 4999,
    image: "https://via.placeholder.com/100",
    qty: 2,
  },
];

export default function Cart() {
  const [cart, setCart] = useState(initialCart);

  const handleQty = (id, delta) => {
    setCart((prev) =>
      prev.map((item) =>
        item.id === id
          ? { ...item, qty: Math.max(1, item.qty + delta) }
          : item
      )
    );
  };

  const handleRemove = (id) => {
    setCart((prev) => prev.filter((item) => item.id !== id));
  };

  const total = cart.reduce((sum, item) => sum + item.price * item.qty, 0);

  return (
    <section className="max-w-4xl mx-auto mt-10 p-6 bg-white rounded-2xl shadow-lg">
      <h2 className="text-2xl font-bold mb-6 text-gray-800">My Cart</h2>
      {cart.length === 0 ? (
        <div className="text-center text-gray-500 py-10">Your cart is empty.</div>
      ) : (
        <div className="flex flex-col gap-6">
          {cart.map((item) => (
            <div key={item.id} className="flex items-center gap-6 border-b pb-4">
              <img src={item.image} alt={item.name} className="w-20 h-20 object-cover rounded-lg" />
              <div className="flex-1">
                <h3 className="font-semibold text-lg text-gray-700">{item.name}</h3>
                <p className="text-gray-500">₹{item.price}</p>
                <div className="flex items-center gap-2 mt-2">
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => handleQty(item.id, -1)}
                  >
                    -
                  </button>
                  <span className="px-3 font-bold">{item.qty}</span>
                  <button
                    className="px-2 py-1 bg-gray-200 rounded"
                    onClick={() => handleQty(item.id, 1)}
                  >
                    +
                  </button>
                  <button
                    className="ml-4 px-3 py-1 bg-red-500 text-white rounded"
                    onClick={() => handleRemove(item.id)}
                  >
                    Remove
                  </button>
                </div>
              </div>
              <div className="font-bold text-lg text-gray-800">₹{item.price * item.qty}</div>
            </div>
          ))}
        </div>
      )}
      {/* Cart summary */}
      <div className="mt-8 border-t pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
        <div className="text-xl font-semibold text-gray-700">Total: ₹{total}</div>
        <button
          className="bg-indigo-600 hover:bg-indigo-700 text-white font-bold py-3 px-8 rounded-xl transition-all duration-300"
          disabled={cart.length === 0}
        >
          Proceed to Checkout
        </button>
      </div>
    </section>
  );
}

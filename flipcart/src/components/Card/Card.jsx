// src/components/ProductCard.jsx
import React from "react";

function Card({ product }) {
  return (
    <div className="border rounded p-3 w-40 text-center">
      <img src={product.image} alt={product.name} className="w-full h-32 object-cover" />
      <h3 className="font-semibold mt-2">{product.name}</h3>
      <p className="text-green-600 font-bold">₹{product.price}</p>
    </div>
  );
}

export default Card;

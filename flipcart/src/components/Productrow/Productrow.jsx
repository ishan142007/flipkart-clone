// src/components/ProductRow.jsx
import React from "react";
// import ProductCard from "./ProductCard";
import Card from "../Card/Card";

function ProductRow({ title, products }) {
  return (
    <div className="p-4">
      <h2 className="text-xl font-bold mb-3">{title}</h2>
      <div className="flex gap-4 overflow-x-scroll">
        {(products ?? []).map((item, i) => (
          <Card key={i} product={item} />
        ))}
      </div>
    </div>
  );
}

export default ProductRow;

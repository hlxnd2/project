import React from "react";
import { useState } from "react";

import "../../src/App.css";
import ProductList from "../components/ProductList/ProductList";
import { useProducts } from "../hooks/useProducts";

export default function MainPage() {
  console.log("render");

  const [products, toggle] = useProducts();

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>MAIN PAGE</h2>
      <div className="container">
        <h3 className="p-3 text-center">React - Display a list of items</h3>
        <ProductList title='Prods' products={products} />
      </div>
    </main>
  );
}

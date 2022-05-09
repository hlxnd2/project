import { Link, Outlet } from "react-router-dom";
import React from "react";
import "./App.css";
import { useState } from "react";
import ProductList from "./components/ProductList/ProductList";
import ProductCard from "./components/ProductCard/ProductCard";

import { useProducts } from "./hooks/useProducts";

export const ProductsContext = React.createContext({
  toggleProductFav: () => {},
});

function App() {
  const [products, toggleProductFav] = useProducts();

  const myCart = products.filter((product) => product.isInShoppingCart);
  const shouldRenderMyCart = myCart.length > 0;

  return (
    <div className="App">
      <header className="App-header">
        <h1>Wonderful Shop</h1>
      </header>
      <nav>
        <Link to="/cart">Check your cart</Link>
      </nav>
      <ProductsContext.Provider value={{ toggleProductFav }}>
        <main className="main-container">
          <Outlet />
          {shouldRenderMyCart && (
            <ProductList title="My Cart" products={myCart} />
          )}
        </main>
      </ProductsContext.Provider>
    </div>
  );
}

export default App;

/* export default function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <h1>Wonderful Shop</h1>
      </header>
      <nav>
        <Link to="/cart">Check your cart</Link>
      </nav>
      <main>
        <Outlet />
      </main>
    </div>
  );
} */

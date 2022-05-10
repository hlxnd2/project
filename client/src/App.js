import { Link, Outlet } from "react-router-dom";
import React from "react";
import "./App.css";

import { useProducts } from "./hooks/useProducts";

export const ProductsContext = React.createContext({
  toggleProductFav: () => {},
});

function App() {
  const [products, toggleProductFav] = useProducts();

  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/"><h1><img className="carticon" src="/logo.svg" alt="" /> Wonderful Shop</h1></Link>
          <Link to="/cart"><img className="carticon" src="/cart.svg" alt="Cart" /></Link>
        </nav>
      </header>
      <ProductsContext.Provider value={{ toggleProductFav }}>
        <main className="main-container">
          <Outlet />
        </main>
      </ProductsContext.Provider>
    </div>
  );
}

export default App;

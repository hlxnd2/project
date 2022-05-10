import { Link, Outlet } from "react-router-dom";

import "./App.css";

import GlobalContext from './GlobalContext'
import { useProducts } from "./hooks/useProducts";

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
      <GlobalContext.Provider value={{ products, toggleProductFav }}>
        <main className="main-container">
          <Outlet />
        </main>
      </GlobalContext.Provider>
    </div>
  );
}

export default App;

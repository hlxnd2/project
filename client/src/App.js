import { Link, Outlet } from "react-router-dom";

import './App.css';

export default function App() {
 
  return (
    <div className="App">
      <header className="App-header">
        <nav>
          <Link to="/"><h1><img className="carticon" src="/logo.svg" alt="" /> Wonderful Shop</h1></Link>
          <Link to="/cart"><img className="carticon" src="/cart.svg" alt="Cart" /></Link>
        </nav>
      </header>
      <main>
        <Outlet />
      </main>
    </div>
  );
}

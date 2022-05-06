import { Link, Outlet } from "react-router-dom";

import './App.css';

export default function App() {
 
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
}

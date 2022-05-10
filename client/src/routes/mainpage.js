import { useContext } from "react";

import "../../src/App.css";
import ProductList from "../components/ProductList/ProductList";
import GlobalContext from "../GlobalContext";

export default function MainPage() {
  const { products, toggle } = useContext(GlobalContext);

  return (
    <main style={{ padding: "1rem 0" }}>
      <h2>MAIN PAGE</h2>
      <div className="container">
        <h3 className="p-3 text-center">React - Display a list of items</h3>
        <ProductList title='Products' products={products} />
      </div>
    </main>
  );
}

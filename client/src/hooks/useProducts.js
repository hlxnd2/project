import { useEffect, useState } from "react";
import { fetchShow } from "../services/ApiClient";

export function useProducts() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetchShow().then((products) => setProducts(products));
  }, []);

  const toggleProductFav = (id) => {
    const updatedProducts = products.map((product) => {
      if (product.id !== id) return product;

      return {
        ...product,
        isInShoppingCart: !product.isInShoppingCart,
      };
    });
    setProducts(updatedProducts);
  };

  return [products, toggleProductFav];
}

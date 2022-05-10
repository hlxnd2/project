import Product from "../models/Product";

export function fetchProducts() {
  return fetch("http://localhost:3030/products")
    .then((response) => response.json())
    .then((products) => products.map(Product.create));
}


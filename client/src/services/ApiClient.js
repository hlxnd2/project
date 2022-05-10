import Product from "../models/Product";

export function fetchProducts() {
  return fetch("http://localhost:3030/products")
    .then((response) => response.json())
    .then((products) => products.map(Product.create));
}

export function createOrder(products, total, discount) {
    return fetch('http://localhost:3030/orders', {
      method: 'POST',
      headers: {
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({products, total, discount})
    })
    .then((response) => response.json());
}

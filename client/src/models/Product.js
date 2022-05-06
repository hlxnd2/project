export default class Product {
    constructor(product) {
      Object.assign(this, product);
    }
  
    static create(product) {
      const imgSrc = ''
  
      return new Product({
        ...product,
        imgSrc,
        isInShoppingCart: false
      });
    }
  }
  
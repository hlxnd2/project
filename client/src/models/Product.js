export default class Product {
    constructor(product) {
      Object.assign(this, product);
    }
  
    static create(product) {
      const imgSrc = ''
  
      return new Product({
        ...product,
        imgSrc: product.img_src,
        isInShoppingCart: false
      });
    }
  }
  
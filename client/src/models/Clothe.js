export default class Clothe {
    constructor(clothe) {
      Object.assign(this, clothe);
    }
  
    static create(clothe) {
      const imgSrc = ''
  
      return new Clothe({
        ...clothe,
        imgSrc,
        isInShoppingCart: false
      });
    }
  }
  
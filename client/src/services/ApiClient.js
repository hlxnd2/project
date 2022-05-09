import Product from "../models/Product";

export function fetchShow() {
  return fetch("https://movied.herokuapp.com/discover")
    .then((response) => response.json())
    .then((Product) => Product.map(Product.create));
}

/* export const data = {
  products: [
    {
      title: 'Shorts',
      category: 'Sport',
      description: 'So confortable',
      size: 'M',
      color: 'Orange',
      img_src: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fmedia.istockphoto.com%2Fphotos%2Forange-men-shorts-for-swimming-picture-id697913308%3Fk%3D20%26m%3D697913308%26s%3D612x612%26w%3D0%26h%3Dl2x4DyjDZmwEcekPZDRp1b5ImMGAUSxTMFZ8GGhISZ8%3D&imgrefurl=https%3A%2F%2Fwww.istockphoto.com%2Fde%2Ffotos%2Fshorts&tbnid=1UgKmHxUh_IldM&vet=12ahUKEwjguNHA7Mr3AhXKKewKHc_5As4QMygAegUIARC9Ag..i&docid=Isfnm73cCQlwiM&w=612&h=408&q=image%20shorts&safe=active&ved=2ahUKEwjguNHA7Mr3AhXKKewKHc_5As4QMygAegUIARC9Ag'
    },
    {
      title: 'T-shirt',
      category: 'Casual',
      description: '100% cotton',
      size: 'L',
      color: 'Pink',
      img_src: 'https://www.google.com/imgres?imgurl=https%3A%2F%2Fcdn.shopify.com%2Fs%2Ffiles%2F1%2F2530%2F3930%2Fproducts%2FPink.jpg%3Fv%3D1584446024&imgrefurl=https%3A%2F%2Fcommunityclothing.co.uk%2Fproducts%2Fwomensshortsleevet-shirt-pink&tbnid=QDebqotM_66ufM&vet=12ahUKEwjJ9ebt7Mr3AhXQjqQKHWzYBLIQMygMegUIARDRAg..i&docid=hJz01t5FH2KwbM&w=880&h=880&q=t-shirt%20pink&hl=es&safe=active&ved=2ahUKEwjJ9ebt7Mr3AhXQjqQKHWzYBLIQMygMegUIARDRAg'
    }
  ]
}; */

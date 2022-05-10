import { useContext } from "react";
import "./ProductCard.styles.css";
import { ProductsContext } from "../../App";

export default function ProductCard({ id, title, imgSrc, isInShoppingCart }) {
  const { toggleProductFav } = useContext(ProductsContext);
  console.log(title);
  return (
    <article className="productCard">
      <img width='40px' src={imgSrc} alt={title} />
      <div className="productCard-footer">
        <h3 className="productCard-title">{title}</h3>
        <button
          className="productCard-add"
          onClick={() => toggleProductFav(id)}
        >Add to cart
        </button>
      </div>
    </article>
  );
}

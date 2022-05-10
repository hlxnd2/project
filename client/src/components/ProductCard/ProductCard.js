import { useContext } from "react";
import "./ProductCard.styles.css";
import GlobalContext from "../../GlobalContext";

export default function ProductCard({ id, title, imgSrc, isInShoppingCart }) {
  const { products, toggleProductFav } = useContext(GlobalContext);

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

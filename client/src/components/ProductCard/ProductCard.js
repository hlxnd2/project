import { useContext } from "react";
import "./ProductCard.styles.css";
import { ProductsContext } from "../../App";

export default function ProductCard({ id, title, imgSrc, isInShoppingCart }) {
  const { toggleProductFav } = useContext(ProductsContext);

  return (
    <article className="productCard">
      <img src={imgSrc} alt={title} />
      <div className="productCard-footer">
        <h3 className="productCard-title">{title}</h3>
        <button
          className="productCard-add"
          onClick={() => toggleProductFav(id)}
        >
          <img src="FixMe" />
        </button>
      </div>
    </article>
  );
}

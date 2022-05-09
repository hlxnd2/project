import ProductCard from "../ProductCard/ProductCard";
import './ProductList.styles.css'

export default function ProductList({ title, products}) {
    return (
        <section className='productlist-section'>
            <h2 className='productlist-title'>{title}</h2>
            <ul className='productlist-scrollList'> 
                {products.map((product) => (
                    <li key={product.id}>
                        <ProductCard {...product} />
                    </li>
                ))}
            </ul>
        </section>
    )
}
import { useContext } from 'react';
import './ProductCard.styles.css';
import { ProductsContext } from '../../App';

export default function ProductCard ({ id, title, img_src, isInShoppingCart}) {

    const { toggleProductFav } = useContext(ProductsContext);
    
    return (
        <article className='productCard'>
            <img src={img_src} alt={title} />
            <div className='productCard-footer'>
                <h3 className='productCard-title'>{title}</h3>
                <button className='productCard-add' onClick={() => toggleProductFav(id)}>
                    <img src ='FixMe' />
                </button>
            </div>
        </article>
    )
}
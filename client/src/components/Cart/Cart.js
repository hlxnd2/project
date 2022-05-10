import { useContext } from "react";

import GlobalContext from "../../GlobalContext";
import ProductList from "../ProductList/ProductList";
import { createOrder } from '../../services/ApiClient'

import './Cart.css';

export default function Cart (props)
{
    const { products, toggle } = useContext(GlobalContext);
    const formatter = new Intl.NumberFormat(undefined, {style: 'currency', currency: 'EUR'});
    const productsInCart = products.filter((p) => p.isInShoppingCart);

    const subtotal = productsInCart.reduce(((acc, p) => acc + parseInt(p.price, 10)), 0);
    const shipping = 10;
    const tax = 5;

    function pay()
    {
        let id;
        createOrder(productsInCart, subtotal + shipping + tax, 0).then(e => { alert(e.id); });
    }

    return (
        <div className="cart">
            <section className="itemlist">
                <ProductList title='InCart' products={productsInCart} />
            </section>
            <section className="checkout">
                <div className="details">
                    <div><label>Subtotal:</label> <span>{formatter.format(subtotal)}</span></div>
                    <div><label>Shipping:</label> <span>{formatter.format(shipping)}</span></div>
                    <div><label>Tax:</label> <span>{formatter.format(tax)}</span></div>
                </div>
                <div className="total">
                    <div><label>Estimate Total:</label> <span>{formatter.format(subtotal + shipping + tax)}</span></div>
                </div>
                <div className="payment">
                    <form onSubmit={e => e.preventDefault()}>
                        <button onClick={pay}>Pay</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

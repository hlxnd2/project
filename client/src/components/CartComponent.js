import { LoadingSpinner } from './LoadingSpinner/LoadingSpinner.js'

import './CartComponent.css';

export default function CartComponent ()
{
    const formatter = new Intl.NumberFormat(undefined, {style: 'currency', currency: 'EUR'});
    const subtotal = 70;
    const shipping = 9;
    const tax = 5;

    return (
        <div className="cartcomponent">
            <section className="itemlist">
                <LoadingSpinner />
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

                </div>
            </section>
        </div>
    );
}
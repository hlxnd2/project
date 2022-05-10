import { LoadingSpinner } from '../LoadingSpinner/LoadingSpinner.js'

import './Cart.css';

export default function Cart (props)
{
    const formatter = new Intl.NumberFormat(undefined, {style: 'currency', currency: 'EUR'});
    const subtotal = 70;
    const shipping = 9;
    const tax = 5;

    async function pay()
    {
        let response;
        try
        {
            response = await fetch('localhost:3030/payOrder', {
                method: 'POST',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({id: props.id})
            });
        }
        catch (err)
        {
            alert(err);
            return;
        }

        if (response.ok)
            document.location.href = '/';
        else
            alert('Error in payment method!');
    }

    return (
        <div className="cart">
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
                    <form>
                        <button onClick={pay}>Pay</button>
                    </form>
                </div>
            </section>
        </div>
    );
}

import React from 'react';
import './Cart.css';
const Cart = ({ cart }) => {
    console.log(cart);
    let total = 0;
    let totalShipping = 0;
    let quantity = 0;

    for (const product of cart) {
        product.quantity = product.quantity || 1;
        total = total + product.price * product.quantity;
        totalShipping = totalShipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }
    const tax = total * 5 / 100;
    const grandTotal = total + totalShipping + tax;
    return (
        <>
            <div className='cart-container'>
                <div className='cart-info'>
                <h4>Order Summary</h4>
                Selected Item: {quantity}
                <p>Total Price: ${total}</p>
                <p>Total Shipping: ${totalShipping}</p>
                <p>Tax: ${tax.toFixed(2)}</p>
                <h6>Grand Total: ${grandTotal.toFixed(2)}</h6>
                </div>
            </div>
        </>
    );
};

export default Cart;
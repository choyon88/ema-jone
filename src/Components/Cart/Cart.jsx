import React from 'react';
import './Cart.css';
const Cart = ({ cart }) => {
    console.log(cart);
    let total = 0;
    let totalShipping = 0;
    for (const product of cart) {
        total = total + product.price;
        totalShipping = totalShipping + product.shipping;
    }
    const tax = total * 5 / 100;
    const grandTotal = total + totalShipping + tax;
    return (
        <>
            <div className='cart-container'>
                <div className='cart-info'>
                <h4>Order Summary</h4>
                Selected Item: {cart.length}
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
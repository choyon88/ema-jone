import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch(`products.json`)
            const data = await res.json()
            setProducts(data);
        }
        loadData();
    }, [])
    const handleAddCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
    }
    return (
        <>
            <div className='shop-container'>
                <div className="products-container">
                    {
                        products.map((product, id) =>
                            <Product
                                key={id}
                                product={product}
                                handleAddCart={handleAddCart}
                            >

                            </Product>
                        )
                    }
                </div>
                <div className="cart-container">
                    <h4>Order Summary</h4>
                    Selected Item: {cart.length}
                </div>
            </div>
        </>
    );
};

export default Shop;
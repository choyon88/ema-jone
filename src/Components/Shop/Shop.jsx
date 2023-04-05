import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
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
                    <Cart cart={cart}></Cart>
                </div>
            </div>
        </>
    );
};

export default Shop;
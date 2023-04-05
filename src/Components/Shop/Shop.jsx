import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
const Shop = () => {
    const [products, setProducts] = useState([]);
    useEffect(() => {
        const loadData = async () => {
            const res = await fetch(`products.json`)
            const data = await res.json()
            setProducts(data);
        }
        loadData();
    }, [])
    return (
        <>
            <div className='shop-container'>
                <div className="products-container">
                    {
                        products.map((product, id) =>
                            <Product
                                key={id}
                                product={product}
                            >

                            </Product>
                        )
                    }
                </div>
                <div className="cart-container">
                    <h4>Order coming</h4>
                </div>
            </div>
        </>
    );
};

export default Shop;
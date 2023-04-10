import React, { useEffect, useState } from 'react';
import './Shop.css'
import Product from '../Product/Product';
import Cart from '../Cart/Cart';
import { addToDb, getShoppingCart } from '../../utilities/fakedb';
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

    useEffect(() => {
       
        const storedCart = getShoppingCart();
        const savedCart = [];
        //step 1 get id of the addedProduct
        for (const id in storedCart) {
            //step 2 product from products state by using id
            const addedProduct = products.find(product => product.id === id)
          
            if (addedProduct) {
                //step 3 add quantity
                const quantity = storedCart[id];
                addedProduct.quantity = quantity;
                //step 4 add the added product to the saved Cart
                savedCart.push(addedProduct);
            }
        }
        //step 5 set the cart
        setCart(savedCart);

    }, [products])

    const handleAddCart = (product) => {
        const newCart = [...cart, product];
        setCart(newCart);
        addToDb(product.id)
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
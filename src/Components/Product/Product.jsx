import React from 'react';
import './Product.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart } from '@fortawesome/free-solid-svg-icons'
const Product = ({ product,handleAddCart }) => {
    const { name, img, seller, ratings, price } = product;
   
    return (
        <>
            <div className='product'>
                <img src={img} alt="" />
                <div className="product-info">
                    <h6 className='product-name'>{name}</h6>
                    <p>Price: ${price}</p>
                    <p>Manufacturer: {seller}</p>
                    <p>Rating: { ratings} Star</p>
                </div>
                <button onClick={() => handleAddCart(product)} className='btn-cart'>
                    Add to Cart
                    <FontAwesomeIcon icon={faShoppingCart} />
                </button>
            </div>
        </>
    );
};

export default Product;
import React from 'react';
import './Product.css';
const Product = ({ product }) => {
    console.log(product);
    const { name, img, seller, ratings, price} = product;
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
                <button className='btn-cart'>Add to Cart</button>
            </div>
        </>
    );
};

export default Product;
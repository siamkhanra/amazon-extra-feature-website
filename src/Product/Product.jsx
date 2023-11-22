import React from 'react';
import './Product.css'
import ReactDOM from 'react-dom'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faShoppingCart} from '@fortawesome/free-solid-svg-icons'

const Product = (props) => {
    const handleButton = props.handleButton;
    const {name, price, seller, ratings, img} = props.product;
    return (
        <div className='product-container'>
            <div className='product-lists'>
                <img src={img} alt="" />
                <h4>{name}</h4>
                <p>Price: ${price}</p>
                <p>Manufacture: {seller}</p>
                <p>Ratings: {ratings} star</p>
            </div>
            <button className='btn-cart' onClick={()=> handleButton(props.product)} >Add to Cart <FontAwesomeIcon icon={faShoppingCart} /></button>
        </div>
    );
};

export default Product;
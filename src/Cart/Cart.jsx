import React, { useEffect, useState } from 'react';
import './Cart.css'

const Cart = (props) => {
    const cart = props.cart;

    let total = 0;
    let shipping = 0;
    let quantity = 0;

    for(const product of cart){
        if(product.quantity === 0){
            product.quantity = 1;
        }
        total = total + product.quantity * product.price;
        shipping = shipping + product.shipping * product.quantity;
        quantity = quantity + product.quantity;
    }

    const tax = total * 0.07;
    const grandTotal = total + tax + shipping;


    const [addedProducts, setAddedProducts] = useState([]);

    useEffect(() => {
        const updatedProducts = [];
        for (const product of cart) {
            const existingProduct = updatedProducts.find(pd => pd.name === product.name);
            if (existingProduct) {
                existingProduct.quantity += product.quantity;
            } else {
                updatedProducts.push({ ...product });
            }
        }
        setAddedProducts(updatedProducts);
    }, [cart]);

    return (
        <div className='cart-container'>
            <h3 style={{textAlign:'center'}}>Order Summary</h3>
            <p>Selected Items: {quantity}</p>
            <p>Total Price: ${total}</p>
            <p>Shipping: ${shipping}</p>
            <p>Tax: ${tax.toFixed(2)}</p>
            <p>Grand Total: ${grandTotal.toFixed(2)}</p>
            <div className='name-added'>
                <p>Added Products:</p>
                <ul>
                    {addedProducts.map((product, index) => (
                        <li key={index}>
                            {product.name} - {product.quantity}
                        </li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Cart;
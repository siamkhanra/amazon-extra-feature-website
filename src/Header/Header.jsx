import React from 'react';
import './Header.css'

const Header = () => {
    return (
        <div className='header-container'>
            <img src={'../../public/Logo.svg'} alt="" />
            <nav>
                <a href="/shop">Shop</a>
                <a href="/order">Order</a>
                <a href="/inventory">Inventory</a>
                <a href="/login">Login</a>
            </nav>
        </div>
    );
};

export default Header;
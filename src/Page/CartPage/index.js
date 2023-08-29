import React, { useState, useEffect } from 'react';
import HeaderClient from '../../Layout/HeaderClient';
import FooterClient from '../../Layout/FooterClient';
import ProductApi from '../../Apis/ProductApi';
import "./style.css";

export default function CartPage() {
    const [cartItems, setCartItems] = useState([]);
    const [products, setProducts] = useState([]);
    const [isLoading, setIsLoading] = useState(true);

    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];


    const fetchCartProducts = async() => {
        const res = await Promise.all(storedCartItems.map(id => ProductApi.getByID(id)));

        // setProducts(data);
        console.log(res);
        setIsLoading(false);
    }

    useEffect(() => {
        setCartItems(storedCartItems);
        fetchCartProducts();
    }, []);

    return (
        <div className='cart-page home-page'>
            <HeaderClient />

            <div className='cart-page-mainContent'>
                {isLoading ? (
                    <p>Loading...</p>
                ) : (
                    <div className="cart-items">
                        {products.map(product => (
                            <div key={product.id} className="cart-item">
                                <h4>Name: {product.name}</h4>
                                <h4>Price: {product.price}</h4>
                                <img src={product.image}></img>
                            </div>
                        ))}
                    </div>
                )}
            </div>

            <FooterClient />
        </div>
    );
}

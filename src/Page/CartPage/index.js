import React, { useState, useEffect } from 'react';
import { Stepper, Step, StepLabel, StepConnector, StepIconProps, Button } from '@mui/material';
import HeaderClient from '../../Layout/HeaderClient';
import FooterClient from '../../Layout/FooterClient';
import ProductApi from '../../Apis/ProductApi';
import "./style.css";
import ProcessBar from '../../Layout/ProcessBar';
import CloseIcon from '@mui/icons-material/Close';
import CheckoutForm from '../../Component/CheckOutForm';
import CheckoutModal from '../../Component/CheckOutModal';



export default function CartPage() {
    const [products, setProducts] = useState([]);
    const [quantities, setQuantities] = useState({});
    const [showCheckoutForm, setShowCheckoutForm] = useState(false);
    const [step, setStep] = useState(1);
    const [showModal, setShowModal] = useState(false);
    const [userInfo, setUserInfo] = useState({
        fullName: '',
        address: '',
        phoneNumber: '',
    });

    console.log(userInfo);


    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];

    useEffect(() => {
        setProducts(storedCartItems);
    }, []);

    const handleRemoveProduct = (productId) => {
        const updatedProducts = products.filter(product => product.productId !== productId);
        setProducts(updatedProducts);
        localStorage.setItem('cart', JSON.stringify(updatedProducts));
    };

    function formatPrice(price) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    }

    const handleQuantityChange = (e, productId) => {
        const newQuantity = parseInt(e.target.value, 10);
        const updatedQuantity = newQuantity >= 1 ? newQuantity : 1;

        const newQuantities = { ...quantities, [productId]: updatedQuantity };
        setQuantities(newQuantities);
    };

    const handleBuyNow = () => {
        setShowCheckoutForm(true)
        setStep(2)
    }

    const handlePlaceOrder = () => {
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setShowModal(false);
    };



    return (
        <div className='cart-page home-page'>
            <HeaderClient />

            <div className='cart-page-mainContent'>
                <div className='check-out' >
                    <ProcessBar step={step} />
                </div>

                {storedCartItems.length>0 ? (
                 <div className="cart-checkout">
                    <div>
                        <table className='cart-table'>
                            <thead>
                                <tr>
                                    <th></th>
                                    <th>Sản phẩm</th>
                                    <th>Giá tiền</th>
                                    <th>Số lượng</th>
                                    <th>Tạm tính</th>
                                </tr>
                            </thead>

                            <tbody>
                                {products.map(product => (
                                    <tr key={product.productId} className="cart-item">
                                        <td className='icon-del' onClick={() => handleRemoveProduct(product.productId)}><CloseIcon /> </td>
                                        <td className='cart-item-product'>
                                            {product.productName}
                                            <img src={product.productImg} alt={product.productName}></img>

                                        </td>
                                        <td className='text-red'>{formatPrice(product.productPrice)}</td>
                                        <td>
                                            <input
                                                style={{ width: "30px", padding: "5px 2px" }}
                                                type="number"
                                                value={quantities[product.productId] || 1}
                                                onChange={(e) => handleQuantityChange(e, product.productId)}
                                            />
                                        </td>
                                        <td className='text-red'>{formatPrice(product.productPrice * (quantities[product.productId] || 1))}</td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>


                    <div className='cart-payment'>
                        <div className='total-price'>
                            <h3>Cộng giỏ hàng</h3>
                            <p className='text-red'>Tổng: {formatPrice(
                                products.reduce((total, product) => total + (product.productPrice * (quantities[product.productId] || 1)), 0)
                            )}</p>
                        </div>

                        <Button style={{ marginBottom: "16px" }} variant="contained" color="error" onClick={handleBuyNow}>Mua Ngay</Button>
                        {showCheckoutForm && <CheckoutForm setUserInfo={setUserInfo} handleCloseModal={handleCloseModal} handlePlaceOrder={handlePlaceOrder} setStep={setStep} setShowCheckoutForm={setShowCheckoutForm} />}

                    </div>
                    <CheckoutModal
                        isOpen={showModal}
                        onClose={handleCloseModal}
                        userInfo={userInfo}
                        cartItems={products.map(product => ({
                            productId: product.productId,
                            productName: product.productName,
                            quantity: quantities[product.productId] || 1,
                            productPrice: product.productPrice,
                        }))}
                        totalPrice={products.reduce((total, product) => total + (product.productPrice * (quantities[product.productId] || 1)), 0)}
                    />

                </div>
                ) : <p className='cart-null'>Không có sản phẩm nào trong giỏ hàng</p>}
            </div>

            <FooterClient />
        </div>
    );
}

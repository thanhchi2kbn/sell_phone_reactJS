import React from 'react';
import { Button, Modal, colors } from '@mui/material';
import "./style.css"
import CheckCircleIcon from '@mui/icons-material/CheckCircle';

export default function CheckoutModal({ isOpen, onClose, userInfo, cartItems, totalPrice }) {
    function formatPrice(price) {
        return new Intl.NumberFormat('vi-VN', { style: 'currency', currency: 'VND' }).format(price);
    }
    return (
        <Modal open={isOpen} onClose={onClose}>
            <div className="checkout-modal">
                <div className='checkout-modal-heading'>
                    <CheckCircleIcon style={{ color: "green", fontSize: "40px" }} />
                    <h1>Mua hàng thành công!</h1>
                </div>

                <div className='checkout-modal-info'>
                    <h2>Thông tin đặt hàng</h2>
                    <p>Họ và tên: {userInfo.fullName}</p>
                    <p>Địa chỉ: {userInfo.address}</p>
                    <p>Số điện thoại: {userInfo.phoneNumber}</p>
                    <h3>Giỏ hàng:</h3>
                    <ul>
                        {cartItems.map(item => (
                            <li key={item.productId}>
                                Sản phẩm: {item.productName}, Số lượng: {item.quantity}, Giá: {formatPrice(item.productPrice)}
                            </li>
                        ))}
                    </ul>

                    <h2>Tổng hoá đơn:</h2>
                    <p className='text-red'>Tổng cộng giỏ hàng: {formatPrice(totalPrice)}</p>

                    <Button onClick={onClose} className='btn-done' variant="contained" color="success" >
                        Hoàn Thành
                    </Button>
                </div>

            </div>
        </Modal>
    );
}

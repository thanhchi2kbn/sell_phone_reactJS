import React from 'react';
import { useNavigate } from 'react-router-dom';
import ip13 from '../../Assets/image/iphone-13.jpeg';
import './style.css';

export default function ProductItem({ item }) {
  const navigate = useNavigate(); // Sử dụng hook useNavigate

  const formattedPrice = new Intl.NumberFormat('vi-VN', {
    style: 'currency',
    currency: 'VND',
  }).format(item.price);

  const handleItemClick = () => {
    navigate(`/detail/${item.id}`); // Điều hướng đến trang chi tiết sản phẩm với ID
  };

  return (
    <>
      <div className='product-item'>
        <div>
          <img
            className='product-item-img'
            src={item.image}
            alt={item.name}
            onClick={handleItemClick} // Gọi hàm điều hướng khi bấm vào ảnh
            style={{ cursor: 'pointer' }} // Thêm CSS để con trỏ thành dấu nhấp nháy
          />
          <div className='product-item-rating'>
            {/* Đánh giá số sao */}
            <span className='product-item-stars'>{item.id % 2 === 0 ? '★★★★★' : '★★★★☆'}</span>
          </div>
  
            <span className='product-item-discount'>{item.id % 2 === 0 ? 'Giảm giá 20%' : 'Giảm giá 25%'}</span>

        </div>
        <div className='product-item-info'>
          <h4 className='product-item-title' onClick={handleItemClick}>
            {item.name}
          </h4>
          <p className='product-item-price'>{formattedPrice}</p>
        </div>
      </div>
    </>
  );
}

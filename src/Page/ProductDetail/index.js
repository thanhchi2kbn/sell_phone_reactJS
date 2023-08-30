
import React, { useEffect, useState } from 'react'
import "./style.css"

import HeaderClient from '../../Layout/HeaderClient'
import FooterClient from '../../Layout/FooterClient'
import RadioBtn from '../../Layout/RadioBtn'
import CardGiftcardIcon from '@mui/icons-material/CardGiftcard';
import { Button } from '@mui/material'
import ProductApi from '../../Apis/ProductApi'
import EastIcon from '@mui/icons-material/East';
import HomeIcon from '@mui/icons-material/Home';
import { Link, useNavigate } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addCard } from '../../Store/Actions/NotificationActions'
import ToastMessage from '../../Component/ToastMessage'

export default function ProductDetail() {
    const [product, setProduct] = useState(null);
    const dispatch = useDispatch()

    useEffect(() => {
        // Gọi API để lấy thông tin sản phẩm theo ID
        const fetchProduct = async () => {
            try {
                const productId = window.location.pathname.split('/').pop();
                const response = await ProductApi.getByID(productId);
                setProduct(response.data); // Lưu thông tin sản phẩm vào state
            } catch (error) {
                console.error('Error fetching product:', error);
            }
        };

        fetchProduct();
    }, []);

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);
    


    const priceFormatted = (price) => {
        return new Intl.NumberFormat('vi-VN', {
            style: 'currency',
            currency: 'VND'
        }).format(price);
    };

    const handleBuyClick = () => {
        if (product) {
            console.log(product);
            dispatch(addCard(product)); // Gọi hàm addCard và truyền thông tin sản phẩm
        }
    };
    return (
        <div className='home-page detail-page'>
            <HeaderClient />
            <ToastMessage/>; 

            <div className='container'>
                <div className='wrapper'>
                    <div className='main-content'>
                        {product ? (
                            <>
                                <div className='detail-product'>
                                    <div className='detail-product-img'>
                                        <img src={product.image}></img>
                                    </div>
                                    <div className='detail-info'>
                                        <h1>{product.name}</h1>
                                        <p className='detail-price'>{priceFormatted(product.price)}</p>
                                        <ul><strong>Mô Tả:</strong>
                                            <li><strong>Dung lượng: </strong> {product.details.memory}</li>
                                            <li><strong>Camera: </strong> {product.details.camera}</li>
                                            <li><strong>Màn hình: </strong> {product.details.display}</li>
                                            <li><strong>Hệ điều hành: </strong> {product.details.operatingSystem}</li>
                                            <li><strong>Màu: </strong> {product.details.color}</li>
                                        </ul>
                                        <RadioBtn />
                                    </div>
                                </div>
                                <div className='sub-detail'>

                                    <div className='promotion'>
                                        <div className='header-promotion'>
                                            <p><CardGiftcardIcon /></p>
                                            <p>  Khuyến mãi đặc biệt</p>
                                        </div>
                                        <div className='list-promotion'>
                                            <ul>
                                                <li>Hỗ trợ lên đời, thu mua đổi máy giá cao nhất</li>
                                                <li>Airpods Pro ANC đỉnh nhất chỉ 850k</li>
                                                <li>Airpods 2 Hổ Vằn cao cấp nhất chỉ 450k</li>
                                                <li>Tặng dán cường lực khi mua máy  </li>
                                                <li>Tặng sạc 18W chính hãng khi mua BH vip</li>
                                                <li>Giảm ngay 100k khi mua máy trên livestream</li>
                                                <li>Hỗ trợ trả góp lãi suất 0%</li>
                                            </ul>
                                        </div>
                                    </div>

                                    <div className='buy-product'>
                                        <div style={{ display: "flex", gap: "16px", marginBottom: "12px" }}>
                                            <div className='detail-price'>{priceFormatted(product.price)}</div>
                                            <Button onClick={handleBuyClick} variant="contained" color="error">
                                                Thêm vào giỏ
                                            </Button>
                                        </div>
                                        <div className='pay-now'>
                                            <Button variant="contained" color="error">
                                                <p >Mua ngay <br />
                                                    <span >Giao tận nơi, hoặc nhận tại cửa hàng</span>
                                                </p>
                                            </Button>

                                            <Button variant="contained" >
                                                <p >Trả góp qua thẻ <br />
                                                    <span >Visa, Master, JCB</span>
                                                </p>
                                            </Button>

                                            <Button variant="contained" color="success">
                                                <p >Mua ngay - Trả sau <br />
                                                    <span >Nhận máy liền tay, không cần trả ngay</span>
                                                </p>
                                            </Button>
                                        </div>
                                    </div>
                                </div>
                            </>
                        ) : (
                            <p>Loading...</p>
                        )}
                    </div>


                    <div className='side-bar'>

                                        <div className='header-promotion'>
                                            <p><CardGiftcardIcon /></p>
                                            <p>Chính sách bảo hành</p>
                                        </div>
                                        <div className='banner'>
                                            <ul>
                                                <li><EastIcon style={{fontSize: "13px", color:"red"}}/> 30 ngày 1 đổi 1 tất cả các lỗi do nhà sản xuất</li>
                                                <li><EastIcon style={{fontSize: "13px", color:"red"}}/> Dùng thử 7 ngày không thích hoàn tiền 100%</li>
                                                <li><EastIcon style={{fontSize: "13px", color:"red"}}/> 30 ngày sử dụng lên đời sản phẩm khác miễn phí</li>
                                                <li><EastIcon style={{fontSize: "13px", color:"red"}}/> Bảo hành phần mềm trọn đời máy</li>
                                                <li><EastIcon style={{fontSize: "13px", color:"red"}}/> Hết bảo hành hỗ trợ 100% công sửa chữa</li>
                                                <li><EastIcon style={{fontSize: "13px", color:"red"}}/> Trả góp 0% với thẻ tín dụng.</li>
                                                <li><HomeIcon style={{fontSize: "13px", color:"red"}}/> Địa chỉ cửa hàng</li>
                                                <li><HomeIcon style={{fontSize: "13px", color:"red"}}/> Số 5 ngõ 88 Trần Quý Cáp, Đống Đa, Hà Nội</li>
                                                <li><HomeIcon style={{fontSize: "13px", color:"red"}}/> Số 48 Ngõ 18 Huỳnh Thúc Kháng, Đống Đa, Hà Nội </li>
                                                <li><HomeIcon style={{fontSize: "13px", color:"red"}}/> Khách đặt ship COD: <span style={{color: "red"}}>037.370.9999</span> </li>
                                            </ul>

                                            <img src='https://mobilelegend.vn/wp-content/uploads/2021/08/228133317_336649978184865_4537962470115148577_n.jpg'></img>
                                            <img style={{height: "210px"}} src='https://dongshopsun.vn/wp-content/uploads/2022/09/mua-tra-truoc-dien-thoai-lai-suat-0-dong.jpg'></img>
                                        
                                        </div>
                                    </div>

                </div>
            </div>
            <FooterClient />
        </div>
    )
}

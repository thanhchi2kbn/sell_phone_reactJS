import React from 'react'
import "./style.css"
import banner1 from "../../Assets/image/banner1.jpg"
import banner2 from "../../Assets/image/banner2.jpg"
import banner3 from "../../Assets/image/banner3.png"
import banner4 from "../../Assets/image/banner4.png"
import banner5 from "../../Assets/image/banner5.png"
import banner6 from "../../Assets/image/banner6.png"
import banner7 from "../../Assets/image/banner7.png"
import flashSale from "../../Assets/image/flashsale.png"
import ap3 from "../../Assets/image/airpod3.jpg"
import ap4 from "../../Assets/image/airpods_pro.jpeg"
import ip13 from "../../Assets/image/iphone-13.jpeg"
import ip11pr from "../../Assets/image/iphone-11prm.png"
import CountdownTimer from '../../Component/CountDownTime'
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { Carousel } from 'react-responsive-carousel'

export default function BannerClient() {
    return (
        <>
            <div className='banner'>
                <div className='top-banner'>
                    <div className='trending-banner'>
                        <div className='trending-title'>
                            <h2>XU HƯỚNG MUA SẮM</h2>
                        </div>

                        <div className='trending-body'>
                            <ul>
                                <li className='trending-item'>
                                    <div><p className='trending-pos'>#1</p></div>
                                    <div>
                                        <a href='#' >IPHONE LOCK</a>
                                        <p className='trending-item-desc'>Chính hãng dùng như quốc tế</p>
                                    </div>
                                </li>

                                <li className='trending-item'>
                                    <div><p className='trending-pos'>#2</p></div>
                                    <div>
                                        <a href='#' >IPHONE QUỐC TẾ</a>
                                        <p className='trending-item-desc'>Giá tốt, hàng chính hãng</p>
                                    </div>
                                </li>

                                <li className='trending-item'>
                                    <div><p className='trending-pos'>#3</p></div>
                                    <div>
                                        <a href='#' >Airpod Rep</a>
                                        <p className='trending-item-desc'>Rep chuẩn 1:1 nghe hay như zin</p>
                                    </div>
                                </li>

                                <li className='trending-item'>
                                    <div><p className='trending-pos'>#4</p></div>
                                    <div>
                                        <a href='#' >PHỤ KIỆN</a>
                                        <p className='trending-item-desc'>Phụ kiện chính hãng cho Iphone</p>
                                    </div>
                                </li>

                                <li className='trending-item'>
                                    <div><p className='trending-pos'>#5</p></div>
                                    <div>
                                        <a href='#' >IPHONE 12 PRO MAX LOCK</a>
                                        <p className='trending-item-desc'>Thiết kế sang, giá tốt</p>
                                    </div>
                                </li>

                                <li className='trending-item'>
                                    <div><p className='trending-pos'>#6</p></div>
                                    <div>
                                        <a href='#' >IPHONE 12 LOCK</a>
                                        <p className='trending-item-desc'>Giá tốt, nhiều màu sắc</p>
                                    </div>
                                </li>

                                <li className='trending-item'>
                                    <div><p className='trending-pos'>#7</p></div>
                                    <div>
                                        <a href='#' >AIR POD 3 REP</a>
                                        <p className='trending-item-desc'>Giá rẻ, chất  âm đỉnh cao</p>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>

                    <div className='ads-banner'>
                        <Carousel className='carousel' showThumbs={false} showStatus={false} infiniteLoop autoPlay interval={2000}>
                            <img className='banner-1' src={banner1} alt='banner'></img>
                            <img className='banner-1' src={banner4} alt='banner'></img>
                            <img className='banner-1' src={banner5} alt='banner'></img>
                            <img className='banner-1' src={banner6} alt='banner'></img>
                            <img className='banner-1' src={banner7} alt='banner'></img>
                        </Carousel>
                        <div className='sub-banner' >
                            <img className='banner-2' src={banner2} alt='banner'></img>
                            <img className='banner-3' src={banner3} alt='banner'></img>

                        </div>
                    </div>
                </div>


                <div className='flash-sale-banner'>
                    <div className='flash-sale-title'>
                        <img src={flashSale}></img>

                        <CountdownTimer />

                    </div>

                    <div className='flash-sale-list'>
                        <div className='flash-sale-item'><span className='on-sale'>Giảm giá</span>
                            <img src={ap3}></img>
                            <div>
                                <p className=''>Tai nghe Airpods 3 Rep 1562U-M</p>
                                <p><span style={{ textDecoration: "line-through", color: "#b4b5bb" }}>950.000 ₫</span> 490.000 ₫</p>
                            </div>
                        </div>

                        <div className='flash-sale-item'><span className='on-sale'>Giảm giá</span>

                            <img src={ap4}></img>
                            <div>
                                <p className=''>Tai nghe Airpods 3 Rep 1562U-M</p>
                                <p><span style={{ textDecoration: "line-through", color: "#b4b5bb" }}>950.000 ₫</span> 490.000 ₫</p>
                            </div>
                        </div>

                        <div className='flash-sale-item'><span className='on-sale'>Giảm giá</span>
                            <img src={ip13}></img>
                            <div>
                                <p className=''>Iphone 13 Lock 128GB Bản Hàn</p>
                                <p><span style={{ textDecoration: "line-through", color: "#b4b5bb" }}>11.950.000 ₫</span> 9.990.000 ₫</p>
                            </div>
                        </div>

                        <div className='flash-sale-item'><span className='on-sale'>Giảm giá</span>
                            <img src={ip11pr}></img>
                            <div>
                                <p className=''>Iphone11 Pro Quốc tế 128GB Bản Mỹ   </p>
                                <p><span style={{ textDecoration: "line-through", color: "#b4b5bb" }}>8.950.000 ₫</span> 6.490.000 ₫</p>
                            </div>
                        </div>


                    </div>

                </div>
            </div>
        </>
    )
}


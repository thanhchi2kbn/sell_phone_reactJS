import React from 'react'
import "./style.css"
import HomeIcon from '@mui/icons-material/Home';
import AppleIcon from '@mui/icons-material/Apple';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ConstructionIcon from '@mui/icons-material/Construction';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import SearchIcon from '@mui/icons-material/Search';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';

export default function Home() {
  return (
    <div className='home-page'>
        <header>
            <div className='icon-header'><img src='https://mobilelegend.vn/wp-content/uploads/2021/12/logo2022-1.png'></img></div>
            <div className='menu-header'>
                <ul className='list-menu-header'>
                    <li><a href='#'><HomeIcon/><p>TRANG CHỦ</p></a></li>
                    <li><a href='#'><AppleIcon/><p>SẢN PHẨM</p></a></li>
                    <li><a href='#'><LocalShippingIcon/><p>BẢO HÀNH</p></a></li>
                    <li><a href='#'><LockOpenIcon/><p>UNLOCK IPHONE</p></a></li>
                    <li><a href='#'><ConstructionIcon /><p>SỬA CHỮA</p></a></li>
                </ul>
            </div>
            <div className='action-header'>
              <div className='search-btn'><SearchIcon/></div>
              <div className='shoping-card'>
                <ShoppingCartIcon/>
                <p>Giỏ Hàng</p>
              </div>
            </div>
        </header>

        <main>
          <div className='container'>
            <div className='banner'>
              <div className='top-banner'>
                <div className='trending-banner'></div>
                <div className='ads-banner'></div>
              </div>

              <div className='flash-sale-banner'></div>
            </div>

            <div className='product-list'></div>
          </div>
        </main>

        <footer>

        </footer>
    </div>
  )
}

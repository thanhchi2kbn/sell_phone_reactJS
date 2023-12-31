/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { memo, useEffect, useState } from 'react'
import HomeIcon from '@mui/icons-material/Home';
import AppleIcon from '@mui/icons-material/Apple';
import LocalShippingIcon from '@mui/icons-material/LocalShipping';
import ConstructionIcon from '@mui/icons-material/Construction';
import LockOpenIcon from '@mui/icons-material/LockOpen';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart';
import LoginIcon from '@mui/icons-material/Login';
import './style.css'
import { Button } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import MenuIcon from '@mui/icons-material/Menu';


 function HeaderClient() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    

    const toggleMenu = () => {
      setIsMenuOpen(!isMenuOpen);
    };
    const navigate = useNavigate()
    const [cartItems, setCartItems] = useState([]);

    const storedCartItems = JSON.parse(localStorage.getItem('cart')) || [];
    useEffect(() => {
        setCartItems(storedCartItems);
    }, []);

    return (
        <>
            <header>
                <div onClick={()=>navigate("/")}  className='icon-header'><img alt='img' src='https://vti.com.vn/wp-content/uploads/2021/06/logo_vti_light.svg'></img><span>Mobile</span></div>
                <div className='menu-header'>
                   
                    <ul className={`list-menu-header ${isMenuOpen ? 'open' : ''}`} id='list-menu-header'>
                    
                        
                        <li><a href='#' onClick={()=>navigate("/")}><HomeIcon /><p>TRANG CHỦ</p></a></li>
                        <li><a href='#product' onClick={()=>navigate("/#product")}><AppleIcon /><p>SẢN PHẨM</p></a></li>
                        <li><a href='#'><LocalShippingIcon /><p>BẢO HÀNH</p></a></li>
                        <li><a href='#'><LockOpenIcon /><p>UNLOCK IPHONE</p></a></li>
                        <li><a href='#'><ConstructionIcon /><p>SỬA CHỮA</p></a></li>
                        
                    </ul>
                </div>
                <div className='action-header'>
                    <div className='shoping-card'>
                        <Button onClick={()=>navigate("/cart")} color="error" style={{ color: "#fff" }}>
                            <ShoppingCartIcon />
                            <p>Giỏ Hàng <span className={cartItems.length? "cart-item-count" : "cart-item-count d-none" }>{cartItems.length}</span> </p>
                            
                        </Button>
                    </div>
                    <div className='sign-in-btn'>
                        <Button color="error" style={{ color: "#fff" }} onClick={() => navigate("/login")}>
                            <LoginIcon />
                            <p>Login</p>
                        </Button>
                    </div>

                    <div className='menu-icon' id='menu-icon' onClick={toggleMenu}>
                        <MenuIcon />
                    </div>
                </div>

               
            </header>
        </>
    )
}
export default memo(HeaderClient)

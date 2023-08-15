import React from 'react'
import  './style.css';
import YouTubeIcon from '@mui/icons-material/YouTube';
import FacebookIcon from '@mui/icons-material/Facebook';
import TelegramIcon from '@mui/icons-material/Telegram';
import LinkedInIcon from '@mui/icons-material/LinkedIn';
import InstagramIcon from '@mui/icons-material/Instagram';
import EmailIcon from '@mui/icons-material/Email';
import lg_atm from "../../Assets/image/logo-atm.png";
import lg_jcb from "../../Assets/image/logo-jcb.png";
import lg_mst from "../../Assets/image/logo-master.png";
import lg_ssp from "../../Assets/image/logo-samsungpay.png";
import lg_visa from "../../Assets/image/logo-visa.png";
import lg_vnp from "../../Assets/image/logo-vnpay.png";
import nhattin from "../../Assets/image/nhattin.jpg";
import vnpost from "../../Assets/image/vnpost.jpg";
import bct from "../../Assets/image/logo-bct.png";

export default function FooterClient() {
  return (
    <div className='footer'>
          <div className='footer-list'>
            <div className='footer-item'>
              <p className='footer-item-title'>Hệ Thống Cửa Hàng</p>
              <ul>
                <li>
                  <p>Cở sở 1</p>
                  <p>Số 5( đối diện số 52 ) ngõ 88 Trần Quý Cáp – Đống Đa – Hà Nội - 091.1900.888</p>
                </li>

                <li>
                  <p>Cở sở 2</p>
                  <p>Số 48 Ngõ 18 Huỳnh Thúc Kháng – Đống Đa – Hà Nội - 08337.55555</p>
                </li>
              </ul>
            </div>

            <div className='footer-item'>
              <p className='footer-item-title'>Chính Sách & Quy Định</p>
              <ul >
                <li>
                  <p>- Chính sách đổi trả và ưu đãi</p>
                </li>

                <li>
                  <p>- Chính sách bảo hành</p>
                </li>

                <li>
                  <p>- Chính sách thanh toán</p>
                </li>

                <li>
                  <p>- Chính sách bảo mật</p>
                </li>
              </ul>
            </div>

            <div className='footer-item'>
              <p className='footer-item-title'>Mạng Xã Hội</p>
              <ul style={{display: "flex"}}>
                <li>
                  <i><YouTubeIcon style={{fontSize: "36px"}}/></i>      
                </li>
                <li>
                  <i><FacebookIcon style={{fontSize: "36px"}}/></i>      
                </li>
                <li>
                  <i><TelegramIcon style={{fontSize: "36px"}}/></i>      
                </li> 
                <li>
                  <i><InstagramIcon style={{fontSize: "36px"}}/></i>      
                </li>
                <li>
                  <i><EmailIcon style={{fontSize: "36px"}}/></i>      
                </li>
              </ul>
            </div>

            <div className='footer-item'>
              <p className='footer-item-title'>Hình Thức Thanh Toán</p>
              <ul className='list-payment'>
                <li>
                  <img src={lg_atm}></img>
                </li>

                <li>
                  <img src={lg_mst}></img>
                </li>

                <li>
                  <img src={lg_visa}></img>
                </li>

                <li>
                  <img src={lg_jcb}></img>
                </li>

                <li>
                  <img src={lg_vnp}></img>
                </li>

                <li>
                  <img src={lg_ssp}></img>
                </li>
              </ul>

              <p className='footer-item-title'>Hình Thức Vận Chuyển</p>
              <ul className='list-payment'>
                <li>
                  <img src={nhattin}></img>
                </li>

                <li>
                  <img src={vnpost}></img>
                </li>

                <li>
                  <img src={bct}></img>
                </li>
              </ul>
            </div>
          </div>
    </div>
  )
}

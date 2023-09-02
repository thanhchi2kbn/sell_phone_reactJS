import React from 'react'
import "./style.css"

import HeaderClient from '../../Layout/HeaderClient'
import BannerClient from '../../Layout/BannerClient'
import FooterClient from '../../Layout/FooterClient'
import BodyClient from '../../Layout/BodyClient'
import PhoneIcon from '@mui/icons-material/Phone';

export default function Home() {
  return (
    <>

      <div className='home-page'>
        <HeaderClient />

        <div className='container'>
          <BannerClient />
          <BodyClient />

        </div>

        <div className='hot-line'>
          <div className='wave-anima1'></div>
          <div className='wave-anima'></div>
          <div className='hot-line-icon'>
            <div className='phone-icon'></div>


          </div>

          <div className='hot-line-text'>HOTLINE: 0988123456</div>
        </div>
        <FooterClient />
      </div>

    </>
  )
}

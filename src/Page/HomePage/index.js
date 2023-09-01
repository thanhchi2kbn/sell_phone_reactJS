import React from 'react'
import "./style.css"

import HeaderClient from '../../Layout/HeaderClient'
import BannerClient from '../../Layout/BannerClient'
import FooterClient from '../../Layout/FooterClient'
import BodyClient from '../../Layout/BodyClient'

export default function Home() {
  return (
    <>
      <div className='hot-line'>
      

      </div>
      <div className='home-page'>
        <HeaderClient />

        <div className='container'>
          <BannerClient />
          <BodyClient />
        </div>

        <FooterClient />
      </div>

    </>
  )
}

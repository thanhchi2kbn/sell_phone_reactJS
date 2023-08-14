import React from 'react'
import "./style.css"

import HeaderClient from '../../Layout/HeaderClient'
import BannerClient from '../../Layout/BannerClient'
import FooterClient from '../../Layout/FooterClient'

export default function Home() {
  return (
    <div className='home-page'>
      <HeaderClient />

      <main>
        <div className='container'>
          <BannerClient />


          <div className='product-list'></div>
        </div>
      </main>

      <FooterClient/>
    </div>
  )
}

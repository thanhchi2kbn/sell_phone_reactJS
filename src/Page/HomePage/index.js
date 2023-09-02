import React from 'react'
import "./style.css"

import HeaderClient from '../../Layout/HeaderClient'
import BannerClient from '../../Layout/BannerClient'
import FooterClient from '../../Layout/FooterClient'
import BodyClient from '../../Layout/BodyClient'
import HotLine from '../../Layout/HotLine'


export default function Home() {
  return (
    <>

      <div className='home-page'>
        <HeaderClient />

        <div className='container'>
          <BannerClient />
          <BodyClient />
        </div>

        <HotLine/>
        <FooterClient />
      </div>

    </>
  )
}

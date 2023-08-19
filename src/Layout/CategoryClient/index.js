import React from 'react'

import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import "./style.css"

export default function CategoryClient() {
  return (
    <div className='category'>
        <div style={{display: "flex", width: "20%"}}>
            <h3><PhoneIphoneIcon/></h3>
            <h4>IPHONE CHÍNH HÃNG </h4>
        </div>

        <div className='divider'></div>
    </div>
  )
}

import React from 'react'

import PhoneIphoneIcon from '@mui/icons-material/PhoneIphone';
import "./style.css"

export default function CategoryClient() {
  return (
    <div  className='category'>
        <div id='product' className='icon-category'>
            <h3><PhoneIphoneIcon/></h3>
            <h4>IPHONE </h4>
        </div>

        <div className='divider'></div>
    </div>
  )
}

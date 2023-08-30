import React from 'react'
import "./style.css"

export default function index({step}) {

  return (
    <div className='check-out-list'>
        <div className='check-out-item'>
          <div className='check-out-name'>
            <p>Giỏ Hàng</p>
          </div>
          <div className='check-out-step '>
            <div className='check-out-counter active'>1</div>
            <div className='check-out-line active'></div>
          </div>
        </div>

        <div className='check-out-item'>
          <div className='check-out-name'>
            <p>Chi tiết thanh toán</p>
          </div>
          <div className='check-out-step'>
            <div className={(step>1)? "check-out-counter active" : 'check-out-counter '}>2</div>
            <div className={(step>1)? "check-out-line active" : 'check-out-line '}></div>
          </div>
        </div>

        <div className='check-out-item'>
          <div className='check-out-name'>
            <p>Hoàn tất đặt hàng</p>
          </div>
          <div className='check-out-step'>
          <div className={(step>2)? "check-out-counter active" : 'check-out-counter '}>3</div>
            <div className={(step>2)? "check-out-line active" : 'check-out-line '}></div>
          </div>
        </div>


    </div>
  )
}

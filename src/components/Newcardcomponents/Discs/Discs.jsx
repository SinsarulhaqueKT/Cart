import React from 'react'
import { Discdata } from '../Popup/AllDta'

const Discs = () => {

  return (

    <div>
        <div className='tyre-items'>
        {Discdata.map((item)=>
        <div className='tyre-mapped'>
          <center><img src={item.imag} className="tyre-1-pic"/></center>
          <div className='tyre-para'>
          <h6>{item.title}</h6>
          <span >{item.para}</span>
          </div>
          <div className='pricing'>
          <span className='real-price'>{item.price}</span>
          <span className='linecut'>{item.pricecut}</span>
          <span>{item.off}</span>
          
          </div>
          <button className='btn-moredetail'>{item.btn}</button>
        </div>
        
        )}

      </div>
     
    </div>
  )
}

export default Discs

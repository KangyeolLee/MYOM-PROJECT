import React from 'react'
import './classLink.css'
import CategorySlider from '../functionalComponents/CategorySlider'

const ClassLink = () => {
  return (
    <div className="container classLink">
      <div className="categoryWrapper row">
        <h5 className="scorehvy col s12 myomColor">MYOM 이용하기</h5>
      </div>
      
      <CategorySlider />

      <div className='row'>
        <div className="divider col s6 offset-s3"></div>        
      </div>

    </div>
  )
}

export default ClassLink;
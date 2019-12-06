import React from 'react';
import Swiper from 'react-id-swiper';
import './eventBanner.css';

const EventBanner = () => {
  const params = {

  }
  return (
    <Swiper>
      <img className='responsive-img eventBanner' src="/img/banner/eventBanner1.png" alt="이벤트 배너1"/>
    </Swiper>
  )
}

export default EventBanner;
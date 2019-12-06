import React from 'react';
import Swiper from 'react-id-swiper';
import { Link } from 'react-router-dom';

const BannerSlider = () => {
  const params = {
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    loop: true,
    autoplay: {
      delay: 5000,
      disableOnInteraction: false,
    },
    on: {
      slideChange: () => {
        const slides = [...document.querySelectorAll('.swiper-pagination-bullet')];
        const activeNum = slides.findIndex((slide) => slide.className.includes('active'));
        slides.map((slide, index) => {
          if(index < activeNum) slide.classList.add('prev');
          else if(index > activeNum) slide.classList.remove('prev');
        })
      }
    }
  }

  return (
    <Swiper {...params}>
      <div className="banner-img background-img1">
        <div className="container">
          <div className="text-wrapper notoSans">
            <h6 className="white-text">Make your own movie</h6>
            <h3 className="white-text">당신의 <font className='bold-style'>여행</font>은 <font className='bold-style'>영화</font>가 됩니다.</h3>
            <Link to='/thema' className='btn waves-effect' style={{background: '#4c20e1'}}>자세히 알아보기</Link>
          </div>
        </div>
      </div>
      <div className="banner-img background-img2">
        <div className="container">
          <div className="text-wrapper notoSans">
            <h6 className="white-text">Make your own movie</h6>
            <h3 className="white-text">당신의 <font className='bold-style'>여행</font>은 <font className='bold-style'>영화</font>가 됩니다.</h3>
            <Link to='/thema' className='btn waves-effect' style={{background: '#4c20e1'}}>자세히 알아보기</Link>
          </div>
        </div>
      </div>
      <div className="banner-img background-img3">
        <div className="container">
          <div className="text-wrapper notoSans">
            <h6 className="white-text">Make your own movie</h6>
            <h3 className="white-text">당신의 <font className='bold-style'>여행</font>은 <font className='bold-style'>영화</font>가 됩니다.</h3>
            <Link to='/thema' className='btn waves-effect' style={{background: '#4c20e1'}}>자세히 알아보기</Link>
          </div>
        </div>
      </div>
      <div className="banner-img background-img4">
        <div className="container">
          <div className="text-wrapper notoSans">
            <h6 className="white-text">Make your own movie</h6>
            <h3 className="white-text">당신의 <font className='bold-style'>여행</font>은 <font className='bold-style'>영화</font>가 됩니다.</h3>
            <Link to='/thema' className='btn waves-effect' style={{background: '#4c20e1'}}>자세히 알아보기</Link>
          </div>
        </div>
      </div>
      <div className="banner-img background-img5">
        <div className="container">
          <div className="text-wrapper notoSans">
            <h6 className="white-text">Make your own movie</h6>
            <h3 className="white-text">당신의 <font className='bold-style'>여행</font>은 <font className='bold-style'>영화</font>가 됩니다.</h3>
            <Link to='/thema' className='btn waves-effect' style={{background: '#4c20e1'}}>자세히 알아보기</Link>
          </div>
        </div>
      </div>
      <div className="banner-img background-img6">
        <div className="container">
          <div className="text-wrapper notoSans">
            <h6 className="white-text">Make your own movie</h6>
            <h3 className="white-text">당신의 <font className='bold-style'>여행</font>은 <font className='bold-style'>영화</font>가 됩니다.</h3>
            <Link to='/thema' className='btn waves-effect' style={{background: '#4c20e1'}}>자세히 알아보기</Link>
          </div>
        </div>
      </div>
    </Swiper>
  )
}

export default BannerSlider;
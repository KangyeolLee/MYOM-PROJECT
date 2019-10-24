import React, { Fragment } from 'react';
import { Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';

const CategorySlider = () => {
  const Settings = {
    slidesPerView: 1,
    spaceBetween: 10.5,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    breakpoints: {
      450: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 30,
      }
    }
  }

  return (
    <Swiper {...Settings}>
      <Link to='/thema' className="card-image">
        <img src="/img/classLink/둘러보기.jpg" alt="둘러보기 카테고리 이미지"/>
        <span className='scorehvy'>전체 서비스</span>
      </Link>

      <Link to='/productIntro' className="card-image">
        <img src="/img/classLink/편집자.jpg" alt="편집자 카테고리 이미지"/>
        <span className='scorehvy'>편집자 등록</span>

      </Link>

      <Link to='/community/admin' className="card-image">
        <img src="/img/classLink/커뮤니티.jpg" alt="커뮤니티 카테고리 이미지"/>
        <span className='scorehvy'>커뮤니티</span>

      </Link>
    </Swiper>
  )
}

export default CategorySlider;

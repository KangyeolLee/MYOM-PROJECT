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
        spaceBetween: 15,
      },
      800: {
        slidesPerView: 3,
        spaceBetween: 20,
      }
    }
  }

  return (
    <Swiper {...Settings}>
      <Link to='/thema' className="category-link row">
        <div className='category-wrapper col s12'>
          <img className='col s3 initial-width' src="/img/classLink/service.png" alt="둘러보기 카테고리 이미지" width='81' height='74'/>
          <div className="text-wrapper col s9">
            <p className='notoSans category-title'>전체 서비스</p>
            <p className='notoSans category-contents'>영상을 촬영해 오시면 전문가의 손길로<br/> 당신의 추억을 영화로 만들어드립니다.</p>
          </div>
        </div>
        {/* <img src="/img/classLink/lounge.svg" alt="둘러보기 카테고리 이미지" />
        <span className='scorehvy'>전체 서비스</span> */}
      </Link>

      <Link to='/productIntro' className="category-link row">
        <div className='category-wrapper col s12'>
          <img className='col s3 initial-width' src="/img/classLink/editor.png" alt="둘러보기 카테고리 이미지" width='81' height='74'/>
          <div className="text-wrapper col s9">
            <p className='notoSans category-title'>편집자 등록</p>
            <p className='notoSans category-contents'>묨의 편집자로 등록해 다양한 활동과<br/> 수익을 만들어낼 수 있습니다.</p>
          </div>
        </div>
        {/* <img src="/img/classLink/편집자.jpg" alt="편집자 카테고리 이미지" />
        <span className='scorehvy'>편집자 등록</span> */}
      </Link>

      <Link to='/community/admin' className="category-link row">
        <div className='category-wrapper col s12'>
          <img className='col s3 initial-width' src="/img/classLink/lounge.png" alt="둘러보기 카테고리 이미지" width='81' height='74'/>
          <div className="text-wrapper col s9">
            <p className='notoSans category-title'>라운지</p>
            <p className='notoSans category-contents'>여행과 영상을 즐기는 사람들의 소식과<br/> 정보를 얻을 수 있습니다.</p>
          </div>
        </div>
        {/* <img src="/img/classLink/커뮤니티.jpg" alt="커뮤니티 카테고리 이미지" />
        <span className='scorehvy'>커뮤니티</span> */}
      </Link>
    </Swiper>
  )
}

export default CategorySlider;

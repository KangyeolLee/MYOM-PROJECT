// import React, { Component } from 'react';
// import { Link } from 'react-router-dom';
// import BestReviewsSummary from '../service/summary/BestReviewsSummary';

// class BestReviews extends Component {
//   render() {
//     const { bests } = this.props;
//     return (
//       <div className="BestReviews container">
//         <p className='center flow-text scorehvy'>베스트 후기모음</p>
//         <div className="row">
//           { bests && bests.map(item => {
//             return (
//               <Link to={`/thema/${item.category}/${item.id}`} key={item.src}>
//                 <BestReviewsSummary best={item} />
//               </Link>
//             )
//           })}
//         </div>
//       </div>
//     )
//   }
// }

// export default BestReviews;
// 19.09.27 이후 잠시 kill down

import React from 'react'
import { Link } from 'react-router-dom';
import Swiper from 'react-id-swiper';
import './loungePreview.css';

const LoungePreview = () => {
  const params = {
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
    <div className="container loungePreview">
      <div className="row">
        <h5 className="notoSans col s12 dashboard-subtitle">
          라운지
          <Link to='/thema'><span style={{fontSize: '15px', fontWeight: '500', color: '#3b3b3b'}} className="moreBtn right notoSans">전체보기</span></Link>
        </h5>
      </div>
      <Swiper {...params}>
        <Link to='/thema' className="lounge-link row">
          <div className='lounge-wrapper col s12'>
            <span className="category-tag knowhow notoSans">촬영 노하우</span>
            <img className='responsive-img' src="/img/loungePreview/lounge-ex3.jpg" alt="라운지 프리뷰 이미지" />
            <div className="text-wrapper">
              <p className='notoSans lounge-title'>친구들과 함께 떠나는 액티비티 여행</p>
              <p className='notoSans lounge-contents'>활동적인 여행과 영상을 촬영하고 싶은 당신을 위한 액티비티 여행을 모아봤습니다. 더 자세한 내용은 없습니다만... 그냥 쭉 적어봅니다.</p>
            </div>
          </div>
        </Link>

        <Link to='/thema' className="lounge-link row">
          <div className='lounge-wrapper col s12'>
          <span className="category-tag traveltip notoSans">여행팁</span>
            <img className='responsive-img' src="/img/loungePreview/lounge-ex2.jpg" alt="라운지 프리뷰 이미지" />
            <div className="text-wrapper">
              <p className='notoSans lounge-title'>혼자 여행을 떠나고 싶으신가요?</p>
              <p className='notoSans lounge-contents'>활동적인 여행과 영상을 촬영하고 싶은 당신을 위한 액티비티 여행을 모아봤습니다. 더 자세한 내용은 없습니다만... 그냥 쭉 적어봅니다.</p>
            </div>
          </div>
        </Link>

        <Link to='/thema' className="lounge-link row">
          <div className='lounge-wrapper col s12'>
          <span className="category-tag knowhow notoSans">촬영 노하우</span>
            <img className='responsive-img' src="/img/loungePreview/lounge-ex1.jpg" alt="라운지 프리뷰 이미지" />
            <div className="text-wrapper">
              <p className='notoSans lounge-title'>기차타고 여행다니기</p>
              <p className='notoSans lounge-contents'>활동적인 여행과 영상을 촬영하고 싶은 당신을 위한 액티비티 여행을 모아봤습니다. 더 자세한 내용은 없습니다만... 그냥 쭉 적어봅니다.</p>
            </div>
          </div>
        </Link>
      </Swiper>
    </div>
  )
}

export default LoungePreview;

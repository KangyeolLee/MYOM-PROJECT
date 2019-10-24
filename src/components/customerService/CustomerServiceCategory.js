import React from 'react'
import Swiper from 'react-id-swiper';

const CustomerServiceCategory = () => {
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
      <div className='category forNotification center myomColor-background'>
        <i className="forNotification material-icons large white-text">notifications</i>
        <h4 className='forNotification scorelt white-text'>공지사항</h4>
      </div>

      <div className='category forQuestionAnswer center myomColor-background'>
        <i className="forQuestionAnswer material-icons large white-text">question_answer</i>
        <h4 className='forQuestionAnswer scorelt white-text'>FAQ</h4>
      </div>

      <div className='category forDescription center myomColor-background'>
        <i className="forDescription material-icons large white-text">description</i>
        <h4 className='forDescription scorelt white-text'>약관전문</h4>
      </div>
    </Swiper>
  )
}

export default CustomerServiceCategory;
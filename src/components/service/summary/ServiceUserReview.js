import React from 'react'

const ServiceUserReview = () => {
  return (
    <div className="service-userReview">
      <ul className="collection review">
        <li className="collection-item avatar">
          <img src="/img/categories/기타형.jpg" alt="" className="circle" />
          <span className="nickname col s12">닉네임 영역</span>
          <div className='rate col s4'> 
            {/* 별점노출 영역 */}                 
            <i className="material-icons">star</i>
            <i className="material-icons">star</i>
            <i className="material-icons">star</i>
            <i className="material-icons">star</i>
            <i className="material-icons">star_half</i>
          </div>
          <span className='date-time col s8'><i className="material-icons tiny grey-text">schedule</i>작성시간 영역</span>   
          <p className='col s12'>리뷰내용 영역</p>
        </li>
      </ul>
    </div>
  )
}

export default ServiceUserReview;
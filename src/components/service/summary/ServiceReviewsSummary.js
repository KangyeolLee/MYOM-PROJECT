import React from 'react';
import moment from 'moment';

const ServiceInquirySummary = ({review}) => {
  return (
    <pre className="collection-item avatar">
        <img alt ='' src={review.profile} className="circle review_profile"/>
        <div className='review_contents'>{ review.contents } <span className='grey-text'> by { review.userID }</span></div>
        <div className="review_record grey-text">작성시간: { moment(review.timestamp.toDate()).fromNow() }</div>
    </pre>
  )
}

export default ServiceInquirySummary;
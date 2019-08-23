import React from 'react';
import moment from 'moment';

const ServiceInquirySummary = ({inquiry}) => {
  if(inquiry.contents === '') {
    return (
      <li className="collection-item">
        <div className="inquiry_contents"> 작성된 문의가 없습니다. </div>
      </li>
    )
  } else {
    return (
      <li className="collection-item">
        <div className='inquiry_contents'>{ inquiry.contents } <span className='grey-text'> by { inquiry.userID }</span></div>
        <div className="inquiry_comments">판매자 답변: { inquiry.comments ? inquiry.comments : 0 }</div>
        <div className="inquiry_record grey-text">작성시간: { moment(inquiry.timestamp.toDate()).fromNow() }</div>
      </li>
    )
  }
}

export default ServiceInquirySummary;
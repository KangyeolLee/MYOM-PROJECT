import React from 'react';
import moment from 'moment';
import { connect } from 'react-redux';

const ServiceInquirySummary = ({review, profile}) => {
  return (
    <pre className="collection-item avatar">
        <img alt ='' src={profile.profileImgURL} className="circle review_profile"/>
        <div className='review_contents'>{ review.contents } <span className='grey-text'> by { review.userID }</span></div>
        <div className="review_record grey-text">작성시간: { moment(review.timestamp.toDate()).fromNow() }</div>
    </pre>
  )
}

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  }
}

export default connect(mapStateToProps)(ServiceInquirySummary);
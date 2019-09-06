import React, { Component, Fragment } from 'react';
import moment from 'moment';
import M from 'materialize-css';
import { connect } from 'react-redux';
import './serviceReviewsSummary.css';
import { _delete_review } from '../../../store/actions/serviceFormAction';
import ReviewsRegister from '../../serviceForm/ReviewsRegister';

class ServiceInquirySummary extends Component {
  state = {
    chk_update: false,
  }
  componentDidMount() {
    M.AutoInit();
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.state.chk_update !== prevState.chk_update) M.AutoInit();
  }

  updateSubmit = (e) => {
    e.preventDefault();

    if(this.state.chk_update) {
      this.setState({
        chk_update: false,
      })
    } else {
      this.setState({
        chk_update: true,
      })
    }
  }

  deleteSubmit = (e) => {
    e.preventDefault();
    const review_id = e.target.closest('ul').id
    this.props._delete_review(this.props.service_id, review_id)
  }

  render() {
    const { service_id, review, profile, auth } = this.props;
    const { chk_update } = this.state;
    
    return (
      <Fragment>
      {
        (chk_update)
          ? <ReviewsRegister _check_update={this.updateSubmit} serviceID={service_id} update_key={review.id} update_data={review.contents} />
          : (
            <pre className="collection-item avatar col s12 serviceReviewsSummary">
              <img alt ='' src={profile.profileImgURL} className="circle review_profile"/>
              <div className='review_contents'>{ review.contents } <span className='grey-text'> by { review.userID }</span></div>
              <div className="review_record grey-text">작성시간: { moment(review.timestamp.toDate()).fromNow() }</div>
              <button className='dropdown-trigger waves-effect z-depth-0 transparent btn-floating right' data-target={review.id}><i className='material-icons black-text'>more_vert</i></button>
            
              <ul id={review.id} className='dropdown-content'>
                {
                  (auth.isLoaded)
                    ? (auth.uid === review.uid) 
                      ? (
                        <Fragment>
                        <li><button onClick={this.updateSubmit} style={{display: 'flex'}} className='btn-flat'><i className='material-icons'>edit</i><span style={{marginLeft:'1rem'}}>수정</span></button></li>
                        <li><button onClick={this.deleteSubmit} style={{display: 'flex'}} className='btn-flat'><i className='material-icons'>delete</i><span style={{marginLeft:'1rem'}}>삭제</span></button></li>
                        </Fragment>
                      )
                      : (
                        <Fragment>
                        <li><button className="btn-flat" style={{display: 'flex'}}><i className="material-icons">flag</i><span style={{marginLeft:'1rem'}}>신고</span></button></li>
                        </Fragment>
                      )
                    : null
                }
              </ul>
            </pre>
          )
      }
      </Fragment>    
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
    auth: state.firebase.auth,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    _delete_review: (service_id, review_id) => dispatch(_delete_review(service_id, review_id)),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(ServiceInquirySummary);


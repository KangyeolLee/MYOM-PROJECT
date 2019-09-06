import React, { Component, Fragment } from 'react';
import moment from 'moment';
import M from 'materialize-css';
import { connect } from 'react-redux';
import './serviceInquirySummary.css';
import { _delete_inquiry } from '../../../store/actions/serviceFormAction';
import InquiryRegister from '../../serviceForm/InquiryRegister';

class ServiceInquirySummary extends Component {
  state = {
    chk_update : false,
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
    const inquiry_id = e.target.closest('ul').id;
    this.props._delete_inquiry(this.props.service_id, inquiry_id)
  }

  render() {
    const { service_id, inquiry, auth } = this.props;
    const { chk_update } = this.state;

    return (
      <Fragment>
      {
        (chk_update)
          ? <InquiryRegister _check_update={this.updateSubmit} serviceID={service_id} update_key={inquiry.id} update_data={inquiry.contents} />
          : (
            <pre className="collection-item col s12 serviceInquirySummary">
              <div className='inquiry_contents'>{ inquiry.contents } <span className='grey-text'> by { inquiry.userID }</span></div>
              <div className="inquiry_comments">판매자 답변: { inquiry.comments ? inquiry.comments : 0 }</div>
              <div className="inquiry_record grey-text">작성시간: { moment(inquiry.timestamp.toDate()).fromNow() }</div>
              <button className='dropdown-trigger waves-effect z-depth-0 transparent btn-floating right' data-target={inquiry.id}><i className='material-icons black-text'>more_vert</i></button>

              <ul id={inquiry.id} tabIndex='0' className='dropdown-content'>
                {
                  (auth.isLoaded)
                    ? (auth.uid === inquiry.uid) 
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
    auth: state.firebase.auth,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    _delete_inquiry: (service_id, inquiry_id) => dispatch(_delete_inquiry(service_id, inquiry_id)),
  }
}
export default connect(mapStateToProps,mapDispatchToProps)(ServiceInquirySummary);


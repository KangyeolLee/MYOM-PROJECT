import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { firestoreConnect } from 'react-redux-firebase';
import { inquiryRegister, _update_inquiry } from '../../store/actions/serviceFormAction';

class InquiryRegister extends Component {
  state = {
    inquiry_contents: '',
    [this.props.update_key] : this.props.update_data,
  }
  handleCancel = (e) => {
    e.preventDefault();
    this.setState({
      inquiry_contents: '',
    })
  }
  handleUpdate = (e) => {
    e.preventDefault();
    this.props._update_inquiry(this.props.serviceID, this.props.update_key, this.state[this.props.update_key]);
    this.props._check_update(e);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value,
    })
  }
  handleSubmit = (e) => {
    if(!this.props.auth.emailVerified) {
      alert('이메일 인증이 필요합니다!');        
      return e.preventDefault();
    }
    e.preventDefault();
    document.querySelector('#inquiry_contents').value = '';
    document.querySelector('#inquiry_contents_forLabel').className = '';
    this.props.inquiryRegister(this.props.serviceID, this.state);
    this.handleCancel(e);
  }
  render() {
    const { update_key, _check_update } = this.props;
    return (
      <Fragment>
      {
        (update_key)
          ? (
            <form onSubmit={this.handleUpdate} className='collection-item col s12'>
              <div className="input-field col s12">
                <i className="material-icons prefix">mode_edit</i>
                <textarea id={update_key} type='text' className="materialize-textarea" value={this.state[update_key]} onChange={this.handleChange} required></textarea>
                <label className='active' id='inquiry_contents_forLabel' htmlFor={update_key}>문의 수정</label>
                <button className="btn waves-effect red lighten-3 right">수정</button>
                {
                  (this.state[update_key]) ? <button onClick={_check_update} className="btn-flat waves-effect right">취소</button> : null
                }
              </div>
            </form>
          )
          : (
            <form onSubmit={this.handleSubmit} className="collection-item col s12">
              <div className="input-field col s12">
                <i className="material-icons prefix">mode_edit</i>
                <textarea id='inquiry_contents' type="text" className='materialize-textarea' value={this.state.inquiry_contents} onChange={this.handleChange} required/>
                <label id='inquiry_contents_forLabel' htmlFor="inquiry_contents">문의 등록</label>
                <button className="btn waves-effect red lighten-3 right">문의 등록</button>
                {
                  (this.state.inquiry_contents) ? <button onClick={this.handleCancel} className='btn-flat waves-effect right'>취소</button> : null
                }
              </div>
            </form>
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
const mapStateToDispatch = (dispatch) => {
  return {
    inquiryRegister: (docID, inquiryData) => dispatch(inquiryRegister(docID, inquiryData)),
    _update_inquiry: (service_id, inquiry_id, updating_data) => dispatch(_update_inquiry(service_id, inquiry_id, updating_data))
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(InquiryRegister);
  // firestoreConnect((props) => [
  //   { collection: 'services', doc: props.serviceID, subcollections: [{ collection: 'inquiry'}], storeAs: 'inquiry' }
  // ])

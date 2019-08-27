import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { firestoreConnect } from 'react-redux-firebase';
import { inquiryRegister } from '../../store/actions/serviceFormAction';

class InquiryRegister extends Component {
  state = {
    inquiry_contents: '',
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value,
    })
  }
  handleSubmit = (e) => {
    e.preventDefault();
    document.querySelector('#inquiry_contents').value = '';
    document.querySelector('#inquiry_contents_forLabel').className = '';
    this.props.inquiryRegister(this.props.serviceID, this.state);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="collection-item col s12">
        <div className="input-field col s12">
          <i className="material-icons prefix">mode_edit</i>
          <textarea id='inquiry_contents' type="text" className='materialize-textarea' onChange={this.handleChange} />
          <label id='inquiry_contents_forLabel' htmlFor="inquiry_contents">문의 등록</label>
          <button className="btn waves-effect red lighten-3 right">문의 등록</button>
        </div>
      </form>
    )
  }
}

const mapStateToDispatch = (dispatch) => {
  return {
    inquiryRegister: (docID, inquiryData) => dispatch(inquiryRegister(docID, inquiryData))
  }
}

export default connect(null, mapStateToDispatch)(InquiryRegister);
  // firestoreConnect((props) => [
  //   { collection: 'services', doc: props.serviceID, subcollections: [{ collection: 'inquiry'}], storeAs: 'inquiry' }
  // ])

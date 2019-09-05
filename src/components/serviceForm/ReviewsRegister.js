import React, { Component } from 'react'
import { connect } from 'react-redux';
// import { compose } from 'redux';
// import { firestoreConnect } from 'react-redux-firebase';
import { reviewsRegister } from '../../store/actions/serviceFormAction';

class ReviewsRegister extends Component {
  state = {
    reviews_contents: '',
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
    document.querySelector('#reviews_contents').value = '';
    document.querySelector('#reviews_contents_forLabel').className = '';
    this.props.reviewsRegister(this.props.serviceID, this.state);
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit} className="collection-item col s12">
        <div className="input-field col s12">
          <i className="material-icons prefix">mode_edit</i>
          <textarea id='reviews_contents' type="text" className='materialize-textarea' onChange={this.handleChange} />
          <label id='reviews_contents_forLabel' htmlFor="reviews_contents">리뷰 등록</label>
          <button className="btn waves-effect red lighten-3 right">리뷰 등록</button>
        </div>
      </form>
    )
  }
}
// const mapStateToProps = (state) => {
//   return {
//     // inquiry: state.firestore.ordered.inquiry,
//     auth: state.firebase.auth,
//   }
// }
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
  }
}
const mapStateToDispatch = (dispatch) => {
  return {
    reviewsRegister: (docID, reviewsData) => dispatch(reviewsRegister(docID, reviewsData))
  }
}

export default connect(mapStateToProps, mapStateToDispatch)(ReviewsRegister);
  // firestoreConnect((props) => [
  //   { collection: 'services', doc: props.serviceID, subcollections: [{ collection: 'inquiry'}], storeAs: 'inquiry' }
  // ])

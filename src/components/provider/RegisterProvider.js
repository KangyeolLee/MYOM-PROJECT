import React, { Component } from 'react'
import { connect } from 'react-redux';
import './registerProvider.css'

class RegisterProvider extends Component {
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(e);
  }
  handleChange = (e) => {
    console.log(e);
  }
  render() {
    const { profile } = this.props;
    return (
     <div className="container registerProvider">
      <form action="#!">
        <div className='card'>
          <div className="card-content">
            <span className="card-title">
              <img src={profile.profileImgURL} width='60px' height='60px' className='circle'/>
            </span>
              <div className="input-field">
                <textarea id="introduction" cols="30" rows="10"></textarea>
              </div>
            
          </div>
          <div className="card-action">
            <div className="input-field nextBtn">
              <button className="btn indigo">다음</button>
            </div>
          </div>
        </div>
       </form>
     </div>
    )
  }
}

const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  }
}
export default connect(mapStateToProps)(RegisterProvider);
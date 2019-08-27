import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authAction';
import { Redirect } from 'react-router-dom';

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: ''
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signUp(this.state);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }
  render() {
    const { auth, authError } = this.props;
    if(auth.uid) return <Redirect to='/' />
    return (
      <div className="container">
        <form onSubmit={this.handleSubmit} className='white'>
          <h5 className="grey-text text-darken-3">회원가입</h5>
          <div className="input-field">
            <label htmlFor="email">아이디</label>
            <input type="email" id='email' onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="password">비밀번호</label>
            <input type="password" id="password" onChange={this.handleChange} />
          </div>
          <div className="input-field">
            <label htmlFor="lastName">성</label>
            <input type="text" id="lastName" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <label htmlFor="firstName">이름</label>
            <input type="text" id="firstName" onChange={this.handleChange}/>
          </div>
          <div className="input-field">
            <button className="btn pink lighten-1">등록</button>
            <div className="red-text center">{ authError ? <p>{authError}</p> : null }</div>
          </div>
        </form>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    authError: state.auth.authError
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
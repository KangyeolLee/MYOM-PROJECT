import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signIn } from '../../store/actions/authAction';
import { Redirect, Link } from 'react-router-dom';
import './signin.css';

class SignIn extends Component {
  state = {
    email: '',
    password: ''
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    });
  }
  handleSubmit = (e) => {
    e.preventDefault();
    this.props.signIn(this.state);
  }
  render() {
    const { authError, auth } = this.props;
    if(auth.uid) return <Redirect to='/' />

    return (
      <div className="container signin">
        <div className="card">
          <div className="card-image">
            <img src="img/logo/myom_logo.png" alt=''/>
          </div>
          <div className="card-content">
            <span className="card-title scorehvy center">로그인</span>
            <form onSubmit={this.handleSubmit} className='white'>
              <div className="input-field">
                <label htmlFor="email">아이디</label>
                <input type="email" id='email' onChange={this.handleChange} />
              </div>
              <div className="input-field">
                <label htmlFor="password">비밀번호</label>
                <input type="password" id='password' onChange={this.handleChange} />
              </div>
              <div className="input-field center">
                <div className="red-text center login-error">{ authError ? <p>{authError}</p> : null }</div>
                <button className="btn indigo lighten-1">로그인</button>
              </div>
              <div className="forgotidpwd center">
                <Link to='/forgotIdPwd'>아이디/비밀번호찾기</Link>
              </div>
            </form>
          </div>
        </div>
      </div>

    )
  }
}
const mapStateToProps = (state) => {
  return {
    authError: state.auth.authError,
    auth: state.firebase.auth
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signIn: (cred) => dispatch(signIn(cred))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignIn);
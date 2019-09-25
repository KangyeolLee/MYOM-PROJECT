import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authAction';
import { Redirect } from 'react-router-dom';
import './signup.css'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    firstName: '',
    lastName: '',
    condition_checked: false,
    privacy_checked: false,
    emailRecieve_checked: false,
  }
  handleSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    // this.props.signUp(this.state);
  }
  handleChange = (e) => {
    this.setState({
      [e.target.id] : e.target.value
    })
  }

  handleCheck = (e) => {
    this.setState({
      [e.target.id] : !this.state[e.target.id]
    })
  }

  render() {
    const { auth, authError } = this.props;
    if(auth.uid) return <Redirect to='/emailVerification' />
    return (
      <div className="container signup">
        <form onSubmit={this.handleSubmit} className='white' id="signUp_submit">
          <div className="card">
            <div className="card-content">
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
                <label htmlFor="password_chk">비밀번호 재확인</label>
                <input type="password" id='password_chk'/>
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
                <label htmlFor="birth" className='active'>생년월일</label>
                <input type="date" id='birth'/>
              </div>
            </div>
          </div>
          <div className="card terms">
            <div className="card-content">
              <p>
                <label htmlFor="condition_checked">
                  <input type="checkbox" id='condition_checked' onChange={this.handleCheck}/>
                  <span>MYOM 이용약관 동의 (필수)</span>
                </label>
              </p>
              <p>
                <label htmlFor="privacy_checked">
                  <input type="checkbox" id='privacy_checked' onChange={this.handleCheck} />
                  <span>개인정보 수집 및 이용에 대한 안내 (필수)</span>
                </label>
              </p>
              <p>
                <label htmlFor="emailRecieve_checked">
                  <input type="checkbox" id='emailRecieve_checked' onChange={this.handleCheck} />
                  <span>이벤트 등 프로모션 알림 메일 수신 (선택)</span>
                </label>
              </p>
              <div className="input-field">
                <button className="btn pink lighten-1">회원가입</button>
                <div className="red-text center">{authError ? <p>{authError}</p> : null}</div>
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
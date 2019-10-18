import React, { Component } from 'react'
import { connect } from 'react-redux';
import { signUp } from '../../store/actions/authAction';
import { Redirect } from 'react-router-dom';
import { condition, privacy} from './terms';
import M from 'materialize-css'
import './signup.css'

class SignUp extends Component {
  state = {
    email: '',
    password: '',
    password_chk: '',
    firstName: '',
    nickname: '',
    birth: '',
    condition_checked: false,
    privacy_checked: false,
    emailRecieve_checked: false,
  }
  
  componentDidMount(){
    const birthPicker = document.querySelectorAll('.datepicker');
    M.Datepicker.init(birthPicker, {
      yearRange: 100,
      i18n: {
        months: [
          '1월',
          '2월',
          '3월',
          '4월',
          '5월',
          '6월',
          '7월',
          '8월',
          '9월',
          '10월',
          '11월',
          '12월',
        ],
      cancel: '닫기',
      done: '선택',
      monthsShort : [
        '1월',
          '2월',
          '3월',
          '4월',
          '5월',
          '6월',
          '7월',
          '8월',
          '9월',
          '10월',
          '11월',
          '12월',
      ],
      weekdays: [
        '일요일',
        '월요일',
        '화요일',
        '수요일',
        '목요일',
        '금요일',
        '토요일'
      ],
      weekdaysShort:[
        '일요일',
        '월요일',
        '화요일',
        '수요일',
        '목요일',
        '금요일',
        '토요일'
      ]
    }})
  }
  
  handleSubmit = (e) => {
    e.preventDefault();
    let passRule = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z]).*$/;
    if(!passRule.test(this.state.password)){
      alert('비밀번호는 문자/숫자를 포함한 8~15자리 이내로 해주시기 바랍니다.')
      return;
    }
    else if(this.state.password !== this.state.password_chk)
      alert('비밀번호를 다시한번 확인해주세요.')
    else if(!(this.state.condition_checked && this.state.privacy_checked))
      alert('필수 동의사항을 확인해주시기 바랍니다.')
    else
      this.props.signUp(this.state);
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

  // passwordCheck = (e) => {
  //   let passRule = /^.*(?=^.{8,15}$)(?=.*\d)(?=.*[a-zA-Z])(?=.*[!@#$%^&+=]).*$/;
  //   if(!passRule.test(e.target.value))
  //     return alert('비밀번호는 특수문자/문자/숫자를 포함한 8~15자리 이내로 해주시기 바랍니다.');
  // }

  render() {
    const { auth, authError, nickNameError } = this.props;
    if(auth.uid) return <Redirect to='/emailVerification' />
    return (
      <div className="container signup">
        <form onSubmit={this.handleSubmit} id="signUp_submit">
          <div className="card">
            <div className="card-content">
              <h5 className="grey-text text-darken-3">회원가입</h5>
              <div className="input-field">
                <label htmlFor="email">아이디</label>
                <input type="email" id='email' onChange={this.handleChange} required/>
              </div>
              <div className="input-field">
                <label htmlFor="password">비밀번호(숫자/문자를 포함한 8~15자리)</label>
                <input type="password" id="password" onChange={this.handleChange} required/>
              </div>
              <div className="input-field">
                <label htmlFor="password_chk">비밀번호 재확인</label>
                <input type="password" id='password_chk' onChange={this.handleChange} required/>
              </div>
              <div className="input-field">
                <label htmlFor="firstName">이름</label>
                <input type="text" id="firstName" onChange={this.handleChange} required/>
              </div>
              <div className="input-field">
                <label className='active' htmlFor="nickname">닉네임</label>
                <input placeholder='8글자 이내로 만들어주세요' maxLength='8' type="text" id="nickname" onChange={this.handleChange} required/>
                <div className="red-text">{ nickNameError ? nickNameError : null }</div>
              </div>
              <div className="input-field">
                <label className='active' htmlFor="birth">생년월일</label>
                <input type="text" id='birth' onChange={this.handleChange} placeholder='950319' required/>
              </div>
              <div className="input-field">
                <label htmlFor="phoneNumber">휴대폰 번호(-을 빼고 입력해주세요.)</label>
                <input type="text" id="phoneNumber" onChange={this.handleChange} required/>
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
              <pre className='term'>
                { condition }
              </pre>
              <p>
                <label htmlFor="privacy_checked">
                  <input type="checkbox" id='privacy_checked' onChange={this.handleCheck} />
                  <span>개인정보 수집 및 이용에 대한 안내 (필수)</span>
                </label>
              </p>
              <pre className='term'>
                { privacy }
              </pre>
              <p>
                <label htmlFor="emailRecieve_checked">
                  <input type="checkbox" id='emailRecieve_checked' onChange={this.handleCheck} />
                  <span>이벤트 등 프로모션 알림 메일 수신 (선택)</span>
                </label>
              </p>
              <div className="input-field center signupBtn">
                <button className="btn indigo lighten-1">회원가입</button>
                <div style={{marginTop: '2rem'}} className="red-text center">{authError ? <p>{authError}</p> : null}</div>
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
    nickNameError: state.auth.nickNameError,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    signUp: (newUser) => dispatch(signUp(newUser))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(SignUp);
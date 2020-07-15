import React, { Component } from 'react'
import { connect } from 'react-redux'
import { withdrawal } from '../../store/actions/authAction'
import { Redirect } from 'react-router-dom'
import './profile.css'

class Withdrawal extends Component {
	state = {
		email: ''
	}
	handleChange= (e) => {
		this.setState({
			[e.target.id] : e.target.value
		});
	}
	handleSubmit = (e) => {
    e.preventDefault();
    if(window.confirm('정말 회원탈퇴 하시겠습니까? 이후 데이터는 복원 불가합니다.')) {
      this.props.withdrawal(this.state);
    } else {
      return;
    }
	}
	render(){
  const { auth } = this.props;

	if(!auth.uid) return <Redirect to ='/' />
	return(
		<div className="profile_details">
			<div className="row">
        <h5 className="col s12 sub-title">회원탈퇴</h5>
        <h6 className="col s12 reason-title">탈퇴사유</h6>
        <form onSubmit={this.handleSubmit} className="col s12">
          <p className="label-area">
            <label>
              <input name="withdrawal-menu" type="radio" className="with-gap" required/>
              <span>사용빈도가 낮아서</span>
            </label>
          </p>
          <p className="label-area">
            <label>
              <input name="withdrawal-menu" type="radio" className="with-gap" required/>
              <span>사이트가 마음에 들지 않아서</span>
            </label>
          </p>
          <p className="label-area">
            <label>
              <input name="withdrawal-menu" type="radio" className="with-gap" required/>
              <span>사이트 운영팀의 친절도가 불만족스러워서</span>
            </label>
          </p>
          <p className="label-area">
            <label>
              <input name="withdrawal-menu" type="radio" className="with-gap" required/>
              <span>개인정보 유출이 우려되어서</span>
            </label>
          </p>
          <p className="label-area">
            <label>
              <input name="withdrawal-menu" type="radio" className="with-gap" required/>
              <span>기타</span>
            </label>
          </p>

          <br/><br/>

          <p className="info-title">이메일 (아이디) 확인</p>
          <div className="input-field with-border">
            <input type="text" placeholder='가입한 이메일을 적어주세요' className="validate" id="email" onChange= { this.handleChange } required/>
          </div>
          <p className="helper-text red-text">회원탈퇴 시 모든 기록과 쿠폰이 소멸합니다.</p>

          <button className="btn waves-effect submit-btn">회원탈퇴</button>
        </form>

			</div>
		</div>
	)
}
}

const mapStateToProps = (state) => {
	return {
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		withdrawal: (user) => dispatch(withdrawal(user))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(Withdrawal);
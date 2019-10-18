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
		<div className="profile_deatails">
			<div className="row">
				<h5 className="col s12 scorehvy sub-title">회원탈퇴</h5>
				<div className="col s12">
					<div className="withdrawal white">
						<h6 className=''>탈퇴사유</h6>
						<div className="divider"></div>
						<div className="row">
							<form onSubmit = {this.handleSubmit}>
                <div className="input-field col s12">
                  <p>
                    <label>
                      <input className="with-gap" type="radio" name="withdrawal-menu" required/>
                      <span>사용빈도가 낮아서</span>
                    </label>
                  </p>
                  <p>
                    <label>
                      <input className="with-gap" type="radio" name="withdrawal-menu" required/>
                      <span>사이트가 마음에 들지 않아서</span>
                    </label>
                  </p>
                  <p>
                    <label>
                      <input className="with-gap" type="radio" name="withdrawal-menu" required/>
                      <span>사이트 운영팀의 친절도가 불만족스러워서</span>
                    </label>
                  </p>
                  <p>
                    <label>
                      <input className="with-gap" type="radio" name="withdrawal-menu" required/>
                      <span>개인정보 유출이 우려되어서</span>
                    </label>
                  </p>
                  <p>
                    <label>
                      <input className="with-gap" type="radio" name="withdrawal-menu" required/>
                      <span>기타</span>
                    </label>
                  </p>
                </div>
                
                <div className="col s12">
                  <h6 className=''>이메일 확인</h6>
                  <div style={{marginBottom: '1rem'}} className="divider"></div>
                </div>

							  <div className="input-field col s12">
                  <label className='active' htmlFor="email">이메일 주소</label>
									<input type="text" placeholder='가입한 이메일을 적어주세요' className="validate" id="email" onChange= { this.handleChange } required/>
                  <p style={{fontSize: '12px'}} className="guide-text red-text">회원탈퇴 시 모든 기록과 쿠폰이 소멸합니다.</p>

									<button className="btn myomColor-background right">회원탈퇴</button>

							  </div>
              </form>
						</div>
					</div>
				</div>
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
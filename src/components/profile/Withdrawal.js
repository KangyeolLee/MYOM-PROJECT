import React, { Component } from 'react'
import ProfileSideNav from './ProfileSideNav'
import { connect } from 'react-redux'
import { withdrawal } from '../../store/actions/authAction'
import { Redirect } from 'react-router-dom'
import './profile.css'
import authReducer from '../../store/reducers/authReducer';

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
		this.props.withdrawal(this.state);
	}
	render(){
	const { auth } = this.props;
	if(!auth.uid) return <Redirect to ='/' />
	return(
		<div className="container profile">
			<div className="row">
				<ProfileSideNav />
				<div className="col l8">
					<div className="withdrawal">
						<h6>탈퇴사유</h6>
						<div className="divider"></div>
						<div className="row">
							<div className="col l12">
								<form action="#">
									<p>
										<label>
											<input className="with-gap" type="radio" name="withdrawal-menu"/>
											<span>다른 계정이름으로 사용하기 위해서</span>
										</label>
									</p>
									<p>
										<label>
											<input className="with-gap" type="radio" name="withdrawal-menu"/>
											<span>사용빈도가 낮고, 개인정보 유출이 우려되서</span>
										</label>
									</p>
									<p>
										<label>
											<input className="with-gap" type="radio" name="withdrawal-menu"/>
											<span>사이트 이용시 장애가 많아서</span>
										</label>
									</p>
									<p>
										<label>
											<input className="with-gap" type="radio" name="withdrawal-menu"/>
											<span>서비스의 질에 대한 불만이 있어서</span>
										</label>
									</p>
									<p>
										<label>
											<input className="with-gap" type="radio" name="withdrawal-menu"/>
											<span>사이트 이용시 고객응대가 나빠서</span>
										</label>
									</p>
									<p>
										<label>
											<input className="with-gap" type="radio" name="withdrawal-menu"/>
											<span>기타 </span>
										</label>
									</p>
								</form>
							</div>
							<h6>이메일 확인</h6>
							<div className="divider"></div>
							<div className="input-field col l12">
								<form onSubmit = {this.handleSubmit}>
									<input type="text" className="validate" id="email" onChange= { this.handleChange } />
									<label htmlFor="email">이메일 주소</label>
									<div>* 무상으로 지급된 묨캐시는 탈퇴와 함께 자동 소멸됩니다.</div>
									<p>환불 가능한 묨캐시가 있을 경우, 고객센터를 통해 환불 받으실 수 있습니다.</p>
									<div className="input-field">
										<button className="btn btn-large indigo right">회원탈퇴</button>
									</div>
								</form>
							</div>
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
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './forgotIdPwd.css';
import './fonts.css'
import { resetPwdEmail } from '../../store/actions/authAction';

class ForgotIdPwd extends Component {
	state = {
		name : '',
		tel: '',
		email: ''
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id] : e.target.value
		});
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.resetPwdEmail(this.state)
	}
	render(){
		return(
			<div className="container forgotIdPwd">
				<div>
					<div className="card forgotId">
						<div className="card-content">
							<span className="card-title scorehvy"> 아이디 찾기</span>
							<form action="#">
								<div className="input-field">
									<label htmlFor="name"> 본명</label>
									<input type="text" id="name"/>
								</div>
								<div className="input-field">
									<label htmlFor="tel">휴대전화번호</label>
									<input type="number" id="tel" />
								</div>
								<div className="input-field">
									<button className="btn right">아이디 찾기</button>
								</div>
							</form>
							<br/>
						</div>
					</div>
					<div className="card forgotPwd">
						<div className="card-content">
							<span className="card-title scorehvy">비밀번호 찾기</span>
							<form onSubmit = {this.handleSubmit}>
								<div className="input-field">
									<label htmlFor="email">아이디 이메일 주소</label>
									<input type="email" id="email" onChange = {this.handleChange} />
								</div>
								<div className="input-field">
									<button className="btn right">비밀번호 찾기</button>
								</div>
							</form>
							<br/>
						</div>
					</div>
				</div>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		resetPwdEmail: (user) => dispatch(resetPwdEmail(user))
	}
}
export default connect(null, mapDispatchToProps)(ForgotIdPwd);

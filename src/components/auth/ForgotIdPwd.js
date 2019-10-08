import React, { Component } from 'react';
import { connect } from 'react-redux';
import './forgotIdPwd.css';
import './fonts.css'
import { resetPwdEmail, forgotEmail } from '../../store/actions/authAction';

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
		this.props.resetPwdEmail(this.state);
	}
	
	handleSubmit2 = (e) => {
		e.preventDefault();
		this.props.forgotEmail(this.state);
	}
	render(){
		return(
			<div className="container forgotIdPwd">
				<div className="card forgotId">
					<div className="card-content">
						<h5 className="scorehvy"> 아이디 찾기</h5>
						<form id='forgot_email' onSubmit={this.handleSubmit2}>
							<div className="input-field">
								<label htmlFor="name"> 본명</label>
								<input type="text" id="name" onChange={this.handleChange} />
							</div>
							<div className="input-field">
								<label htmlFor="tel">휴대전화번호</label>
								<input type="text" id="tel" onChange={this.handleChange}/>
							</div>
							<div className="input-field">
								<button className="btn right myomColor-background">아이디 찾기</button>
							</div>
						</form>

            <h5 className="scorehvy">비밀번호 찾기</h5>
            <form id='forgot_password' onSubmit = {this.handleSubmit}>
							<div className="input-field">
								<label htmlFor="email">아이디 이메일 주소</label>
								<input type="email" id="email" onChange = {this.handleChange} />
							</div>
							<div className="input-field">
								<button className="btn right myomColor-background">비밀번호 찾기</button>
							</div>
						</form>
						<br/>
					</div>
				</div>
					
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		resetPwdEmail: (user) => dispatch(resetPwdEmail(user)),
		forgotEmail: (userData) => dispatch(forgotEmail(userData)),
	}
}
export default connect(null, mapDispatchToProps)(ForgotIdPwd);

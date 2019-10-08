import React, { Component }from 'react'
import ProfileSideNav from './ProfileSideNav'
import './profile.css'
import { connect } from 'react-redux';
import { changePwd } from '../../store/actions/authAction'

class Changepwd extends Component{
	state = {
		oldpwd : '',
		newpwd: '',
		chknewpwd: ''
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id] : e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.changePwd(this.state, this.props.history);
	}

		render(){
		return(
			<div className="container profile_deatails">
				<div className="row">
					<ProfileSideNav />
					<div className="col l8">
						<form onSubmit = {this.handleSubmit} className="changepwd">
							<h6>비밀번호 변경하기</h6>
							<div className="divider"></div>
							<div className="row">
								<div className="input-field col l12">
									<input type="password" id="oldpwd" className="validate" onChange = {this.handleChange}/>
									<label htmlFor="oldpwd">현재 비밀번호</label>
								</div>
								<div className="input-field col l6">
									<input type="password" id="newpwd" className="validate" onChange = {this.handleChange}/>
									<label htmlFor="newpwd">변경할 비밀번호</label>
								</div>
								<div className="input-field col l6">
									<input type="password" id="chknewpwd" className="validate" onChange = {this.handleChange}/>
									<label htmlFor="chknewpwd">변경할 비밀번호 재입력</label>
								</div>
								<div className="input-field">
									<button className="btn right indigo">비밀번호 변경하기</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		auth: state.firebase.auth
	}
}
const mapDispatchToProps = (dispatch) => {
	return{
		changePwd: (pwdInfo, history) => dispatch(changePwd(pwdInfo, history))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(Changepwd);
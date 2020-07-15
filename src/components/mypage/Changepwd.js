import React, { Component }from 'react'
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
			<div className="profile_details">
				<div className="row">
          <h5 className="col s12 sub-title">비밀번호 변경</h5>
          <form onSubmit={this.handleSubmit} className="col s12">
            <p className="info-title">현재 비밀번호</p>
						<div className="input-field with-border">
              <input placeholder='사용하고 있는 비밀번호를 입력해주세요.' type="password" id="oldpwd" className="validate" onChange = {this.handleChange}/>
						</div>

            <p className="info-title">변경할 비밀번호</p>
						<div className="input-field with-border">
              <input placeholder='변경하실 비밀번호를 입력해주세요.' type="password" id="newpwd" className="validate" onChange = {this.handleChange}/>
						</div>

            <p className="info-title">변경할 비밀번호 재입력</p>
						<div className="input-field with-border">
						  <input placeholder='변경하실 비밀번호를 다시 한 번 입력해주세요.' type="password" id="chknewpwd" className="validate" onChange = {this.handleChange}/>
						</div>

            <button className="btn waves-effect submit-btn">수정완료</button>
          </form>
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
import React from 'react';
import { Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { sendEmailVerification} from '../../store/actions/authAction';
import './emailverification.css';

const EmailVerification = (props) => {
	const handleSubmit = (e) => {
		e.preventDefault();
		props.sendEmailVerification();
	} 
	const {auth} = props;
	if(auth.emailVerified) return <Redirect to='/' />
	
	return(
		<div className="container sendEmailVerification">
      <div className="row">
        <div className="card col s10 offset-s1">
          <div className="card-content">
            <span className="card-title">이메일 인증하기</span>
            <p>서비스 이용을 위하여 아래의 이메일 인증하기 버튼을 눌러 이메일 인증을 진행해주시기 바랍니다.</p>
          </div>
          <div className="card-action">
            <form onSubmit = {handleSubmit}>
              <button className="btn indigo">인증하기</button>
            </form>
          </div>
        </div>
      </div>
		</div>
	)
}
const mapStateToProps = (state) => {
	return{
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		sendEmailVerification: () => dispatch(sendEmailVerification())
	}
}

export default connect(mapStateToProps , mapDispatchToProps)(EmailVerification);
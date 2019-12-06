import React, { Component, Fragment } from 'react'
import './profile.css'
import M from 'materialize-css'
import { connect } from 'react-redux'
import { profileImgRegister } from '../../store/actions/authAction'
import { isLoaded } from 'react-redux-firebase';
import firebase from 'firebase/app';

class UserProfile extends Component {
	state = {
		profile_img: '',
		profile_img_preview: '',
	}
  componentDidMount() {
    M.AutoInit();
  }

	uploadFile = (e) => {
    if(!e.target.value) return;
		let reader = new FileReader();
		let file = e.target.files[0];
    let target_id = e.target.id;
    reader.readAsDataURL(file);

		reader.onloadend = () => {
			this.setState({
				[target_id] : file,
				[target_id + '_preview']: reader.result,
			})
		}
	}

	handleSubmit = (e) => {
    e.preventDefault();
    const profiles = [...document.querySelectorAll('#syncProfile')];

		if(this.state.profile_img){
      this.props.profileImgRegister(this.state, profiles);
		} else {
			alert('변경하실 프로필사진을 등록해주세요.');
		}
	}

	render(){
    if(!isLoaded(this.props.profile) || !isLoaded(this.props.auth)) return <div className='container'>로딩중...</div>  
    const { profile, auth } = this.props;

		return(
			<div className="profile_details">
				<div className="row">
					<h5 className="col s12 sub-title">나의정보</h5>
					<form className="col s12">
						<div className="image-area file-field input-field">
						{
							!(this.state.profile_img_preview)
								? (
									<Fragment>
									{
										(profile.profileImgURL === '/img/defaults/userProfile.jpeg')
											? <img src="/img/defaults/userProfile.jpeg" alt="유저 기본 프로필 이미지" width='140' height='140' className="circle user-profileImg"/>
											: <img src="/img/defaults/lazy-loading.png" data-src={firebase.storage().refFromURL(profile.profileImgURL).getDownloadURL().then(url => {
												const profile = document.getElementById('syncUserProfile');
												profile.src = url;
											})} width='140' height='140' className="circle user-profileImg" alt='유저 프로필 이미지' id='syncUserProfile' />
									}
									<div className='image-update-btn'>
										<i className="material-icons white-text">edit</i>
										<input type="file" id='profile_img' onChange={this.uploadFile} />
									</div>
									</Fragment>
								)
								: (
									<Fragment>
									<img src={this.state.profile_img_preview} width='140' height='140' className="circle user-profileImg" alt='변경될 유저 프로필 이미지' />
									<input type="file" id='profile_img' onChange={this.uploadFile} />
									</Fragment>
								)
						}
						</div>

						<p className="info-title">이메일 (아이디)</p>
						<div className="input-field with-border">
							<p className="info-content">{auth.email}</p>
						</div>

						<p className="info-title">닉네임</p>
						<div className="input-field with-border">
							<p className="info-content">{profile.initials}</p>
						</div>

						<p className="info-title">휴대전화</p>
						<div className="input-field with-border">
							<p className="info-content">{profile.phoneNumber}</p>
						</div>

						<p className="info-title">이메일 수신여부</p>
						<div className="input-field with-border">
							<p className="info-content">{profile.emailRecieve_checked === false ? '아니오' : '예'}</p>
						</div>

						<p className="info-title">이메일 인증여부</p>
						<div className="input-field with-border">
							<p className="info-content">{auth.emailVerified === false ? '아니오' : '예'}</p>							
						</div>

						<button className="btn waves-effect submit-btn">수정완료</button>
					</form>

				</div>
			</div>
		)
	}
}

// const mapStateToProps = (state, ownProps) => {
// 	const id = ownProps.match.params.id;
// 	const users = state.firestore.data.users;
// 	const user = users ? users[id] : id;
// 	return {
// 		profile : state.firebase.profile,
// 		users,
// 		id
// 	}
// }
const mapStateToProps = (state) => {
	return {
		profile : state.firebase.profile,
		auth : state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		profileImgRegister : (profileImg, profiles) => dispatch(profileImgRegister(profileImg, profiles))
	}
}

// export default compose(
// 	connect(mapStateToProps, mapDispatchToProps),
// 	firestoreConnect((props) => [{
// 		collection: 'users', doc: props.match.params.id
// 	}]))(UserProfile)

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
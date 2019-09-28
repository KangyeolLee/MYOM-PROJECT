import React, { Component, Fragment } from 'react'
import ProfileSideNav from './ProfileSideNav'
import './profile.css'
import { connect } from 'react-redux'
import { profileImgRegister } from '../../store/actions/authAction'
import { compose } from 'redux'
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase'

class UserProfile extends Component {
	state = {
		profile_img: '',
		profile_img_preview: '',
	}

	uploadFile = (e) => {
		let reader = new FileReader();
		let file = e.target.files[0];
		let target_id = e.target.id;

		reader.onloadend = () => {
			this.setState({
				[target_id] : file,
				[target_id + '_preview']: reader.result,
			})
		}

		if(file) {
			reader.readAsDataURL(file);
			e.target.value='';
		}
	}

	handleSubmit = (e) => {
		e.preventDefault();
		if(this.state.profile_img){
			this.props.profileImgRegister(this.state);
		} else {
			alert('변경하실 프로필사진을 등록해주세요.');
		}
	}

	render(){
		const { profile, auth, user } = this.props;
		console.log(this.props);
		return(
			<div className="container profile_deatails">
				<div className="row">
					<ProfileSideNav />
					<div className="col l8">
						<div className="my_profile">
							<h6>기본정보</h6>
							<div className="divider"></div>
							<form onSubmit={this.handleSubmit}>
							<div className="row">
								<div className="col l12">
									<div className="col l4">
										<div className="profile-img">
											<div className="file-field input-field">
												{
													!(this.state.profile_img_preview)
														? (
															<Fragment>
																<img src= {profile.profileImgURL} width='127px' height='127px' className="circle" />
																<button className="imgUpload_btn">
																	<span>이미지 변경하기</span>
																	<input type="file" id='profile_img' onChange={this.uploadFile}/>
																</button>
															</Fragment>
														)
														: (
															<Fragment>
																<img src= {this.state.profile_img_preview} width='127px' height='127px' className="circle" />
																<button className="imgUpload_btn">
																	<span>이미지 변경하기</span>
																	<input type="file" id='profile_img' onChange={this.uploadFile}/>
																</button>
															</Fragment>
														)
												}
												<input type="text" style={{display:'none'}} className='file-path'/>
											</div>
										</div>
									</div>
									<div className="input-field col l8">
										<input disabled value= {auth.email} id="my_email" type="text" />
										<label className='active' htmlFor="my_email">이메일</label>
									</div>
									<div className="input-field col l8">
										<input disabled value= {profile.initials} id="my_nickname" type="text" />
										<label className='active' htmlFor="my_nickname">닉네임</label>
									</div>
									<div className="input-field col right">
										<button className="btn indigo">수정하기</button>
									</div>
								</div>
							</div>
							</form>
						</div>
					</div>
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
		profileImgRegister : (profileImg) => dispatch(profileImgRegister(profileImg))
	}
}

// export default compose(
// 	connect(mapStateToProps, mapDispatchToProps),
// 	firestoreConnect((props) => [{
// 		collection: 'users', doc: props.match.params.id
// 	}]))(UserProfile)

export default connect(mapStateToProps, mapDispatchToProps)(UserProfile)
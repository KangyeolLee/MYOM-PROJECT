import React from 'react'
import ProfileSideNav from './ProfileSideNav'
import './profile.css'
import { connect } from 'react-redux'

const UserProfile = (props) => {
	const { profile } = props;
	return(
		<div className="container profile">
			<div className="row">
				<ProfileSideNav />
				<div className="col l8">
					<div className="my_profile">
						<h6>기본정보</h6>
						<div className="divider"></div>
						<div className="row">
							<div className="col l12">
								<div className="col l4">
									<div className="profile-img center">
										<img src="https://placeimg.com/127/127/any" alt="" className="circle responsive-img"/>
										<a href="#" className="btn waves-effect-waves-light white black-text">이미지 수정</a>
									</div>
								</div>
								<div className="input-field col l8">
									<input disabled value="chris0319@naver.com" id="my_email" type="text" />
									<label htmlFor="my_email">이메일</label>
								</div>
								<div className="input-field col l8">
									<input disabled value= {props.profile.initials} id="my_nickname" type="text" />
									<label htmlFor="my_nickname">닉네임</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

const mapStateToProps = (state) => {
	return {
		profile : state.firebase.profile
	}
}

export default connect(mapStateToProps)(UserProfile)
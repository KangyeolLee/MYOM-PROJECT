import React from 'react'
import ProfileSideNav from './ProfileSideNav'
import './profile.css'

const UserProfile = () => {
	return(
		<div className="container profile">
			<div className="row">
				<ProfileSideNav />
				<div className="col l8">
					<div className="my_profile">
						<h6>기본정보</h6>
						<div className="divider"></div>
						<div className="row">
							<div className="col l3">
								<div className="profile-img center">
									<img src="https://placeimg.com/127/127/any" alt="" className="circle responsive-img"/>
									<a href="#" className="btn waves-effect-waves-light white black-text">이미지 수정</a>
								</div>
							</div>
							<div className="col l5 push-l1">
								<div className="input-field">
									<input disabled value="chris0319@naver.com" id="disabled" type="text" className="validate"/>
									<label For="disabled">이메일</label>
								</div>
								<div className="input-field">
									<input disabled value="언틸번아웃 짱!" id="disabled_nick" type="text" className="validate"/>
									<label For="disabled_nick">닉네임</label>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default UserProfile
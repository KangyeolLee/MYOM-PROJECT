import React from 'react'
import { Link } from 'react-router-dom'
import './profile.css'

const ProfileSideNav = () => {
	return(
		<div className="col l4 profile-sidenav">
			<div className="collection with-header">
				<div className="collection-header"><h4>계정설정</h4></div>
				<Link to='/profile' className="collection-item black-text">나의정보</Link>
				<Link to='/certifications' className="collection-item black-text">인증정보</Link>
				<Link to='/alarmsetting' className="collection-item black-text">알림설정</Link>
				<Link to='/changepwd' className="collection-item black-text">비밀번호 변경</Link>
				<Link to='/withdrawal' className="collection-item black-text">회원탈퇴</Link>
			</div>
		</div>
	)
}

export default ProfileSideNav
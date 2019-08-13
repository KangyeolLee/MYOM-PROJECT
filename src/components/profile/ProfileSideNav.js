import React from 'react'
import { Link } from 'react-router-dom'
import './profile.css'

const ProfileSideNav = () => {
	return(
		<div className="col l4 profile-sidenav">
			<div className="collection with-header">
				<div className="collection-header"><h4>계정설정</h4></div>
				<Link to='/profile' className="collection-item">나의정보</Link>
				<Link to='/' className="collection-item">인증정보</Link>
				<Link to='/profile/alarmsetting' className="collection-item">알림설정</Link>
				<Link to='/' className="collection-item">비밀번호 변경</Link>
				<Link to='/' className="collection-item">회원탈퇴</Link>
			</div>
		</div>
	)
}

export default ProfileSideNav
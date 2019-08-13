import React from 'react'
import ProfileSideNav from './ProfileSideNav'
import './profile.css'

const UserProfile = () => {
	return(
		<div className="container profile">
			<div className="row">
				<ProfileSideNav />
				<div className="col l8">
					<div className="alarm-setting">
						<h6>알림설정</h6>
						<div className="divider"></div>
						<div className="row">
							<div className="col l6">
								<h6>맞춤견적</h6>
								<div>나와 관련된 의뢰인의 맞춤견적 요청 알림</div>
								<div>전문가의 견적 제안 도착 시 알림</div>
							</div>
							<div className="col l2">
								<h6>앱푸시</h6>
								<div className="switch">
									<input type="checkbox"/>
									<span className="lever"></span>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default AlarmSetting;
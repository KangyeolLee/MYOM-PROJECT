import React from 'react'
import ProfileSideNav from './ProfileSideNav'
import './profile.css'

const AlarmSetting = () => {
  return( 
    
		<div className="container profile_deatails">
			<div className="row">
				<ProfileSideNav />
				<div className="col l8">
					<div className="alarm-setting">
						<h6>알림설정</h6>
						<div className="divider"></div>
						<div className="row">
							<div className="col l12">
								<div className="col l6">
								<h6>맞춤견적</h6>
								<p>나와 관련된 의뢰인의 맞춤견적 요청 알림</p>
								<p>전문가의 견적 제안 도착 시 알림</p>
								</div>
								<div className="col l2">
									<h6>앱푸시</h6>
									<div className="switch alarm-onoff">
										<label className='col s12'>
											<input type="checkbox"/>
											<span className="lever"></span>
										</label>
										<label className='col s12'>
											<input type="checkbox"/>
											<span className="lever"></span>
										</label>
									</div>
								</div>
								<div className="col l2">
									<h6>SMS</h6>
									<div className="switch alarm-onoff">
										<label className='col s12'>
											<input type="checkbox"/>
											<span className="lever"></span>
										</label>
										<label className='col s12'>
											<input type="checkbox"/>
											<span className="lever"></span>
										</label>
									</div>
								</div>
								<div className="col l2">
									<h6>이메일</h6>
									<div className="switch alarm-onoff">
										<label className='col s12'>
											<input type="checkbox"/>
											<span className="lever"></span>
										</label>
										<label className='col s12'>
											<input type="checkbox"/>
											<span className="lever"></span>
										</label>
									</div>
								</div>
							</div>
							<div className="col l12">
								<div className="divider"></div>
								<div className="col l6">
									<h6>쿠폰 혜택</h6>
									<p>이벤트, 쿠폰 등의 할인 혜택 알림</p>
								</div>
								<div className="col l2">
									<h6>앱푸시</h6>
									<div className="switch alarm-onoff">
										<label>
											<input type="checkbox"/>
											<span className="lever"></span>
										</label>
									</div>
								</div>
								<div className="col l2">
									<h6>SMS</h6>
									<div className="switch alarm-onoff">
										<label>
											<input type="checkbox"/>
											<span className="lever"></span>
										</label>
									</div>
								</div>
								<div className="col l2">
									<h6>이메일</h6>
									<div className="switch alarm-onoff">
										<label>
											<input type="checkbox"/>
											<span className="lever"></span>
										</label>
									</div>
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
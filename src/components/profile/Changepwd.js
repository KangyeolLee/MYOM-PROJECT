import React from 'react'
import ProfileSideNav from './ProfileSideNav'
import './profile.css'

const Changepwd = () => {
	return(
		<div className="container profile">
			<div className="row">
				<ProfileSideNav />
				<div className="col l8">
					<div className="changepwd">
						<h6>비밀번호 변경하기</h6>
						<div className="divider"></div>
						<div className="row">
							<div className="input-field col l12">
								<input type="password" id="oldpwd" className="validate"/>
								<label for="oldpwd">현재 비밀번호</label>
							</div>
							<div className="input-field col l6">
								<input type="password" id="newpwd" className="validate"/>
								<label for="newpwd">변경할 비밀번호</label>
							</div>
							<div className="input-field col l6">
								<input type="password" id="chknewpwd" className="validate"/>
								<label for="chknewpwd">변경할 비밀번호 재입력</label>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Changepwd;
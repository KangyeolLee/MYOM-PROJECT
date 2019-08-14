import React from 'react'
import ProfileSideNav from './ProfileSideNav'
import './profile.css'

const Withdrawal = () => {
	return(
		<div className="container profile">
			<div className="row">
				<ProfileSideNav />
				<div className="col l8">
					<div className="withdrawal">
						<h6>탈퇴사유</h6>
						<div className="divider"></div>
						<div className="row">
							<div className="col l12">
								<form action="#">
									<p>
										<label>
											<input className="with-gap" type="radio" name="withdrawal-menu"/>
											<span>다른 계정이름으로 사용하기 위해서</span>
										</label>
									</p>
									<p>
										<label>
											<input className="with-gap" type="radio" name="withdrawal-menu"/>
											<span>사용빈도가 낮고, 개인정보 유출이 우려되서</span>
										</label>
									</p>
									<p>
										<label>
											<input className="with-gap" type="radio" name="withdrawal-menu"/>
											<span>사이트 이용시 장애가 많아서</span>
										</label>
									</p>
									<p>
										<label>
											<input className="with-gap" type="radio" name="withdrawal-menu"/>
											<span>서비스의 질에 대한 불만이 있어서</span>
										</label>
									</p>
									<p>
										<label>
											<input className="with-gap" type="radio" name="withdrawal-menu"/>
											<span>사이트 이용시 고객응대가 나빠서</span>
										</label>
									</p>
									<p>
										<label>
											<input className="with-gap" type="radio" name="withdrawal-menu"/>
											<span>기타 </span>
										</label>
									</p>
								</form>
							</div>
						</div>
						<h6>이메일 확인</h6>
						<div className="divider"></div>
						<div className="row">
							<div className="input-field col l10">
								<input type="text" className="validate" id="withdrawal_email"/>
								<label for="withdrawal_email">이메일 주소</label>
							</div>
						</div>
						<div>* 무상으로 지급된 묨캐시는 탈퇴와 함께 자동 소멸됩니다.</div>
						<p>환불 가능한 묨캐시가 있을 경우, 고객센터를 통해 환불 받으실 수 있습니다.</p>
					</div>
					<div className="withdrawal_button right">
						<button className="btn btn-large ">회원탈퇴</button>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Withdrawal
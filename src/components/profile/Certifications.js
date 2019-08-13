import React from 'react'
import ProfileSideNav from './ProfileSideNav'
import './profile.css'

const Certifications = () => {
	return(
		<div className="container profile">
			<div className="row">
				<ProfileSideNav />
				<div className="col l8">
					<div className="certifications">
						<div className="row">
							<h6>기본 인증(휴대폰)</h6>
							<div className="divider"></div>
							<div className="col l12">
								<div className="col l3 cert_phone">휴대폰 인증</div>
								<div className="input-field col l9">
									<input disabled value = "황제홍|01050506912" id="disabled" type="text" className="validate"/>
								</div>
							</div>
							<h6>전문가 인증</h6>
							<div className="divider"></div>
							<div className="col l12 pro_cert">
								<div className="col l6">
									<h6>구분 (사업자이실 경우 '기업'을 클릭하여 주시기 바랍니다.</h6>
									<div className="cert_group_radio">
										<p>
											<label>
												<input name="cert_group" type="radio" className="with-gap"/>
												<span>개인</span>
											</label>
										</p>
										<p>
											<label>
												<input name="cert_group" type="radio" className="with-gap"/>
												<span>기업</span>
											</label>
										</p>
									</div>
									<h6>실명</h6>
									<input disabled value="황제홍" type="text"/>
									<h6>주민등록번호</h6>
									<input disabled value="950319..." type="text"/>
									<div className="col l4 padding_zero">
										<h6>출금 은행</h6>
										<input disabled value="신한은행" type="text"/>
									</div>
									<div className="col l8">
										<h6>계좌번호</h6>
										<input disabled value="110-452..." type="text"/>
									</div>
								</div>
								<div className="col l6">
									<h6>서비스 판매시 '세금'관련 유의사항</h6>
								</div>
							</div>
							<div className="col l12 terms">
								<h6>약관 동의 및 서명</h6>
								<div className="divider"></div>
								<h6>묨 판매홍보 대행 약관</h6>
							</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	)
}

export default Certifications;
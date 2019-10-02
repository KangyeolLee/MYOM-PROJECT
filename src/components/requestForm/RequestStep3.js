import React, {Component } from 'react'

const RequestStep3 = (props) => {
	if(props.currentStep !== 3) return null;
	return(
		<div className="card-content">
			<h6>레퍼런스 영상이 있으신가요?</h6>
			<p>
				<label>
					<input type="checkbox" />
					<span>예</span>
				</label>
			</p>
			<p>
				<label>
					<input type="checkbox" />
					<span>아니요</span>
				</label>
			</p>
			<div className="divider white"></div>
			<h6>레퍼런스 영상이 있다면, 링크를 남겨주세요.</h6>
			<div className="input-field">
				<input type="text" id='referenceLink' onChange={props.handleChange} value={props.referenceLink}/>
			</div>
			<div className="divider"></div>
			<h6>영상의 사용 용도 및 목적을 알려주세요.</h6>
			<p>
				<label>
					<input type="checkbox" />
					<span>개인소장</span>
				</label>
			</p>
			<p>
				<label>
					<input type="checkbox" />
					<span>SNS 업로드</span>
				</label>
			</p>
			<p>
				<label>
					<input type="checkbox" />
					<span>홍보영상</span>
				</label>
			</p>
			<p>
				<label>
					<input type="checkbox" />
					<span>기타 :</span>
				</label>
			</p>
		</div>
	)
}

export default RequestStep3;
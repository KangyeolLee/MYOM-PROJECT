import React, {Component } from 'react'

const RequestStep4 = (props) => {
	if(props.currentStep !== 4) return null;
	return(
		<div className="card-content">
			<h6>어떤 편집 기법들이 들어가면 좋을까요?</h6>
			<p>
				<label>
					<input type="checkbox" />
					<span>모션그래픽</span>
				</label>
			</p>
			<p>
				<label>
					<input type="checkbox" />
					<span>색 보정</span>
				</label>
			</p>
			<p>
				<label>
					<input type="checkbox" />
					<span>밝기 조정</span>
				</label>
			</p>
			<p>
				<label>
					<input type="checkbox" />
					<span>더빙</span>
				</label>
			</p>
			<p>
				<label>
					<input type="checkbox" />
					<span>3D</span>
				</label>
			</p>
		</div>
	)
}

export default RequestStep4;
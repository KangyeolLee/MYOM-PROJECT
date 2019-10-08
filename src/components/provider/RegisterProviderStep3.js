import React from 'react'

const RegisterProviderStep3 = (props) => {
	if(props.currentStep !== 3) return null;
	return(
		<div className="card-content">
			<h6>포트폴리오</h6>
			<p>포트폴리오로 제출하실 작업물은 untilburnout@naver.com으로 보내주시거나 아래에 공유 문서함이나 유튜브 주소 등을 링크로 남겨주시기 바랍니다.</p>
			<div className="input-field">
				<input type="text" id='portfolio' onChange={props.handleChange} value={props.portfolio}/>
			</div>
		</div>
	)
}

export default RegisterProviderStep3;
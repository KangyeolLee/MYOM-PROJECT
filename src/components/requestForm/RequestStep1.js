import React from 'react'

const RequestStep1 = (props) => {
	if(props.currentStep !== 1) return null;
	return(
		<div className="card-content">
			<h6>여행은 어디로 다녀오셨나요?</h6>
			<div className="input-field">
				<input type="text" id='tripLocation' onChange={props.handleChange} value={props.tripLocation}/>
			</div>
		</div>
	)
}

export default RequestStep1;
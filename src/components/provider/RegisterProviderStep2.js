import React, {Component } from 'react'
import { removePropertiesDeep } from '@babel/types';

const RegisterProviderStep2 = (props) => {
	if(props.currentStep !== 2) return null;
	return(
		<div className="registerEditorSecond">
			<div className="card">
				<div className="card-content">
					<div className="input-field">
						<input type="text" className='_required' id='career_year' onChange={props.handleChange} value={props.career_year}/>
						<label htmlFor="career_year" className="active">편집경력</label>
						{ props.need && !props.career_year ? <span className='red-text'><i className='material-icons'>error</i>필수로 작성해야 합니다!</span> : null }
					</div>
					<h6>작업이력</h6>
					<div className="input-field">
						<textarea className='_required' id="career" cols="30" rows="10" onChange={props.handleChange} value={props.career}></textarea>
						<label htmlFor="career" className='active'>작업이력</label>
						{ props.need && !props.career ? <span className='red-text'><i className='material-icons'>error</i>필수로 작성해야 합니다!</span> : null }
					</div>
				</div>
			</div>
		</div>
	)
}

export default RegisterProviderStep2;
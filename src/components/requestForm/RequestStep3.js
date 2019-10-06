import React, {Component } from 'react'
import RequestChkBox from './RequestChkBox'

const RequestStep3 = (props) => {
	if(props.currentStep !== 3) return null;
	return(
		<div className="card-content">
			<div id="hasReference">
				<h6>레퍼런스 영상이 있으신가요?</h6>
				{
					props.hasReference.map((element => {
						return(<RequestChkBox key={element.id} handleCheck = {props.handleCheck} {...element}/>)
					}))
				}
			</div>
			<div className="divider white"></div>
			<h6>레퍼런스 영상이 있다면, 링크를 남겨주세요.</h6>
			<div className="input-field">
				<input type="text" id='referenceLink' onChange={props.handleChange} value={props.referenceLink}/>
			</div>
			<div className="divider"></div>
			<div id="purpose">
				<h6>영상의 사용 용도 및 목적을 알려주세요.</h6>
				{
					props.purpose.map((element => {
						return(<RequestChkBox key={element.id} handleCheck = {props.handleCheck} {...element}/>)
					}))
				}
			</div>
		</div>
	)
}

export default RequestStep3;
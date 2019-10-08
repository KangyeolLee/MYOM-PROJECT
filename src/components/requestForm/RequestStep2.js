import React from 'react'
import RequestChkBox from './RequestChkBox'
const RequestStep2 = (props) => {
	if(props.currentStep !== 2) return null;
	return(
		<div className="card-content">
			<div id="editStyle">
				<h6>어떤 편집 스타일을 원하세요?</h6>
				{
					props.editStyle.map((editStyle => {
						return(<RequestChkBox key={editStyle.id} handleCheck = {props.handleCheck} {...editStyle}/>)
					}))
				}
			</div>
			<div className="divider"></div>
			<div id="editFeeling">
				<h6>어떤 느낌이면 좋을까요?</h6>
				{
					props.editFeeling.map((editFeeling => {
						return(<RequestChkBox key={editFeeling.id} handleCheck = {props.handleCheck} {...editFeeling} />)
					}))
				}
			</div>
		</div>
	)
}

export default RequestStep2;
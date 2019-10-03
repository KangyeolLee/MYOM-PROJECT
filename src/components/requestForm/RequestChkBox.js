import React from 'react';

const RequestChkBox = (props) => {
 	return(
		<p>
			<label>
				<input type="checkbox" onChange = {props.handleCheck} checked={props.isChecked} value={props.value}/>
				<span>{props.value}</span>
			</label>
		</p>
	)
}

export default  RequestChkBox;
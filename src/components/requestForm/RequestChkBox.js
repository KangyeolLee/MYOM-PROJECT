import React from 'react';

const RequestChkBox = (props) => {
 	return(
		<p className='col s3'>
			<label>
				<input className='filled-in' type="checkbox" onChange = {props.handleCheck} checked={props.isChecked} value={props.value}/>
				<span>{props.value}</span>
			</label>
		</p>
	)
}

export default  RequestChkBox;
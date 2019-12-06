import React from 'react';

const RequestRadioBox = (props) => {
 	return(
     <p className="col s3">
      <label >
        <input id={props.id} name={props.group} className='with-gap' type="radio" onChange={props.handleTrueOrFalse} checked={props.isChecked} value={props.value}/>
        <span>{props.value}</span>
      </label>
    </p>
	)
}

export default  RequestRadioBox;
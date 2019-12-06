import React, { Fragment } from 'react'
import RequestChkBox from './RequestChkBox'
import RequestRadioBox from './RequestRadioBox';

const RequestStep2 = (props) => {
  if(props.currentStep !== 2) return null;

  const preventEnter = (e) => {
    if(e.keyCode === 13) e.preventDefault();
  }

	return(
    <div className="step-wrapper row">
      <div className="col s12">
        <h6 className="request-title">레퍼런스 영상이 있으신가요?</h6>
        <div className="input-field col s12 radio-btns">
        {
          props.hasReference
            ? props.hasReference === 'on'
              ? (
                <Fragment>
                <RequestRadioBox group='group-refs' id="hasReference-on" value='예' isChecked='true' handleTrueOrFalse = {props.handleTrueOrFalse}/>
                <RequestRadioBox group='group-refs' id="hasReference-off" value='아니오' handleTrueOrFalse = {props.handleTrueOrFalse}/>
                </Fragment>
              )
              : (
                <Fragment>
                <RequestRadioBox group='group-refs' id="hasReference-on" value='예' handleTrueOrFalse = {props.handleTrueOrFalse}/>
                <RequestRadioBox group='group-refs' id="hasReference-off" value='아니오' isChecked='true' handleTrueOrFalse = {props.handleTrueOrFalse}/>
                </Fragment>
              )
            : (
              <Fragment>
              <RequestRadioBox group='group-refs' id="hasReference-on" value='예' handleTrueOrFalse = {props.handleTrueOrFalse}/>
              <RequestRadioBox group='group-refs' id="hasReference-off" value='아니오' handleTrueOrFalse = {props.handleTrueOrFalse}/>
              </Fragment>
            )
        }

        
        {/* {
          props.hasReference.map((element => {
            return(<RequestRadioBox key={element.id} group='group-refs' handleChange = {props.handleChange} {...element}/>)
          }))
        } */}
        </div>

        <h6 className="request-title">레퍼런스 영상이 있다면, 링크를 남겨주세요.</h6>
        <div className="input-field col s12">
          <input onKeyDown={(e) => preventEnter(e)} className='notoSans' type="text" id='referenceLink' placeholder='https://www.youtube.com/watch?v=e_w8hOouvAg' onChange={props.handleChange} value={props.referenceLink}/>
        </div>

        <h6 className="request-title">영상의 사용 용도 및 목적을 알려주세요.</h6>
        <div className="input-field col s12 radio-btns" id="purpose">
				{
					props.purpose.map((element => {
						return(<RequestChkBox key={element.id} handleCheck = {props.handleCheck} {...element}/>)
					}))
				}
        </div>
      </div>
    </div>
	)
}

export default RequestStep2;
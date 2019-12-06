import React from 'react'
import RequestChkBox from './RequestChkBox'

const RequestStep1 = (props) => {
  if(props.currentStep !== 1) return null;

  const preventEnter = (e) => {
    if(e.keyCode === 13) e.preventDefault();
  }

	return(
    <div className="step-wrapper row">
      <div className="col s12">
        <h6 className="request-title">여행은 어디로 다녀오셨나요?</h6>
        <div className="input-field col s12">
          <input onKeyDown={(e) => preventEnter(e)} className='notoSans' type="text" id='tripLocation' placeholder='스페인: 바르셀로나' onChange={props.handleChange} value={props.tripLocation}/>
        </div>

        <h6 className="request-title">어떤 편집 스타일을 원하세요?</h6>
        <div className="input-field col s12 radio-btns" id="editStyle">
        {
					props.editStyle.map((editStyle => {
						return(<RequestChkBox key={editStyle.id} handleCheck = {props.handleCheck} {...editStyle}/>)
					}))
				}
        </div>

        <h6 className="request-title">어떤 느낌이면 좋을까요?</h6>
        <div className="input-field col s12 radio-btns" id="editFeeling">
				{
					props.editFeeling.map((editFeeling => {
						return(<RequestChkBox key={editFeeling.id} handleCheck = {props.handleCheck} {...editFeeling} />)
					}))
				}
        </div>
      </div>

    </div>
	)
}

export default RequestStep1;
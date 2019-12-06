import React, { Fragment } from 'react';
import RequestChkBox from './RequestChkBox';
import RequestRadioBox from './RequestRadioBox';

const RequestStep3 = (props) => {
  if(props.currentStep !== 3) return null;
  
  const preventEnter = (e) => {
    if(e.keyCode === 13) e.preventDefault();
  }

	return(
    <div className="step-wrapper row">
      <div className="col s12">
        <h6 className="request-title">꼭 들어갔으면 하는 컷이 있나요?</h6>
        <div className="input-field col s12 radio-btns" id="essential_cut">
        {
          props.essential_cut
            ? props.essential_cut === 'on'
              ? (
                <Fragment>
                <RequestRadioBox group='group-cuts' id="essential_cut-on" value='예' isChecked='true' handleTrueOrFalse = {props.handleTrueOrFalse}/>
                <RequestRadioBox group='group-cuts' id="essential_cut-off" value='아니오' handleTrueOrFalse = {props.handleTrueOrFalse}/>
                </Fragment>
              )
              : (
                <Fragment>
                <RequestRadioBox group='group-cuts' id="essential_cut-on" value='예' handleTrueOrFalse = {props.handleTrueOrFalse}/>
                <RequestRadioBox group='group-cuts' id="essential_cut-off" value='아니오' isChecked='true' handleTrueOrFalse = {props.handleTrueOrFalse}/>
                </Fragment> 
              )
            : (
              <Fragment>
              <RequestRadioBox group='group-cuts' id="essential_cut-on" value='예' handleTrueOrFalse = {props.handleTrueOrFalse}/>
              <RequestRadioBox group='group-cuts' id="essential_cut-off" value='아니오' handleTrueOrFalse = {props.handleTrueOrFalse}/>
              </Fragment> 
            )
        }

				{/* {
					props.essential_cut.map((element => {
						return(<RequestRadioBox key={element.id} group='group-cuts' handleCheck = {props.handleCheck} {...element}/>)
					}))
				} */}
        <p className='col s12 grey-text'>'예'를 선택하신 경우 * / @ / # 과 같은 기호등으로 편집자님이 알아보기 쉽게끔 별도의 라벨링을해주세요</p>
        </div>

        <h6 className="request-title">생각해두신 영상순서가 있으신가요? (파일을 라벨링하여 전달해주세요)</h6>
        <div className="input-field col s12 radio-btns" id="edit_order">
				{
					props.edit_order.map((element => {
						return(<RequestChkBox key={element.id} handleCheck = {props.handleCheck} {...element}/>)
					}))
				}
        </div>

        <h6 className="request-title">어떤 음악을 원하세요?</h6>
        <div className="col s12 input-field radio-btns" id="musicFree">
        {
          props.musicFree 
            ? props.musicFree === 'on' 
              ? (
                <Fragment>
                <RequestRadioBox group='group-music' id="musicFree-on" value='무료음원' isChecked='true' handleTrueOrFalse = {props.handleTrueOrFalse}/>
                <RequestRadioBox group='group-music' id="musicFree-off" value='유료음원' handleTrueOrFalse = {props.handleTrueOrFalse}/>
                </Fragment>
              )
              : (
                <Fragment>
                <RequestRadioBox group='group-music' id="musicFree-on" value='무료음원' handleTrueOrFalse = {props.handleTrueOrFalse}/>
                <RequestRadioBox group='group-music' id="musicFree-off" value='유료음원' isChecked='true' handleTrueOrFalse = {props.handleTrueOrFalse}/>
                </Fragment>
              )
            : (
              <Fragment>
              <RequestRadioBox group='group-music' id="musicFree-on" value='무료음원' handleTrueOrFalse = {props.handleTrueOrFalse}/>
              <RequestRadioBox group='group-music' id="musicFree-off" value='유료음원' handleTrueOrFalse = {props.handleTrueOrFalse}/>
              </Fragment>
            )
        }

				{/* {
					props.musicFree.map((element => {
						return(<RequestRadioBox key={element.id} group='group-music' handleCheck = {props.handleCheck} {...element}/>)
					}))
				} */}
        </div>

        <h6 className="request-title">원하시는 음악이 있으시면 적어주세요.</h6>
        <div style={{marginBottom: '10px'}} className="input-field col s12">
          <input onKeyDown={(e) => preventEnter(e)} className='notoSans' type="text" id='wantMusic' placeholder='ex) 로꼬: 시간이 들겠지' onChange={props.handleChange} value={props.wantMusic}/>
        </div>
        <a href="/post/gzysBg7PWE0AvO7SHmnj" target='_blank' className='col s12 link-to-music'>원하시는 음악을 찾기 어려우실 경우 눌러주세요!</a>
      </div>
    </div>
	)
}

export default RequestStep3;
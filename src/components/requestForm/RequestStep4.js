import React from 'react'
import RequestChkBox from './RequestChkBox'

const RequestStep4 = (props) => {
	if(props.currentStep !== 4) return null;
	return(
		<div className="card-content">
			<div id="essential_cut">
				<h6>꼭 들어갔으면 하는 컷이 있나요?</h6>
				<span>예를 선택하신 경우 * 등으로 별도의 라벨링을해주세요</span>
				{
					props.essential_cut.map((element => {
						return(<RequestChkBox key={element.id} handleCheck = {props.handleCheck} {...element}/>)
					}))
				}
			</div>
			<div className="divider white"></div>
			<div id="edit_order">
				<h6>생각해두신 영상순서가 있으신가요? (파일을 라벨링하여 전달해주세요)</h6>
				{
					props.edit_order.map((element => {
						return(<RequestChkBox key={element.id} handleCheck = {props.handleCheck} {...element}/>)
					}))
				}
			</div>
			<div className="divider"></div>
			<div id="subtitle">
				<h6>영상에 자막이 얼마나 들어가면 좋을까요?</h6>
				{
					props.subtitle.map((element => {
						return(<RequestChkBox key={element.id} handleCheck = {props.handleCheck} {...element}/>)
					}))
				}
			</div>
			<div className="divider white"></div>
			<h6>원하시는 자막의 폰트가 있으면 적어주세요.</h6>
			<div className="input-field">
				<input type="text" id='subtitle_font' onChange={props.handleChange} value={props.subtitle_font}/>
			</div>
			<div className="divider"></div>
			<div id="musicFree">
				<h6>어떤음악을 원하세요?</h6>
				{
					props.musicFree.map((element => {
						return(<RequestChkBox key={element.id} handleCheck = {props.handleCheck} {...element}/>)
					}))
				}
			</div>
			<div className="divider white"></div>
			<h6>원하시는 음악이 있으시면 적어주세요.</h6>
			<div className="input-field">
				<input type="text" id='wantMusic' onChange={props.handleChange} value={props.wantMusic}/>
			</div>
			<a href="/post/z6HWFnBVBA8EJJQKIXdZ" target='_blank' className='myomColor'>원하시는 음악을 찾기 어려우실 경우 눌러주세요!</a>
		</div>
	)
}

export default RequestStep4;
import React, { Component } from 'react';
import './requestForm.css'
import RequestStep1 from './RequestStep1'
import RequestStep2 from './RequestStep2'
import RequestStep3 from './RequestStep3'
import RequestStep4 from './RequestStep4'
import RequestStep5 from './RequestStep5'

class RequestForm extends Component {
	state = {
		currentStep: 1,
		tripLocation: '',
		editStyle: [
			{id: 1, value: '시네마틱형', isChecked: false},
			{id: 2, value: '다이나믹형', isChecked: false},
			{id: 3, value: '예능형', isChecked: false},
			{id: 4, value: '다큐멘터리형', isChecked: false},
			{id: 5, value: '브이로그형', isChecked: false},
			{id: 6, value: '기타 :', isChecked: false},
		],
		editFeeling: [
			{id: 1, value: '감각적인', isChecked: false},
			{id: 2, value: '사실적인', isChecked: false},
			{id: 3, value: '서술적인', isChecked: false},
			{id: 4, value: '색감좋은', isChecked: false},
			{id: 5, value: '실험적인', isChecked: false},
			{id: 6, value: '이목끄는', isChecked: false},
			{id: 7, value: '트렌디한', isChecked: false},
			{id: 8, value: 'B급병맛', isChecked: false},
		],
		hasReference: [
			{id: 1, value: '레퍼런스 영상 있음', isChecked: false},
			{id: 2, value: '레퍼런스 영상 없음', isChecked: false},
		],
		referenceLink: '',
		purpose: [
			{id: 1, value: '개인소장', isChecked: false},
			{id: 2, value: 'SNS 업로드', isChecked: false},
			{id: 3, value: '홍보영상', isChecked: false},
			{id: 4, value: '기타 : ', isChecked: false},
		],
		musicFree: [
			{id: 1, value: '무료음원', isChecked: false},
			{id: 2, value: '유료음원', isChecked: false},
		],
		whatKindOfMusic: [
			{id: 1, value: '신나는', isChecked: false},
			{id: 2, value: '감성적인', isChecked: false},
			{id: 3, value: '몽환적인', isChecked: false},
			{id: 4, value: '트렌디한', isChecked: false},
		],
		wantMusic: '',
		editTechnique: [
			{id: 1, value: '모션그래픽', isChecked: false},
			{id: 2, value: '색 보정', isChecked: false},
			{id: 3, value: '밝기 조정', isChecked: false},
			{id: 4, value: '더빙', isChecked: false},
			{id: 5, value: '3D', isChecked: false},
		],
		subtitle: [
			{id: 1, value: '자막없이 해주세요.', isChecked: false},
			{id: 2, value: '오프닝과 엔딩, 장소별 이름정도', isChecked: false},
			{id: 3, value: '여행지의 정보는 들어갔으면 좋겠어요.', isChecked: false},
			{id: 4, value: '멘트들이 어느정도 자막화됐으면 좋을 것 같아요.', isChecked: false},
			{id: 5, value: '기타', isChecked: false},
		],
		subtitle_font: '',
		essential_cut: '',
		edit_order: [
			{id: 1, value: '시간의 흐름', isChecked: false},
			{id: 2, value: '색감 맞춰서', isChecked: false},
			{id: 3, value: '편집자님께 맡길게요.', isChecked: false},
		],
		etc_requests: '',
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id] : e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
	}

	handleCheck = (e) => {
		let chkElementName = e.target.closest('div').id;
		let checkElements = this.state[chkElementName];
		checkElements.forEach(chkElement => {
			if(chkElement.value === e.target.value)
				chkElement.isChecked = e.target.checked
		})
		this.setState({
			chkElementName : checkElements
		})
	}

	_submit = () => {
		// this.props.registerIntroduction(this.state);
		console.log(this.state);
	}
	_next = () => {
		const required_all = [...document.querySelectorAll('._required')];
		let current_required = required_all.filter(item => !(this.state[item.id]));
		if(current_required.length){
			this.setState({
				need: true,
			})
			return;
		}

		let currentStep = this.state.currentStep;
		currentStep = currentStep >= 4? 5 : currentStep +1 ;
		this.setState({
			currentStep,
			need: false,
		})
	}

	_prev = () => {
		let currentStep = this.state.currentStep;
		currentStep = currentStep <= 1? 1: currentStep -1;
		this.setState({
			currentStep,
		})
	}

	
	render(){ 
		return(
			<div className="requestForm container" >
				<div className="card">
					<div className="card card-image">
						<img src="/img/purple.jpg"/>
						<span className="card-title white-text">제작 요청서 ({this.state.currentStep}/5)</span>
					</div>
					<form onSubmit = { this.handleSubmit}>
						<RequestStep1
							currentStep = {this.state.currentStep}
							need = {this.state.need}
							tripLocation = {this.state.tripLocation}
							handleChange = {this.handleChange}/>

						<RequestStep2
							currentStep = {this.state.currentStep}
							need={this.state.need}
							handleChange = {this.handleChange}
							editStyle = {this.state.editStyle} 
							editFeeling = {this.state.editFeeling}
							handleCheck = {this.handleCheck}/>

						<RequestStep3
							currentStep = {this.state.currentStep}
							need={this.state.need}
							handleChange = {this.handleChange}
							handleCheck = {this.handleCheck}
							hasReference = {this.state.hasReference}
							referenceLink = {this.state.referenceLink} 
							purpose = {this.state.purpose} />		

						<RequestStep4
							currentStep = {this.state.currentStep}
							need={this.state.need}
							handleChange = {this.handleChange}
							handleCheck = {this.handleCheck}
							editTechnique = {this.state.editTechnique} />		

						<RequestStep5
							currentStep = {this.state.currentStep}
							need={this.state.need}
							handleChange = {this.handleChange}
							handleCheck = {this.handleCheck}
							musicFree = {this.state.musicFree}
							whatKindOfMusic = { this.state.whatKindOfMusic }
							wantMusic = {this.state.wantMusic}
							subtitle = {this.state.subtitle}
							subtitle_font = {this.state.subtitle_font} 
							essential_cut = { this.state.essential_cut }
							edit_order = {this.state.edit_order}
							etc_requests = {this.state.etc_requests} />											
						
						<div className="card-action">
							<div className="request-buttons">
								{this.state.currentStep < 5 ? <button onClick={this._next} className="btn indigo right">다음</button> : null }
								{ this.state.currentStep !== 1 ? <button onClick={this._prev} className="btn indigo left">이전</button> : null }
								{ this.state.currentStep == 5 &&
									<button onClick = {this._submit} className="btn indigo right">제출하기</button>}
							</div>
						</div>
					</form>
				</div>
			</div>
		)
	}
}

export default RequestForm;
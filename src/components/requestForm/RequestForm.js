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
		editStyle: '',
		editFeeling: '',
		hasReference: false,
		referenceLink: '',
		purpose: '',
		musicFree: '',
		whatKindOfMusic: '',
		wantMusic: '',
		editTechnique: '',
		subtitle: '',
		subtitle_font: '',
		essential_cut: '',
		edit_order: '',
		etc_requests: '',
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id] : e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		console.log(this.state);
	}

	handleCheck = (e) => {
		// let selected = [];
		// let editStyle = document.getElementById('editStyle');
		// let chks = editStyle.getElementsByClassName('edit_style');
		// chks.forEach((chk) => {
		// 	if(chk.checked){
		// 		selected.push(chk.value);
		// 	}
		// })
		// this.setState({
		// 	editStyle: selected.join(',')
		// })
		// let closestSpan = e.target.closest('span');
		// console.log(closestSpan);
		this.setState({
			[e.target.id] : e.target.checked
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
							hasReference = {this.state.hasReference}
							referenceLink = {this.state.referenceLink} 
							purpose = {this.state.purpose} />		

						<RequestStep4
							currentStep = {this.state.currentStep}
							need={this.state.need}
							handleChange = {this.handleChange}
							editTechnique = {this.state.editTechnique} />		

						<RequestStep5
							currentStep = {this.state.currentStep}
							need={this.state.need}
							handleChange = {this.handleChange}
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
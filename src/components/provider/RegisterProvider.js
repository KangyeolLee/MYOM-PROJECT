import React, {Component} from 'react'
import { connect } from 'react-redux'
import { compose } from 'redux'
import { firestoreConnect } from 'react-redux-firebase'
import RegisterProviderStep1 from './RegisterProviderStep1'
import RegisterProviderStep2 from './RegisterProviderStep2'
import RegisterProviderStep3 from './RegisterProviderStep3'
import './registerProvider.css'
import { registerIntroduction } from '../../store/actions/editorAction'
import { Button } from '@material-ui/core';

class RegisterProvider extends Component {
	state = {
		currentStep: 1,
		introduction: '',
		editor_profileImg_file: '',
		editor_profileImg_file_preview: '',
		career_year: '',
		career: '',
		portfolio: '',
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id] : e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
	}

	handleUpload = (e) => {
		e.preventDefault();
		let reader = new FileReader();
		let file = e.target.files[0];
		let target_id = e.target.id;

		reader.onloadend = () => {
			this.setState({
				[target_id]: file,
				[target_id + '_preview']: reader.result,
			})
		}

		if(file) {
			reader.readAsDataURL(file);
			e.target.value = '';
		}
	}
	deleteImage = (e) => {
		e.preventDefault();
		this.setState({
			[e.target.id]: '',
			[e.target.id + '_preview']: '',
		})
	}
	_submit = () => {
		this.props.registerIntroduction(this.state);
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
		currentStep = currentStep >= 2? 3 : currentStep +1 ;
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
		const { profile } = this.props;
		console.log(profile);
		return(
			<div className="registerProvider container" >
				<div className="card">
				<form onSubmit = { this.handleSubmit}>
					<RegisterProviderStep1 
						currentStep = {this.state.currentStep}
						need = {this.state.need}
						introduction = {this.state.introduction}
						handleChange = {this.handleChange}
						handleUpload = {this.handleUpload}
						deleteImage = {this.deleteImage}
						editor_profileImg_file={this.state.editor_profileImg_file}
						editor_profileImg_file_preview = {this.state.editor_profileImg_file_preview}/>
					<RegisterProviderStep2
						currentStep = {this.state.currentStep}
						need={this.state.need}
						handleChange = {this.handleChange}
						career = {this.state.career} 
						career_year = {this.state.career_year}/>
					<RegisterProviderStep3
						currentStep = {this.state.currentStep}
						need={this.state.need}
						handleChange = {this.handleChange}
						portfolio = {this.state.portfolio} />				
					<div className="card-action">
						<div className="register-buttons">
							{this.state.currentStep < 3 ? <button onClick={this._next} className="btn indigo right">다음</button> : null }
							{ this.state.currentStep !== 1 ? <button onClick={this._prev} className="btn indigo left">이전</button> : null }
							{ this.state.currentStep == 3 &&
								<button onClick = {this._submit} className="btn indigo right">제출하기</button>}
						</div>
					</div>
				</form>
				</div>
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		profile: state.firebase.profile,
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		registerIntroduction : (introData) => dispatch(registerIntroduction(introData))
	}
}
export default connect(mapStateToProps, mapDispatchToProps)(RegisterProvider);
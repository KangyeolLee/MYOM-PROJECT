import React, { Component } from 'react';
import './chatTextBox.css'
import { connect } from 'react-redux'
import { sendMessage } from '../../store/actions/chatAction'

class ChatTextBox extends Component {
	state = {
		sender: this.props.profile.initials,
		message: '',
		file: '',
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id] : e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		document.querySelector('#message').value = '';
		this.props.sendMessage(this.state, this.props.chatId);
	}

	enterSubmit = (e) => {
		if(e.which === 13 && !e.shiftKey){
			e.preventDefault();
			this.handleSubmit(e);
		}
	}

	handleUpload = (e) => {
		this.setState({
			[e.target.id] : e.target.files[0]
		})
	}
	render() {
		return(
			<div className="chat-text-box">
				<form onSubmit = {this.handleSubmit} id='chatForm'>
					<div className="input-field text-box">
						<label htmlFor="message"></label>
						<textarea id="message" col="1" row="50" onChange={this.handleChange} onKeyDown = {this.enterSubmit} placeholder="메시지를 입력해주세요."></textarea>
					</div>
					<div className="file-field input-field">
						<div className="btn myomColor-background fileBtn">
							<i className="material-icons">file_upload</i>
							<input type="file" id='file' onChange={this.handleUpload} />
						</div>
						{/* <div className="file-path-wrapper">
							<input type="text" className="file-path validate" />
						</div> */}
					</div>
					<div className="input-field">
						<button className="btn myomColor-background chat-send-btn">전송하기</button>
					</div>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		sendMessage: (chatData, chatId) => dispatch(sendMessage(chatData, chatId))
	}
}
export default connect(null, mapDispatchToProps)(ChatTextBox);
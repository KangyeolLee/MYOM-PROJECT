import React, { Component } from 'react';
import './chatTextBox.css'
import { connect } from 'react-redux'
import { sendMessage } from '../../store/actions/chatAction'

class ChatTextBox extends Component {
	state = {
		sender: this.props.profile.initials,
		message: '',
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
	render() {
		return(
			<div className="chat-text-box">
				<form onSubmit = {this.handleSubmit} id='chatForm'>
					<div className="input-field text-box">
						<label htmlFor="message"></label>
						<textarea id="message" col="1" row="50" onChange={this.handleChange} onKeyDown = {this.enterSubmit} placeholder="메시지를 입력해주세요."></textarea>
						<button className="btn chat-send-btn">전송하기</button>
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
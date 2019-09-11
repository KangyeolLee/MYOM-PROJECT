import React, { Component } from 'react';
import './chatTextBox.css'
import { connect } from 'react-redux'
import { sendMessage } from '../../store/actions/chatAction'

class ChatTextBox extends Component {
	state = {
		sender: this.props.profile.email,
		message: '',
		chatId: this.props.chatId,
	}

	handleChange = (e) => {
		this.setState({
			[e.target.id] : e.target.value
		})
	}

	handleSubmit = (e) => {
		e.preventDefault();
		this.props.sendMessage(this.state);
	}
	render() {
		const {chatId} = this.state;
		return(
			<div className="chat-text-box">
				<form onSubmit = {this.handleSubmit}>
					<div className="input-field">
						<label htmlFor="message"></label>
						<textarea id="message" className="materialize-textarea" onChange={this.handleChange}></textarea>
						<button className="btn chat-send-btn">전송하기</button>
					</div>
				</form>
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		sendMessage: (chatData) => dispatch(sendMessage(chatData))
	}
}
export default connect(null, mapDispatchToProps)(ChatTextBox);
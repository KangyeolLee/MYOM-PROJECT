import React, { Component } from 'react';
import './chatview.css'

class ChatViews extends Component {
	componentDidUpdate = () => {
		const container = document.getElementById('chatview-container');
		if(container)
			container.scrollTo(0, container.scrollHeight);
	}
	
	render(){
		const { chat, profile } = this.props;

		if(chat === undefined){
			return(
				<div id="chatview-container" className="chat-content"></div>
			)
		} else{
			return(
				<div id="chatview-container" className="chat-content">
					{
						chat.messages.map((_msg, _index) => {
							return(
								<div key={_index} className={_msg.sender === profile.email ? "user-sent" : "friend-sent" }>
									{_msg.message}
								</div>
							)
						})
					}
				</div>
			)
		}
	}
}

export default ChatViews;
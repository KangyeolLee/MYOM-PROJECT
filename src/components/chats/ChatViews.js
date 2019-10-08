import React, { Component, Fragment } from 'react';
import './chatview.css'
import moment from 'moment';

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
				<div id="chatview-container" className="chat-content default-content"><i className="material-icons">message</i> 메시지를 선택해주세요</div>
			)
		} else{
			return(
				<div id="chatview-container" className="chat-content">
					{
						chat.messages.map((_msg, _index) => {
							return(
								<blockquote key={_index} className={_msg.sender === profile.initials ? "user-sent-message " : "friend-sent-message" }>
										{
										
											(_index === chat.messages.length-1) && (_msg.sender === profile.initials) ?
											<Fragment>
												<p>{_msg.message}</p>
												<cite>{_msg.sender} {moment(_msg.sendAt.toDate()).fromNow()} {chat.receiverHasRead ? 
													<Fragment>읽음</Fragment> : <Fragment>안읽음</Fragment>}</cite>
											</Fragment>
											:
											<Fragment>
												<p>{_msg.message}</p>
												<cite>{_msg.sender} {moment(_msg.sendAt.toDate()).fromNow()}</cite>
											</Fragment>
										
										}
								</blockquote>
							)
						})
					}
				</div>
			)
		}
	}
}

export default ChatViews;

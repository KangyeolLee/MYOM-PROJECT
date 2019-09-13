import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { readMessage } from '../../store/actions/chatAction'
import './ChatLists.css'

class ChatLists extends Component {
	state = {
		receiverHasRead: ''
	}
	newChat = () => {
		console.log('new chat click');
	}
	selectChat = (index, type, chatId) => {
		this.props.selectChatFn(index, type, chatId);
	}
	selectUnread = (chatId) => {
		this.props.readMessage(chatId);
	}
	render(){
		const { chats, profile } = this.props;
		return(
			<Fragment>
				{ chats && chats.map((chat, index) => {
					return(
						<Fragment key={index}>
							<li className="collection-item avatar" onClick = {(e) => {
								const type = e.target.id;
								this.selectChat(index, type, chat.id); 
								if(chat.messages[chat.messages.length-1].sender !== profile.email && !chat.receiverHasRead) this.selectUnread(chat.id);
								}}
								selected={this.props.selectedChatIndex === index}>
								<div className="chat-profile">{chat.users.filter(_user => _user !== profile.email)[0].split('')[0]}</div>
								<div className="chatlist-message" id={this.props.chat_type}>{chat.messages[chat.messages.length -1].message.substring(0,30)}</div>
								{	(!chat.receiverHasRead && chat.messages[chat.messages.length-1].sender !== profile.email) ?
									<i className="material-icons unreadMark">markunread</i>
									: null
								}
							</li>
						</Fragment>
					)
				})}
			</Fragment>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		readMessage: (chatId) => dispatch(readMessage(chatId))
	}
}
export default connect(null, mapDispatchToProps)(ChatLists);
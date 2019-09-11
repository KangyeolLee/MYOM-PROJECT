import React, { Component, Fragment } from 'react';
import Avatar from '@material-ui/core/Avatar';
import ListItem from '@material-ui/core/ListItem';
import ListItemText from '@material-ui/core/ListItemText';
import ListItemAvatar from '@material-ui/core/ListItemAvatar';
import './ChatLists.css'

class ChatLists extends Component {

	newChat = () => {
		console.log('new chat click');
	}
	selectChat = (index, type, chatId) => {
		this.props.selectChatFn(index, type, chatId);
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
								}}
								selected={this.props.selectedChatIndex === index}>
								<div className="chat-profile">{chat.users.filter(_user => _user !== profile.email)[0].split('')[0]}</div>
								<div className="chatlist-message" id={this.props.chat_type}>{chat.messages[chat.messages.length -1].message.substring(0,30)}</div>
							</li>
						</Fragment>
					)
				})}
			</Fragment>
		)
	}
}

export default ChatLists;
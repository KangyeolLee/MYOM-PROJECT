import React, { Component, Fragment } from 'react';
import ChatLists from './ChatLists';
import './chatRoomList.css';
import { isEmpty } from 'react-redux-firebase'

class ChatRoomList extends Component {
	render(){
		const {profile, chats, chatInDeal} = this.props;
		console.log(this.props);
		return(
			<Fragment>
				<div className="chatRoomList" id='allChat'>
					<div className="row">
						<ChatLists chat_type="allChats" profile={profile} chats = {chats} selectChatFn = {this.props.selectChatFn} selectedChatIndex = {this.props.selectedChatIndex} selectUnreadMessage = {this.props.selectUnreadMessage} />
					</div>
				</div>
				<div className="chatRoomList" id="dealChat">
					<div className="row">
						<ChatLists chat_type = 'dealChats' profile={ profile } chats = {chatInDeal} newChatBtnFn = {this.props.newChatBtnFn} selectChatFn = {this.props.selectChatFn} selectedChatIndex = {this.props.selectedChatIndex} selectUnreadMessage = {this.props.selectUnreadMessage}></ChatLists>
					</div>
				</div>
			</Fragment>
		
		)
	}
}

export default ChatRoomList;
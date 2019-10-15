import React, { Component, Fragment } from 'react';
import ChatLists from './ChatLists';
import './chatRoomList.css';

class ChatRoomList extends Component {
	render(){
		const {profile, chats, chatInDeal} = this.props;
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
        <div className="chatRoomList" id="dealing">
					<div style={{display: 'flex', alignItems: 'center', height: '242.5px'}} className="row">
            <div className="col s12 center">베타버전에선 지원되지 않습니다. 추후 구현 예정입니다.</div>
					</div>
				</div>
        <div className="chatRoomList" id="completed">
					<div style={{display: 'flex', alignItems: 'center', height: '242.5px'}} className="row">
            <div className="col s12 center">베타버전에선 지원되지 않습니다. 추후 구현 예정입니다.</div>
					</div>
				</div>
			</Fragment>
		
		)
	}
}

export default ChatRoomList;
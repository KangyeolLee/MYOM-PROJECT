import React, { Component } from 'react'
import './chatSideNav.css'
import { Link } from 'react-router-dom'
import M from 'materialize-css'
import { statement } from '@babel/template';
import ChatLists from './ChatLists'


class ChatSideNav extends Component {
	// state = {
	// 	selectedChat: null,
	// 	newChatFormVisible: false,
	// }

	componentDidMount(){
		M.AutoInit();
	}

	// selectChat = (chatIndex) => {
	// 	console.log(chatIndex);
	// 	this.setState({
	// 		selectedChat: chatIndex
	// 	})
	// }

	// newChatBtnClicked = () => {
	// 	this.setState({
	// 		newChatFormVisible: true,
	// 		selectChat: null,
	// 	})
	// }
	render() {
		const {profile, chats, chatInDeal} = this.props;
		return(
			<div className="sidenavbars chats_sidenav">
				<ul id="slide-out" className="sidenav sidenav-fixed grey lighten-4">
					<li><div className="user-view">
						<div className="background">
							<img src="../img/theme/paris.jpg" />
						</div>
						<Link to='/profile'><img src={profile.profileImgURL} className="circle"/></Link>
						<span className="white-text name">{profile.initials}</span>
						<span className="white-text email">{profile.email}</span>
					</div></li>
					<ul className="collapsible">
						<li>
							<div className="collapsible-header"><i className="material-icons">message</i>거래중 메시지</div>
							<div className="collapsible-body">
								<ul className="collection">
									<ChatLists chat_type = 'dealChats' profile={ profile } chats = {chatInDeal} newChatBtnFn = {this.props.newChatBtnFn} selectChatFn = {this.props.selectChatFn} selectedChatIndex = {this.props.selectedChatIndex} selectUnreadMessage = {this.props.selectUnreadMessage}></ChatLists>
								</ul>
							</div>
						</li>
					</ul>
					<ul className="collapsible">
						<li className="active">
							<div className="collapsible-header"><i className="material-icons">message</i>전체 메시지</div>
							<div className="collapsible-body">
								<ul className="collection">
								<ChatLists chat_type="allChats" profile={ profile } chats = {chats} newChatBtnFn = {this.props.newChatBtnFn} selectChatFn = {this.props.selectChatFn} selectedChatIndex = {this.props.selectedChatIndex} selectUnreadMessage = {this.props.selectUnreadMessage}></ChatLists>		
								</ul>
							</div>
						</li>
					</ul>
				</ul>
				<a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
			</div>
		)
	}
}

export default ChatSideNav;
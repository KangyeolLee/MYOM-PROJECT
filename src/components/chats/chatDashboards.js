// import React, { Component } from 'react';
// import ChatList from './ChatList';
// import ChatView from './chatview/ChatView';
// import ChatTextBox from './chattextbox/ChatTextBox'

// const firebase = require("firebase");

// class chatDashboards extends Component {
// 	constructor(){
// 		super();
// 		this.state = {
// 			selectedChat: null,
// 			newChatFormVisible: false,
// 			email: null,
// 			chats: []
// 		};
// 	}

// 	newChatBtnClicked = () => {
// 		this.setState({
// 			newChatFormVisible: true,
// 			selectChat: null,
// 		})
// 	}

// 	componentDidMount = () => {
// 		firebase.auth().onAuthStateChanged(async _usr => {
// 			if(!_usr)
// 				this.props.history.push('/login');
// 			else {
// 				await firebase
// 					.firestore()
// 					.collection('chats')
// 					.where('users', 'array-contains', _usr.email)
// 					.onSnapshot(async res => {
// 						const chats = res.docs.map(_doc => _doc.data());
// 						await this.setState({
// 							email: _usr.email,
// 							chats: chats
// 						});
// 						console.log(this.state);
// 					})
// 			}
// 		})
// 	}

// 	selectChat = (chatIndex) => {
// 		this.setState({
// 			selectedChat: chatIndex
// 		})
// 	}
// 	render(){
// 		return(
// 			<div className="container chatDashboard">
// 				<ChatList history = {this.props.history} 
// 					newChatBtnFn = {this.newChatBtnClicked} 
// 					selectChatFn = {this.selectChat} 
// 					chats = {this.state.chats}
// 					userEmail={this.state.email}
// 					selectedChatIndex = {this.state.selectedChat} />
// 					{
// 						this.state.newChatFormVisible ?
// 						null :
// 						<ChatView
// 							user = { this.state.email}
// 							chat = { this.state.chats[this.state.selectedChat]}></ChatView>
// 					}
// 					<ChatTextBox></ChatTextBox>
// 			</div>
// 		)
// 	}
// }

// export default chatDashboards;
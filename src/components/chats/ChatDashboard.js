import React, { Component } from 'react'
import ChatSideNav from './ChatSideNav'
import M from 'materialize-css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect, isLoaded } from 'react-redux-firebase'
import { compose } from 'redux'
import Preloader from '../functionalComponents/Preloader';
import ChatViews from './ChatViews'
import './chatDashboard.css'


class ChatDashboard extends Component {
	state = {
		selectedChat: null,
		selectedType: null,
		newChatFormVisible: false,
		email: null,
		allChats: [],
		dealChats: []
	}
	
	newChatBtnClicked = () => {
		this.setState({
			newChatFormVisible: true,
			selectChat: null,
		})
	}
	
	selectChat = (chatIndex, chatType) => {
		console.log(chatIndex);
		this.setState({
			selectedChat: chatIndex,
			selectedType: chatType,
		})
	}
	componentDidMount(){
		M.AutoInit();
	}
	render(){
		const { chats, profile, match, chatInDeal } = this.props;
		const { selectedChat, selectedType } = this.state;
		return(
			<div className="chatDashboard">
				<ChatSideNav profile={profile} chats={chats} chatInDeal = {chatInDeal} newChatBtnFn = {this.newChatBtnClicked} selectChatFn = {this.selectChat} selectedChatIndex = {this.state.selectedChat} />
				<div className="chatsTemplate">
					<div className="chatMessages">
						{	
							!isLoaded(chats) && !isLoaded(chatInDeal)
								? <Preloader /> 
								:
								this.state.newChatFormVisible ?
								null :
								(this.state.selectedType == 'dealChats') ? 
									<ChatViews profile = { profile } chat = {chatInDeal[this.state.selectedChat]} />
									:
									<ChatViews profile = { profile } chat = {chats[this.state.selectedChat]} />
						}
					</div>
				</div>
			</div>

		)
	}
}

const mapStateToProps = (state) => {
	return{
		chats: state.firestore.ordered.chatAll,
		profile: state.firebase.profile,
		chatInDeal: state.firestore.ordered.chatInDeal,
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect((props) => {
		return [
			{ collection: 'chats', storeAs:'chatAll'},
			{ collection: 'chats', where: ['deal', '==', true], storeAs:'chatInDeal'}
		]
	}),
)(ChatDashboard);
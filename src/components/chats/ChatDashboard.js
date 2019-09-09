import React, { Component } from 'react'
import ChatSideNav from './ChatSideNav'
import M from 'materialize-css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect, isLoaded } from 'react-redux-firebase'
import { compose } from 'redux'
import Preloader from '../functionalComponents/Preloader';

class ChatDashboard extends Component {
	state = {
		selectedChat: null,
		newChatFormVisible: false,
		email: null,
	}
	componentDidMount(){
		M.AutoInit();
	}
	render(){
		const { chats, profile, match } = this.props;
		console.log(chats);
		return(
			<div className="chatDashboard">
				<ChatSideNav profile={profile} chats={chats}/>
			</div>

		)
	}
}

const mapStateToProps = (state) => {
	return{
		chats: state.firestore.ordered.chats,
		profile: state.firebase.profile
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect((props) => {
		return [{ collection: 'chats'}]
	}),
)(ChatDashboard);
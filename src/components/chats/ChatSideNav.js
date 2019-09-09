import React, { Component } from 'react'
import './chatSideNav.css'
import { Link } from 'react-router-dom'
import M from 'materialize-css'


class ChatSideNav extends Component {
	componentDidMount(){
		M.AutoInit();
	}
	render() {
		const {profile, chats} = this.props;
		return(
			<div className="sidenavbar chats_sidenav">
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
						<li className='active'>
							<div className="collapsible-header"><i className="material-icons">message</i>전체메시지</div>
							<div className="collapsible-body">
								<ul className="collection">
									<li className="collection-item avatar">
										<img src={profile.profileImgURL} className="circle"/>
										<p>asdfasdf</p>
									</li>
									<li className="collection-item">firstmessage</li>
									<li className="collection-item">firstmessage</li>
								</ul>
							</div>
						</li>
						<li>
							<div className="collapsible-header"><i className="material-icons">message</i>안읽은메시지</div>
							<div className="collapsible-body">
								<ul className="collection">
									<li className="collection-item">firstmessage</li>
									<li className="collection-item">firstmessage</li>
									<li className="collection-item">firstmessage</li>
								</ul>
							</div>
						</li>
						<li>
							<div className="collapsible-header"><i className="material-icons">message</i>거래중메시지</div>
							<div className="collapsible-body">
								<ul className="collection">
									<li className="collection-item">firstmessage</li>
									<li className="collection-item">firstmessage</li>
									<li className="collection-item">firstmessage</li>
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
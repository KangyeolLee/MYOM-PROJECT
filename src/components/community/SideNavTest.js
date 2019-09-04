import React, { Component } from 'react'
import './community.css'
import { Link } from 'react-router-dom'
import M from 'materialize-css'

class SideNavTest extends Component {
	componentDidMount(){
		M.AutoInit();
	}
	render() {
		const {profile} = this.props;
		return(
			<div className="sidenavbar">
				<ul id="slide-out" className="sidenav sidenav-fixed grey lighten-4">
					<li><div className="user-view">
						<div className="background">
							<img src="../img/theme/paris.jpg" />
						</div>
						<a href="#user"><img src={profile.profileImgURL} className="circle"/></a>
						<a href="#name"><span className="white-text name">{profile.initials}</span></a>
						<a href="#email"><span className="white-text email">{profile.email}</span></a>
					</div></li>
					<li><Link to='/community/admin'><i className="material-icons">cloud</i>Myom Tip!</Link></li>
					<li><Link to='/community/user'><i className="material-icons">cloud</i>User Tip!</Link></li>
					<li><Link to='/community/editor'><i className="material-icons">cloud</i>Editor Tip!</Link></li>
				</ul>
				<a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
			</div>
		)
	}
}

export default SideNavTest;
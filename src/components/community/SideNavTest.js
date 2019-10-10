import React, { Component } from 'react'
import './community.css'
import { Link, NavLink } from 'react-router-dom'
import M from 'materialize-css'

class SideNavTest extends Component {
	componentDidMount(){
		M.AutoInit();
	}
	render() {
		const {profile, auth} = this.props;
		return(
			<div className="sidenavbar">
				<ul id="slide-out" className="sidenav sidenav-fixed grey lighten-4">
					{
						auth.uid ? 
							<li><div className="user-view">
								{/* <Link to='/profile'><img src={profile.profileImgURL} className="circle notLogin_profile" alt='profile_img'/><p className='login_profile black-text'>프로필 관리</p></Link> */}
								{
									(profile.authority === 'editor')
									? <NavLink to='/mypageProvider/profile'><img src= {this.props.profile.profileImgURL} width="40px" height="40px" className="circle notLogin_profile" alt=""/><p className='login_profile black-text'>프로필 관리</p></NavLink>
									: <NavLink to='/mypageBuyer/profile'><img src= {this.props.profile.profileImgURL} width="40px" height="40px" className="circle notLogin_profile" alt=""/><p className='login_profile black-text'>프로필 관리</p></NavLink>
								}
							</div></li>
							:
							<li><div className="user-view">
								<Link to='/signin' className='white-text'><img src='https://firebasestorage.googleapis.com/v0/b/myom-89a5a.appspot.com/o/images%2Fusers%2FdefaultProfileImg%2FemptyProfileImg.png?alt=media&token=ad342b58-7306-4340-b8c1-6ad56351a7b6' alt='login-img' className="circle notLogin_profile"/><p className='notLogin_login black-text'>로그인</p></Link>
							</div></li>
					}
					<li><Link to='/community/admin'><i className="material-icons">cloud</i>Myom Tip!</Link></li>
					<li><Link to='/community/user'><i className="material-icons">cloud</i>사용자 Tip!</Link></li>
					<li><Link to='/community/editor'><i className="material-icons">cloud</i>편집자 Tip!</Link></li>
				</ul>
				<a href="#" data-target="slide-out" className="sidenav-trigger"><i className="material-icons">menu</i></a>
			</div>
		)
	}
}

export default SideNavTest;
import React from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLink';
import { connect } from 'react-redux';
import './navbar.css';

const Navbar = (props) => {
  console.log(props);
  const { auth, profile} = props;
  const links = auth.uid ? <SignedInLinks profile={profile} /> : <SignedOutLinks />;

	return (
    <div className="navbar-fixed">
      <nav className='z-depth-0'>
        <div className="nav-wrapper grey lighten-4">
          <div className="container">
            <Link to='/' className='brand-logo'><img src="/img/logo/myom_logo6.png" width="80px" height="80px" className="myom_logo" /></Link>
            {links}
          </div>
        </div>
      </nav>
    </div>
	)
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}
export default connect(mapStateToProps)(Navbar);
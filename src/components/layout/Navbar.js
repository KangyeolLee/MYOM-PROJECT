import React, {Fragment} from 'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks';
import SignedOutLinks from './SignedOutLink';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import './navbar.css';
import Loader from '../functionalComponents/Loader';

const Navbar = (props) => {
  const { auth, profile} = props;
  const links = auth.uid ? <SignedInLinks profile={profile} auth={ auth }/> : <SignedOutLinks />;

	return (
    <Fragment>
      <div className="navbar-fixed">
        <nav className='z-depth-0'>
          <div className="nav-wrapper">
            
              <Link to='/' className='brand-logo'><img src="/img/logo/myom_logo13.png" width="120px" height="35px" className="myom_logo" /></Link>
              {
                !isLoaded(auth)
                  ? <Loader />
                  : isEmpty(auth)
                    ? <SignedOutLinks />
                    : <SignedInLinks profile={profile} auth = {auth} />
              }
            
          </div>
        </nav>
      </div>
    </Fragment>

	)
}
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}
export default connect(mapStateToProps)(Navbar);
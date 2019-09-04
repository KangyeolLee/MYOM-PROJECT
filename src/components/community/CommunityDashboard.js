import React, { Component } from 'react'
import CommunitySideNav from './CommunitySideNav'
import SideNavTest from './SideNavTest'
import PostList from './PostList'
import M from 'materialize-css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import './community.css'

class CommunityDashboard extends Component {
	componentDidMount(){
		M.AutoInit();
	}
	render(){
		const { posts, profile, match } = this.props;
		console.log(this.props);
		return(
			<div className="communityDashboard">
				<SideNavTest profile={profile}/>
				<div className="communityTemplate">
					<div className="contents">
						<PostList posts= {posts}/>
					</div>
				</div>
				<div className="fixed-action-btn">
					<Link to={`${match.url}`+'/createPost'} className="btn-floating btn-large indigo">
						<i className="large material-icons">mode_edit</i>
					</Link>
				</div>
			</div>

		)
	}
}

const mapStateToProps = (state) => {
	console.log(state);
	return{
		posts: state.firestore.ordered.posts,
		profile: state.firebase.profile
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect((props) => {
		console.log('in firestore : ', props);
		return [{ collection: 'posts', where: ['category', '==', props.match.params.category ], orderBy: ['createAt','desc'] }]
	}),
)(CommunityDashboard);
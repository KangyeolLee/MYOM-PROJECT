import React, { Component } from 'react'
import CommunitySideNav from './CommunitySideNav'
import PostList from './PostList'
import M from 'materialize-css'
import {Link} from 'react-router-dom'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'

class CommunityDashboard extends Component {
	componentDidMount(){
		M.AutoInit();
	}
	render(){
		const { posts } = this.props;
		return(
			<div className="communityDashboard container">
				<CommunitySideNav />
				<div className="communityTemplate">
					<div className="contents">
						<PostList posts= {posts}/>
					</div>
				</div>
				<div className="fixed-action-btn">
					<Link to='/createPost' className="btn-floating btn-large indigo">
						<i className="large material-icons">mode_edit</i>
					</Link>
				</div>
			</div>

		)
	}
}

const mapStateToProps = (state) => {
	return{
		posts: state.firestore.ordered.posts
	}
}

export default compose(
	connect(mapStateToProps),firestoreConnect([
		{ collection: 'posts' }
	])
)(CommunityDashboard);
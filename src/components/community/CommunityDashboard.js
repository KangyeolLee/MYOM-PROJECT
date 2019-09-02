import React, { Component } from 'react'
import CommunitySideNav from './CommunitySideNav'
import PostList from './PostList'

class CommunityDashboard extends Component {
	render(){
		return(
			<div className="communityDashboard container">
				<CommunitySideNav />
				<div className="communityTemplate">
					<div className="contents">
						<PostList />
					</div>
				</div>
			</div>

		)
	}
}

export default CommunityDashboard;
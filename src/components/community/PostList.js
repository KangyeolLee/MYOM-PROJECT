import React from 'react'
import PostSummary from './PostSummary'
import { Link } from 'react-router-dom'

const PostList = () => {
	return(
		<div className="post-list">
			<PostSummary />
			<PostSummary />
			<PostSummary />
			<PostSummary />
			

		</div>
	)
}

export default PostList;
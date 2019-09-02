import React from 'react'
import PostSummary from './PostSummary'
import { Link } from 'react-router-dom'

const PostList = ({posts}) => {
	return(
		<div className="post-list">
			{ posts && posts.map(post => {
				return (
					<PostSummary post = { post } />
				)
			})}


		</div>
	)
}

export default PostList;
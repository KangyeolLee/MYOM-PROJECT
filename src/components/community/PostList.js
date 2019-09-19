import React, {Fragment} from 'react'
import PostSummary from './PostSummary'
import { Link } from 'react-router-dom'

const PostList = ({post, post_id}) => {
	return(
		<Fragment>
			{/* { posts && posts.map(post => {
				return ( */}
					<Link to = {'/post/' + post_id} >
						<PostSummary post = { post } />
					</Link>
				{/* )
			})} */}


		</Fragment>
	)
}

export default PostList;
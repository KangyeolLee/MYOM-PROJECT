import React from 'react'
import moment from 'moment'

const PostSummary = ({post}) => {
	return(
		<div className="card post_summary">
				<div className="card-image">
					<img src= {post.post_img}/>
					<a className="btn-floating halfway-fab btn-large white"><img src= {post.author_profileImg} className="circle profile_img" alt=""/></a>
				</div>
				<div className="card-content">
					<h6 className="card-title">{post.title}</h6>
					<p>{post.content}</p>
				</div>
				<div className="card-action">
					<p className="grey-text">{moment(post.createAt.toDate()).calendar()}</p>
				</div>
		</div>
	)
}

export default PostSummary
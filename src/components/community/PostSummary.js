import React from 'react'
import moment from 'moment'
import './fonts.css'

const PostSummary = ({post}) => {
	return(
		<div className="card post_summary">
				<div className="card-image">
					<img className='post_thumbnail' src= {post.post_img}/>
					<div className="btn-floating halfway-fab btn-large white"><img src= {post.author_profileImg} className="circle profile_img" alt=""/></div>
				</div>
				<div className="card-content">
					<p className="card-title black-text scorehvy">{post.title}</p>
					<p className="black-text black-gothic post-content">{post.content}</p>
				</div>
				<div className="card-action">
					{/* <p className="grey-text"> posted by {post.author}</p> */}
					<p className="grey-text">{moment(post.createAt.toDate()).calendar()}</p>
				</div>
		</div>
	)
}

export default PostSummary
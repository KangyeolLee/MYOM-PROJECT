import React from 'react'
import { connect } from 'react-redux'
import { firestoreConnect } from 'react-redux-firebase'
import { compose } from 'redux'
import { Redirect } from 'react-router-dom'
import moment from 'moment'
import './community.css'

const PostDetails = (props) => {
	const { post, auth } = props;
	if(post) {
		return(
			<div className="container section post-details">
				<div className="card z-depth-0">
					<div className="card-image">
						<img src={post.post_img} alt=""/>
					</div>
					<div className="card-content">
						<span className="card-title">{post.title}</span>
						<p>{post.content}</p>
					</div>
					<div className="card-action grey lighten-4 grey-text">
						<div>Posted by {post.author}</div>
						<div>{moment(post.createAt.toDate()).calendar()}</div>
					</div>
				</div>
			</div>
		)
	} else{
		return (
			<div className="container center">
				<p>게시글 로딩중...</p>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	const id = ownProps.match.params.id;
	const posts = state.firestore.data.posts;
	const post = posts? posts[id] : null
	return {
		post: post,
		auth: state.firebase.auth
	}
}

export default compose(
	connect(mapStateToProps),
	firestoreConnect([
		{ collection: 'posts'}
	])
)(PostDetails)
import React, { Component } from 'react'
import { connect } from 'react-redux'
import {compose} from 'redux'
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import Preloader from '../functionalComponents/Preloader';
import PostCommentSummary from './PostCommentSummary'

class PostComment extends Component {
	render(){
		const {comments, post_id} = this.props;
		return(
			<div>
			{
				!isLoaded(comments)
					? <Preloader />
					: isEmpty(comments)
						? <li className="collection-item"><div>아직 등록된 댓글이 없습니다.</div></li>
						: comments.map(item => <PostCommentSummary post_id={post_id} comment={item} key={item.id}/>)
			}
			</div>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		comments: state.firestore.ordered.comments
	}
}

export default compose(
	connect(mapStateToProps),
		firestoreConnect((props) => {
			return [
				{collection: 'posts', doc: props.post_id, subcollections: [{collection: 'comment', orderBy: ['timestamp','desc']}], storeAs: 'comments'}
			]
		}),
)(PostComment);
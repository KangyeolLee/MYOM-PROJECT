import React from 'react'
import PostCommentSummaryTest from './PostCommentSummaryTest';

const PostCommentTest = (props) => {
	return(
		<div>
			{	
				props.comment[0] 
				? props.comment.map((comment, index) => {
					if(comment.comment !== ''){
						return(
							<PostCommentSummaryTest post_id = {props.post_id} comment = {comment} key={index} index={index} />
						)
					}
				})
				: <li className="collection-item"><div>아직 등록된 댓글이 없습니다. </div></li>
			}
		</div>
	)
}

export default PostCommentTest;
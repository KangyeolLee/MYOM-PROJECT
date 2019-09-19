import React, { Component, Fragment } from 'react'
import moment from 'moment'
import {connect} from 'react-redux'
import M from 'materialize-css'
import CommentRegister from './CommentRegister'
import {_delete_comment, _report_badUser } from '../../store/actions/postAction'
import { stat } from 'fs';

class PostCommentSummaryTest extends Component {
	state = { 
		chk_update: false,
		index: this.props.index,
	}
	componentDidMount() {
		M.AutoInit();
	}
	componentDidUpdate(prevProps, prevState){
		if(this.state.chk_update !== prevState.chk_update) M.AutoInit();
	}
	updateSubmit = (e) => {
		e.preventDefault();
		if(this.state.chk_update) {
			this.setState({
				chk_update: false,
			})
		}
		else {
			this.setState({
				chk_update: true,
			})
		}
	}
	deleteSubmit = (e) => {
		e.preventDefault();
		this.props._delete_comment(this.props.post_id, this.props.comment);
	}
	render(){
		const { comment, post_id, index, auth } = this.props
		const { chk_update } = this.state;
		return(
			<Fragment>
			{	
				(chk_update)
					? <CommentRegister _check_update = {this.updateSubmit} postID = {post_id} update_key={index} update_data = { comment.comment} />
					: (
						<pre className="collection-item avatar postCommentSummary">
							<img src={comment.userProfile} className="circle comment-profile-img" alt=""/>
							<div className="comment_content">{ comment.comment} <span>by {comment.userID} </span></div>
							<div className="comment_record">작성시간: {moment(comment.timestamp.toDate()).fromNow() }</div>
							<button className="dropdown-trigger waves-effect z-depth-0 transparent btn-floating right" data-target={'comment' + index}><i className="material-icons black-text">more_vert</i></button>

							<ul id={'comment' + index} className='dropdown-content'>
								{
									(auth.isLoaded)
										? (auth.uid === comment.uid)
											? (
												<Fragment>
													<li><button className="btn-flat" onClick={this.updateSubmit} style={{display: 'flex'}}><i className='material-icons'>edit</i><span style={{marginLeft:'1rem'}}>수정</span></button></li>
													<li><button onClick={this.deleteSubmit} style={{display: 'flex'}} className='btn-flat'><i className='material-icons'>delete</i><span style={{marginLeft:'1rem'}}>삭제</span></button></li>
												</Fragment>
											)
											:	(
												<Fragment>
													<li><button onClick={this.report_badUser} className="btn-flat" style={{display: 'flex'}}><i className="material-icons">flag</i><span style={{marginLeft:'1rem'}}>신고</span></button></li>
												</Fragment>
											)
										: null
								}
							</ul>
						</pre>
					)
			}
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		profile: state.firebase.profile,
		auth: state.firebase.auth,
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		_delete_comment: (post_id, commentData) => dispatch(_delete_comment(post_id, commentData)),
		_report_badUser: () => dispatch(_report_badUser())
	}
}


export default connect(mapStateToProps, mapDispatchToProps)(PostCommentSummaryTest);
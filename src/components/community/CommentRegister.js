import React, { Component, Fragment } from 'react'
import { connect } from 'react-redux'
import { commentRegister, _update_comment } from '../../store/actions/postAction'

class CommentRegister extends Component{
	state = {
		comment: '',
		['comments'+this.props.update_key] : this.props.update_data
	}

	handleCancel = (e) => {
		e.preventDefault();
		const label = document.querySelector('#comment_forLabel');
		label.classList.remove('active');
		this.setState({
			comment: '',
		})
	}

	handleUpdate = (e) => {
		e.preventDefault();
		this.props._update_comment(this.props.postID, this.props.update_key, this.state['comments' + this.props.update_key]);
		this.props._check_update(e);
	}
	handleChange = (e) => {
		this.setState({
			[e.target.id] : e.target.value,
		})
	}

	handleSubmit = (e) => {
		if(!this.props.auth.emailVerified){
			alert('이메일 인증이 필요합니다.');
			// this.props.history.push('/emailVerification')
			return e.preventDefault();
		}
		e.preventDefault();
		document.querySelector('#comment').value= '';
		document.querySelector('#comment_forLabel').className= '';
		this.props.commentRegister(this.props.postID, this.state);
		this.handleCancel(e);
	}
	render(){
		const { update_data, _check_update, update_key } = this.props;
		console.log(this.props);
		return(
			<Fragment>
			{
				(update_data)
					? (	
						<form onSubmit={this.handleUpdate} className="collection-item comment_form">
							<div className="input-field">
								<i className="material-icons prefix">mode_edit</i>
								<textarea type="text" id= {'comments' + update_key} className="materialize-textarea" onChange = {this.handleChange} value={this.state['comments'+this.props.update_key]} required/>
								<label htmlFor={'comments' + update_key} className="active" id="comment_forLabel">댓글수정</label>
								<button className="btn waves-effect indigo right">수정 </button>								
								{
									(this.state['comments'+this.props.update_key]) ? <button onClick = {_check_update} className="btn-flat waves-effect right">취소</button> : null
								}
							</div>
						</form>
					) 
					: (
						<form onSubmit = {this.handleSubmit} className="collection-item comment_form">
							<div className="input-field">
								<i className="material-icons prefix">mode_edit</i>
								<textarea type="text" id="comment" className="materialize-textarea" onChange = {this.handleChange} value={this.state.comment} required/>
								<label htmlFor="comment" id="comment_forLabel">댓글</label>							
								{
									(this.state.comment) 
									? (
										<Fragment>
											<button className="btn waves-effect indigo right">댓글 등록</button>
											<button onClick = {this.handleCancel} className="btn-flat waves-effect right">취소</button> 
										</Fragment> 
									)
									: null
								}
							</div>
						</form>
					)
			}
			</Fragment>
		)
	}
}

const mapStateToProps = (state) => {
	return{
		auth: state.firebase.auth,
	}
}

const mapStateToDispatch = (dispatch) => {
	return{
		commentRegister: (docID, commentData) => dispatch(commentRegister(docID, commentData)),
		_update_comment: (post_id, comment_id, updating_data) => dispatch(_update_comment(post_id, comment_id, updating_data))
	}
}

export default connect(mapStateToProps, mapStateToDispatch)(CommentRegister)


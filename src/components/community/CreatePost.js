import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createPost, postUpdate } from '../../store/actions/postAction'

class CreatePost extends Component {
	state = {
		post_id: this.props.location.post_id || '',
		title: this.props.location.title ||'',
		content: this.props.location.content ||'',
		post_img: this.props.location.post_img ||'',
		check_update: this.props.location.check_update || false,
	}
	
	handleChange = (e) => {
		this.setState({
			[e.target.id] : e.target.value
		})
	}
	
	uploadFile = (e) => {
    this.setState({
      [e.target.id] : e.target.files[0]
    })
	}
	
	handleSubmit = (e) => {
		e.preventDefault();
		const check_btn_type = e.target.querySelector('button').name;
		if(check_btn_type === 'update_btn') {
			this.props.postUpdate(this.state, this.props.match.params.category, this.props.history)
		} else{
			this.props.createPost(this.state, this.props.match.params.category, this.props.history);
		}
	}

	render(){
		const { auth } = this.props;
		const {check_update} = this.state;
		if(!auth.uid) return <Link to ='/signin' />
		return(
			<div className="container">
				<form onSubmit={ this.handleSubmit }>
					<h5>새로운 포스팅 작성</h5>
					<div className="input-field">
						<label htmlFor="title">제목</label>
						<input type="text" id="title" onChange={this.handleChange} value= {this.state.title} />
					</div>
					<div className="input-field">
						<label htmlFor="content">포스트 내용</label>
						<textarea id="content" className="materialize-textarea" onChange = { this.handleChange } value={this.state.content}></textarea>
					</div>
					<div className="file-field input-field">
						<div className="btn indigo">
							<i className="material-icons">file_upload</i>
							<input type="file" id='post_img' onChange={this.uploadFile} required/>
						</div>
						<div className="file-path-wrapper">
							<input type="text" className="file-path validate" placeholder='이미지 파일을 업로드 하세요.'/>
						</div>
					</div>
					{
						check_update
							? (
							<div className="input-field">
								<button name='update_btn' className="btn indigo right">수정하기</button>
							</div>
						)
						: (
							<div className="input-field">
								<button name='create_btn' className="btn indigo right">작성하기</button>
							</div>
						)
					}
				</form>
			</div>
		)
	}
}

const mapStateToProps = (state, ownProps) => {
	return {
		auth: state.firebase.auth
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		createPost: (postData, category, history) => dispatch(createPost(postData,category, history)),
		postUpdate: (postData, category, history) => dispatch(postUpdate(postData,category,history))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)
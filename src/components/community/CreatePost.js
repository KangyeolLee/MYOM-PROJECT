import React, { Component } from 'react'
import { Link } from 'react-router-dom'
import { connect } from 'react-redux'
import { createPost } from '../../store/actions/postAction'

class CreatePost extends Component {
	state = {
		title: '',
		content: '',
		post_img: ''
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
		this.props.createPost(this.state, this.props.match.params.category);
	}

	render(){
		const { auth } = this.props;
		console.log(this.props);
		if(!auth.uid) return <Link to ='/signin' />
		return(
			<div className="container">
				<form onSubmit={ this.handleSubmit }>
					<h5>새로운 포스팅 작성</h5>
					<div className="input-field">
						<label htmlFor="title">제목</label>
						<input type="text" id="title" onChange={this.handleChange}/>
					</div>
					<div className="input-field">
						<label htmlFor="content">포스트 내용</label>
						<textarea id="content" className="materialize-textarea" onChange = { this.handleChange }></textarea>
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
					<div className="input-field">
						<button className="btn indigo right">작성하기</button>
					</div>
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
		createPost: (postData, category) => dispatch(createPost(postData,category))
	}
}

export default connect(mapStateToProps, mapDispatchToProps)(CreatePost)
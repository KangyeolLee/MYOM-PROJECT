import React, { Component } from 'react'
import { Redirect } from 'react-router-dom'

class CreatePost extends Component {
	state = {
		title: '',
		content: ''
	}

	render(){
		return(
			<div className="container">
				<form action="">
					<h5>새로운 포스팅 작성</h5>
					<div className="input-field">
						<label htmlFor="title">제목</label>
						<input type="text" id="title"/>
					</div>
					<div className="input-field">
						<label htmlFor="content">포스트 내용</label>
						<textarea name="" id="content" className="materialize-textarea"></textarea>
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

export default CreatePost
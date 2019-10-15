import React, { Component } from 'react';
import './chatTextBox.css'
import { connect } from 'react-redux'
import { sendMessage } from '../../store/actions/chatAction'

class ChatTextBox extends Component {
	state = {
		sender: this.props.profile.initials,
		message: '',
    file: '',
    fileName: '',
	}
  initState = () => {
    this.setState({
      message: '',
      file: '',
      fileName: '',
    })
  }
	handleChange = (e) => {
		this.setState({
			[e.target.id] : e.target.value
		})
	}
 
	handleSubmit = (e) => {
    if(!this.state.message && !this.state.file) {
      e.preventDefault();
      return;
    }
		e.preventDefault();
		document.querySelector('#message').value = '';
    this.props.sendMessage(this.state, this.props.chatId);
    this.initState();
	}

	enterSubmit = (e) => {
    if(!e.target.value && e.keyCode === 13) {
      e.preventDefault();
      return;
    }
		if(e.which === 13 && !e.shiftKey){
			e.preventDefault();
			this.handleSubmit(e);
    }
	}

	handleUpload = (e) => {
    const file = e.target.files[0];
		this.setState({
      fileName: file.name,
			[e.target.id] : file,
		})
	}
	render() {
		return(
			<div className="chat-text-box">
				<form onSubmit = {this.handleSubmit} id='chatForm'>
					<div className="input-field text-box">
						<label htmlFor="message"></label>
						<textarea id="message" col="1" row="50" onChange={this.handleChange} onKeyDown = {this.enterSubmit} placeholder="메시지를 입력해주세요."></textarea>
					</div>
					<div className="file-field input-field">
						<div className="btn myomColor-background fileBtn">
							<i className="material-icons">file_upload</i>
							<input type="file" id='file' onChange={this.handleUpload} />
						</div>
						{/* <div className="file-path-wrapper">
							<input type="text" className="file-path validate" />
						</div> */}
					</div>
					<div className="input-field">
						<button className="btn myomColor-background chat-send-btn">전송하기</button>
					</div>
				</form>
        {
          (this.state.fileName)
            ? (
              <div className="will-upload-area row">
                <span style={{paddingLeft: '0'}} className='col s6 left'>{ this.state.fileName }</span>
                <span style={{paddingRight: '0', textAlign: 'right'}} className='col s6 right red-text'>*파일은 한번에 최대 한개만 가능합니다. 가급적 알집으로 보내주세요!</span>
              </div>
            )
            : null
        }
        
			</div>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return{
		sendMessage: (chatData, chatId) => dispatch(sendMessage(chatData, chatId))
	}
}
export default connect(null, mapDispatchToProps)(ChatTextBox);
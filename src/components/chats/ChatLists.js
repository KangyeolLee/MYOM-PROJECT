import React, { Component, Fragment } from 'react';
import { connect } from 'react-redux'
import { readMessage } from '../../store/actions/chatAction'
import './ChatLists.css'

class ChatLists extends Component {
	state = {
		receiverHasRead: ''
  }
  // componentDidUpdate(prevState, prevProps) {
  //   if(prevProps !== this.props) {
  //     const chattingBox = [...document.querySelectorAll('.chatting-box')];
  //     const newMessages = chattingBox.filter(box => box.firstChild.classList.contains('unreadMark'));
  //     newMessages.map(message => message.setAttribute('style', 'background-color: yellow !important'))
  //   }
  // }
	newChat = () => {
		console.log('new chat click');
	}
	selectChat = (index, type, chatId) => {
		this.props.selectChatFn(index, type, chatId);
	}
	selectUnread = (chatId) => {
		this.props.readMessage(chatId);
	}
	render(){
    const { chats, profile } = this.props;
    console.log(chats);
	
		return(
			<Fragment>
				{ chats && chats.map((chat, index) => {
					return(
						<Fragment key={index}>
							<div className="each-chat col xl4 l6 m6 s12">
								<div className="card chatting-box white" onClick = {(e) => {
									const type = e.target.id;
									this.selectChat(index, type, chat.id); 
									if(chat.messages[chat.messages.length-1].sender !== profile.initials && !chat.receiverHasRead) this.selectUnread(chat.id);
									}}
									selected={this.props.selectedChatIndex === index}>

                  {	
                    (!chat.receiverHasRead && chat.messages[chat.messages.length-1].sender !== profile.initials) 
                      ? <i className="material-icons unreadMark">markunread<span className='guide-text'>새 메시지 도착!</span></i>
											: null
									}

									<div className="card-content black-text">
										<span className="card-title one-chat">
											<img src={chat[profile.email]} width='60px' height='60px' className='circle' alt="상대방 프로필 이미지"/>
											<div className='userNickname scorelt'>{chat.users_nickName.filter(_user => _user !== profile.initials)}</div>
											{/* {chat.users.filter(_user => _user !== profile.email)[0].split('')[0]} */}

										</span>
										<div className="chatlist-message" id={this.props.chat_type}>{chat.messages[chat.messages.length -1].message ? chat.messages[chat.messages.length -1].message : '파일을 보냈습니다 : ' + chat.messages[chat.messages.length -1].fileName}</div>
									</div>
								</div>
							</div>
						</Fragment>
					)
				})}
			</Fragment>
		)
	}
}

const mapDispatchToProps = (dispatch) => {
	return {
		readMessage: (chatId) => dispatch(readMessage(chatId))
	}
}
export default connect(null, mapDispatchToProps)(ChatLists);

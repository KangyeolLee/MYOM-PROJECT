import React, { Component, Fragment } from 'react';
import './chatview.css'
import moment from 'moment';
import 'moment/locale/ko';

class ChatViews extends Component {
	componentDidUpdate = () => {
		const container = document.getElementById('chatview-container');
		if(container)
			container.scrollTo(0, container.scrollHeight);
	}

	render(){
    const { chat, profile } = this.props;
    
		if(chat === undefined){
			return(
				<div id="chatview-container" className="chat-content">
          <div className="message-guide-text">
            <i className="fas fa-comments"></i>
            <span className='default-content monsori'>메시지를 선택해주세요</span>
          </div>
        </div>
			)
		} else{
			return(
				<div id="chatview-container" className="chat-content">
					{
						chat.messages.map((_msg, _index) => {

							return(
								<blockquote key={_index} className={_msg.sender === profile.initials ? "user-sent-message " : "friend-sent-message" }>
										{
											(_msg.file) ? 
												(_index === chat.messages.length-1) && (_msg.sender === profile.initials) ?
												<Fragment>
                          <span>파일명 : {_msg.fileName} </span>
													<a href={_msg.file } download={_msg.fileName} className="btn myomColor-background">다운로드</a><br/>
													
													<p>{_msg.message}</p>
													<cite className="sender black-text">{_msg.sender}</cite>
													<cite className='right'>{moment(_msg.sendAt.toDate()).fromNow()} {chat.receiverHasRead ? 
														<Fragment>읽음</Fragment> : <Fragment>안읽음</Fragment>}</cite>
												</Fragment>
												:
												<Fragment>
													<span>파일명 : {_msg.fileName} </span>
													<a href={_msg.file } download={_msg.fileName} className="btn myomColor-background">다운로드</a><br/>

													<cite className="sender black-text">{_msg.sender}</cite>
													<cite className='right'>{moment(_msg.sendAt.toDate()).fromNow()}</cite>
												</Fragment>
											:
											(_index === chat.messages.length-1) && (_msg.sender === profile.initials) ?
											<Fragment>
												<p>{_msg.message}</p>
												<cite className="sender black-text">{_msg.sender}</cite>
												<cite className='right'>{moment(_msg.sendAt.toDate()).fromNow()} {chat.receiverHasRead ? 
													<Fragment>읽음</Fragment> : <Fragment>안읽음</Fragment>}</cite>
											</Fragment>
											:
											<Fragment>
												<p>{_msg.message}</p>
												<cite className="sender black-text">{_msg.sender}</cite>
												<cite className='right'>{moment(_msg.sendAt.toDate()).fromNow()}</cite>
											</Fragment>
										
										}
								</blockquote>
							)
						})
					}
				</div>
			)
		}
	}
}

export default ChatViews;

import React, { Fragment } from 'react'
import moment from 'moment';
import 'moment/locale/ko';
import { connect } from 'react-redux'
import { sendMessage } from '../../store/actions/chatAction'
import { Link } from 'react-router-dom';

const ChattingViewport = (props) => {
  const chattingSubmit = (e) => {
    e.preventDefault();

    const sendBox = document.getElementById('message-sendbox');
    const messageObject = {
      sender: props.profile.initials,
      message: sendBox.value,
    }

    if(!sendBox.value) return;
    props.sendMessage(messageObject, props.roomId);
    sendBox.value = '';
  }
  const uploadFile = (e) => {
    e.preventDefault();
    if(!e.target.value) return;
    
    const file = e.target.files[0];
    const file_exe = file.name.split('.').pop().toLowerCase();
    let file_type = 'etc';

    if(file_exe === 'jpg' || file_exe === 'jpeg' || file_exe === 'png' || file_exe === 'gif') file_type = 'img';
    else if(file_exe === 'm4v' || file_exe === 'avi' || file_exe === 'mpg' || file_exe === 'mp4') file_type= 'video';

    const messageObject = {
      sender: props.profile.initials,
      file,
      fileName: file.name,
      file_type,
    }

    props.sendMessage(messageObject, props.roomId);
    e.target.value = '';
  }
  const handleChange = (e) => {
    const chattingRoom = document.querySelector('.chattingViewport');
    console.log(chattingRoom.scrollTop, chattingRoom.scrollHeight - chattingRoom.clientHeight);
    if(Math.abs(chattingRoom.scrollTop - (chattingRoom.scrollHeight - chattingRoom.clientHeight)) < 28) {
      console.log('scroll executed');
      chattingRoom.scrollTop = chattingRoom.scrollHeight;
    }

    const sendbox = document.getElementById('message-sendbox');
    const sendboxHeight = Number((sendbox.style.height).split('px')[0]);

    if(sendboxHeight > 150) sendbox.style.overflowY = 'scroll'
    else sendbox.style.overflowY = 'hidden';
  }
  const preventEnterSubmit = (e) => {
    if(!e.target.value && e.keyCode === 13) {
      e.preventDefault();
      return;
    }
		if(e.which === 13 && !e.shiftKey){
      e.preventDefault();

      chattingSubmit(e);
      e.target.value = '';
    }
  }
  const { selected, profileImgs, profile, roomId } = props;
  const partnerNickname = selected[0].users_nickName.filter(nickname => nickname !== profile.initials).join();

  return (
    <ul className="collection chattingRoom row">
      <div id={roomId} className="col s12 chattingViewport">
        <div className="col s12 chatting-navbar">
          {
            (profileImgs[partnerNickname])
              ? <img src={profileImgs[partnerNickname]} alt="유저 프로필 이미지" width='50' height='50' className='circle'/>
              : <img src="/img/defaults/userProfile.jpeg" alt="유저 프로필 이미지" width='50' height='50' className='circle'/>
          }
          {/* <img src="/img/defaults/userProfile.jpeg" alt="유저 프로필 이미지" width='50' height='50' className='circle'/> */}
          <span className='partner-nickname scorelt'>{selected[0].users_nickName.filter(nickname => nickname !== profile.initials)}</span>
          <div className="col s12 divider"></div>
        </div>

        <div className="col s12 chatting-messages">
          {
            selected[0].messages.length && selected[0].messages.map((message, idx) => (message.sender === profile.initials)
              ? (
                <div key={message.sendAt} className="message inRight">
                  {
                    (profileImgs[profile.initials])
                      ? <img src={profileImgs[profile.initials]} alt="유저 프로필 이미지" width='42' height='42' className="circle text-sender right"/>
                      : <img src="/img/defaults/userProfile.jpeg" alt="유저 프로필 이미지" width='42' height='42' className="circle text-sender right"/>
                  }
                  {
                    (message.message)
                      ? (
                        <div className="text-message right">{message.message}
                          <span className="timestamp">{moment(message.sendAt.toDate()).calendar(null, {
                            sameDay: 'LT',
                            lastDay: '어제',                     
                            lastWeek: 'YYYY-MM-DD',
                            sameElse: 'YYYY-MM-DD'})}</span>
                        </div>
                      )
                      : (
                        <div className="file-message right">
                          <a href={message.file} className='file-downloader' target='_blank' download={message.fileName}>
                            <p style={{backgroundColor: '#f0f0f2'}} className='download-file'>
                              <i className="material-icons file-img">{message.file_type === 'img' ? 'image' : message.file_type === 'video' ? 'movie' : 'folder'}</i>
                              <span>{message.fileName}</span>
                              <i className="material-icons">file_download</i>
                            </p>
                          </a>
                          <span className="timestamp">{moment(message.sendAt.toDate()).calendar(null, {
                            sameDay: 'LT',
                            lastDay: '어제',                     
                            lastWeek: 'YYYY-MM-DD',
                            sameElse: 'YYYY-MM-DD'})}
                          </span>                   
                        </div>
                      )
                  }

                  {/* 로그인 시 부여하는 Persistence.SESSION 이 expired 되는 시점을 catch 할 수 있어야 완벽한 구현이 가능 */}
                  {/* 또는 realtime DB와 firestore를 연동해야 하지만, 이 경우 작성한 스크립트를 처음부터 다시 바꿔야 함 */}
                  {/* 고로 읽음/안읽음 처리 기능을 잠시 제거 - 추후 개발 예정 */}
                  {/* {
                    (idx === selected[0].messages.length-1)
                      ? (selected[0].isChecked) ? <span className='readMark'>읽음</span> : <span className='unreadMark'>안읽음</span>
                      : null
                  } */}
                </div>
              )
              : (
                <div key={message.sendAt} className="message inLeft">    
                  {
                    (profileImgs[partnerNickname])
                      ? <img src={profileImgs[partnerNickname]} alt="유저 프로필 이미지" width='42' height='42' className="circle text-sender left"/>
                      : <img src="/img/defaults/userProfile.jpeg" alt="유저 프로필 이미지" width='42' height='42' className="circle text-sender left"/>
                  }  
                  {
                    (message.message)
                      ? (
                        <div className="text-message left">{message.message}
                          <span className="timestamp">{moment(message.sendAt.toDate()).calendar(null, {
                            sameDay: 'LT',
                            lastDay: '어제',
                            lastWeek: 'YYYY-MM-DD',
                            sameElse: 'YYYY-MM-DD'})}</span>
                        </div>
                      )
                      : (
                        <div className="file-message left">
                          <a href={message.file} className='file-downloader' target='_blank' download={message.fileName}>
                            <p style={{backgroundColor: '#d2e5ff'}} className='download-file'>
                              <i className="material-icons file-img">{message.file_type === 'img' ? 'image' : message.file_type === 'video' ? 'movie' : 'folder'}</i>
                              <span>{message.fileName}</span>
                              <i className="material-icons">file_download</i>
                            </p>
                          </a>
                          <span className="timestamp">{moment(message.sendAt.toDate()).calendar(null, {
                            sameDay: 'LT',
                            lastDay: '어제',
                            lastWeek: 'YYYY-MM-DD',
                            sameElse: 'YYYY-MM-DD'})}</span>
                        </div>
                      )
                  }

                  
                  {/* {
                    (idx === selected[0].messages.length-1)
                      ? (selected[0]['isJoined_' + partnerEmail] || selected[0].receiverHasRead) ? <span className='readMark'>읽음</span> : <span className='unreadMark'>안읽음</span>
                      : null
                  } */}
                  
                </div>
              )
            )
          }
        </div>
        <div className="col s12 chatting-messages file-upload-area"></div>
      </div>

      <form onSubmit={chattingSubmit} className="col s12 chatting-textbox">
        <div className="col s12">
          <div className="col s12 divider"></div>           
          <div className="input-field col s10">
            <textarea onChange={handleChange} onKeyDown={preventEnterSubmit} type='text' name="message-sendbox" id='message-sendbox' className='materialize-textarea' placeholder='메시지를 입력하세요'></textarea>
          </div>
          <div className="file-field input-field col s1 btn-flat center"><i style={{transform: 'rotate(25deg)'}} className="material-icons">attach_file</i><input onChange={uploadFile} type="file"/></div>
          <button className="input-field col s1 btn-flat"><i className="material-icons">send</i></button>
        </div>
      </form>
    </ul>
  )
}
const mapDispatchToProps = (dispatch) => {
	return{
		sendMessage: (chatData, chatId) => dispatch(sendMessage(chatData, chatId)),
	}
}
export default connect(null, mapDispatchToProps)(ChattingViewport);
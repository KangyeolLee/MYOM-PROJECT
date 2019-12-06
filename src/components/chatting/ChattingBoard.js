import React, { Component } from 'react'
import './chattingBoard.css';
import ChattingLists from './ChattingLists';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import { compose } from 'redux';
import ChattingViewport from './ChattingViewport';
import { readMessage, isCheck_status, initAll_joinedRooms } from '../../store/actions/chatAction'

class ChattingBoard extends Component {
  state = {
    chatIndex: '',
  }
  // setupBeforeUnloadListener = (e) => {
  //   e.preventDefault();
  //   this.props.initAll_joinedRooms();
  //   const confirmMessage = '채팅방을 나가시겠습니까?'
  //   e.returnValue = confirmMessage;
  //   return confirmMessage;
  // }
  // componentDidMount() {
  //   window.addEventListener('beforeunload', this.setupBeforeUnloadListener);
  // }
  // componentWillUnmount() {
  //   window.removeEventListener('beforeunload', this.setupBeforeUnloadListener);
  // }
  componentDidUpdate(prevProps, prevState) {
    const chattingRoom = document.querySelector('.chattingViewport');
    const sendBox = document.getElementById('message-sendbox');
    const prevChat = prevProps.chats;
    const curChat = this.props.chats;
    const chatIndex = this.state.chatIndex;

    if (chatIndex === '') this.props.initAll_joinedRooms();   // 모든 채팅방 초기화. chattingBoard에 들어올 때마다 실행.

    if (chattingRoom && chattingRoom.id === chatIndex) {      // 각각의 채팅방을 독립화. 다른 채팅방에서 일어나는 이벤트들이 현재 채팅방에 영향을 못 주도록 막음.
      const prevRoom = prevChat.filter(chat => chat.id === chatIndex);
      const curRoom = curChat.filter(chat => chat.id === chatIndex);
      if(prevState.chatIndex !== chatIndex) chattingRoom.scrollTop = chattingRoom.scrollHeight;
      if(prevRoom[0].messages.length !== curRoom[0].messages.length) chattingRoom.scrollTop = chattingRoom.scrollHeight;
    }

    if (prevState.chatIndex !== chatIndex) {                  // 메시지 입력박스 초기화. 입력폼은 모든 채팅방이 하나의 형태를 공유하므로 방이 바뀔때마다 초기화.
      if (prevState.chatIndex) {
        this.props.isCheck_status(prevState.chatIndex);
      }
      if (sendBox && sendBox.value) {
        sendBox.value = '';
        sendBox.style.height = '45px';
      }
    }
  }
  _select_Room = (e) => {
    this.props.readMessage(e.currentTarget.id);
    this.setState({
      chatIndex: e.currentTarget.id,
    });
  }
  render() {
    if (!isLoaded(this.props.chats) || !isLoaded(this.props.profile) || !isLoaded(this.props.profileImgs)) return <div className='container ChattingBoard'>로딩중...</div>

    return (
      <div className="container ChattingBoard">
        <div className="row chattingBox">
          <div className="col s4 chattingLists">
            <ChattingLists chats={this.props.chats} profileImgs={this.props.profileImgs} profile={this.props.profile} _select_Room={this._select_Room} />
          </div>

          <div className="col s8 chattingScreen">
            {
              (this.state.chatIndex)
                ? (
                  <ChattingViewport roomId={this.state.chatIndex} profileImgs={this.props.profileImgs} profile={this.props.profile} selected={this.props.chats.filter(chat => chat.id === this.state.chatIndex)} />
                )
                : (
                  <ul className="collection waitingRoom">
                    <div className="guide-mention-wrapper center">
                      <i className="fas fa-comments"></i>
                      <p className='guide-mention monsori'>메시지를 선택해주세요</p>
                      <p className='guide-mention monsori'>--답이 없다. 갈아엎어야 함--</p>
                      <p className='guide-mention monsori'>realtime DB 와 firestore 연동</p>
                    </div>
                  </ul>
                )
            }
          </div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    chats: state.firestore.ordered.chats,
    profileImgs: state.firestore.data.profileImgs,
    profile: state.firebase.profile,
  }
}
const mapDispatchToProps = (dispatch) => {
  return {
    readMessage: (chatId) => dispatch(readMessage(chatId)),
    isCheck_status: (chatId) => dispatch(isCheck_status(chatId)),
    initAll_joinedRooms: () => dispatch(initAll_joinedRooms()),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => {
    if (!isLoaded(props.profile.email)) return [];
    else return [
      { collection: 'chats', where: ['users_email', 'array-contains', props.profile.email], orderBy: ['updatedAt', 'desc'], storeAs: 'chats' },
      { collection: 'chats', doc: 'realtimeImg', storeAs: 'profileImgs' }
    ];
  }),
)(ChattingBoard);
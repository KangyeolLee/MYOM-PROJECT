import React from 'react';
import Swiper from 'react-id-swiper';
import moment from 'moment';
import 'moment/locale/ko';

const ChattingLists = (props) => {
  const params = {
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev'
    },
    spaceBetween: 30,
    // loop: true,
  }
  
  const { chats, profileImgs, profile, _select_Room } = props;
  const orderedChats = chats.length ? chats.slice() : null;
  orderedChats.sort((a,b) => b.updatedAt.seconds - a.updatedAt.seconds);

  return (
    <Swiper {...params}>

      <ul className="collection with-header top-chattingList">
        <li className="collection-header center purple lighten-5 scorelt">문의</li>
        {
          (orderedChats.filter(category => category.deal !== true).length)
            ? (orderedChats.filter(category => category.deal !== true).map((chat, index) => {
                const partnerNickname = chat.users_nickName.filter(nickname => nickname !== profile.initials).join();
                return (chat.lastMessageSender === profile.initials || chat.isChecked)
                  ? (
                    <li id={chat.id} key={chat.id} className="collection-item avatar chattingList readTrue" onClick={(e) => _select_Room(e)}>
                      {/* <img src="/img/defaults/userProfile.jpeg" alt="상대방 프로필 이미지" className="circle"/> */}
                      {
                        (profileImgs[partnerNickname])
                          ? <img src={profileImgs[partnerNickname]} alt="상대방 프로필 이미지" className="circle"/>
                          : <img src='/img/defaults/userProfile.jpeg' alt="상대방 프로필 이미지" className="circle"/>
                      } 
                      <span className="title scorelt">{chat.users_nickName.filter(nickname => nickname !== profile.initials)}</span>
                      <span className="right timestamp">{moment(chat.messages[chat.messages.length - 1].sendAt.toDate()).calendar(null, {
                        sameDay: 'LT',
                        lastDay: '어제',
                        lastWeek: 'YYYY-MM-DD'})}</span>
                      <p className="text-preview">{chat.messages[chat.messages.length - 1].message ? chat.messages[chat.messages.length - 1].message : '파일을 보냈습니다.'}</p>
                    </li>
                  )
                  : (
                    <li id={chat.id} key={chat.id} className="collection-item avatar chattingList readFalse" onClick={(e) => _select_Room(e)}>
                      {/* <img src="/img/defaults/userProfile.jpeg" alt="상대방 프로필 이미지" className="circle"/>        */}
                      {
                        (profileImgs[partnerNickname])
                          ? <img src={profileImgs[partnerNickname]} alt="상대방 프로필 이미지" className="circle"/>
                          : <img src='/img/defaults/userProfile.jpeg' alt="상대방 프로필 이미지" className="circle"/>
                      } 
                      <span className="title scorelt">{chat.users_nickName.filter(nickname => nickname !== profile.initials)}</span>
                      <span className="right timestamp">{moment(chat.messages[chat.messages.length - 1].sendAt.toDate()).calendar(null, {
                        sameDay: 'LT',
                        lastDay: '어제',
                        lastWeek: 'YYYY-MM-DD'})}</span>
                      <p className="text-preview">{chat.messages[chat.messages.length - 1].message ? chat.messages[chat.messages.length - 1].message : '파일을 보냈습니다.'}</p>
                    </li>
                  )
                }))
          : <div className='no-messages scorelt'>아직 문의 온 메시지가 없습니다.</div>
        }
      </ul>

      <ul className="collection with-header top-chattingList">
        <li className="collection-header center blue lighten-5 scorelt">구매</li>
        {
          (orderedChats.filter(category => category.deal === true).length)
            ? (orderedChats.filter(category => category.deal === true).map(chat => {
              const partnerNickname = chat.users_nickName.filter(nickname => nickname !== profile.initials).join();
              return (chat.lastMessageSender === profile.initials || chat.isChecked)
                ? (
                  <li id={chat.id} key={chat.id} className="collection-item avatar chattingList readTrue" onClick={(e) => _select_Room(e)}>
                    {
                      (profileImgs[partnerNickname])
                        ? <img src={profileImgs[partnerNickname]} alt="상대방 프로필 이미지" className="circle"/>
                        : <img src='/img/defaults/userProfile.jpeg' alt="상대방 프로필 이미지" className="circle"/>
                    }      
                    <span className="title scorelt">{chat.users_nickName.filter(nickname => nickname !== profile.initials)}</span>
                    <span className="right timestamp">{moment(chat.messages[chat.messages.length - 1].sendAt.toDate()).calendar(null, {
                      sameDay: 'LT',
                      lastDay: '어제',
                      lastWeek: 'YYYY-MM-DD'})}</span>
                    <p className="text-preview">{chat.messages[chat.messages.length - 1].message}</p>
                  </li>
                )
                : (
                  <li id={chat.id} key={chat.id} className="collection-item avatar chattingList readFalse" onClick={(e) => _select_Room(e)}>
                    {/* <img src={profileImgs[partnerNickname]} alt="상대방 프로필 이미지" className="circle"/> */}
                    {
                      (profileImgs[partnerNickname])
                        ? <img src={profileImgs[partnerNickname]} alt="상대방 프로필 이미지" className="circle"/>
                        : <img src='/img/defaults/userProfile.jpeg' alt="상대방 프로필 이미지" className="circle"/>
                    } 
                    <span className="title scorelt">{chat.users_nickName.filter(nickname => nickname !== profile.initials)}</span>
                    <span className="right timestamp">{moment(chat.messages[chat.messages.length - 1].sendAt.toDate()).calendar(null, {
                      sameDay: 'LT',
                      lastDay: '어제',
                      lastWeek: 'YYYY-MM-DD'})}</span>
                    <p className="text-preview">{chat.messages[chat.messages.length - 1].message}</p>
                  </li>
                )
              }))
            : <div className='no-messages scorelt'>아직 구매가 성사된 메시지가 없습니다.</div>
        }
      </ul>

      <ul className="collection with-header top-chattingList">
        <li className="collection-header center teal lighten-5 scorelt">완료</li>
        {
          (orderedChats.filter(category => category.dealCompleted === true).length)
            ? (orderedChats.filter(category => category.dealCompleted === true).map(chat => {
              const partnerNickname = chat.users_nickName.filter(nickname => nickname !== profile.initials).join();
              return (chat.lastMessageSender === profile.initials || chat.isChecked)
                ? (
                  <li id={chat.id} key={chat.id} className="collection-item avatar chattingList readTrue" onClick={(e) => _select_Room(e)}>
                    {/* <img src="/img/defaults/userProfile.jpeg" alt="상대방 프로필 이미지" className="circle"/>        */}
                    {
                      (profileImgs[partnerNickname])
                        ? <img src={profileImgs[partnerNickname]} alt="상대방 프로필 이미지" className="circle"/>
                        : <img src='/img/defaults/userProfile.jpeg' alt="상대방 프로필 이미지" className="circle"/>
                    }  
                    <span className="title scorelt">{chat.users_nickName.filter(nickname => nickname !== profile.initials)}</span>
                    <span className="right timestamp">{moment(chat.messages[chat.messages.length - 1].sendAt.toDate()).calendar(null, {
                      sameDay: 'LT',
                      lastDay: '어제',
                      lastWeek: 'YYYY-MM-DD'})}</span>
                    <p className="text-preview">{chat.messages[chat.messages.length - 1].message}</p>
                  </li>
                )
                : (
                  <li id={chat.id} key={chat.id} className="collection-item avatar chattingList readFalse" onClick={(e) => _select_Room(e)}>
                    {/* <img src="/img/defaults/userProfile.jpeg" alt="상대방 프로필 이미지" className="circle"/>        */}
                    {
                      (profileImgs[partnerNickname])
                        ? <img src={profileImgs[partnerNickname]} alt="상대방 프로필 이미지" className="circle"/>
                        : <img src='/img/defaults/userProfile.jpeg' alt="상대방 프로필 이미지" className="circle"/>
                    }  
                    <span className="title scorelt">{chat.users_nickName.filter(nickname => nickname !== profile.initials)}</span>
                    <span className="right timestamp">{moment(chat.messages[chat.messages.length - 1].sendAt.toDate()).calendar(null, {
                      sameDay: 'LT',
                      lastDay: '어제',
                      lastWeek: 'YYYY-MM-DD'})}</span>
                    <p className="text-preview">{chat.messages[chat.messages.length - 1].message}</p>
                  </li>
                )
              }))
            : <div className='no-messages scorelt'>아직 거래가 완료된 메시지가 없습니다.</div>
        }
      </ul>

      <ul className="collection with-header top-chattingList">
        <li className="collection-header center red lighten-5 scorelt">전체</li>
        {
          (orderedChats.length)
            ? (orderedChats.map(chat => {
              const partnerNickname = chat.users_nickName.filter(nickname => nickname !== profile.initials).join();
              return (chat.lastMessageSender === profile.initials || chat.isChecked)
                ? (
                  <li id={chat.id} key={chat.id} className="collection-item avatar chattingList readTrue" onClick={(e) => _select_Room(e)}>
                    {/* <img src="/img/defaults/userProfile.jpeg" alt="상대방 프로필 이미지" className="circle"/>        */}
                    {
                      (profileImgs[partnerNickname])
                        ? <img src={profileImgs[partnerNickname]} alt="상대방 프로필 이미지" className="circle"/>
                        : <img src='/img/defaults/userProfile.jpeg' alt="상대방 프로필 이미지" className="circle"/>
                    }  
                    <span className="title scorelt">{chat.users_nickName.filter(nickname => nickname !== profile.initials)}</span>
                    <span className="right timestamp">{moment(chat.messages[chat.messages.length - 1].sendAt.toDate()).calendar(null, {
                      sameDay: 'LT',
                      lastDay: '어제',
                      lastWeek: 'YYYY-MM-DD'})}</span>
                    <p className="text-preview">{chat.messages[chat.messages.length - 1].message}</p>
                  </li>
                )
                : (
                  <li id={chat.id} key={chat.id} className="collection-item avatar chattingList readFalse" onClick={(e) => _select_Room(e)}>
                    {/* <img src="/img/defaults/userProfile.jpeg" alt="상대방 프로필 이미지" className="circle"/>        */}
                    {
                      (profileImgs[partnerNickname])
                        ? <img src={profileImgs[partnerNickname]} alt="상대방 프로필 이미지" className="circle"/>
                        : <img src='/img/defaults/userProfile.jpeg' alt="상대방 프로필 이미지" className="circle"/>
                    }  
                    <span className="title scorelt">{chat.users_nickName.filter(nickname => nickname !== profile.initials)}</span>
                    <span className="right timestamp">{moment(chat.messages[chat.messages.length - 1].sendAt.toDate()).calendar(null, {
                      sameDay: 'LT',
                      lastDay: '어제',
                      lastWeek: 'YYYY-MM-DD'})}</span>
                    <p className="text-preview">{chat.messages[chat.messages.length - 1].message}</p>
                  </li>
                )
              }))
            : <div className='no-messages scorelt'>아직 받은 메시지가 없습니다.</div>
        }
      </ul>

      {/* <ul className="collection with-header top-chattingList">
        <li className="collection-header center red lighten-5 scorelt">전체</li>
        <li className="collection-item avatar">
          <img src="/img/defaults/userProfile.jpeg" alt="유저 프로필 이미지" className='circle' />
          <span className='title scorelt'>프로여행러</span>
          <span className="right timestamp">1분전</span>
          <p className='text-preview'>나랏말싸미 듕귁에 달아 어쩌구 저쩌구 이렇게 저렇게 동해물과 백두산이 마르고 닳도록 하나님이 보우하사 우리 나라 만세!</p>
        </li>

        <li className="collection-item avatar">
          <img src="/img/defaults/userProfile.jpeg" alt="유저 프로필 이미지" className='circle' />
          <span className='title scorelt'>테스트계정</span>
          <span className="right timestamp">1분전</span>
          <p className='text-preview'>user textContents textContents textContents textContents textContents textContents textContents textContents</p>
        </li>

        <li className="collection-item avatar">
          <img src="/img/defaults/userProfile.jpeg" alt="유저 프로필 이미지" className='circle' />
          <span className='title scorelt'>선릉컴퍼니</span>
          <span className="right timestamp">1분전</span>
          <p className='text-preview'>user textContents</p>
        </li>

        <li className="collection-item avatar">
          <img src="/img/defaults/userProfile.jpeg" alt="유저 프로필 이미지" className='circle' />
          <span className='title scorelt'>나는동용</span>
          <span className="right timestamp">1분전</span>
          <p className='text-preview'>user textContents</p>
        </li>

        <li className="collection-item avatar">
          <img src="/img/defaults/userProfile.jpeg" alt="유저 프로필 이미지" className='circle' />
          <span className='title scorelt'>나는서희</span>
          <span className="right timestamp">1분전</span>
          <p className='text-preview'>user textContents</p>
        </li>

        <li className="collection-item avatar">
          <img src="/img/defaults/userProfile.jpeg" alt="유저 프로필 이미지" className='circle' />
          <span className='title scorelt'>테스트계정</span>
          <span className="right timestamp">1분전</span>
          <p className='text-preview'>user textContents</p>
        </li>

        <li className="collection-item avatar">
          <img src="/img/defaults/userProfile.jpeg" alt="유저 프로필 이미지" className='circle' />
          <span className='title scorelt'>선릉컴퍼니</span>
          <span className="right timestamp">1분전</span>
          <p className='text-preview'>user textContents</p>
        </li>

        <li className="collection-item avatar">
          <img src="/img/defaults/userProfile.jpeg" alt="유저 프로필 이미지" className='circle' />
          <span className='title scorelt'>나는동용</span>
          <span className="right timestamp">1분전</span>
          <p className='text-preview'>user textContents</p>
        </li>

        <li className="collection-item avatar">
          <img src="/img/defaults/userProfile.jpeg" alt="유저 프로필 이미지" className='circle' />
          <span className='title scorelt'>나는서희</span>
          <span className="right timestamp">1분전</span>
          <p className='text-preview'>user textContents</p>
        </li>

        <li className="collection-item avatar">
          <img src="/img/defaults/userProfile.jpeg" alt="유저 프로필 이미지" className='circle' />
          <span className='title scorelt'>테스트계정</span>
          <span className="right timestamp">1분전</span>
          <p className='text-preview'>user textContents</p>
        </li>

        <li className="collection-item avatar">
          <img src="/img/defaults/userProfile.jpeg" alt="유저 프로필 이미지" className='circle' />
          <span className='title scorelt'>선릉컴퍼니</span>
          <span className="right timestamp">1분전</span>
          <p className='text-preview'>user textContents</p>
        </li>

        <li className="collection-item avatar">
          <img src="/img/defaults/userProfile.jpeg" alt="유저 프로필 이미지" className='circle' />
          <span className='title scorelt'>나는동용</span>
          <span className="right timestamp">1분전</span>
          <p className='text-preview'>user textContents</p>
        </li>

        <li className="collection-item avatar">
          <img src="/img/defaults/userProfile.jpeg" alt="유저 프로필 이미지" className='circle' />
          <span className='title scorelt'>나는서희</span>
          <span className="right timestamp">1분전</span>
          <p className='text-preview'>user textContents</p>
        </li>

      </ul> 
 
      <ul className="collection with-header">
        <li className="collection-header center purple lighten-5 scorelt">문의</li>
        <li className="collection-item avatar">
          <img src="/img/defaults/userProfile.jpeg" alt="유저 프로필 이미지" className='circle' />
          <span className='title scorelt'>여행비둘기</span>
          <span className="right timestamp">5분전</span>
          <p className='text-preview'>user textContents</p>
        </li>

        <li className="collection-item avatar">
          <img src="/img/defaults/userProfile.jpeg" alt="유저 프로필 이미지" className='circle' />
          <span className='title scorelt'>선릉컴퍼니</span>
          <span className="right timestamp">1분전</span>
          <p className='text-preview'>user textContents</p>
        </li>
      </ul>

      <ul className="collection with-header">
        <li className="collection-header center blue lighten-5 scorelt">거래</li>
        <li className="collection-item avatar">
          <img src="/img/defaults/userProfile.jpeg" alt="유저 프로필 이미지" className='circle' />
          <span className='title scorelt'>테스트계정</span>
          <span className="right timestamp">10분전</span>
          <p className='text-preview'>user textContents</p>
        </li>

        <li className="collection-item avatar">
          <img src="/img/defaults/userProfile.jpeg" alt="유저 프로필 이미지" className='circle' />
          <span className='title scorelt'>선릉컴퍼니</span>
          <span className="right timestamp">1분전</span>
          <p className='text-preview'>user textContents</p>
        </li>
      </ul>

      <ul className="collection with-header">
        <li className="collection-header center teal lighten-5 scorelt">완료</li>
        <li className="collection-item avatar">
          <img src="/img/defaults/userProfile.jpeg" alt="유저 프로필 이미지" className='circle' />
          <span className='title scorelt'>여행에미치다</span>
          <span className="right timestamp">1일전</span>
          <p className='text-preview'>user textContents</p>
        </li>

        <li className="collection-item avatar">
          <img src="/img/defaults/userProfile.jpeg" alt="유저 프로필 이미지" className='circle' />
          <span className='title scorelt'>선릉컴퍼니</span>
          <span className="right timestamp">1분전</span>
          <p className='text-preview'>user textContents</p>
        </li>
      </ul> */}
    </Swiper>
  )
}

export default ChattingLists;
import React, { Component, Fragment } from 'react'
import { NavLink } from 'react-router-dom';
import { connect } from 'react-redux';
import { signOut } from '../../store/actions/authAction';
import M from 'materialize-css';
import firebase from 'firebase/app';

class SignedInLinks extends Component {
  componentDidMount() {
    var elems = document.querySelectorAll('.dropdown-trigger');
    M.Dropdown.init(elems, {
      coverTrigger: false,
      // hover: true,
      constrainWidth: false
    });
  }
  render() {
    const { profile } = this.props;
    
    return (
      <Fragment>
        <ul style={{marginRight: '2rem'}} className="right hide-on-small-only">
          <li><NavLink to='/productIntro' className="black-text">편집자 등록</NavLink></li>
          <li><NavLink to='/chattingBoard' className='black-text'>메시지</NavLink></li>
          {
            (profile.authority === 'editor')
            ? <li><NavLink to='/mypageProvider/profile' className='btn btn-floating grey lighten-1'>
              { 
                (profile.profileImgURL === '/img/defaults/userProfile.jpeg')
                  ? <img src="/img/defaults/userProfile.jpeg" width="40px" height="40px" className="circle" alt="유저 기본 프로필 이미지"/>
                  : <img src="/img/defaults/lazy-loading.png" data-src={firebase.storage().refFromURL(profile.profileImgURL).getDownloadURL().then(url => {
                    const profile = document.getElementById('syncProfile');
                    profile.src = url;
                  })} width="40px" height="40px" className="circle" alt="유저 프로필 이미지" id='syncProfile'/>
              }
            </NavLink></li>
            : <li><NavLink to='/mypageBuyer/profile' className='btn btn-floating grey lighten-1'>
              { 
                (profile.profileImgURL === '/img/defaults/userProfile.jpeg')
                  ? <img src="/img/defaults/userProfile.jpeg" width="40px" height="40px" className="circle" alt="유저 기본 프로필 이미지"/>
                  : <img src="/img/defaults/lazy-loading.png" data-src={firebase.storage().refFromURL(profile.profileImgURL).getDownloadURL().then(url => {
                    const profile = document.getElementById('syncProfile');
                    profile.src = url;
                  })} width="40px" height="40px" className="circle" alt="유저 프로필 이미지" id='syncProfile'/>
              }
            </NavLink></li>
          }
          <li className='dropdown-trigger no-autoinit' data-target='dropdown_mypage'><span className="black-text"style={{display: 'flex'}}>{this.props.profile.initials}님&nbsp;<i className="material-icons">arrow_drop_down</i></span></li>

          {/* about dropdown option for UserMyPage */}
          <ul id="dropdown_mypage" className="dropdown-content">
            { 
              (profile.authority === 'editor') 
              ? <li><NavLink to='/mypageProvider/sellManage' className="black-text">마이 페이지</NavLink></li>
              :
              <li><NavLink to='/mypageBuyer/orderManage' className="black-text">마이 페이지</NavLink></li>
            }
            <li className="divider" tabIndex='-1'></li>
            <li><a onClick={this.props.signOut} className="black-text">로그아웃</a></li>
            {
              (profile.authority === 'editor') 
                ? <li><NavLink to='/mypageProvider/withdrawal' className="black-text">회원탈퇴</NavLink></li>
                : <li><NavLink to='/mypageBuyer/withdrawal' className="black-text">회원탈퇴</NavLink></li>
            }

          </ul>
        </ul>

        <ul style={{marginRight: '2rem'}} className="right hide-on-med-and-up">
          {
            (profile.authority === 'editor')
            ? <li><NavLink to='/mypageProvider/profile' className='hide-on-mobile-only btn btn-floating grey lighten-1'>
              { 
                (profile.profileImgURL === '/img/defaults/userProfile.jpeg')
                  ? <img src="/img/defaults/userProfile.jpeg" width="40px" height="40px" className="circle" alt="유저 기본 프로필 이미지"/>
                  : <img src="/img/defaults/lazy-loading.png" data-src={firebase.storage().refFromURL(profile.profileImgURL).getDownloadURL().then(url => {
                    const profile = document.getElementById('syncProfile-on-med');
                    profile.src = url;
                  })} width="40px" height="40px" className="circle" alt="유저 프로필 이미지" id='syncProfile-on-med'/>
              }
            </NavLink></li>
            : <li><NavLink to='/mypageBuyer/profile' className='hide-on-mobile-only btn btn-floating grey lighten-1'>
            { 
                (profile.profileImgURL === '/img/defaults/userProfile.jpeg')
                  ? <img src="/img/defaults/userProfile.jpeg" width="40px" height="40px" className="circle" alt="유저 기본 프로필 이미지"/>
                  : <img src="/img/defaults/lazy-loading.png" data-src={firebase.storage().refFromURL(profile.profileImgURL).getDownloadURL().then(url => {
                    const profile = document.getElementById('syncProfile-on-med');
                    profile.src = url;
                  })} width="40px" height="40px" className="circle" alt="유저 프로필 이미지" id='syncProfile-on-med'/>
              }
            </NavLink></li>
          }
          <li className='dropdown-trigger no-autoinit' data-target='dropdown_mypage2'><span className="black-text"style={{display: 'flex'}}>{this.props.profile.initials}님&nbsp;<i className="material-icons">arrow_drop_down</i></span></li>

          {/* about dropdown option for UserMyPage */}
          <ul id="dropdown_mypage2" className="dropdown-content">
            <li><NavLink to='/productIntro' className="black-text">편집자 등록</NavLink></li>
            <li><NavLink to='/chattingBoard' className='black-text'>메시지</NavLink></li>
            { 
              (profile.authority === 'editor') 
              ? <li><NavLink to='/mypageProvider/sellManage' className="black-text">마이 페이지</NavLink></li>
              :
              <li><NavLink to='/mypageBuyer/orderManage' className="black-text">마이 페이지</NavLink></li>
            }
            <li className="divider" tabIndex='-1'></li>
            <li><a onClick={this.props.signOut} className="black-text">로그아웃</a></li>
            {
              (profile.authority === 'editor') 
                ? <li><NavLink to='/mypageProvider/withdrawal' className="black-text">회원탈퇴</NavLink></li>
                : <li><NavLink to='/mypageBuyer/withdrawal' className="black-text">회원탈퇴</NavLink></li>
            }
          </ul>
        </ul>
      </Fragment>
    )
  }
}

// const mapStateToProps = (state) => {
//   return {
//     profile : state.firebase.profile
//   }
// }

const mapDispatchToProps = (dispatch) => {
  return {
    signOut: () => dispatch(signOut())
  }
}
export default connect(null, mapDispatchToProps)(SignedInLinks);


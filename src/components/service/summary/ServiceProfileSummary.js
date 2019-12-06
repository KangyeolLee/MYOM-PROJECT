import React, { Component } from 'react'
import { chatCreate } from '../../../store/actions/serviceAction'
import { connect } from 'react-redux';
import M from 'materialize-css';

class ServiceProfileSummary extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  handleChatCreate = (e) => {
    e.preventDefault();
    this.props.chatCreate(this.props.providerImg, this.props.provider_email, this.props.provider_nickName , this.props.history);
  }

  render() {
    const { providerInfo } = this.props;

    return (
      <div className="provider-profile row">
        <div className="card col s12 z-depth-0">
          <div className="card-image">
            <img src={providerInfo.profileImgURL === '/img/defaults/userProfile.jpeg' ? '/img/defaults/userProfile.jpeg' : '/img/defaults/lazy-loading.png'} 
            alt="편집자 프로필" id="profile-in-service"/>
            <div className="profile-title notoSans">
              <p className="profile-nickname">{providerInfo.nickname}</p>
              <p className="more-info">상세보기<i style={{verticalAlign: 'middle'}} className="material-icons">chevron_right</i></p>
            </div>
          </div>

          <div className="col s12 divider"></div>

          <div className="card-content row notoSans">
            <p className="col profile-list s4">평균별점</p>
            {/* <span className="rate col s8"><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_half</i></span> */}
            <span className="col profile-list-ans s8">...</span>

            <p className='col profile-list s4'>작업횟수</p>
            <span className="col profile-list-ans s8">0건</span>

            <p className='col profile-list s4'>사용툴</p>
            <span className="col profile-list-ans s8 editorTools">
            {
              providerInfo.editorTool.length && providerInfo.editorTool.map((tool, idx) => '#' + tool['tool' + idx].name + ' / ')
            }
            </span>

            {/* <p className="col s4 scorehvy">스타일</p>
            <div style={{marginTop: '.5rem'}} className="col s12 chips">
              <div className="chip">#브이로그</div>
              <div className="chip">#색감좋은</div>
              <div className="chip">#트렌디한</div>
              <div className="chip">#트렌디한</div>
            </div> */}

            <div className="col s12"><div className="chatBtn waves-effect waves-light btn z-depth-0 notoSans" onClick= {this.handleChatCreate}>1:1 문의하기</div></div>

          </div>
        </div>
      </div>
    )
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    chatCreate: (userProfileImg, userEmail, userNickName, history) => dispatch(chatCreate(userProfileImg, userEmail, userNickName, history)),
  }
}
export default connect(null, mapDispatchToProps)(ServiceProfileSummary);

// class ServiceProfileSummary extends Component {
//   componentDidMount() {
//     M.AutoInit();
//   }
//   handleChatCreate = (e) => {
//     e.preventDefault();
//     this.props.chatCreate(this.props.providerImg, this.props.provider_email, this.props.provider_nickName , this.props.history);
//   }
//   render() {
//     // if(!isLoaded(this.props.providerInfo)) { return <div className='container'>로딩중...</div> }
//     // const { providerInfo, provider_nickName, providerImg } = this.props;
//     // const tools = (providerInfo !== null && providerInfo !== undefined) ? providerInfo.editorTool : [];

//     return (
//       <div className="provider-profile row">
//         <div className="card col s12 z-depth-0"> 
//           <div className="card-image">
//             <img src={providerImg ==='/img/defaults/userProfile.jpeg' ? '/img/defaults/userProfile.jpeg' : firebase.storage().refFromURL(providerImg).getDownloadURL().then(url => {
//               const profile = document.getElementById('profile-in-service');
//               profile.src = url;
//             })} alt="편집자 프로필사진" className='' id='profile-in-service'/>
//             <div className='profile-title'>
//               <p className='profile-nickname'>{provider_nickName + '님'}</p>
//               <p className='more-info'>상세보기<i style={{verticalAlign: 'middle'}} className="material-icons">chevron_right</i></p>
//             </div>
//           </div>
                
//           <div className="col s12 divider"></div>

//           <div className="card-content row">
//             <p className='col s4 scorehvy'>평균별점</p>
//             {/* <span className="rate col s8"><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_half</i></span> */}
//             <span className="col s8">...</span>

//             <p className='col s4 scorehvy'>작업횟수</p>
//             <span className="col s8">0건</span>

//             <p className='col s4 scorehvy'>사용툴</p>
//             <span className="col s8 editorTools">
//             {
//               tools.length && tools.map((tool, idx) => '#' + tool['tool' + idx].name + ' / ')
//             }
//             </span>


//             {/* <p className="col s4 scorehvy">스타일</p>
//             <div style={{marginTop: '.5rem'}} className="col s12 chips">
//               <div className="chip">#브이로그</div>
//               <div className="chip">#색감좋은</div>
//               <div className="chip">#트렌디한</div>
//               <div className="chip">#트렌디한</div>
//             </div> */}
//           </div>

//           <div className="chatBtn waves-effect waves-light col s12 btn scorehvy z-depth-0" onClick= {this.handleChatCreate}>1:1 문의하기</div>
//         </div>
//       </div>
//     )
//   }
// }
// const mapStateToProps = (state, ownProps) => {
//   console.log(state.firestore.data, ownProps.provider_id);
//   const id = ownProps.provider_id;
//   const providerInfos = state.firestore.data.providerInfo;
//   const providerInfo = providerInfos ? providerInfos[id] : null;
//   return {
//     providerInfo,
//   }
// }
// const mapDispatchToProps = (dispatch) => {
//   return{
//     chatCreate: (userProfileImg, userEmail, userNickName, history) => dispatch(chatCreate(userProfileImg, userEmail, userNickName, history)),
//   }
// }

// export default compose(
//   connect(mapStateToProps, mapDispatchToProps),
//   firestoreConnect(props => {
//     return [
//       { collection: 'providersTest', doc: props.provider_id, storeAs: 'providerInfo' }
//     ]
//   })
// )(ServiceProfileSummary);


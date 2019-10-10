import React, { Component } from 'react'
import { chatCreate } from '../../../store/actions/serviceAction'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import M from 'materialize-css';

class ServiceProfileSummary extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  handleChatCreate = (e) => {
    e.preventDefault();
    this.props.chatCreate(this.props.provider_email, this.props.provider_nickName , this.props.history);
  }
  render() {
    // if(!isLoaded(this.props.providerInfo)) return <div className='container'>로딩중...</div>
    const { provider_nickName } = this.props;
    const { providerInfo } = this.props;
    const tools = (providerInfo !== null && providerInfo !== undefined) ? providerInfo.editorTool : [];

    return (
      <div className="provider-profile row">
        <div className="card col s12 z-depth-0">
          <div className="card-image">
            <img src="/img/logo/myom_logo3.jpeg" alt="" className=''/>
            <div className='profile-title'>
              <p className='profile-nickname'>{provider_nickName + '님'}</p>
              <p className='more-info'>상세보기<i style={{verticalAlign: 'middle'}} className="material-icons">chevron_right</i></p>
            </div>
          </div>
                
          <div className="col s12 divider"></div>

          <div className="card-content row">
            <p className='col s4 scorehvy'>평균별점</p>
            <span className="rate col s8"><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_half</i></span>

            <p className='col s4 scorehvy'>작업횟수</p>
            <span className="col s8">32건</span>

            <p className='col s4 scorehvy'>사용툴</p>
            <span className="col s8 editorTools">
            {
              tools.length && tools.map((tool, idx) => '#' + tool['tool' + idx].name + ' / ')
            }
            </span>


            <p className="col s4 scorehvy">스타일</p>
            <div style={{marginTop: '.5rem'}} className="col s12 chips">
              <div className="chip">#브이로그</div>
              <div className="chip">#색감좋은</div>
              <div className="chip">#트렌디한</div>
              <div className="chip">#트렌디한</div>
            </div>
          </div>

          <div className="chatBtn waves-effect waves-light col s12 btn scorehvy z-depth-0" onClick= {this.handleChatCreate}>1:1 문의하기</div>
        </div>
      </div>
    )
  }
}
const mapStateToProps = (state, ownProps) => {
  const id = ownProps.provider_id;
  const providerInfos = state.firestore.data.providerInfo;
  const providerInfo = providerInfos ? providerInfos[id] : null;
  return {
    providerInfo,
  }
}
const mapDispatchToProps = (dispatch) => {
  return{
    chatCreate: (userEmail, userNickName, history) => dispatch(chatCreate(userEmail, userNickName, history)),
  }
}

export default compose(
  connect(mapStateToProps, mapDispatchToProps),
  firestoreConnect(props => {
    return [
      { collection: 'providersTest', storeAs: 'providerInfo' }
    ]
  })
)(ServiceProfileSummary);
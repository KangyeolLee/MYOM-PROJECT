import React, { Component } from 'react'
import MyPageSidenav from './MyPageSidenav';
import OrderManage from './OrderManage';
import ServiceSetting from './ServiceSetting';
import ProfitsManage from './ProfitsManage';
import ProviderProfile from './ProviderProfile';
import UserProfile from './UserProfile';
import Changepwd from './Changepwd';
import Withdrawal from './Withdrawal';
import { connect } from 'react-redux';
import Loader from '../functionalComponents/Loader';
import './mypage.css';

class MypageForProvider extends Component {
  renderSwitch(curURL) {
    switch(curURL) {
      case '/mypageProvider/serviceSetting':
        return <ServiceSetting />;

      case '/mypageProvider/profitsManage':
        return <ProfitsManage />;
      
      // case '/mypageProvider/requestsPage':
      //   return <EstimatePage pathname= {curURL} />;

      case '/mypageProvider/sellManage':
        return <OrderManage pathname= {curURL} />;

      case '/mypageProvider/profileSetting':
        return <ProviderProfile />

      case '/mypageProvider/profile':
        return <UserProfile />;
        
      case '/mypageProvider/changepwd':
        return <Changepwd />
        
      case '/mypageProvider/withdrawal':
        return <Withdrawal />

      default:  // 기본값 지정
        return this.props.history.push('/mypageProvider/sellManage'); 
    }
  }
  render() {
    const { profile } = this.props;
    if(profile.isLoaded && profile.authority != 'editor') {
      window.location.href = '/';
      return;
    }
    let curURL = this.props.location.pathname;

    return (
      <div className="container mypageForProvider">
        <div id="hidden-for-loading">
          <Loader />
          <div className="progress for-loading">
            <div style={{width: '0%'}} className="determinate"></div>
          </div>
        </div>

        <div className="row">
          <div className="col s12 mypage-title">마이페이지</div>
          <div className="col s3">
            <MyPageSidenav pathname={curURL} />
          </div>
  
          <div className="col s9">
            {this.renderSwitch(curURL)}
          </div>
        </div>
  
      </div>
    )
  }
}
const mapStateToProps = (state) => {
  return {
    profile: state.firebase.profile,
  }
}
export default connect(mapStateToProps)(MypageForProvider);
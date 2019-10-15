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
    if(profile.isLoaded && profile.authority != 'user') {
      alert('접근 권한이 없습니다.')
      window.location.href = '/';
      return;
    }
    let curURL = this.props.location.pathname;

    return (
      <div className="container mypageForBuyer">
        <div className="row">
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
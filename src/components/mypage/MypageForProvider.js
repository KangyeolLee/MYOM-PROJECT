import React, { Component } from 'react'
import MyPageSidenav from './MyPageSidenav';
import OrderManage from './OrderManage';
import ServiceSetting from './ServiceSetting';
import ProfitsManage from './ProfitsManage';
import ProfileSetting from './ProfileSetting';

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
        return <ProfileSetting />

      default:  // 기본값 지정
        return this.props.history.push('/mypageProvider/sellManage'); 
    }
  }
  render() {
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

export default MypageForProvider;
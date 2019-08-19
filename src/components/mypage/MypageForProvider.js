import React, { Component } from 'react'
import MyPageSidenav from './MyPageSidenav';
import EstimatePage from './EstimatePage';
import OrderManage from './OrderManage';
import MyServices from './MyServices';
import ProfitsManage from './ProfitsManage';

class MypageForProvider extends Component {
  renderSwitch(curURL) {
    switch(curURL) {
      case '/mypageProvider/myServices':
        return <MyServices />;

      case '/mypageProvider/profitsManage':
        return <ProfitsManage />;
      
      case '/mypageProvider/requestsPage':
        return <EstimatePage pathname= {curURL}/>;

      case '/mypageProvider/sellManage':
        return <OrderManage pathname= {curURL}/>;

      default:  {/* 기본값 지정 */}
        return this.props.history.push('/mypageProvider/requestsPage'); 
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
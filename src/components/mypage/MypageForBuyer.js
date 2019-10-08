import React, { Component } from 'react'
import MyPageSidenav from './MyPageSidenav';
import CouponPage from './CouponPage';
import OrderManage from './OrderManage';
import PaymentDetails from './PaymentDetails';
import UserProfile from './UserProfile';
import Changepwd from './Changepwd';
import Withdrawal from './Withdrawal';

class MypageForBuyer extends Component {
  renderSwitch(curURL) {
    switch(curURL) {
      case '/mypageBuyer/paymentDetails':
        return <PaymentDetails />;

      case '/mypageBuyer/coupons':
        return <CouponPage />;
      
      // case '/mypageBuyer/estimate':
      //   return <EstimatePage pathname={curURL} />;

      case '/mypageBuyer/orderManage':
        return <OrderManage pathname= {curURL} />;

      case '/mypageBuyer/profile':
        return <UserProfile />;
      
      case '/mypageBuyer/changepwd':
        return <Changepwd />
      
      case '/mypageBuyer/withdrawal':
        return <Withdrawal />

      default:  // 기본값 지정
        return this.props.history.push('/mypageBuyer/orderManage');
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

export default MypageForBuyer; 
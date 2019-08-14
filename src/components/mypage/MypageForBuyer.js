import React, { Component } from 'react'
import MyPageSidenav from './MyPageSidenav';
import CouponPage from './CouponPage';
import EstimatePage from './EstimatePage';
import OrderManage from './OrderManage';
import PaymentDetails from './PaymentDetails';

class MypageForBuyer extends Component {
  renderSwitch(curURL) {
    switch(curURL) {
      case '/mypageBuyer/paymentDetails':
        return <PaymentDetails />;

      case '/mypageBuyer/coupons':
        return <CouponPage />;
      
      case '/mypageBuyer/estimate':
        return <EstimatePage />;

      case '/mypageBuyer/orderManage':
        return <OrderManage />;

      default:
        return null;
    }
  }
  render() {
    let curURL = this.props.location.pathname;

    return (
      <div className="container mypageForBuyer">
        <div className="row">
          <div className="col s3">
            <MyPageSidenav />
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
import React, { Component } from 'react'
import M from 'materialize-css';
import './paymentDetails.css'
import WarningComponent from './WarningComponent';

class PaymentDetails extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div className="paymentDetails">
        <h4>결제 내역</h4>
        <form action="" className='row'>
          <div className="input-field col s1">
            <select name="" id="payment_range">
              <option value="1">전체</option>
              <option value="2">결제</option>
              <option value="3">환불</option>
            </select>
            <label htmlFor="payment_range">범위 선택</label>
          </div>

          <div className="input-field col s2">
            <input id='startsDate' type="text" className="datepicker"/>
            <label htmlFor="startsDate">~부터<i className="material-icons right">date_range</i> </label>
          </div>

          <div className="input-field col s2">
            <input id='endsDate' type="text" className="datepicker"/>
            <label htmlFor="endsDate">~까지<i className="material-icons right">date_range</i> </label>
          </div>

          <div className="input-field col s1">
            <select name="" id="payment_counts">
              <option value="1">5개</option>
              <option value="2">15개</option>
              <option value="3">30개</option>
            </select>
            <label htmlFor="payment_counts">개수 선택</label>
          </div>

          <div className="input-field col s3">
            <button className="btn grey darken-3"> 조회 </button>
          </div>

        </form>

        <div className="collection row">
          <div className="collection-item-wrapper">
            <i className="material-icons large">info_outline</i>
            <p>내역이 없습니다</p>
          </div>
        </div>

        <WarningComponent />

      </div>
    )
  }
}

export default PaymentDetails;
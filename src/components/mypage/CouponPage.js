import React, { Component } from 'react'
import M from 'materialize-css';
import WarningComponent from './WarningComponent';

class CouponPage extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div className="coupons">
        <form action="" className="row">
          <h4 className='col s4'>보유한 쿠폰 <font color='red'>1</font>개</h4>
          <div className="input-field col s6">
            <input type="text" id="coupon_code"/>
            <label htmlFor="coupon_code">프로모션 코드를 입력해주세요</label>
          </div>
          <div className="input-field col s2">
            <button className="btn grey darken-3"> 입력 </button>
          </div>
        </form>

        <table style={{marginBottom: '3rem'}} className='centered'>
          <thead className='grey lighten-5'>
            <tr>
              <th>쿠폰명</th>
              <th>할인액</th>
              <th>적용 조건</th>
              <th>유효기간 / 남은일자</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>신규 회원가입 환영 쿠폰_1만원</td>
              <td className='red-text'>10,000원</td>
              <td>10,000원 이상 구매시</td>
              <td>2019.08.15 15:03까지 / (<font color='red'>2</font>일 남음)</td>
            </tr>
          </tbody>
        </table>
         
        {/* <WarningComponent /> */}
      </div>
    )
  }
}

export default CouponPage;
import React, { Component } from 'react'
import WarningComponent from './WarningComponent';
import M from 'materialize-css';
import './orderManage.css';

class OrderManage extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    const { pathname } = this.props;
    const selectorValueForOrders = pathname.includes('mypageBuyer');
    const finalResult = selectorValueForOrders
      ? (
        <div className="ordersManage">
          <div className="row">
            <h4>구매 관리</h4>
            <div className="col s12">
              <ul className="tabs">
                <li className="tab col s2"><a href="#orderAll">전체 (0)</a></li>
                <li className="tab col s2"><a href="#orderRequest">요청사항 미작성 (0)</a></li>
                <li className="tab col s2"><a href="#orderProceed">진행중 (0)</a></li>
                <li className="tab col s2"><a href="#orderComplete">완료 (0)</a></li>
                <li className="tab col s2"><a href="#orderReview">평가 미작성 (0)</a></li>
                <li className="tab col s2"><a href="#orderCanceled">취소 (0)</a></li>
              </ul>
            </div>

            <div id="orderAll">
              <form action="" className="row">
                <div className="input-field col s2">
                  <input id='startsDate' type="text" className="datepicker"/>
                  <label htmlFor="startsDate">~부터<i className="material-icons right">date_range</i> </label>
                </div>

                <div className="input-field col s2">
                  <input id='endsDate' type="text" className="datepicker"/>
                  <label htmlFor="endsDate"> ~까지<i className="material-icons right">date_range</i> </label>
                </div>

                <div className="input-field col s4">
                  <input type="text" id="search"/>
                  <label htmlFor="search"><i className="material-icons left">search</i>서비스 제목</label>
                </div>

                <div className="input-field col s2">
                  <button className="btn gery darken-3 waves-effect"> 검색 </button>
                </div>

              </form>

              <div className="collection">
                <div className="collection-item-wrapper">
                  <i className="material-icons large">info_outline</i>
                  <p>내역이 없습니다</p>
                </div>
              </div>
            </div>

            <div id="orderRequest">
              <form action="" className="row">
                <div className="input-field col s2">
                  <input id='startsDate' type="text" className="datepicker"/>
                  <label htmlFor="startsDate">~부터<i className="material-icons right">date_range</i> </label>
                </div>

                <div className="input-field col s2">
                  <input id='endsDate' type="text" className="datepicker"/>
                  <label htmlFor="endsDate"> ~까지<i className="material-icons right">date_range</i> </label>
                </div>

                <div className="input-field col s4">
                  <input type="text" id="search"/>
                  <label htmlFor="search"><i className="material-icons left">search</i>서비스 제목</label>
                </div>

                <div className="input-field col s2">
                  <button className="btn gery darken-3 waves-effect"> 검색 </button>
                </div>

              </form>

              <div className="collection">
                <div className="collection-item-wrapper">
                  <i className="material-icons large">info_outline</i>
                  <p>내역이 없습니다</p>
                </div>
              </div>
            </div>

            <div id="orderProceed">
              <form action="" className="row">
                <div className="input-field col s2">
                  <input id='startsDate' type="text" className="datepicker"/>
                  <label htmlFor="startsDate">~부터<i className="material-icons right">date_range</i> </label>
                </div>

                <div className="input-field col s2">
                  <input id='endsDate' type="text" className="datepicker"/>
                  <label htmlFor="endsDate"> ~까지<i className="material-icons right">date_range</i> </label>
                </div>

                <div className="input-field col s4">
                  <input type="text" id="search"/>
                  <label htmlFor="search"><i className="material-icons left">search</i>서비스 제목</label>
                </div>

                <div className="input-field col s2">
                  <button className="btn gery darken-3 waves-effect"> 검색 </button>
                </div>

              </form>

              <div className="collection">
                <div className="collection-item-wrapper">
                  <i className="material-icons large">info_outline</i>
                  <p>내역이 없습니다</p>
                </div>
              </div>
            </div>

            <div id="orderComplete">
              <form action="" className="row">
                <div className="input-field col s2">
                  <input id='startsDate' type="text" className="datepicker"/>
                  <label htmlFor="startsDate">~부터<i className="material-icons right">date_range</i> </label>
                </div>

                <div className="input-field col s2">
                  <input id='endsDate' type="text" className="datepicker"/>
                  <label htmlFor="endsDate"> ~까지<i className="material-icons right">date_range</i> </label>
                </div>

                <div className="input-field col s4">
                  <input type="text" id="search"/>
                  <label htmlFor="search"><i className="material-icons left">search</i>서비스 제목</label>
                </div>

                <div className="input-field col s2">
                  <button className="btn gery darken-3 waves-effect"> 검색 </button>
                </div>

              </form>

              <div className="collection">
                <div className="collection-item-wrapper">
                  <i className="material-icons large">info_outline</i>
                  <p>내역이 없습니다</p>
                </div>
              </div>
            </div>

            <div id="orderReview">
              <form action="" className="row">
                <div className="input-field col s2">
                  <input id='startsDate' type="text" className="datepicker"/>
                  <label htmlFor="startsDate">~부터<i className="material-icons right">date_range</i> </label>
                </div>

                <div className="input-field col s2">
                  <input id='endsDate' type="text" className="datepicker"/>
                  <label htmlFor="endsDate"> ~까지<i className="material-icons right">date_range</i> </label>
                </div>

                <div className="input-field col s4">
                  <input type="text" id="search"/>
                  <label htmlFor="search"><i className="material-icons left">search</i>서비스 제목</label>
                </div>

                <div className="input-field col s2">
                  <button className="btn gery darken-3 waves-effect"> 검색 </button>
                </div>

              </form>

              <div className="collection">
                <div className="collection-item-wrapper">
                  <i className="material-icons large">info_outline</i>
                  <p>내역이 없습니다</p>
                </div>
              </div>
            </div>

            <div id="orderCanceled">
              <form action="" className="row">
                <div className="input-field col s2">
                  <input id='startsDate' type="text" className="datepicker"/>
                  <label htmlFor="startsDate">~부터<i className="material-icons right">date_range</i> </label>
                </div>

                <div className="input-field col s2">
                  <input id='endsDate' type="text" className="datepicker"/>
                  <label htmlFor="endsDate"> ~까지<i className="material-icons right">date_range</i> </label>
                </div>

                <div className="input-field col s4">
                  <input type="text" id="search"/>
                  <label htmlFor="search"><i className="material-icons left">search</i>서비스 제목</label>
                </div>

                <div className="input-field col s2">
                  <button className="btn gery darken-3 waves-effect"> 검색 </button>
                </div>

              </form>

              <div className="collection">
                <div className="collection-item-wrapper">
                  <i className="material-icons large">info_outline</i>
                  <p>내역이 없습니다</p>
                </div>
              </div>
            </div>
            

          </div>
          <WarningComponent />
        </div>
      )
      : (
        <div className="ordersManage">
          <div className="row">
            <h4>판매 관리</h4>
            <div className="col s12">
              <ul className="tabs">
                <li className="tab col s2"><a href="#orderAll">전체 (0)</a></li>
                <li className="tab col s2"><a href="#orderRequest">요청사항 미작성 (0)</a></li>
                <li className="tab col s2"><a href="#orderProceed">진행중 (0)</a></li>
                <li className="tab col s2"><a href="#orderComplete">완료 (0)</a></li>
                <li className="tab col s2"><a href="#orderReview">평가 미작성 (0)</a></li>
                <li className="tab col s2"><a href="#orderCanceled">취소 (0)</a></li>
              </ul>
            </div>

            <div id="orderAll">
              <form action="" className="row">
                <div className="input-field col s2">
                  <select name="" id="payment_range">
                    <option value="1">닉네임</option>
                    <option value="2">주문번호</option>
                    <option value="3">이름</option>
                    <option value="4">전화번호</option>
                    <option value="5">이메일</option>
                  </select>
                  <label htmlFor="payment_range">범위 선택</label>
                </div>

                <div className="input-field col s4">
                  <input type="text" id="coupon_code"/>
                  <label htmlFor="coupon_code"></label>
                </div>

                <div className="input-field col s2">
                  <button className="btn gery darken-3 waves-effect"> 검색 </button>
                </div>
              </form>

              <div className="collection">
                <div className="collection-item-wrapper">
                  <i className="material-icons large">info_outline</i>
                  <p>내역이 없습니다</p>
                </div>
              </div>
            </div>

            <div id="orderRequest">
              <form action="" className="row">
              <div className="input-field col s2">
                  <select name="" id="payment_range">
                    <option value="1">닉네임</option>
                    <option value="2">주문번호</option>
                    <option value="3">이름</option>
                    <option value="4">전화번호</option>
                    <option value="5">이메일</option>
                  </select>
                  <label htmlFor="payment_range">범위 선택</label>
                </div>

                <div className="input-field col s4">
                  <input type="text" id="coupon_code"/>
                  <label htmlFor="coupon_code"></label>
                </div>

                <div className="input-field col s2">
                  <button className="btn gery darken-3 waves-effect"> 검색 </button>
                </div>

              </form>

              <div className="collection">
                <div className="collection-item-wrapper">
                  <i className="material-icons large">info_outline</i>
                  <p>내역이 없습니다</p>
                </div>
              </div>
            </div>

            <div id="orderProceed">
              <form action="" className="row">
              <div className="input-field col s2">
                  <select name="" id="payment_range">
                    <option value="1">닉네임</option>
                    <option value="2">주문번호</option>
                    <option value="3">이름</option>
                    <option value="4">전화번호</option>
                    <option value="5">이메일</option>
                  </select>
                  <label htmlFor="payment_range">범위 선택</label>
                </div>

                <div className="input-field col s4">
                  <input type="text" id="coupon_code"/>
                  <label htmlFor="coupon_code"></label>
                </div>

                <div className="input-field col s2">
                  <button className="btn gery darken-3 waves-effect"> 검색 </button>
                </div>

              </form>

              <div className="collection">
                <div className="collection-item-wrapper">
                  <i className="material-icons large">info_outline</i>
                  <p>내역이 없습니다</p>
                </div>
              </div>
            </div>

            <div id="orderComplete">
              <form action="" className="row">
              <div className="input-field col s2">
                  <select name="" id="payment_range">
                    <option value="1">닉네임</option>
                    <option value="2">주문번호</option>
                    <option value="3">이름</option>
                    <option value="4">전화번호</option>
                    <option value="5">이메일</option>
                  </select>
                  <label htmlFor="payment_range">범위 선택</label>
                </div>

                <div className="input-field col s4">
                  <input type="text" id="coupon_code"/>
                  <label htmlFor="coupon_code"></label>
                </div>

                <div className="input-field col s2">
                  <button className="btn gery darken-3 waves-effect"> 검색 </button>
                </div>

              </form>

              <div className="collection">
                <div className="collection-item-wrapper">
                  <i className="material-icons large">info_outline</i>
                  <p>내역이 없습니다</p>
                </div>
              </div>
            </div>

            <div id="orderReview">
              <form action="" className="row">
              <div className="input-field col s2">
                  <select name="" id="payment_range">
                    <option value="1">닉네임</option>
                    <option value="2">주문번호</option>
                    <option value="3">이름</option>
                    <option value="4">전화번호</option>
                    <option value="5">이메일</option>
                  </select>
                  <label htmlFor="payment_range">범위 선택</label>
                </div>

                <div className="input-field col s4">
                  <input type="text" id="coupon_code"/>
                  <label htmlFor="coupon_code"></label>
                </div>

                <div className="input-field col s2">
                  <button className="btn gery darken-3 waves-effect"> 검색 </button>
                </div>

              </form>

              <div className="collection">
                <div className="collection-item-wrapper">
                  <i className="material-icons large">info_outline</i>
                  <p>내역이 없습니다</p>
                </div>
              </div>
            </div>

            <div id="orderCanceled">
              <form action="" className="row">
              <div className="input-field col s2">
                  <select name="" id="payment_range">
                    <option value="1">닉네임</option>
                    <option value="2">주문번호</option>
                    <option value="3">이름</option>
                    <option value="4">전화번호</option>
                    <option value="5">이메일</option>
                  </select>
                  <label htmlFor="payment_range">범위 선택</label>
                </div>

                <div className="input-field col s4">
                  <input type="text" id="coupon_code"/>
                  <label htmlFor="coupon_code"></label>
                </div>

                <div className="input-field col s2">
                  <button className="btn gery darken-3 waves-effect"> 검색 </button>
                </div>
              </form>

              <div className="collection">
                <div className="collection-item-wrapper">
                  <i className="material-icons large">info_outline</i>
                  <p>내역이 없습니다</p>
                </div>
              </div>
            </div>
            

          </div>
          <WarningComponent />
        </div>
      );

    return (
      <div>{ finalResult }</div>
    )
  }
}

export default OrderManage;
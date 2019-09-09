import React, { Component, Fragment } from 'react'
import WarningComponent from './WarningComponent';
import moment from 'moment';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import M from 'materialize-css';
import './orderManage.css';
import SearchBox from '../functionalComponents/SearchBox';
import Preloader from '../functionalComponents/Preloader';

class OrderManage extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    const { pathname, purchaseList } = this.props;
    const selectorValueForOrders = pathname.includes('mypageBuyer');
    const copied_purchaseList = !isLoaded(purchaseList) ? null : purchaseList.purchaseHistory.slice().reverse();
    console.log(copied_purchaseList);
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
              <SearchBox num={0} />
              {
                !isLoaded(purchaseList)
                  ? <div className="collection"><Preloader /></div>
                  : isEmpty(purchaseList)
                    ? (
                      <div className="collection">
                        <div className="collection-item-wrapper">
                          <i className="material-icons large">info_outline</i>
                          <p>내역이 없습니다</p>
                        </div>
                      </div>
                    )
                    : (copied_purchaseList && copied_purchaseList.map(item => (
                        <div className="collection notEmpty" key={item.date}>
                          <div className="collection-item row">
                            <div className="image-area col s4">
                              <img src={item.imgURL} alt="" width={300} height={250}/>
                            </div>
                            <div className="options-area col s8">
                              <p>옵션 : { item.options } </p>
                              <p>구매일자 : { moment(item.date.toDate()).format('YYYY년 / MM월 / DD일 h:mm분') }</p>
                              <p>진행상황 : { item.proceed ? '진행중' : '완료' }</p>
                              <p>요청사항 : { item.request ? '요청완료' : '미요청' }</p>
                              <p>리뷰작성 : { item.review ? '작성완료' : '미작성' }</p>
                              <p>판매자 : { item.provider }</p>
                            </div>
                          </div>
                        </div>
                    )))
              }            

            </div>

            <div id="orderRequest">
              <SearchBox num={1} />
              {
                !isLoaded(purchaseList)
                  ? <div className="collection"><Preloader /></div>
                  : isEmpty(purchaseList)
                    ? (
                      <div className="collection">
                        <div className="collection-item-wrapper">
                          <i className="material-icons large">info_outline</i>
                          <p>내역이 없습니다</p>
                        </div>
                      </div>
                    )
                    : (copied_purchaseList && copied_purchaseList.filter(item => item.request !== true).map(item => (
                      <div className="collection notEmpty" key={item.date}>
                        <div className="collection-item row">
                          <div className="image-area col s4">
                            <img src={item.imgURL} alt="" width={300} height={250}/>
                          </div>
                          <div className="options-area col s8">
                            <p>옵션 : { item.options } </p>
                            <p>구매일자 : { moment(item.date.toDate()).format('YYYY년 / MM월 / DD일 h:mm분') }</p>
                            <p>진행상황 : { item.proceed ? '진행중' : '완료' }</p>
                            <p>요청사항 : { item.request ? '요청완료' : '미요청' }</p>
                            <p>리뷰작성 : { item.review ? '작성완료' : '미작성' }</p>
                            <p>판매자 : { item.provider }</p>
                          </div>
                        </div>
                      </div>
                    )))
              }            
            </div>

            <div id="orderComplete">
            <SearchBox num={3} />

              <div className="collection">
                <div className="collection-item-wrapper">
                  <i className="material-icons large">info_outline</i>
                  <p>내역이 없습니다</p>
                </div>
              </div>
            </div>

            <div id="orderReview">
            <SearchBox num={4} />

              <div className="collection">
                <div className="collection-item-wrapper">
                  <i className="material-icons large">info_outline</i>
                  <p>내역이 없습니다</p>
                </div>
              </div>
            </div>

            <div id="orderCanceled">
            <SearchBox num={5} />

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
const mapStateToProps = (state) => {
  return {
    auth: state.firebase.auth,
    purchaseList: state.firestore.data.user,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    const uid = !isLoaded(props.auth.uid) ? null : props.auth.uid;
    return [
      { collection: 'users', doc: uid, storeAs: 'user' }
    ]
  })
)(OrderManage);
import React, { Component } from 'react'
import WarningComponent from './WarningComponent';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import M from 'materialize-css';
import './orderManage.css';
import SearchBoxDatepicker from '../functionalComponents/SearchBoxDatepicker';
import Preloader from '../functionalComponents/Preloader';
import Pagination from '../functionalComponents/Pagination';
import OrderManagementSummary from '../service/summary/OrderManagementSummary';
import SearchBoxRange from '../functionalComponents/SearchBoxRange';

class OrderManage extends Component {
  state = {
    all_count: 0,
    request_count: 0,
    proceed_count: 0,
    complete_count: 0,
    review_count: 0,
    cancel_count: 0,
    curPage: 1,
    perPage: 5,
  }

  componentDidMount() {
    M.AutoInit();
  }
  componentDidUpdate(prevProps, prevState) {
    if(this.props.orderList !== prevProps.orderList) {
      const { orderList } = this.props;
      let { all_count, request_count, proceed_count, complete_count, review_count, cancel_count } = prevState;

      if(orderList) {
        all_count = orderList.length;
        request_count = orderList.filter(item => item.hasOwnProperty('request') === false).length;
        proceed_count = orderList.filter(item => item.proceed === true).length;
        complete_count = orderList.filter(item => item.proceed === false).length;
        review_count = orderList.filter(item => item.review === true && item.proceed === false).length;
        cancel_count = orderList.filter(item => item.cancel).length;
      }
       
      this.setState({
        all_count, request_count, proceed_count, complete_count, review_count, cancel_count,
      })
    }
  }

  paginate = (pageNum) => {
    this.setState({
      curPage: pageNum,
    })
  }
  _init_curPage = () => {
    this.setState({
      curPage: 1,
    })
  }

  render() {
    const { pathname, orderList } = this.props;
    const { curPage, perPage, all_count, request_count, proceed_count, complete_count, review_count, cancel_count } = this.state;
    const selectorValueForOrders = pathname.includes('mypageBuyer');
    let indexOfLast = curPage * perPage; let indexOfFirst = indexOfLast - perPage;

    const finalResult = selectorValueForOrders 
      ? (
        <div className="ordersManage">
          <div className="row">
            <h5 className='col s12 scorehvy sub-title'>구매 관리</h5>
            <div className="col s12">
              <ul className="tabs scorehvy">
                <li className="tab col s2"><a onClick={this._init_curPage} href="#orderAll">전체 ({all_count})</a></li>
                <li className="tab col s2"><a onClick={this._init_curPage} href="#orderRequest">미접수 ({request_count})</a></li>
                <li className="tab col s2"><a onClick={this._init_curPage} href="#orderProceed">진행중 ({proceed_count})</a></li>
                <li className="tab col s2"><a onClick={this._init_curPage} href="#orderComplete">완료 ({complete_count})</a></li>
                <li className="tab col s2"><a onClick={this._init_curPage} href="#orderReview">구매확정 ({review_count})</a></li>
                <li className="tab col s2"><a onClick={this._init_curPage} href="#orderCanceled">취소 ({cancel_count})</a></li>
              </ul>
            </div>

            <div className='col s12' id="orderAll">
              {/* <SearchBoxDatepicker num={0} /> */}
              {
                !isLoaded(orderList)
                  ? <div className="collection"><Preloader /></div>
                  : isEmpty(orderList)
                    ? (
                      <div className="collection">
                        <div className="collection-item-wrapper">
                          <i className="material-icons large">info_outline</i>
                          <p>내역이 없습니다</p>
                        </div>
                      </div>
                    )
                    : (orderList.slice(indexOfFirst,indexOfLast).map(item => (
                      <OrderManagementSummary key={item.id} chk={selectorValueForOrders} purchaseList={item} />
                    )))
              }            
              <Pagination pages={Math.ceil(all_count / perPage)} paginate={this.paginate} curPage={this.state.curPage} />
            </div>

            <div className='col s12' id="orderRequest">
              {/* <SearchBoxDatepicker num={1} /> */}
              {
                !isLoaded(orderList)
                  ? <div className="collection"><Preloader /></div>
                  : isEmpty(orderList.filter(item => item.hasOwnProperty('request') === false))
                    ? (
                      <div className="collection">
                        <div className="collection-item-wrapper">
                          <i className="material-icons large">info_outline</i>
                          <p>내역이 없습니다</p>
                        </div>
                      </div>
                    )
                    : (orderList.filter(item => item.hasOwnProperty('request') === false).slice(indexOfFirst, indexOfLast).map(item => (
                      <OrderManagementSummary key={item.id} chk={selectorValueForOrders} purchaseList={item} />
                    )))
              }    
              <Pagination pages={Math.ceil(request_count / perPage)} paginate={this.paginate} curPage={this.state.curPage} />        
            </div>

            <div className='col s12' id="orderProceed">
              {/* <SearchBoxDatepicker num={2} /> */}
              {
                !isLoaded(orderList)
                  ? <div className="collection"><Preloader /></div>
                  : isEmpty(orderList.filter(item => item.proceed === true))
                    ? (
                      <div className="collection">
                        <div className="collection-item-wrapper">
                          <i className="material-icons large">info_outline</i>
                          <p>내역이 없습니다</p>
                        </div>
                      </div>
                    )
                    : (orderList.filter(item => item.proceed === true).slice(indexOfFirst, indexOfLast).map(item => (
                      <OrderManagementSummary key={item.id} chk={selectorValueForOrders} purchaseList={item} />
                    )))
              }
              <Pagination pages={Math.ceil(proceed_count / perPage)} paginate={this.paginate} curPage={this.state.curPage} />
            </div>

            <div className='col s12' id="orderComplete">
              {/* <SearchBoxDatepicker num={3} /> */}
              {
                !isLoaded(orderList)
                  ? <div className="collection"><Preloader /></div>
                  : isEmpty(orderList.filter(item => item.proceed === false))
                    ? (
                      <div className="collection">
                        <div className="collection-item-wrapper">
                          <i className="material-icons large">info_outline</i>
                          <p>내역이 없습니다</p>
                        </div>
                      </div>
                    )
                    : (orderList.filter(item => item.proceed === false).slice(indexOfFirst, indexOfLast).map(item => (
                      <OrderManagementSummary key={item.id} chk={selectorValueForOrders} purchaseList={item} />
                    )))
              }
              <Pagination pages={Math.ceil(complete_count / perPage)} paginate={this.paginate} curPage={this.state.curPage} />
            </div>

            <div className='col s12' id="orderReview">
              {/* <SearchBoxDatepicker num={4} /> */}
              { 
                !isLoaded(orderList)
                  ? <div className="collection"><Preloader /></div>
                  : isEmpty(orderList.filter(item => item.review === true))
                    ? (
                      <div className="collection">
                        <div className="collection-item-wrapper">
                          <i className="material-icons large">info_outline</i>
                          <p>내역이 없습니다</p>
                        </div>
                      </div>
                    )
                    : (orderList.filter(item => item.review === true && item.proceed === false).slice(indexOfFirst, indexOfLast).map(item => (
                      <OrderManagementSummary key={item.id} chk={selectorValueForOrders} purchaseList={item} />
                    )))
              }
              <Pagination pages={Math.ceil(review_count / perPage)} paginate={this.paginate} curPage={this.state.curPage} />
            </div>

            <div className='col s12' id="orderCanceled">
              {/* <SearchBoxDatepicker num={5} /> */}
              {
                !isLoaded(orderList)
                  ? <div className="collection"><Preloader /></div>
                  : isEmpty(orderList.filter(item => item.cancel))
                    ? (
                      <div className="collection">
                        <div className="collection-item-wrapper">
                          <i className="material-icons large">info_outline</i>
                          <p>내역이 없습니다</p>
                        </div>
                      </div>
                    )
                    : (orderList.filter(item => item.cancel).slice(indexOfFirst, indexOfLast).map(item =>
                      <OrderManagementSummary key={item.id} chk={selectorValueForOrders} purchaseList={item} />
                    ))
              }
              <Pagination pages={Math.ceil(cancel_count / perPage)} paginate={this.paginate} curPage={this.state.curPage} />
            </div>
            

          </div>
          {/* <WarningComponent /> */}
        </div>
      )
      : (
        <div className="ordersManage">
          <div className="row">
            <h5 className='col s12 scorehvy sub-title'>판매 관리</h5>
            <div className="col s12">
              <ul className="tabs scorehvy">
                <li className="tab col s2"><a onClick={this._init_curPage} href="#orderAll">전체 ({all_count})</a></li>
                <li className="tab col s2"><a onClick={this._init_curPage} href="#orderRequest">미접수 ({request_count})</a></li>
                <li className="tab col s2"><a onClick={this._init_curPage} href="#orderProceed">진행중 ({proceed_count})</a></li>
                <li className="tab col s2"><a onClick={this._init_curPage} href="#orderComplete">완료 ({complete_count})</a></li>
                <li className="tab col s2"><a onClick={this._init_curPage} href="#orderReview">구매확정 ({review_count})</a></li>
                <li className="tab col s2"><a onClick={this._init_curPage} href="#orderCanceled">취소 ({cancel_count})</a></li>
              </ul>
            </div>

            <div className='col s12' id="orderAll">
              {/* <SearchBoxRange num={0} /> */}
              {
                !isLoaded(orderList)
                  ? <div className="collection"><Preloader /></div>
                  : isEmpty(orderList)
                    ? (
                      <div className="collection">
                        <div className="collection-item-wrapper">
                          <i className="material-icons large">info_outline</i>
                          <p>내역이 없습니다</p>
                        </div>
                      </div>
                    )
                    : (orderList.slice(indexOfFirst, indexOfLast).map(item => 
                      <OrderManagementSummary key={item.id} chk={selectorValueForOrders} purchaseList={item} />
                    ))
              }
              <Pagination pages={Math.ceil(all_count / perPage)} paginate={this.paginate} curPage={this.state.curPage} />
            </div>

            <div className='col s12' id="orderRequest">
              {/* <SearchBoxRange num={1} /> */}
              {
                !isLoaded(orderList)
                  ? <div className="collection"><Preloader /></div>
                  : isEmpty(orderList.filter(item => item.hasOwnProperty('request') === false))
                    ? (
                      <div className="collection">
                        <div className="collection-item-wrapper">
                          <i className="material-icons large">info_outline</i>
                          <p>내역이 없습니다</p>
                        </div>
                      </div>
                    )
                    : (orderList.filter(item => item.hasOwnProperty('request') === false).slice(indexOfFirst, indexOfLast).map(item => 
                      <OrderManagementSummary key={item.id} chk={selectorValueForOrders} purchaseList={item} />
                    ))
              }
              <Pagination pages={Math.ceil(request_count / perPage)} paginate={this.paginate} curPage={this.state.curPage} />
            </div>

            <div className='col s12' id="orderProceed">
              {/* <SearchBoxRange num={2} /> */}
              {
                !isLoaded(orderList)
                  ? <div className="collection"><Preloader /></div>
                  : isEmpty(orderList.filter(item => item.proceed === true))
                    ? (
                      <div className="collection">
                        <div className="collection-item-wrapper">
                          <i className="material-icons large">info_outline</i>
                          <p>내역이 없습니다</p>
                        </div>
                      </div>
                    )
                    : (orderList.filter(item => item.proceed === true).slice(indexOfFirst, indexOfLast).map(item => 
                      <OrderManagementSummary key={item.id} chk={selectorValueForOrders} purchaseList={item} />
                    ))
              }
              <Pagination pages={Math.ceil(proceed_count / perPage)} paginate={this.paginate} curPage={this.state.curPage} />
            </div>

            <div className='col s12' id="orderComplete">
              {/* <SearchBoxRange num={3} /> */}
              {
                !isLoaded(orderList)
                  ? <div className="collection"><Preloader /></div>
                  : isEmpty(orderList.filter(item => item.proceed === false))
                    ? (
                      <div className="collection">
                        <div className="collection-item-wrapper">
                          <i className="material-icons large">info_outline</i>
                          <p>내역이 없습니다</p>
                        </div>
                      </div>
                    )
                    : (orderList.filter(item => item.proceed === false).slice(indexOfFirst, indexOfLast).map(item => 
                      <OrderManagementSummary key={item.id} chk={selectorValueForOrders} purchaseList={item} />
                    ))
              }
              <Pagination pages={Math.ceil(complete_count / perPage)} paginate={this.paginate} curPage={this.state.curPage} />
            </div>

            <div className='col s12' id="orderReview">
              {/* <SearchBoxRange num={4} /> */}
              {
                !isLoaded(orderList)
                  ? <div className="collection"><Preloader /></div>
                  : isEmpty(orderList.filter(item => item.review === true))
                    ? (
                      <div className="collection">
                        <div className="collection-item-wrapper">
                          <i className="material-icons large">info_outline</i>
                          <p>내역이 없습니다</p>
                        </div>
                      </div>
                    )
                    : (orderList.filter(item => item.review === true && item.proceed === false).slice(indexOfFirst, indexOfLast).map(item => 
                      <OrderManagementSummary key={item.id} chk={selectorValueForOrders} purchaseList={item} />
                    ))
              }
              <Pagination pages={Math.ceil(review_count / perPage)} paginate={this.paginate} curPage={this.state.curPage} />
            </div>

            <div className='col s12' id="orderCanceled">
              {/* <SearchBoxRange num={5} /> */}
              {
                !isLoaded(orderList)
                  ? <div className="collection"><Preloader /></div>
                  : isEmpty(orderList.filter(item => item.cancel))
                    ? (
                      <div className="collection">
                        <div className="collection-item-wrapper">
                          <i className="material-icons large">info_outline</i>
                          <p>내역이 없습니다</p>
                        </div>
                      </div>
                    )
                    : (orderList.filter(item => item.cancel).slice(indexOfFirst, indexOfLast).map(item =>
                      <OrderManagementSummary key={item.id} chk={selectorValueForOrders} purchaseList={item} />
                    ))
              }
              <Pagination pages={Math.ceil(cancel_count / perPage)} paginate={this.paginate} curPage={this.state.curPage} />
            </div>
            

          </div>
          {/* <WarningComponent /> */}
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
    orderList: state.firestore.ordered.orderList,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    const uid = !isLoaded(props.auth.uid) ? null : props.auth.uid;
    const selectorValueForOrders = props.pathname.includes('mypageBuyer');
    if(selectorValueForOrders) {
      return [
        { collection: 'purchaseList', where: ['buyer_id', '==', uid], orderBy: ['purchasedAt', 'desc'], storeAs: 'orderList' }
      ]
    } else {
      return [
        { collection: 'purchaseList', where: ['provider_id', '==', uid], orderBy: ['purchasedAt', 'desc'], storeAs: 'orderList'}
      ]
    }

  })
)(OrderManage);
import React, { Component } from 'react'
import WarningComponent from './WarningComponent';
import { connect } from 'react-redux';
import { compose } from 'redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import M from 'materialize-css';
import './orderManage.css';
import SearchBox_Datepicker from '../functionalComponents/SearchBox_Datepicker';
import Preloader from '../functionalComponents/Preloader';
import Pagination from '../functionalComponents/Pagination';
import OrderManagementSummary from '../service/summary/OrderManagementSummary';
import SearchBox_Range from '../functionalComponents/SearchBox_Range';

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
    if(this.props.purchaseList !== prevProps.purchaseList) {
      const { purchaseList } = this.props;
      let all_count, request_count, proceed_count, complete_count, review_count, cancel_count;
      if(this.props.pathname.includes('mypageBuyer')) {
        all_count = purchaseList.purchaseHistory.length;
        request_count = purchaseList.purchaseHistory.filter(item => item.request !== true).length;
        proceed_count = purchaseList.purchaseHistory.filter(item => item.proceed === true).length;
        complete_count = purchaseList.purchaseHistory.filter(item => item.proceed !== true).length;
        review_count = purchaseList.purchaseHistory.filter(item => item.review !== true).length;
        cancel_count = 0;
      } else {
        all_count = purchaseList.workingList.length;
        request_count = purchaseList.workingList.filter(item => item.request !== true).length;
        proceed_count = purchaseList.workingList.filter(item => item.proceed === true).length;
        complete_count = purchaseList.workingList.filter(item => item.proceed !== true).length;
        review_count = purchaseList.workingList.filter(item => item.review !== true).length;
        cancel_count = 0;
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
    const { pathname, purchaseList } = this.props;
    const { curPage, perPage, all_count, request_count, proceed_count, complete_count, review_count, cancel_count } = this.state;
    const selectorValueForOrders = pathname.includes('mypageBuyer');
    const copied_purchaseList = !isLoaded(purchaseList) ? null : purchaseList.purchaseHistory.slice().reverse();
    const copied_workingList = !isLoaded(purchaseList) ? null : purchaseList.workingList.slice().reverse();
    let indexOfLast = curPage * perPage; let indexOfFirst = indexOfLast - perPage;
    const finalResult = selectorValueForOrders 
      ? (
        <div className="ordersManage">
          <div className="row">
            <h4>구매 관리</h4>
            <div className="col s12">
              <ul className="tabs">
                <li className="tab col s2"><a onClick={this._init_curPage} href="#orderAll">전체 ({all_count})</a></li>
                <li className="tab col s2"><a onClick={this._init_curPage} href="#orderRequest">요청 미작성 ({request_count})</a></li>
                <li className="tab col s2"><a onClick={this._init_curPage} href="#orderProceed">진행중 ({proceed_count})</a></li>
                <li className="tab col s2"><a onClick={this._init_curPage} href="#orderComplete">완료 ({complete_count})</a></li>
                <li className="tab col s2"><a onClick={this._init_curPage} href="#orderReview">평가 미작성 ({review_count})</a></li>
                <li className="tab col s2"><a onClick={this._init_curPage} href="#orderCanceled">취소 ({cancel_count})</a></li>
              </ul>
            </div>

            <div id="orderAll">
              <SearchBox_Datepicker num={0} />
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
                    : (copied_purchaseList && copied_purchaseList.slice(indexOfFirst,indexOfLast).map(item => (
                      <OrderManagementSummary key={item.date} purchaseList={item} />
                    )))
              }            
              <Pagination pages={Math.ceil(all_count / perPage)} paginate={this.paginate} curPage={this.state.curPage} />
            </div>

            <div id="orderRequest">
              <SearchBox_Datepicker num={1} />
              {
                !isLoaded(purchaseList)
                  ? <div className="collection"><Preloader /></div>
                  : isEmpty(copied_purchaseList.filter(item => item.request !== true))
                    ? (
                      <div className="collection">
                        <div className="collection-item-wrapper">
                          <i className="material-icons large">info_outline</i>
                          <p>내역이 없습니다</p>
                        </div>
                      </div>
                    )
                    : (copied_purchaseList && copied_purchaseList.slice(indexOfFirst, indexOfLast).filter(item => item.request !== true).map(item => (
                      <OrderManagementSummary key={item.date} purchaseList={item} />
                    )))
              }    
              <Pagination pages={Math.ceil(request_count / perPage)} paginate={this.paginate} curPage={this.state.curPage} />        
            </div>

            <div id="orderProceed">
              <SearchBox_Datepicker num={2} />
              {
                !isLoaded(purchaseList)
                  ? <div className="collection"><Preloader /></div>
                  : isEmpty(copied_purchaseList.filter(item => item.proceed === true))
                    ? (
                      <div className="collection">
                        <div className="collection-item-wrapper">
                          <i className="material-icons large">info_outline</i>
                          <p>내역이 없습니다</p>
                        </div>
                      </div>
                    )
                    : (copied_purchaseList && copied_purchaseList.slice(indexOfFirst, indexOfLast).filter(item => item.proceed === true).map(item => (
                      <OrderManagementSummary key={item.date} purchaseList={item} />
                    )))
              }
              <Pagination pages={Math.ceil(proceed_count / perPage)} paginate={this.paginate} curPage={this.state.curPage} />
            </div>

            <div id="orderComplete">
              <SearchBox_Datepicker num={3} />
              {
                !isLoaded(purchaseList)
                  ? <div className="collection"><Preloader /></div>
                  : isEmpty(copied_purchaseList.filter(item => item.proceed === false))
                    ? (
                      <div className="collection">
                        <div className="collection-item-wrapper">
                          <i className="material-icons large">info_outline</i>
                          <p>내역이 없습니다</p>
                        </div>
                      </div>
                    )
                    : (copied_purchaseList && copied_purchaseList.slice(indexOfFirst, indexOfLast).filter(item => item.proceed === false).map(item => (
                      <OrderManagementSummary key={item.date} purchaseList={item} />
                    )))
              }
              <Pagination pages={Math.ceil(complete_count / perPage)} paginate={this.paginate} curPage={this.state.curPage} />
            </div>

            <div id="orderReview">
              <SearchBox_Datepicker num={4} />
              {
                !isLoaded(purchaseList)
                  ? <div className="collection"><Preloader /></div>
                  : isEmpty(copied_purchaseList.filter(item => item.review !== true))
                    ? (
                      <div className="collection">
                        <div className="collection-item-wrapper">
                          <i className="material-icons large">info_outline</i>
                          <p>내역이 없습니다</p>
                        </div>
                      </div>
                    )
                    : (copied_purchaseList && copied_purchaseList.slice(indexOfFirst, indexOfLast).filter(item => item.review !== true).map(item => (
                      <OrderManagementSummary key={item.date} purchaseList={item} />
                    )))
              }
              <Pagination pages={Math.ceil(review_count / perPage)} paginate={this.paginate} curPage={this.state.curPage} />
            </div>

            <div id="orderCanceled">
              <SearchBox_Datepicker num={5} />

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
                <li className="tab col s2"><a onClick={this._init_curPage} href="#orderAll">전체 ({all_count})</a></li>
                <li className="tab col s2"><a onClick={this._init_curPage} href="#orderRequest">요청 미작성 ({request_count})</a></li>
                <li className="tab col s2"><a onClick={this._init_curPage} href="#orderProceed">진행중 ({proceed_count})</a></li>
                <li className="tab col s2"><a onClick={this._init_curPage} href="#orderComplete">완료 ({complete_count})</a></li>
                <li className="tab col s2"><a onClick={this._init_curPage} href="#orderReview">평가 미작성 ({review_count})</a></li>
                <li className="tab col s2"><a onClick={this._init_curPage} href="#orderCanceled">취소 ({cancel_count})</a></li>
              </ul>
            </div>

            <div id="orderAll">
              <SearchBox_Range num={0} />
              {
                !isLoaded(purchaseList)
                  ? <div className="collection"><Preloader /></div>
                  : isEmpty(copied_workingList)
                    ? (
                      <div className="collection">
                        <div className="collection-item-wrapper">
                          <i className="material-icons large">info_outline</i>
                          <p>내역이 없습니다</p>
                        </div>
                      </div>
                    )
                    : (copied_workingList && copied_workingList.slice(indexOfFirst, indexOfLast).map(item => 
                      <OrderManagementSummary key={item.date} purchaseList={item} />
                    ))
              }
              <Pagination pages={Math.ceil(all_count / perPage)} paginate={this.paginate} curPage={this.state.curPage} />
            </div>

            <div id="orderRequest">
              <SearchBox_Range num={0} />
              {
                !isLoaded(purchaseList)
                  ? <div className="collection"><Preloader /></div>
                  : isEmpty(copied_workingList.filter(item => item.request !== true))
                    ? (
                      <div className="collection">
                        <div className="collection-item-wrapper">
                          <i className="material-icons large">info_outline</i>
                          <p>내역이 없습니다</p>
                        </div>
                      </div>
                    )
                    : (copied_workingList && copied_workingList.slice(indexOfFirst, indexOfLast).filter(item => item.request !== true).map(item => 
                      <OrderManagementSummary key={item.date} purchaseList={item} />
                    ))
              }
              <Pagination pages={Math.ceil(request_count / perPage)} paginate={this.paginate} curPage={this.state.curPage} />
            </div>

            <div id="orderProceed">
              <SearchBox_Range num={0} />
              {
                !isLoaded(purchaseList)
                  ? <div className="collection"><Preloader /></div>
                  : isEmpty(copied_workingList.filter(item => item.request !== true))
                    ? (
                      <div className="collection">
                        <div className="collection-item-wrapper">
                          <i className="material-icons large">info_outline</i>
                          <p>내역이 없습니다</p>
                        </div>
                      </div>
                    )
                    : (copied_workingList && copied_workingList.slice(indexOfFirst, indexOfLast).filter(item => item.proceed === true).map(item => 
                      <OrderManagementSummary key={item.date} purchaseList={item} />
                    ))
              }
              <Pagination pages={Math.ceil(proceed_count / perPage)} paginate={this.paginate} curPage={this.state.curPage} />
            </div>

            <div id="orderComplete">
              <SearchBox_Range num={0} />
              {
                !isLoaded(purchaseList)
                  ? <div className="collection"><Preloader /></div>
                  : isEmpty(copied_workingList.filter(item => item.request !== true))
                    ? (
                      <div className="collection">
                        <div className="collection-item-wrapper">
                          <i className="material-icons large">info_outline</i>
                          <p>내역이 없습니다</p>
                        </div>
                      </div>
                    )
                    : (copied_workingList && copied_workingList.slice(indexOfFirst, indexOfLast).filter(item => item.proceed !== true).map(item => 
                      <OrderManagementSummary key={item.date} purchaseList={item} />
                    ))
              }
              <Pagination pages={Math.ceil(complete_count / perPage)} paginate={this.paginate} curPage={this.state.curPage} />
            </div>

            <div id="orderReview">
              <SearchBox_Range num={0} />
              {
                !isLoaded(purchaseList)
                  ? <div className="collection"><Preloader /></div>
                  : isEmpty(copied_workingList.filter(item => item.request !== true))
                    ? (
                      <div className="collection">
                        <div className="collection-item-wrapper">
                          <i className="material-icons large">info_outline</i>
                          <p>내역이 없습니다</p>
                        </div>
                      </div>
                    )
                    : (copied_workingList && copied_workingList.slice(indexOfFirst, indexOfLast).filter(item => item.review !== true).map(item => 
                      <OrderManagementSummary key={item.date} purchaseList={item} />
                    ))
              }
              <Pagination pages={Math.ceil(review_count / perPage)} paginate={this.paginate} curPage={this.state.curPage} />
            </div>

            <div id="orderCanceled">
              <SearchBox_Range num={0} />

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
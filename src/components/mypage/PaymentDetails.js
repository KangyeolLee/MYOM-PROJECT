import React, { Component, Fragment } from 'react'
import moment from 'moment';
import M from 'materialize-css';
import './paymentDetails.css'
import { compose } from 'redux';
import { connect } from 'react-redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import WarningComponent from './WarningComponent';
import Preloader from '../functionalComponents/Preloader';
import Pagination from '../functionalComponents/Pagination';

class PaymentDetails extends Component {
  state = {
    curPage: 1,
    perPage: 5,
  }
  
  componentDidMount() {
    // const datePickers = document.querySelectorAll('.datepicker');
    M.AutoInit();
    // M.Datepicker.init(datePickers, {
    //   i18n: {
    //     months: [
    //       '1월', '2월', '3월', '4월', '5월', '6월',
    //       '7월', '8월', '9월', '10월', '11월', '12월'
    //     ]
    //   },
    //   yearRange: 50,
    // });
  }

  paginate = (pageNum) => {
    this.setState({
      curPage: pageNum, 
    })
  }

  render() {
    const { orderList } = this.props;
    const { curPage, perPage } = this.state;
    let indexOfLast = curPage * perPage;
    let indexOfFirst = indexOfLast - perPage;
    return (
      <div className="paymentDetails">
        <div className="row">
          <h5 className='col s12 scorehvy sub-title'>결제 내역</h5>
          {/* <form action="" className='row'>
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

          </form> */}
          <div className="col s12">               
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
                : (
                  <Fragment>
                  <table style={{marginBottom: '3rem'}} className='centered'>
                    <thead className='grey lighten-3 scorehvy'>
                      <tr>
                        <th>구입한 서비스</th>
                        <th>할인 적용</th>
                        <th>구입 일자</th>
                        <th>결제 금액</th>
                      </tr>
                    </thead>
                    <tbody className='white'>
                      {
                        orderList.slice(indexOfFirst,indexOfLast).map((list, index) => (
                          <tr key={list.service_id + index}>
                            <td>{list.service_title}</td>
                            <td className='red-text'>₩ 0원</td>
                            <td>{moment(list.purchasedAt.toDate()).format('YYYY.MM.DD HH:mm분')}</td>
                            <td>₩ {list.price}원</td>
                          </tr>
                        ))
                      }                      
                    </tbody>
                  </table>

                  <Pagination pages={Math.ceil(orderList.length / perPage)} paginate={this.paginate} curPage={this.state.curPage} />
                  </Fragment>
                ) 
          } 
          </div>

          {/* <div className="col s12">
            <div className="collection">
              <div className="collection-item-wrapper">
                <i className="material-icons large">info_outline</i>
                <p>내역이 없습니다</p>
              </div>
            </div>

            <div className="collection">
              <div className="collection-item row">
                <div className="col s3">HH</div>
                <div className="col s9">HH</div>
              </div>
            </div>
          </div> */}

        </div>
        
        <WarningComponent />

      </div>
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
  firestoreConnect(props => {
    const uid = !isLoaded(props.auth.uid) ? null : props.auth.uid;
    return [
      { collection: 'purchaseList', where: ['buyer_id', '==', uid], orderBy: ['purchasedAt', 'desc'], storeAs: 'orderList' }
    ]
  })
)(PaymentDetails);
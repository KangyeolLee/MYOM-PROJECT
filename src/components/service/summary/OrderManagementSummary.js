import React from 'react'
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { _proceed_order, _complete_order, _cancel_order } from '../../../store/actions/serviceAction';

const OrderManagementSummary = ({_proceed_order, _complete_order, _cancel_order, chk, purchaseList}) => {
  const proceed_order = (e, purchaseList_id) => {
    _proceed_order(purchaseList_id);
  }
  const complete_order = (purchaseList_id) => {
    _complete_order(purchaseList_id);
  }
  const cancel_order = (purchaseList_id) => {
    _cancel_order(purchaseList_id);
  }

  const disabled_proceed_btn = () => {
    if(purchaseList.cancel) return 'disabled';
    else if(purchaseList.hasOwnProperty('proceed')) return 'disabled';
    else return '';
  }
  const disabled_complete_btn = () => {
    if(purchaseList.cancel) return 'disabled';
    else if(purchaseList.proceed) return '';
    else return 'disabled';
  }
  const disabled_review_btn = () => {
    if(purchaseList.cancel) return 'disabled';
    else if(purchaseList.proceed === false) return '';
    else return 'disabled';
  }
  const disabled_cancle_btn = () => {
    if(purchaseList.cancel || (purchaseList.proceed === false)) return 'disabled';
  }

  let proceed_class = disabled_proceed_btn();
  let complete_class = disabled_complete_btn();
  let cancel_class = disabled_cancle_btn();
  let review_class = disabled_review_btn();
  

  return (
    <div className="collection notEmpty" key={purchaseList.date}>
      <div className="collection-item row">
        <div className="image-area col s4">
          <img src={purchaseList.imgURL} alt="서비스 섬네일 이미지" />
        </div>
        <div className="options-area col s8">
          <h6 className='scorehvy'>{ purchaseList.service_title }</h6>
          <p>판매자 : { purchaseList.provider_id }</p> 
          <p>구매일자 : { moment(purchaseList.purchasedAt.toDate()).format('YYYY년 / MM월 / DD일 HH:mm분') }</p>
          
          <table className='col s12 centered'>
            <thead className='grey lighten-3'>
              <tr>
                <th>진행상황</th>
                <th>요청상황</th>
                <th>리뷰작성</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>{ purchaseList.proceed ? <font color='blue'>진행중</font> : (purchaseList.proceed === false) ? <font color='blue'>완료</font> : <font color='red'>미접수</font> }</td>
                <td>{ purchaseList.request ? <font color='blue'>요청완료</font> : <font color='red'>미요청</font> }</td>
                <td>{ purchaseList.review ? <font color='blue'>작성완료</font> : <font color='red'>미작성</font> }</td>
              </tr>
            </tbody>
          </table>
          
        </div>
      </div>

      <div className="collection-item row order-status">
        { (purchaseList.proceed === false) ? <div className="box blue white-text">완료</div> : null }
        { (purchaseList.hasOwnProperty('request') !== true) ? <div className="box orange white-text">미접수</div> : null }
        { (purchaseList.proceed === true) ? <div className="box myomColor-background white-text">진행중</div> : null }  
        { (purchaseList.proceed === false) ? <div className="box red white-text">미평가</div> : null }
        { (purchaseList.cancel) ? <div className="box grey white-text">취소</div> : null }     
      </div>
      
      {
        (chk)
          ? (
            <div className="hidden-buttons row">
              <div className="col s2 btn waves-effect myomColor-background">요청작성</div>
              <Link to={'/purchaseDetails/' + purchaseList.id} className="col s2 btn waves-effect myomColor-background">상세내역</Link>                            
              <div className={"col s2 btn waves-effect myomColor-background " + review_class}>리뷰작성</div>
              <div onClick={() => cancel_order(purchaseList.id)} className={"col s2 btn waves-effect myomColor-background " + cancel_class}>취소하기</div>
            </div>
          ) 
          : (
            <div className="hidden-buttons row">
              <div onClick={(e) => proceed_order(e, purchaseList.id)} className={"col s2 btn waves-effect myomColor-background " + proceed_class}>주문접수</div>
              <div className={"col s2 btn waves-effect myomColor-background "}>주문자요청</div>
              <div onClick={() => complete_order(purchaseList.id)} className={"col s2 btn waves-effect myomColor-background " + complete_class}>완료하기</div>
              <div onClick={() => cancel_order(purchaseList.id)} className={"col s2 btn waves-effect myomColor-background " + cancel_class}>취소하기</div>
            </div>
          )
      }
      
    </div>
  )
}
const mapDispatchToProps = (dispatch) => {
  return {
    _proceed_order: (purchaseList_id) => dispatch(_proceed_order(purchaseList_id)),
    _complete_order: (purchaseList_id) => dispatch(_complete_order(purchaseList_id)),
    _cancel_order: (purchaseList_id) => dispatch(_cancel_order(purchaseList_id)),
  }
}
export default connect(null, mapDispatchToProps)(OrderManagementSummary);
import React, { Fragment } from 'react'
import moment from 'moment';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';
import { _proceed_order, _complete_order, _cancel_order, _confirm_order } from '../../../store/actions/serviceAction';

const OrderManagementSummary = ({_proceed_order, _complete_order, _cancel_order, _confirm_order, chk, purchaseList}) => {
  const proceed_order = (e, purchaseList_id) => {
    if(window.confirm('해당 주문을 접수 하시겠습니까? 아직 상세내역이나 요청서를 확인해보지 않았다면, 먼저 확인 후 주문을 받아보세요!')) {
      _proceed_order(purchaseList_id);
    } else {
      return;
    }
  }
  const complete_order = (purchaseList_id) => {
    if(window.confirm('구매자에게 완료된 영상을 전달하셨나요? 그렇다면 완료버튼을 눌러 해당 작업을 마무리 하세요! 구매자로부터 구매확정을 받게 되면, 결제대금이 지급됩니다!')) {
      _complete_order(purchaseList_id);
    } else {
      return;
    }
  }
  const cancel_order = (purchaseList_id) => {
    if(window.confirm('정말로 해당 서비스를 취소하시겠습니까? 작업경과에 따라 환불이 불가할 수 있습니다.')) {
      _cancel_order(purchaseList_id);
    } else {
      return;
    }
  }
  const confirm_order = (purchaseList_id) => {
    if(window.confirm('구매를 확정하시겠습니까?')) {
      _confirm_order(purchaseList_id)
    } else {
      return;
    }
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
    else if(purchaseList.review === true) return 'disabled';
    else if(purchaseList.proceed === false) return '';
    else return 'disabled';
  }
  const disabled_cancle_btn = () => {
    if(purchaseList.cancel || (purchaseList.proceed === false)) return 'disabled';
  }
  
  const isPaid = purchaseList.isPaid;
  let proceed_class = disabled_proceed_btn();
  let complete_class = disabled_complete_btn();
  let cancel_class = disabled_cancle_btn();
  let review_class = disabled_review_btn();
  console.log(purchaseList.proceed);
  return (
    <div className="collection notEmpty" key={purchaseList.date}>
    {
      (!isPaid)
        ? (
          <Fragment>
          <div className="collection-item not-paid row">
            <div className="image-area col s4">
              <img src={purchaseList.imgURL} alt="서비스 섬네일 이미지" />
            </div>
            <div className="options-area col s8">
              <h6 className='scorehvy'>{ purchaseList.service_title }</h6>
              <p>판매자 : { purchaseList.provider_nickName }</p> 
              <p>구매일자 : { moment(purchaseList.purchasedAt.toDate()).format('YYYY년 / MM월 / DD일 HH:mm분') }</p>
            </div>
          </div>
          <div className="warning-Message">
            <h5 className="scorehvy">아직 입금확인이 되지 않았습니다. 확인 후 작업 가능합니다.</h5>
          </div>
          </Fragment>
        )
        : (
          <Fragment>
          <div className="collection-item paid row">
            <div className="image-area col s4">
              <img src={purchaseList.imgURL} alt="서비스 섬네일 이미지" />
            </div>
            <div className="options-area col s8">
              <h6 className='scorehvy'>{ purchaseList.service_title }</h6>
              { (chk) ? (<p>판매자 : { purchaseList.provider_nickName }</p>) : (<p>구매자 : { purchaseList.buyer_nickName }</p>) }
              <p>구매일자 : { moment(purchaseList.purchasedAt.toDate()).format('YYYY년 / MM월 / DD일 HH:mm분') }</p>
              
              <table className='col s12 centered'>
                <thead className='grey lighten-3'>
                  <tr>
                    <th>진행상황</th>
                    <th>요청상황</th>
                    <th>구매확정</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td>{ purchaseList.cancel ? <font color='gray'>취소</font> : purchaseList.proceed ? <font color='blue'>진행중</font> : (purchaseList.proceed === false) ? <font color='blue'>완료</font> : <font color='red'>미접수</font> }</td>
                    <td>{ purchaseList.cancel ? <font color='gray'>취소</font> : purchaseList.requestData ? <font color='blue'>요청완료</font> : <font color='red'>미요청</font> }</td>
                    <td>{ purchaseList.cancel ? <font color='gray'>취소</font> : purchaseList.review ? <font color='blue'>확정완료</font> : <font color='red'>미확정</font> }</td>
                  </tr>
                </tbody>
              </table>
              
            </div>
          </div>

          <div className="collection-item row order-status">
            { (purchaseList.proceed === false) ? <div className="box blue white-text">완료</div> : null }
            { (purchaseList.hasOwnProperty('request') !== true) ? <div className="box orange white-text">미접수</div> : null }
            { (purchaseList.proceed === true) ? <div className="box myomColor-background white-text">진행중</div> : null }  
            { (purchaseList.review === false) ? <div className="box red white-text">미확정</div> : null }
            { (purchaseList.review === true) ? <div className="box white black-text">확정</div> : null }
            { (purchaseList.cancel) ? <div className="box grey white-text">취소</div> : null }     
          </div>
          
          {
            (chk)
              ? (
                <div className="hidden-buttons row">
                  <Link to={purchaseList.requestData ? '/chatDashboard' : '/requestForm/' + purchaseList.id} className="col s2 btn waves-effect myomColor-background">요청작성</Link>
                  <Link to={'/purchaseDetails/' + purchaseList.id} className="col s2 btn waves-effect myomColor-background">상세내역</Link>                            
                  <div onClick={() => confirm_order(purchaseList.id)} className={"col s2 btn waves-effect myomColor-background " + review_class}>구매확정</div>
                  <div onClick={() => cancel_order(purchaseList.id)} className={"col s2 btn waves-effect myomColor-background " + cancel_class}>취소하기</div>
                </div>
              ) 
              : (
                <div className="hidden-buttons row">
                  <div onClick={(e) => proceed_order(e, purchaseList.id)} className={"col s2 btn waves-effect myomColor-background " + proceed_class}>주문접수</div>
                  <Link to={'/purchaseDetails/' + purchaseList.id} className={"col s2 btn waves-effect myomColor-background "}>주문자요청</Link>
                  <div onClick={() => complete_order(purchaseList.id)} className={"col s2 btn waves-effect myomColor-background " + complete_class}>완료하기</div>
                  <div onClick={() => cancel_order(purchaseList.id)} className={"col s2 btn waves-effect myomColor-background " + cancel_class}>취소하기</div>
                </div>
              )
          }
          </Fragment>
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
    _confirm_order: (purchaseList_id) => dispatch(_confirm_order(purchaseList_id)),
  }
}
export default connect(null, mapDispatchToProps)(OrderManagementSummary);
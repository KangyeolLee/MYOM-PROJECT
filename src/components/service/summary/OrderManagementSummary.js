import React from 'react'
import moment from 'moment';

const OrderManagementSummary = ({purchaseList}) => {
  return (
    <div className="collection notEmpty" key={purchaseList.date}>
      <div className="collection-item row">
        <div className="image-area col s4">
          <img src={purchaseList.imgURL} alt="" width={300} height={250}/>
        </div>
        <div className="options-area col s8">
          <p>옵션 : { purchaseList.options } </p>
          <p>구매일자 : { moment(purchaseList.date.toDate()).format('YYYY년 / MM월 / DD일 h:mm분') }</p>
          <p>진행상황 : { purchaseList.proceed ? <font color='red'>진행중</font> : <font color='blue'>완료</font> }</p>
          <p>요청사항 : { purchaseList.request ? <font color='blue'>요청완료</font> : <font color='red'>미요청</font> }</p>
          <p>리뷰작성 : { purchaseList.review ? <font color='blue'>작성완료</font> : <font color='red'>미작성</font> }</p>
          <p>판매자 : { purchaseList.provider }</p>
        </div>
      </div>
    </div>
  )
}

export default OrderManagementSummary;
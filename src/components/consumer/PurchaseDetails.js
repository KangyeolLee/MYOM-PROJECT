import React from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import moment from 'moment';
import RequestResult from '../requestForm/RequestResult';

const PurchaseDetails = (props) => {
  if(!isLoaded(props.purchased_service)) return <div className='container'>로딩중...</div>
  
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const { runningTime, additionalCost, plusMinute, requestData, type, purchasedAt, provider_nickName, service_title, imgURL, price, options, working } = props.purchased_service;

  return (
    <div className="container purchaseDetails">
      <h5 className='col s12 scorehvy category'>주문내역</h5>

      <div className="row collection">
        <div className="col s3">
          <img src={imgURL} alt="서비스 섬네일 이미지" className='thumbnail-img'/>
        </div>
        <div className="col s9">
          <h6 className="col s4 scorehvy service-title">서비스 제목</h6>
          <h6 className="col s8">{service_title}</h6>
          <br/>

          <h6 className="col s4 scorehvy service-editor">편집자</h6>
          <h6 className="col s8">{provider_nickName}</h6>
          <br/> 

          <h6 className="col s4 scorehvy service-editor">타입</h6>
          <h6 className="col s8">{type}</h6>
          <br/>

          <h6 className="col s4 scorehvy service-editor">구매일자</h6>
          <h6 className="col s8">{moment(purchasedAt.toDate()).format('YYYY.MM.DD')}</h6>
        </div>
      </div>

      <div className="row collection">
        <div className="collection-item center">
          <p>쿠폰 및 기타 할인 적용 관련 내역이 없습니다.</p>
        </div>
      </div>

      {
        (plusMinute)
          ? (
            <table className="additionalPrice">
              <thead>
                <tr>
                  <th className='scorehvy center'>러닝타임</th>
                  <th className='scorehvy center'>시간추가</th>
                  <th className='scorehvy center'>추가금액</th>
                </tr>
              </thead>
              <tbody>
                <tr>
                  <td className='center'>{ runningTime }</td>
                  <td className='center'>{ plusMinute ? plusMinute + '분' : '없음' }</td>
						      <td className='center'>{ plusMinute ? numberWithCommas(additionalCost * plusMinute) + '원' : '없음' }</td>
                </tr>
              </tbody>
            </table>
          )
          : (
            <div className="row collection">
              <div className="collection-item center">
                추가금액이 없습니다.
              </div>
            </div>
          )
      }

      <table className="basic-purchase">
        <thead>
          <tr>
            <th className='scorehvy center'>기본항목</th>
            <th className='scorehvy center'>작업일</th>
            <th className='scorehvy center'>가격</th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td className=''>
              {
                options.length && options.map(option => (
                  <div className='options' key={option}><i className="material-icons left">check</i>{option}</div>
                ))
              }
            </td>
						<td className='center'>{ working }</td>
						<td className='center scorehvy'>{ '₩' + price }</td>
          </tr>
        </tbody>
      </table>     

      <h5 className="col s12 scorehvy category">편집자 프로필</h5>

      <h5 className='col s12 scorehvy category'>요청서</h5>
      <div className="row collection">
        <div className="collection-item center">
          <RequestResult requestData={requestData} />
          <button className='btn waves-effect waves-light myomColor-background'>추가 문의</button>
        </div>
      </div>

      <div style={{marginTop: '5rem'}} className="row">
        <Link to='/' className="col s4 offset-s1 center btn waves-effect waves-light indigo purchasedone-btn"><i className="material-icons homeIcon">home</i><span>홈으로 돌아가기</span></Link>
        <Link to='/mypageBuyer/orderManage' className="col s4 offset-s2 btn waves-effect waves-light indigo purchasedone-btn"><i className="material-icons">descriptions</i><span>마이페이지로 돌아가기</span></Link>
      </div>


    </div>
    
  )
}
const mapStateToProps = (state) => {
  return {
    purchased_service: state.firestore.data.purchased_service,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    { collection: 'purchaseList', doc: props.match.params.service_id , storeAs: 'purchased_service' }
  ])
)(PurchaseDetails);
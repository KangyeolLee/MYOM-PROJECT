import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import moment from 'moment';
import RequestResult from '../requestForm/RequestResult';
import { Redirect } from 'react-router-dom';
import Loader from '../functionalComponents/Loader';
import firebase from 'firebase/app';

const PurchaseDetails = (props) => {
  const { auth } = props;
  if(auth.isLoaded && !auth.uid) {
    alert('로그인을 해주세요!');
    return <Redirect to='/signin' />
  } else if(auth.isLoaded && !auth.emailVerified) {
    alert('이메일 인증을 해주세요!')
    return <Redirect to='/emailVerification' />
  }

  if(!isLoaded(props.purchased_service)) return <div className='container'><Loader /></div>
  
  const numberWithCommas = (x) => {
    return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
  }
  const { isPaid, providerImg, runningTime, additionalCost, plusMinute, requestData, type, purchasedAt, provider_nickName, service_title, imgURL, price, options, working } = props.purchased_service;
  const purchased_id = props.match.params.service_id;

  return (
    <div className="container purchaseDetails notoSans">
      <div className="row orderdetails-wrapper">
        <h5 className='col s12 purchaseDetails-title'>상세내역</h5>

        <img className='col s3 preview-img' src={imgURL} alt="서비스 섬네일"/>
        <div className="col s9 text-wrapper">
          <p style={{fontSize: '14px', margin: '8px 0 0 0',}}>주문번호 : {purchased_id}</p>
          <h5 style={{margin: '0 0 8px 0'}} className="service-title">{service_title}</h5>
          <img src='/img/defaults/lazy-loading.png' data-src={firebase.storage().refFromURL(providerImg).getDownloadURL().then(url => {
            const profile = document.getElementById('purchaseDetails-syncImg');
            profile.src = url;
          })} alt="편집자 프로필 이미지" className='circle left syncImg' width='40' height='40' id='purchaseDetails-syncImg'/>
          <p className='provider-nickname'>{provider_nickName} &nbsp;&nbsp; | &nbsp;&nbsp; 구매일자 : {moment(purchasedAt.toDate()).format('YYYY.MM.DD')}</p>
        </div>
      </div>

      <div className="purchase-form row">
        <div className="col s12 table-wrapper">
          <table className="option-purchase centered">
            <thead>
              <tr>
                <th style={{width: '33.333333%'}} className=''>러닝 타임</th>
                <th style={{width: '33.333333%'}} className=''>길이 추가</th>
                <th style={{width: '33.333333%'}} className=''>추가 가격</th>
              </tr>
            </thead>
            <tbody className='options-purchase-contents'>
              <tr>
                <td className=''>{ runningTime }</td>
                <td className=''>{ plusMinute ? plusMinute + '분' : '없음' }</td>
						    <td className=''>{ plusMinute ? numberWithCommas(additionalCost * plusMinute) + '원' : '없음' }</td>
              </tr>
            </tbody>
          </table>
        </div>

        <div className="col s12 table-wrapper">
          <div className="collection coupon-discount">
            <div className="collection-item center">
              <p>쿠폰 및 기타 할인 적용 관련 내역이 없습니다.</p>
            </div>
          </div>
        </div>

        <div className="col s12 table-wrapper">
          <table className="basic-purchase centered">
            <thead>
              <tr className=''>
                <th style={{width: '20%'}} className=''>선택</th>
                <th style={{width: '40%'}} className=''>기본옵션</th>
                <th style={{width: '20%'}} className=''>작업일</th>
                <th style={{width: '20%'}} className=''>가격</th>
              </tr>
            </thead>

            <tbody>
              <tr className=''>
                <td className="type-title">{type}</td>
                <td className='row'>
                  {
                    options.length && options.map(option => (
                      <div className='options col s6' key={option}><div className="circle-icons"></div><span className='options-title'>{option}</span></div>
                    ))
                  }
                </td>
                <td className=''>{ working }</td>
                <td className=''>{ '￦' + price }원</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>

      <div className="row request-wrapper">
        <h5 className="col s12 purchaseDetails-title">요청서</h5>
        <div className="col s12 table-wrapper">
          <div className="collection request-paper">
            <div className="collection-item center">
            {
              (requestData !== undefined)
                ? <Fragment><RequestResult requestData={requestData} /><Link to='/chattingBoard'><button className='btn waves-effect waves-light myomColor-background'>추가 문의</button></Link></Fragment>
                : (props.profile.isLoaded && props.profile.authority === 'user')
                  ? <Fragment><h6 className="">아직 작성된 요청서가 없습니다. 요청서를 통해 원하는 영상을 직접 기획해보세요!</h6><Link to={'/requestForm/' + purchased_id}><button className='btn waves-effect waves-light myomColor-background'>요청서 작성</button></Link></Fragment>
                  : <Fragment><h6 className="">아직 작성된 요청서가 없습니다. 요청서가 필요하다면 채팅방에서 구매자와 직접 이야기를 나눠보세요!</h6><Link to='/chattingBoard'><button className='btn waves-effect waves-light myomColor-background'>채팅방 가기</button></Link></Fragment>            
            }
            </div>
          </div>
        </div>
      </div>

      {
        (props.profile.isLoaded && props.profile.authority === 'user')
          ? (      
            <div className='row account-wrapper'>    
              <h5 className="col s12 purchaseDetails-title">계좌안내</h5>
              <div className="col s12 table-wrapper">
                <table className='centered'>
                  <thead className=''>
                    <tr>
                      <td className='center'>거래은행</td>
                      <td className='center'>계좌번호</td>
                      <td className='center'>예금주</td>
                      <td className='center'>금액</td>
                      <td className='center'>확인여부</td>
                    </tr>
                  </thead>

                  <tbody>
                    <tr>
                      <td>국민은행</td>
                      <td>454102-01-477851</td>
                      <td>이승복</td>
                      <td>{price}원</td>
                      <td>{ isPaid ? <font color='blue'>확인</font> : <font color='red'>미확인</font>}</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div className="col s12 table-wrapper">
                <div className="table-head">입금관련 안내</div>
                <ul className="table-body">
                  <li>입금 확인여부는 2시간 이내로 진행되며, 새벽 시간 및 주말에는 다소 지연될 수 있습니다.</li>
                  <li>입금이 확인되는대로 편집자가 작업을 시작합니다.</li>
                  <li>입금 확인여부는 [<Link target='_blank' className='Link-purchaseDetails' to='/mypageBuyer/paymentDetails'> 마이페이지 - 결제내역 </Link>] 에서도 확인 가능합니다.</li>
                </ul>
              </div>

              <div className="col s12 table-wrapper">
                <div className="table-head">결제관련 안내</div>
                <ul className="table-body">
                  <li>대금은 myom 가상계좌에 보관되며 작업이 완료되면 지불됩니다.</li>
                  <li>대금 지급은 소비자의 [구매확정] 이후 진행됩니다.</li>
                  <li>[구매확정] 이후 발생하는 환불, 수정 등은 의뢰인과 직접 연락하여 해결하여야 합니다.</li>
                  <li>[구매확정] 이후 발생하는 환불, 수정 등은 의뢰인과 직접 연락하여 해결하여야 합니다.</li>
                  <li>[구매확정] 지연으로 인해 대금 지급이 늦어지는 경우, 작업완료일로부터 7일 이내 의뢰인이 수정, 취소 등의 의사표시를 하지 않은 경우 구매확정 처리가 됩니다.</li>
                  <li>결제금액의 오입금으로 인한 모든 위험과 책임은 의뢰인이 부담하여야 합니다.</li>
                  <li>myom 가상계좌 송금 시, 본인의 이름을 분명하게 기술해주세요!</li>
                </ul>
              </div>
            </div>
          )
          : null
      }

      <div className="row btn-wrapper">
        <div className="col s3 offset-s3">
          <Link to={(props.profile.isLoaded && props.profile.authority === 'user') ? '/mypageBuyer/orderManage' : '/mypageProvider/orderManage' }><button className="col s12 btn waves-effect waves-light white black-text">마이페이지로</button></Link>
        </div>
        <div className="col s3">
          <Link to='/'><button className="col s12 btn waves-effect waves-light myomColor-background">메인으로</button></Link>
        </div>
      </div>


    </div>
    
  )
}
const mapStateToProps = (state) => {
  return {
    purchased_service: state.firestore.data.purchased_service,
    auth: state.firebase.auth,
    profile: state.firebase.profile,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect(props => [
    { collection: 'purchaseList', doc: props.match.params.service_id , storeAs: 'purchased_service' }
  ])
)(PurchaseDetails);
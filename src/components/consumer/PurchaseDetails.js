import React, { Fragment } from 'react'
import { connect } from 'react-redux';
import { compose } from 'redux';
import { Link } from 'react-router-dom';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import moment from 'moment';
import RequestResult from '../requestForm/RequestResult';
import { Redirect } from 'react-router-dom';
import Loader from '../functionalComponents/Loader';

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
  const { isPaid, runningTime, additionalCost, plusMinute, requestData, type, purchasedAt, provider_nickName, service_title, imgURL, price, options, working } = props.purchased_service;
  const purchased_id = props.match.params.service_id;
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
      
      {
        (props.profile.isLoaded && props.profile.authority === 'user')
          ? (      
            <Fragment>    
            <h5 className="col s12 scorehvy category">가상 계좌 안내</h5>
            <table className='centered'>
              <thead className='grey lighten-3 scorehvy'>
                <tr>
                  <td className='center'>거래은행</td>
                  <td className='center'>계좌번호</td>
                  <td className='center'>예금주</td>
                  <td className='center'>확인여부</td>
                </tr>
              </thead>

              <tbody>
                <tr>
                  <td>국민은행</td>
                  <td>454102-01-477851</td>
                  <td>이승복</td>
                  <td>{ isPaid ? <font color='blue'>확인</font> : <font color='red'>미확인</font>}</td>
                </tr>
              </tbody>
            </table>
            </Fragment>
          )
          : null
      }

      <h5 className='col s12 scorehvy category'>요청서</h5>
      <div className="row collection">
        <div className="collection-item center">
        {
          (requestData !== undefined)
            ? <Fragment><RequestResult requestData={requestData} /><Link to='/chatDashboard' style={{marginTop: '2.5rem'}} className='btn waves-effect waves-light myomColor-background'>추가 문의</Link></Fragment>
            : (props.profile.isLoaded && props.profile.authority === 'user')
              ? <Fragment><h6 style={{marginBottom: '2rem'}} className="scorelt">아직 작성된 요청서가 없습니다. 요청서를 통해 원하는 영상을 직접 기획해보세요!</h6><Link to={'/requestForm/' + purchased_id} className='btn waves-effect waves-light myomColor-background'>요청서 작성</Link></Fragment>
              : <Fragment><h6 style={{marginBottom: '2rem'}} className="scorelt">아직 작성된 요청서가 없습니다. 요청서가 필요하다면 채팅방에서 구매자와 직접 이야기를 나눠보세요!</h6><Link to='/chatDashboard' className='btn waves-effect waves-light myomColor-background'>채팅방 가기</Link></Fragment>
        }            
        </div>
      </div>

      <div style={{marginTop: '5rem'}} className="row">
        <Link to='/' className="col l4 m5 s5 center btn waves-effect waves-light indigo purchasedone-btn"><i className="material-icons homeIcon">home</i>
          <span className='btn-text hide-under-medium'>홈으로 돌아가기</span>
          <span className='btn-text screen-on-medium'>홈으로</span>
          <span className='btn-text screen-on-small'>홈</span>
        </Link>
        <Link to={(props.profile.isLoaded && props.profile.authority === 'user') ? '/mypageBuyer/orderManage' : '/mypageProvider/orderManage' } className="col l4 offset-l4 m5 offset-m2 s5 offset-s2 btn waves-effect waves-light indigo purchasedone-btn"><i className="material-icons">descriptions</i>
          <span className='btn-text hide-under-medium'>마이페이지로 돌아가기</span>
          <span className='btn-text screen-on-medium'>마이페이지로</span>
          <span className='btn-text screen-on-small'>이전</span>
        </Link>
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
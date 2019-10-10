import React, { Component } from 'react';
import { connect } from 'react-redux';
import './servicedetails.css'
import M from 'materialize-css';
import { compose } from 'redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import ServicePricesSummary from '../summary/ServicePricesSummary';
import Preloader from '../../functionalComponents/Preloader';
import ServiceProfileSummary from '../summary/ServiceProfileSummary';
import ServiceThumbnailSummary from '../summary/ServiceThumbnailSummary';
import ServiceUserReview from '../summary/ServiceUserReview';


class ServiceDetails extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    if(!isLoaded(this.props.service)) return <div className='container'>로딩중...</div>      
    const { service } = this.props;    

    return (
      <div className="container service-details">
        <div id='service-details' className="row">
          {/* 고정스크롤 영역 */}
          <div className="col s4 fixed">  
            <ServiceProfileSummary styles={service.personal_feeling} provider_id={service.provider_id} provider_email = {this.props.service.provider_email} provider_nickName= {this.props.service.provider_nickName} history={this.props.history} />
            <ServicePricesSummary prefix='on-desktop' service_id={this.props.match.params.id} price={service.price} />      
          </div>

          {/* 서비스소개 영역 */}
          <div className="col s8 service-description">
            {/* 서비스타이틀 및 서비스이미지 */}
            <h4 className="service-title scorehvy">{service.service_title}</h4>
            <ServiceThumbnailSummary files={service.images} />

            {/* 1024px 부터 */}
            <div className="hidden-over-desktop row">
              <div className="col l6 m6 s12">
                <h5 className="sub-title scorehvy service-price">가격</h5>
                <ServiceProfileSummary styles={service.personal_feeling} provider_id={service.provider_id} provider_email = {this.props.service.provider_email} provider_nickName= {this.props.service.provider_nickName} history={this.props.history} />         
              </div>

              <div className="col l6 m6 s12">
                <h5 className="sub-title scorehvy service-provider">편집자 프로필</h5>              
                <ServicePricesSummary prefix='under-desktop' service_id={this.props.match.params.id} price={service.price} />             
              </div>   
            </div>

            {/* 서비스소개 */}
            <h5 className="service-intro scorehvy">서비스 소개</h5>
            <div className="collection">
              <pre className="collection-item service-content">{service.service_content}</pre>
            </div>


            {/* 서비스 참고 영상 */}
            <h5 className="service-intro scorehvy">다른 참고 영상</h5>
            <div className="video-wrapper">
            {
              (service.videos.length)
                ? service.videos.map((video, idx) => (
                  <video key={video + idx} style={{width: '100%'}} controls>
                    <source src={video} type='video/mp4'/>
                  </video>
                ))
                : <p>다른 참고영상이 없습니다.</p>
            }
            </div>

            {/* 수정 안내사항 */}
            <h5 className="service-intro scorehvy">수정 안내사항</h5>
            <div className="collection">        
            {
              (service.service_refund)
                ? (
                  <pre style={{whiteSpace: 'pre-wrap'}} className="collection-item">{service.service_refund}</pre>
                )
                : (
                  <div className="collection-item">myom 환불규정과 동일합니다.</div>
                )
            }          
            </div>

            {/* 서비스리뷰 */}
            <h5 className="service-intro scorehvy">리뷰</h5>
            {/* <ServiceUserReview /> */}
            <div className="collection">
              <div className="collection-item">아직 작성된 리뷰가 없습니다.</div>
            </div>

            {/* 서비스 환불정책 */}
            <h5 className="service-intro scorehvy">환불 정책</h5>
            <p className="service-content" style={{marginBottom: '3rem'}}>

            <strong style={{fontWeight: 'bolder'}}>1) 의뢰인의 취소</strong><br/>  
            1. 의뢰인은 전문가에게 작업 취소 요청을 할 수 있으며, 이때 취소 요청과 함께 취소 사유를 보내야합니다.<br/>
            2. 전문가는 의뢰인의 요청을 [수락] 혹은 [거절]할 수 있으며, 취소 사유가 합당하다고 판단하여 요청을 [수락]하는 경우 작업이 취소됩니다.<br/>
            3. 서비스를 취소하는 경우에는 Time Stamp의 진행 경과에 따라 취소 수수료가 발생합니다.<br/>
            4. 중간점검의 결과물이 요청서와 비교했을 때 확연히 다른 경우, 100% 환불이 가능합니다. 이때 회사의 타당성 심사를 통해 환불 여부가 결정됩니다.
            <br/><br/>
            <strong style={{fontWeight: 'bolder'}}>2) 전문가의 취소</strong><br/>
            1. 전문가는 불가피한 사정으로 인해 작업이 불가해진 경우, 작업 취소 요청을 할 수 있습니다.<br/>
            2. 의뢰인은 전문가의 요청을 [수락] 혹은 [거절]할 수 있으며, 취소 사유가 합당하다고 판단하여 요청을 [수락]하는 경우 작업이 취소됩니다.<br/> 
            3. 전문가의 사정으로 인해 작업이 취소된 경우 의뢰인은 100% 환불 받습니다.
            <br/><br/>
            [ 환불정책 자세히 보러가기 ]
            </p>

          </div>
        </div>
      </div>
    )
  }   
}
 
const mapStateToProps = (state, ownProps) => {
  return {
    service: state.firestore.data.testServices,

  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    return [     // 추후 props.match.params.id 로 document id를 불러올 것!
      { collection: 'testService', doc: props.match.params.id, storeAs: 'testServices' },
    ]
  }),
)(ServiceDetails);
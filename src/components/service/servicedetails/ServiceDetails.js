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
            <ServiceProfileSummary provider_id={service.provider_id} provider_email = {this.props.service.provider_email} provider_nickName= {this.props.service.provider_nickName} history={this.props.history} />
            <ServicePricesSummary prefix='on-desktop' service_id={this.props.match.params.id} price={service.price} />      
          </div>

          {/* 서비스소개 영역 */}
          <div className="col s8 service-description">
            {/* 서비스타이틀 및 서비스이미지 */}
            <h4 className="service-title scorehvy">{service.service_title}</h4>
            <ServiceThumbnailSummary files={service.images} />

            {/* 1024px 부터 */}
            <div className="hidden-over-desktop row">
              <div className="col l6 s12">
                <h5 className="sub-title scorehvy service-price">가격</h5>
                <ServiceProfileSummary provider_id={service.provider_id} provider_email = {this.props.service.provider_email} provider_nickName= {this.props.service.provider_nickName} history={this.props.history} />         
              </div>

              <div className="col l6 s12">
                <h5 className="sub-title scorehvy service-provider">편집자 프로필</h5>              
                <ServicePricesSummary prefix='under-desktop' service_id={this.props.match.params.id} price={service.price} />             
              </div>   
            </div>

            {/* 서비스소개 */}
            <h5 className="service-intro scorehvy">서비스 소개</h5>
            <pre className="service-content">{service.service_content}</pre>

            {/* 서비스 참고 영상 */}
            <h5 className="service-intro scorehvy">다른 참고 영상</h5>
            <div className="video-wrapper">
            {
              (service.videos.length)
                ? service.videos.map((video, idx) => (
                  <video key={video + idx} style={{minWidth: '95%'}} controls>
                    <source src={video} type='video/mp4'/>
                  </video>
                ))
                : <p>다른 참고영상이 없습니다.</p>
            }
            </div>

            {/* 서비스리뷰 */}
            <h5 className="service-intro scorehvy">리뷰</h5>
            <ServiceUserReview />

            {/* 서비스 환불정책 */}
            <h5 className="service-intro scorehvy">환불 정책</h5>
            <p className="service-content">안해줘 돌아가</p>

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
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
import firebase from 'firebase/app';
import Swiper from 'react-id-swiper';


class ServiceDetails extends Component {
  state = {
    
  }
  componentDidMount() {
    M.AutoInit();
  }
  componentDidUpdate(prevProps) {
    if(prevProps.providerInfo !== this.props.providerInfo) {
      firebase.storage().refFromURL(this.props.providerInfo.profileImgURL).getDownloadURL().then(url => {
        const profiles = [...document.querySelectorAll('#profile-in-service')];
        profiles.map(profile => profile.src = url);
      })
    }
    if(prevProps.service != this.props.service) {
      this.setState({
        params: {
          spaceBetween: 30,
          pagination: {
            el: '.swiper-pagination',
            clickable: true,
            renderBullet: (index, className) => {
              return '<span class="notoSans ' + className + '">' + (index + 1) + '</span>';
            }
          }
        }
      })
    }
  }

  render() {
    if(!isLoaded(this.props.service) || !isLoaded(this.props.providerInfo)) return <div className='container'>로딩중...</div>      
    const { service, providerInfo } = this.props;

    return (
      <div className="container service-details">
        <div id='service-details' className="row">
          {/* 서비스소개 영역 */}
          <div className="col s8 service-description">
            {/* 서비스타이틀 및 서비스이미지 */}
            <h4 className="service-title notoSans">{service.service_title}</h4>
            <ServiceThumbnailSummary files={service.images} />

            {/* 1024px 부터 */}
            <div className="hidden-over-desktop row">
              <div className="col l6 m6 s12">
                <h5 className="sub-title scorehvy service-price">편집자 프로필</h5>
                <ServiceProfileSummary providerInfo={providerInfo} styles={service.personal_feeling} providerImg={service.providerImg} provider_id={service.provider_id} provider_email = {this.props.service.provider_email} provider_nickName= {this.props.service.provider_nickName} history={this.props.history} />         
              </div>

              <div className="col l6 m6 s12">
                <h5 className="sub-title scorehvy service-provider">가격 </h5>              
                <ServicePricesSummary prefix='under-desktop' service_id={this.props.match.params.id} price={service.price} />             
              </div>   
            </div>

            {/* 서비스소개 */}
            <h5 className="service-intro notoSans">서비스 소개</h5>
            <pre className="service-content notoSans">{service.service_content}</pre>

            <div className="divider col s12"></div>

            {/* 서비스 참고 영상 */}
            <h5 className="service-intro notoSans">다른 참고 영상</h5>
            <div className="video-wrapper">
            {
              (this.state.params) 
                ? (service.videos.length && service.videos[0])
                  ? (
                      <Swiper {...this.state.params}>
                        {
                          service.videos.map((video, idx) => (
                            <video key={video + idx} style={{width: '100%'}} controls>
                              <source src={video} type='video/mp4'/>
                            </video>
                          ))
                        }
                      </Swiper>
                    ) 
                  : <p className='notoSans no-reference-text'>다른 참고영상이 없습니다.</p>
                : <div className='container'>로딩중...</div>   
            }
           
            </div>

            <div className="divider col s12"></div>

            {/* 수정 안내사항 */}
            <h5 className="service-intro notoSans">수정 안내사항</h5>    
            {
              (service.service_refund)
                ? (
                  <pre style={{whiteSpace: 'pre-wrap'}} className="notoSans refund-text">{service.service_refund}</pre>
                )
                : (
                  <div className="notoSans no-reference-text">myom 환불규정과 동일합니다.</div>
                )
            }          

            <div className="divider col s12"></div>

            {/* 서비스리뷰 */}
            <h5 className="service-intro notoSans">리뷰</h5>
            {/* <ServiceUserReview /> */}
            <div className="notoSans no-reference-text">아직 작성된 리뷰가 없습니다.</div>

            <div className="divider col s12"></div>

            {/* 서비스 환불정책 */}
            <h5 className="service-intro notoSans">환불 정책</h5>

            <div style={{marginBottom: '10rem'}} className="service-content notoSans">
              <ol style={{margin: '0', padding: '0 1.2rem'}}>
                <li style={{fontWeight: 'bold', fontSize: '16px', marginBottom: '.75rem'}}> 의뢰인의 취소</li>
                <ol style={{padding: '0', fontSize: '14px', fontWeight: '400'}}>     
                  <li> 의뢰인은 전문가에게 작업 취소 요청을 할 수 있으며, 이때 취소 요청과 함께 취소 사유를 보내야합니다.</li>
                  <li> 전문가는 의뢰인의 요청을 [수락] 혹은 [거절]할 수 있으며, 취소 사유가 합당하다고 판단하여 요청을 [수락]하는 경우 작업이 취소됩니다.</li>
                  <li> 서비스를 취소하는 경우에는 Time Stamp의 진행 경과에 따라 취소 수수료가 발생합니다.</li>
                  <li> 중간점검의 결과물이 요청서와 비교했을 때 확연히 다른 경우, 100% 환불이 가능합니다. 이때 회사의 타당성 심사를 통해 환불 여부가 결정됩니다.</li>
                </ol>
                <br/>
                <li style={{fontWeight: 'bold', fontSize: '16px', marginBottom: '.75rem'}}> 전문가의 취소</li>
                <ol style={{padding: '0', fontSize: '14px', fontWeight: '400'}}>
                  <li> 전문가는 불가피한 사정으로 인해 작업이 불가해진 경우, 작업 취소 요청을 할 수 있습니다.</li>
                  <li> 의뢰인은 전문가의 요청을 [수락] 혹은 [거절]할 수 있으며, 취소 사유가 합당하다고 판단하여 요청을 [수락]하는 경우 작업이 취소됩니다.</li>
                  <li> 전문가의 사정으로 인해 작업이 취소된 경우 의뢰인은 100% 환불 받습니다.</li>
                </ol>
              </ol>
            </div>

          </div>

          {/* 고정스크롤 영역 */}
          <div className="col s4 fixed">  
            <ServiceProfileSummary providerInfo={providerInfo} styles={service.personal_feeling} providerImg={service.providerImg} provider_id={service.provider_id} provider_email = {this.props.service.provider_email} provider_nickName= {this.props.service.provider_nickName} history={this.props.history} />
            <ServicePricesSummary prefix='on-desktop' service_id={this.props.match.params.id} price={service.price} />      
          </div>
          
        </div>
      </div>
    )
  }   
}
 
const mapStateToProps = (state, ownProps) => {
  return {
    service: state.firestore.data.testServices,
    providerInfo: state.firestore.data.providerInfo,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    // return [     // 추후 props.match.params.id 로 document id를 불러올 것!
    //   { collection: 'testService', doc: props.match.params.id, storeAs: 'testServices' },
    // ];
    
    if(!isLoaded(props.service)) {
      return [     // 추후 props.match.params.id 로 document id를 불러올 것!
        { collection: 'testService', doc: props.match.params.id, storeAs: 'testServices' },
      ];
    }
    else {
      const provider_id = props.service.provider_id;
      return [     // 추후 props.match.params.id 로 document id를 불러올 것!
        { collection: 'testService', doc: props.match.params.id, storeAs: 'testServices' },
        { collection: 'providersTest', doc: provider_id, storeAs: 'providerInfo' }
      ]
    }
  }),
)(ServiceDetails);
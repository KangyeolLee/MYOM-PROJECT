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
        <div className="row">
          {/* 고정스크롤 영역 */}
          <div className="col s4 fixed">  
            <ServiceProfileSummary provider_email = {this.props.service.provider_email} provider_nickName= {this.props.service.provider_nickName} history={this.props.history} />
            <ServicePricesSummary service_id={this.props.match.params.id} price={service.price} />      
          </div>

          {/* 서비스소개 영역 */}
          <div className="col s7 offset-s5 service-description">
            {/* 서비스타이틀 및 서비스이미지 */}
            <h4 className="service-title scorehvy">{service.service_title}</h4>
            <ServiceThumbnailSummary files={service.images} />

            {/* 서비스소개 */}
            <h5 className="service-intro scorehvy">서비스 소개</h5>
            <pre className="service-content">{service.service_content}</pre>

            {/* 서비스 참고 영상 */}
            <h5 className="service-intro scorehvy">다른 참고 영상</h5>
            <div className="video-wrapper">
            {
              (service.videos.length)
                ? service.videos.map(video => (
                  <video key={video} style={{width: '100%'}} controls>
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
{/*         
        <div style={{display: 'none'}} className="hidden">
        <div className="col s6 m6 l6">
          <img id='details_mainImg' src={service.imgURL} alt="" className='responsive-img'/>
        </div>
        <div className="col s6 m6 l6 productIntro">
          <div className="card">
            <div className="card-tabs">
              <div className="tabs tabs-fixed-width">
                <li className="tab"><a href="#priceTag0" className="active">BASIC</a></li>
                <li className="tab"><a href="#priceTag1">PROFESSIONAL</a></li>
                <li className="tab"><a href="#priceTag2">PREMIUM</a></li>
              </div>
            </div>
*/}
{/*
            <div className="card-content">
              { prices && prices.map((item, i) => <ServicePricesSummary service_id={this.props.match.params.id} index={i} price={item} key={`${item + i}`}/>)}

            </div>

          </div>
        </div>

        <div className="productMainIntro">
          { description && description.map(item => <ServiceDescSummary desc={item} key={item.title}/> )}
        </div> 
*/}
{/* 
        <div className="row productQnA">  
          <div className="col s12 l12 m12">
            <h3 className=''>문의하기</h3>           
            <ul className="collection col s12 inquiry-collection">
              {
                !isLoaded(inquiry)
                  ? <Preloader />
                  : isEmpty(inquiry)
                    ? <li className="collection-item"><div>아직 등록된 문의가 없습니다.</div></li>
                    : inquiry.map(item => <ServiceInquirySummary service_id={this.props.match.params.id} inquiry={item} key={item.id} /> )
              }
              <InquiryRegister serviceID={this.props.match.params.id} />
            </ul>            
          </div>
        </div>
*/}
{/*
        <div className="row productReview">
          <div className="col s12 l12 m12">
            <h3 className=''>Reviews</h3>    
            <ul className="collection col s12 review-collection">
              {
                !isLoaded(reviews)
                  ? <Preloader />
                  : isEmpty(reviews)
                    ? <li className="collection-item"><div>아직 등록된 리뷰가 없습니다.</div></li>
                    : reviews.map(item => <ServiceReviewsSummary service_id={this.props.match.params.id} review={item} key={item.id} /> )
              }
              <ReviewsRegister serviceID={this.props.match.params.id} />
            </ul>
          </div>
        </div>
*/}
{/*            
        <div className="row suggestion">
          <div className="col s12">
            <h3>다른 모임 추천</h3>
            <ul className="collection">
              {
                !isLoaded(recommends)
                  ? <Preloader />
                  : isEmpty(recommends)
                    ? <li className="collection-item"><div>추천 서비스가 없습니다..</div></li>
                    : recommends.map(item => <ServicesRecommendsSummary serviceId={item.id} recommends={item} key={item.id}/>)
              }
            </ul>
          </div>
        </div>
        </div>
*/}
      </div>
    )
  }   
}
 
const mapStateToProps = (state, ownProps) => {
  // console.log('state : ', state);
  // const id = ownProps.match.params.id;
  // const services = state.firestore.data.services;
  // const service = services ? services[id] : id;
  return {
    // suggestion : state.services.suggestion,
    service: state.firestore.data.testServices,
    // reviews: state.firestore.ordered.reviews,
    // inquiry: state.firestore.ordered.inquiry,
    // recommends: state.firestore.ordered.recommends,
  }
}

export default compose(
  connect(mapStateToProps),
  firestoreConnect((props) => {
    return [     // 추후 props.match.params.id 로 document id를 불러올 것!
      { collection: 'testService', doc: props.match.params.id, storeAs: 'testServices' },
      // { collection: 'services', doc: props.match.params.id, subcollections: [{collection: 'reviews', orderBy: ['timestamp', 'desc']}], storeAs: 'reviews' },
      // { collection: 'services', doc: props.match.params.id, subcollections: [{collection: 'inquiry', orderBy: ['timestamp', 'desc']}], storeAs: 'inquiry' },
      // { collection: 'services', where: ['category', '==', props.match.params.category], limit: 3, storeAs: 'recommends'}
    ]
  }),
)(ServiceDetails);
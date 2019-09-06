import React, { Component } from 'react';
import { connect } from 'react-redux';
import './servicedetails.css'
import M from 'materialize-css';
import { compose } from 'redux';
import { firestoreConnect, isLoaded, isEmpty } from 'react-redux-firebase';
import ServiceDescSummary from '../summary/ServiceDescSummary';
import ServicePricesSummary from '../summary/ServicePricesSummary';
import ServiceInquirySummary from '../summary/ServiceInquirySummary';
import ServiceReviewsSummary from '../summary/ServiceReviewsSummary';
import InquiryRegister from '../../serviceForm/InquiryRegister';
import ReviewsRegister from '../../serviceForm/ReviewsRegister';
import ServicesRecommendsSummary from '../summary/ServicesRecommendsSummary';
import Preloader from '../../functionalComponents/Preloader';


class ServiceDetails extends Component {
  state = {
    imgSrc : ''
  }

  componentDidMount() {
    M.AutoInit();
  }

  render() {
    if(!isLoaded(this.props.service)) return <div className='container'>로딩중...</div>
    const { service, inquiry, reviews, recommends, auth } = this.props;
    const { description, prices } = service;

    return (
      <div className="container service-details">
        <div className="row">
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

              <div className="card-content">
                { prices && prices.map((item, i) => <ServicePricesSummary index={i} price={item} key={`${item + i}`}/>)}
                {/* 고유 key 값으로 변경해야함.. */}
              </div>

            </div>
          </div>
        </div>

        <div className="productMainIntro">
          { description && description.map(item => <ServiceDescSummary desc={item} key={item.title}/> )}
          {/* 고유 key 값으로 변경해야함.. */}
        </div>

        <div className="row productQnA">  
          <div className="col s12 l12 m12">
            <h3 className=''>문의하기</h3>           
            <ul className="collection col s12 inquiry-collection">
              {/* { inquiry && inquiry.map(item => <ServiceInquirySummary inquiry={item} key={item.id}/> )} */}
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

        <div className="row productReview">
          <div className="col s12 l12 m12">
            <h3 className=''>Reviews</h3>    
            <ul className="collection col s12 review-collection">
              {/* { reviews && reviews.map(item => <ServiceReviewsSummary review={item} key={item.id} />)} */}
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
    )
  }   
}

const mapStateToProps = (state, ownProps) => {
  // console.log('state : ', state);
  const id = ownProps.match.params.id;
  const services = state.firestore.data.services;
  const service = services ? services[id] : id;
  return {
    suggestion : state.services.suggestion,
    service,
    reviews: state.firestore.ordered.reviews,
    inquiry: state.firestore.ordered.inquiry,
    recommends: state.firestore.ordered.recommends,
  }
}

export default compose(
  connect(mapStateToProps),
   firestoreConnect((props) => {
    return [     // 추후 props.match.params.id 로 document id를 불러올 것!
      { collection: 'services', doc: props.match.params.id },
      { collection: 'services', doc: props.match.params.id, subcollections: [{collection: 'reviews', orderBy: ['timestamp', 'desc']}], storeAs: 'reviews' },
      { collection: 'services', doc: props.match.params.id, subcollections: [{collection: 'inquiry', orderBy: ['timestamp', 'desc']}], storeAs: 'inquiry' },
      { collection: 'services', where: ['category', '==', props.match.params.category], limit: 3, storeAs: 'recommends'}
    ]
  }),
  // firestoreConnect((props) => [
  //   // { collection: 'services', doc: '2cG7F5gRxkkUx23VsW4D' },
  //   { collection: 'services', doc: '2cG7F5gRxkkUx23VsW4D', subcollections: [{ collection: 'reviews' }]}
  // ]),   
)(ServiceDetails);
import React, { Component } from 'react';
import { connect } from 'react-redux';
import './servicedetails.css'
import RecommendService from './RecommendService';
import M from 'materialize-css';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import ServiceDescSummary from '../summary/ServiceDescSummary';
import ServicePricesSummary from '../summary/ServicePricesSummary';
import ServiceInquirySummary from '../summary/ServiceInquirySummary';
import ServiceReviewsSummary from '../summary/ServiceReviewsSummary';


class ServiceDetails extends Component {
  state = {
    imgSrc : ''
  }

  componentDidMount() {
    M.AutoInit();
  }
 
  render() {
    const { suggestion, service, inquiry, reviews } = this.props;
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
                  <li className="tab"><a href="#priceTag0" className="active">STANDARD</a></li>
                  <li className="tab"><a href="#priceTag1">DELUXE</a></li>
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
            <h3>문의하기</h3>
            <ul className="collection">
              { inquiry && inquiry.map(item => <ServiceInquirySummary inquiry={item} key={item.id} /> )}
            </ul>
          </div>
        </div>

        <div className="row productReview">
          <div className="col s12 l12 m12">
            <h3>Reviews</h3>
            <ul className="collection">
              { reviews && reviews.map(item => <ServiceReviewsSummary review={item} key={item.id} />)}
            </ul>
          </div>
        </div>
          
        <div className="row suggestion">
          <div className="col s12">
            <h3>다른 모임 추천</h3>
            <ul className="collection">
              { suggestion && suggestion.map(item => {
                return (
                  <RecommendService recommendable={item} key={item.key}/>
                )
              })}
            </ul>
          </div>
        </div>

      </div>
    )
  }
}

const mapStateToProps = (state, ownProps) => {
  const id = ownProps.match.params.id;
  const services = state.firestore.data.services;
  const service = services ? services[id] : id;
  console.log(state);
  return {
    suggestion : state.services.suggestion,
    service,
    reviews: state.firestore.ordered.reviews,
    inquiry: state.firestore.ordered.inquiry
  }
}

export default compose(
  firestoreConnect((props) => [     // 추후 props.match.params.id 로 document id를 불러올 것!
    { collection: 'services', doc: props.match.params.id },
    { collection: 'services', doc: props.match.params.id, subcollections: [{collection: 'reviews'}], storeAs: 'reviews' },
    { collection: 'services', doc: props.match.params.id, subcollections: [{collection: 'inquiry'}], storeAs: 'inquiry' },
  ]),
  // firestoreConnect((props) => [
  //   // { collection: 'services', doc: '2cG7F5gRxkkUx23VsW4D' },
  //   { collection: 'services', doc: '2cG7F5gRxkkUx23VsW4D', subcollections: [{ collection: 'reviews' }]}
  // ]),   
  connect(mapStateToProps)
)(ServiceDetails);
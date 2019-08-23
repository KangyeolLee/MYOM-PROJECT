import React, { Component } from 'react';
import { connect } from 'react-redux';
import './servicedetails.css'
import RecommendService from './RecommendService';
import M from 'materialize-css';
//import { imgLoader } from '../summary/imgLoader';
import { Link } from 'react-router-dom';
import { compose } from 'redux';
import { firestoreConnect } from 'react-redux-firebase';
import ServiceDescSummary from '../summary/ServiceDescSummary';
import ServicePricesSummary from '../summary/ServicePricesSummary';
//import firebaseConnect from 'react-redux-firebase/lib/firebaseConnect'

class ServiceDetails extends Component {
  state = {
    imgSrc : ''
  }

  componentDidMount() {
    M.AutoInit();
    // storage.ref(`images/theme`).child('korea.jpg').getDownloadURL().then(url => this.setState({
    //   imgSrc : url
    // }));

    //imgLoader(this.props);
  }
 
  render() {
    const { suggestion, service } = this.props;
    const { description, inquiry, reviews, prices } = service;
    console.log(description, inquiry, reviews, prices, service.id);
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
                { prices && prices.map((item, i) => <ServicePricesSummary autoInit={M} index={i} price={item} key={`${item + i}`}/>)}
                
                {/* <div id="priceTag1">
                  <h5>100,000원</h5>
                  <div className="divider"></div>
                  <p>인트로 및 기본틀 제작</p>
                  <p>유튜브 자막 제작 및 기본 편집</p>
                  <div className="row">
                    <div className="col s6">
                      <p><i className="material-icons">check</i>자막</p>
                      <p><i className="material-icons">check</i>편집</p>
                    </div>
                    <div className="col s6">
                      <p><i className="material-icons">check</i>음악</p>
                      <p><i className="material-icons">check</i>FHD</p>
                    </div>
                  </div>
                  <Link to='../../purchase' className="btn waves-effect waves-light">구매하기</Link>
                </div>
                <div id="priceTag2">
                  <h5>200,000원</h5>
                  <div className="divider"></div>
                  <p>인트로 및 기본틀 제작</p>
                  <p>유튜브 자막 제작 및 기본 편집</p>
                  <div className="row">
                    <div className="col s6">
                      <p><i className="material-icons">check</i>자막</p>
                      <p><i className="material-icons">check</i>편집</p>
                    </div>
                    <div className="col s6">
                      <p><i className="material-icons">check</i>음악</p>
                      <p><i className="material-icons">check</i>FHD</p>
                    </div>
                  </div>
                  <div className="btn waves-effect waves-light">구매하기</div>
                </div>
                <div id="priceTag3">
                  <h5>300,000원</h5>
                  <div className="divider"></div>
                  <p>인트로 및 기본틀 제작</p>
                  <p>유튜브 자막 제작 및 기본 편집</p>
                  <div className="row">
                    <div className="col s6">
                      <p><i className="material-icons">check</i>자막</p>
                      <p><i className="material-icons">check</i>편집</p>
                    </div>
                    <div className="col s6">
                      <p><i className="material-icons">check</i>음악</p>
                      <p><i className="material-icons">check</i>FHD</p>
                    </div>
                  </div>
                  <div className="btn waves-effect waves-light">구매하기</div>
                </div> */}


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
              <li className="collection-item"><div>홈페이지 제작 문의드립니다..</div></li>
              <li className="collection-item"><div>질문있습니다..</div></li>
              <li className="collection-item"><div>앙질문띠.</div></li>
              <li className="collection-item"><div>질문있습니다.</div></li>
            </ul>
          </div>
        </div>

        <div className="row productReview">
          <div className="col s12 l12 m12">
            <h3>Reviews</h3>
            <ul className="collection">
              <li className="collection-item avatar">
                <img alt ='' src="../../img/theme/korea.jpg" className="circle"/>
                <span className="title">넘모 좋았어용</span>
                <p>이야 진짜 영상퀄리티 쥑임다 <br/>
                  꼭써보십쇼
                </p>
              </li>
              <li className="collection-item avatar">
                <img alt = '' src="../../img/theme/paris.jpg" className="circle"/>
                <span className="title">넘모 좋았어용</span>
                <p>이야 진짜 영상퀄리티 쥑임다 <br/>
                  꼭써보십쇼
                </p>
              </li>
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
  console.log(state);
  const id = ownProps.match.params.id;
  const services = state.firestore.data.services;
  const service = services ? services['2cG7F5gRxkkUx23VsW4D'] : id;
  return {
    // suggestion : state.services.suggestion,
    service
  }
}

export default compose(
  firestoreConnect((props) => [     // 추후 props.match.params.id 로 document id를 불러올 것!
    { collection: 'services' },
    { collection: 'services', doc: '2cG7F5gRxkkUx23VsW4D', subcollections: [{collection: 'reviews'}], storeAs: 'reviews' },
    { collection: 'services', doc: '2cG7F5gRxkkUx23VsW4D', subcollections: [{collection: 'inquiry'}], storeAs: 'inquiry' },
  ]),
  // firestoreConnect((props) => [
  //   // { collection: 'services', doc: '2cG7F5gRxkkUx23VsW4D' },
  //   { collection: 'services', doc: '2cG7F5gRxkkUx23VsW4D', subcollections: [{ collection: 'reviews' }]}
  // ]),   
  connect(mapStateToProps)
)(ServiceDetails);
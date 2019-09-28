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
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    if(!isLoaded(this.props.service)) return <div className='container'>로딩중...</div>
    const { service, inquiry, reviews, recommends } = this.props;
    const { description, prices } = service;

    return (
      <div className="container service-details">
        <div className="row">
          <div className="col s4 fixed">
            {/* /////////////////////////////////////////////////////////////// */}
            <div className="provider-profile row">
              <div className="card col s12 z-depth-0">
                <div className="card-image">
                  <img src="/img/logo/myom_logo3.jpeg" alt="" className=''/>
                  <div className='profile-title'>
                    <p className='profile-nickname'>전문편집가 님</p>
                    <p className='more-info'>프로필 더 보러가기<i className="material-icons right">chevron_right</i></p>
                  </div>
                </div>
                
                <div className="col s12 divider"></div>

                <div className="card-content row">
                  {/* <div className="card-title center">전문편집가 님</div> */}
                  

                  <div className="provider-intro row">
                    <p className='col s4 scorehvy'>평균별점</p>
                    <span className="rate col s8"><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_half</i></span>

                    <p className='col s4 scorehvy'>작업횟수</p>
                    <span className="col s8">32건</span>

                    <p className='col s4 scorehvy'>사용가능툴</p>
                    <span className="col s8">#프리미어 / #포토샵 / #일러스트</span>
                  </div>

                  <p className="col s4 scorehvy">편집스타일</p>
                  <div className="col s12 chips">
                    <div className="chip">#브이로그</div>
                    <div className="chip">#색감좋은</div>
                    <div className="chip">#트렌디한</div>
                  </div>
                </div>

                <div className="chatBtn waves-effect waves-light col s12 btn scorehvy z-depth-0">1:1 문의하기</div>
              </div>
            </div>
            {/* /////////////////////////////////////////////////////////////// */}

            <div className="price-wrapper row">
              <div className="">
                <ul className="tabs">
                  <li className="tab col s4"><a href="#basic" className="scorehvy">BASIC</a></li>
                  <li className="tab col s4"><a href="#pro" className="scorehvy">PRO</a></li>
                  <li className="tab col s4 disabled"><a href="#premium" className="scorehvy">PREMIUM</a></li>
                </ul>
              </div>

              <div id="basic">
                <ul className="timeline">
                  <li className='col s12'>
                    <h6 className='basic-title scorehvy col s12'>BASIC 소개</h6>
                    <p className="basic-intro col s12">기본적인 영상 기법 활용하여 편집 해 드립니다.</p>
                  </li>

                  <div className="col s12 divider"></div>

                  <li className='col s12'>
                    <h6 className='scorehvy col s12'>옵션 소개</h6>
                    <div className="options row">
                      <span className="col s6"><i className="material-icons left">check</i> 자막</span>
                      <span className="col s6"><i className="material-icons left">check</i> 음악</span>
                      <span className="col s6"><i className="material-icons left">check</i> 컷편집</span>
                    </div>
                  </li>

                  <div className="col s12 divider"></div>

                  <li className='col s12'>
                    <div className="col s6">
                      <h6 className="scorehvy">작업기간</h6>
                      <p><i className="material-icons left">schedule</i> 3 - 5일</p>
                    </div>
                    <div className="col s6">
                      <h6 className="scorehvy">수정횟수</h6>
                      <p><i className="material-icons left">build</i> 3회</p>
                    </div>
                  </li>
                </ul>
                                              
                
                <div className="col s12 divider"></div>          


                <h5 className="scorehvy col s12 center price">\ 110,000</h5>

                <div className="buyBtn waves-effect waves-light col s12 btn scorehvy z-depth-0">구매하기</div>
                

                
              </div>

              <div id="pro">
                <ul className="timeline">
                  <li className="col s12">
                    <h6 className='basic-title scorehvy col s12'>PRO 소개</h6>
                    <p className="pro-intro col s12">보다 섬세한 색보정 작업과 후처리 작업이 가미된 편집입니다.</p>
                  </li>

                  <div className="col s12 divider"></div>

                  <li className="col s12">
                    <h6 className='scorehvy col s12'>옵션 소개</h6>
                    <div className="options row">
                      <span className="col s6"><i className="material-icons left">check</i> 자막</span>
                      <span className="col s6"><i className="material-icons left">check</i> 음악</span>
                      <span className="col s6"><i className="material-icons left">check</i> 컷편집</span>
                      <span className="col s6"><i className="material-icons left">check</i> 색보정</span>
                      <span className="col s6"><i className="material-icons left">check</i> 고급효과</span>
                      <span className="col s6"><i className="material-icons left">check</i> 고화질</span>
                    </div>
                  </li>

                  <div className="col s12 divider"></div>

                  <li className="col s12">
                    <div className="col s6">
                      <h6 className="scorehvy">작업기간</h6>
                      <p><i className="material-icons left">schedule</i> 3 - 5일</p>
                    </div>
                    <div className="col s6">
                      <h6 className="scorehvy">수정횟수</h6>
                      <p><i className="material-icons left">build</i> 5회</p>
                    </div>
                  </li>
                </ul>
             

                <div className="col s12 divider"></div>

                <h5 className="scorehvy col s12 price center">\ 250,000</h5>
                
                <div className="buyBtn waves-effect waves-light col s12 btn scorehvy z-depth-0">구매하기</div>
                
              </div>

              <div id="premium">
                <p className="premium-intro">해당 요금제는 아직 이용할 수 없습니다.</p>
              </div>

            </div>  
            
          </div>

          <div className="col s7 offset-s5 service">
            <h4 className="service-title scorehvy">VLOG 감성: 일상을 영화로 만들어드립니다</h4>
            <div className="thumbnail">
              <img src={service.imgURL} alt="" />

              {/* <video style={{width: '100%'}} controls>
                <source src='' type='vidoe/mp4'/>
              </video> */}
            </div>

            <div className="images-area carousel row no-autoinit">
              <a href="#one!" className="carousel-item"><img src="/img/thumbs/thumb0.PNG" alt="" className="responsive-img"/></a>
              <a href="#two!" className="carousel-item"><img src="/img/thumbs/thumb1.PNG" alt="" className="responsive-img"/></a>
              <a href="#three!" className="carousel-item"><img src="/img/thumbs/thumb2.PNG" alt="" className="responsive-img"/></a>
              <a href="#four!" className="carousel-item"><img src="/img/thumbs/thumb3.PNG" alt="" className="responsive-img"/></a>
            </div>
            
            <h5 className="service-intro scorehvy">서비스 소개</h5>
            <p className="service-content">
              서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나
              서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나
              서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나
              서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나
              서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나
              서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나
              서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나
              서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나서비스 소개를 주르륵 적어볼까나
            </p>

            <h5 className="service-intro scorehvy">다른 참고 영상</h5>
            <div className="video-wrapper">
              <video style={{width: '100%'}} controls>
                <source src='/video/myom.mp4' type='video/mp4'/>
              </video>
            </div>

            <div className="video-wrapper">
              <video style={{width: '100%'}} controls>
                <source src='/video/myom.mp4' type='video/mp4'/>
              </video>
            </div>

            <div className="video-wrapper">
              <video style={{width: '100%'}} controls>
                <source src='/video/myom.mp4' type='video/mp4'/>
              </video>
            </div>

            <h5 className="service-intro scorehvy">리뷰</h5>
            <p className="service-content">
              <ul className="collection review">
                <li className="collection-item avatar">
                  <img src="/img/categories/기타형.jpg" alt="" className="circle" />
                  <span className="title">묻고더블로가</span>
                  <p className='rate'>                  
                    <i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_half</i>
                    <span className='date-time'><i className="material-icons tiny grey-text">schedule</i>2 hours ago</span>
                  </p>
                  
                  <p>완벽한 영상 감사합니다~ :)</p>
                </li>

                <li className="collection-item avatar">
                  <img src="/img/categories/기타형.jpg" alt="" className="circle" />
                  <span className="title">묻고더블로가</span>
                  <p className='rate'>                  
                    <i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_half</i>
                    <span className='date-time'><i className="material-icons tiny grey-text">schedule</i>2 hours ago</span>
                  </p>
                  
                  <p>영상 안 본 눈 삽니다~</p>
                </li>

              </ul>
            </p>

            <h5 className="service-intro scorehvy">환불 정책</h5>
            <p className="service-content">
              안해줘 돌아가
            </p>

          </div>
        </div>
        
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

            <div className="card-content">
              { prices && prices.map((item, i) => <ServicePricesSummary service_id={this.props.match.params.id} index={i} price={item} key={`${item + i}`}/>)}
              {/* 고유 key 값으로 변경해야함.. */}
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
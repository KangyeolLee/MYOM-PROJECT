import React, { Component } from 'react';
import { connect } from 'react-redux';
import './servicedetails.css'
import RecommendService from './RecommendService';
import M from 'materialize-css';
//import { imgLoader } from '../summary/imgLoader';
import { Link } from 'react-router-dom';

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
    const { suggestion } = this.props;
    return (
      <div className="container service-details">
        <div className="row">
          <div className="col s6 m6 l6">
            <img id='details_mainImg' src="../../img/theme/korea.jpg" alt="" className='responsive-img'/>
          </div>
          <div className="col s6 m6 l6 productIntro">
            <div className="card">
              <div className="card-tabs">
                <div className="tabs tabs-fixed-width">
                  <li className="tab"><a href="#priceTag1" className="active">STANDARD</a></li>
                  <li className="tab"><a href="#priceTag2">DELUXE</a></li>
                  <li className="tab"><a href="#priceTag3">PREMIUM</a></li>
                </div>
              </div>

              <div className="card-content">
                <div id="priceTag1">
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
                </div>
              </div>

            </div>
          </div>
        </div>

        <div className="productMainIntro">
          <div className="row service-description">
            <div className="col s3">
              <h3>서비스 설명</h3>
            </div>
            <div className="col s9">
              { /* product.mainIntro */}
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>
            </div>
          </div>

          <div className="row working-description">
            <div className="col s3">
              <h3>작업 방식</h3>
            </div>
            <div className="col s9">
              { /* product.mainIntro */}
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>
            </div>
          </div>

          <div className="row working-description">
            <div className="col s3">
              <h3>작업 과정</h3>
            </div>
            <div className="col s9">
              { /* product.mainIntro */}
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>
            </div>
          </div>

          <div className="row working-description">
            <div className="col s3">
              <h3>작업 스타일</h3>
            </div>
            <div className="col s9">
              { /* product.mainIntro */}
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>
              <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Beatae, fugit blanditiis voluptatem facilis porro qui sunt reiciendis voluptatibus enim, asperiores voluptates deserunt, deleniti voluptas consequuntur vitae quo et quia odit.</p>
            </div>
          </div>

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

const mapStateToProps = (state) => {
  return {
    suggestion : state.services.suggestion
  }
}

export default connect(mapStateToProps)(ServiceDetails);
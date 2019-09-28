import React, { Component } from 'react';
import M from 'materialize-css';
import './servicepage.css';

class Servicepage extends Component {
  componentDidMount() {
    const carousels = document.querySelectorAll('.carousel');
    M.AutoInit();
    M.Carousel.init(carousels, {
      dist: 0,
      shift: 30,
      padding: 30,
      indicators: true,
    })
  }
  render() {
    return (
      <div className="container servicepage-design">
        <div className="row">
          <div className="col s4 fixed">

            {/* <div className="price-tags row">

              <div className="col s4">
                <div className="col s12 price-tag">
                  <div className="circle"></div>
                  <div className="price scorehvy">BASIC</div>
                </div>
              </div>

              <div className="col s4">
                <div className="col s12 price-tag">
                  <div className="circle"></div>
                  <div className="price scorehvy">P R O</div>
                </div>
              </div>

              <div className="col s4">
                <div className="col s12 price-tag">
                  <div className="circle"></div>
                  <div className="price scorehvy">PREMIUM</div>
                </div>
              </div>

            </div> */}

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
            <div className="video-wrapper">
              <video style={{width: '100%'}} controls>
                <source src='/video/myom.mp4' type='video/mp4'/>
              </video>
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
      </div>
    )
  }
}

export default Servicepage;
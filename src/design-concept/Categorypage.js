import React, { Component } from 'react'
import './categorypage.css';
import M from 'materialize-css';

class Categorypage extends Component {
  componentDidMount() {
    M.AutoInit();
  }
  render() {
    return (
      <div className="container categorypage-design">
        <div className="row">


          <h4 className='reference-title scorehvy'>브이로그형 Reference</h4>
          <p className="reference-content flow-text cartoon">
            <i className="material-icons">format_quote</i>
            브이로그(VLOG)형이란, 비디오(Video)와 블로그(Blog)를 합친 말로, 개인 SNS에 글을 쓰듯 영상으로 기록을 남기는 것을 말합니다.
            일상처럼 기록한 여행, 잔잔한 여행, 차분한 느낌의 여행, 피아노의 선율이 느껴지는 베토벤의 기분이 이러했을까요?
            모자르트는 음악사에 있어 대단한 족적을 남겼습니다. 과연 베토벤은 당대에 모자르트의 아성을 뛰어넘는 평가를 대중으로부터 받았을지요.
            담아온 여행 영상을 솔직 담백하고 담담하게 풀어내고 싶다면, 브이로그형 전문 편집자를 만나보세요!
          </p>

          <div className="video-wrapper">
            <video style={{width: '60%'}} controls>
              <source src='/video/myom.mp4' type='video/mp4'/>
            </video>

            <video style={{width: '60%'}} controls>
              <source src='/video/myom.mp4' type='video/mp4'/>
            </video>

            <video style={{width: '60%'}} controls>
              <source src='/video/myom.mp4' type='video/mp4'/>
            </video>

          </div>

          <div className="btn-float next"><i className="material-icons large">navigate_next</i></div>
          <div className="btn-float prev"><i className="material-icons large">navigate_before</i></div>
          



          <div className="tips-for-category">
            <div className="card col s12">
              <div className="card-image">
                <img style={{width: '20rem'}} src="/img/banner/촬영팁2.png" alt="" className='right'/>
                {/* <img style={{width: '10rem'}} src="/img/banner/촬영팁.png" alt="" className='right'/>               */}
              </div>
              <div className="card-content">
                <h4 className='scorehvy'>#브이로그형을 위한 촬영팁</h4>
                <h3 className='scorehvy white-text'>
                  지금 바로 보러가기
                  <span className="go-btn">GO</span>
                </h3>
              </div>
            </div>
          </div>
    

        
          <h4 className='scorehvy'>브이로그형 서비스</h4>
          

          <div className="services row">
            <div className="card-wrapper col s3">
              <div className="card">
                <div className="card-image">
                  <img src="/img/banner/productIntro5.png" alt=""/>
                </div>
                <div className="card-content">
                  <span className="card-title">브이로그형 감성 편집</span>
                  <span className='grey-text'>편집마스터 님</span>
                  <span className='rate'><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_half</i></span>
                  <p className='service-content'>해당 영상을 브이로그형 감성으로 기가막히게 편집해드립니다.</p>
                </div>
                <div className="card-action">
                  <div className="chips">
                    <div className="chip">#여유로운</div>
                    <div className="chip">#따뜻한</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card-wrapper col s3">
              <div className="card">
                <div className="card-image">
                  <img src="/img/thumbs/thumb0.PNG" alt=""/>
                </div>
                <div className="card-content">
                  <span className="card-title">일상을 영화로...</span>
                  <span className='grey-text'>EDITOR 님</span>
                  <span className='rate'><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_half</i></span>
                  <p className='service-content'>해당 영상을 브이로그형 감성으로 기가막히게 편집해드립니다.</p>
                </div>
                <div className="card-action">
                  <div className="chips">
                    <div className="chip">#시원한</div>
                    <div className="chip">#쿨한</div>
                    <div className="chip">#차가운</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-wrapper col s3">
              <div className="card">
                <div className="card-image">
                  <img src="/img/thumbs/thumb1.PNG" alt=""/>
                </div>
                <div className="card-content">
                  <span className="card-title">VLOG형 감성 전문</span>
                  <span className='grey-text'>VLOGPER 님</span>
                  <span className='rate'><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_half</i></span>
                  <p className='service-content'>해당 영상을 브이로그형 감성으로 기가막히게 편집해드립니다.</p>
                </div>
                <div className="card-action">
                  <div className="chips">
                    <div className="chip">#서정적인</div>
                    <div className="chip">#잔잔한</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-wrapper col s3">
              <div className="card">
                <div className="card-image">
                  <img src="/img/thumbs/thumb2.PNG" alt=""/>
                </div>
                <div className="card-content">
                  <span className="card-title">일상속 영화</span>
                  <span className='grey-text'>인생은편집 님</span>
                  <span className='rate'><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_half</i></span>
                  <p className='service-content'>해당 영상을 브이로그형 감성으로 기가막히게 편집해드립니다.</p>
                </div>
                <div className="card-action">
                  <div className="chips">
                    <div className="chip">#깔끔한</div>
                    <div className="chip">#단정한</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-wrapper col s3">
              <div className="card">
                <div className="card-image">
                  <img src="/img/thumbs/thumb3.PNG" alt=""/>
                </div>
                <div className="card-content">
                  <span className="card-title">너만의 뷔로그</span>
                  <span className='grey-text'>편집인생 님</span>
                  <span className='rate'><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_half</i></span>
                  <p className='service-content'>해당 영상을 브이로그형 감성으로 기가막히게 편집해드립니다.</p>
                </div>
                <div className="card-action">
                  <div className="chips">
                    <div className="chip">#일상적인</div>
                    <div className="chip">#흘러가는</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card-wrapper col s3">
              <div className="card">
                <div className="card-image">
                  <img src="/img/thumbs/thumb4.PNG" alt=""/>
                </div>
                <div className="card-content">
                  <span className="card-title">유튜브 브이로그 전문</span>
                  <span className='grey-text'>프로편집러 님</span>
                  <span className='rate'><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_half</i></span>
                  <p className='service-content'>해당 영상을 브이로그형 감성으로 기가막히게 편집해드립니다.</p>
                </div>
                <div className="card-action">
                  <div className="chips">
                    <div className="chip">#부드러운</div>
                    <div className="chip">#여유로운</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-wrapper col s3">
              <div className="card">
                <div className="card-image">
                  <img src="/img/thumbs/thumb5.PNG" alt=""/>
                </div>
                <div className="card-content">
                  <span className="card-title">여행각? 유튭각~</span>
                  <span className='grey-text'>뷔로그마스터 님</span>
                  <span className='rate'><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_half</i></span>
                  <p className='service-content'>해당 영상을 브이로그형 감성으로 기가막히게 편집해드립니다.</p>
                </div>
                <div className="card-action">
                  <div className="chips">
                    <div className="chip">#조용한</div>
                    <div className="chip">#따뜻한</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-wrapper col s3">
              <div className="card">
                <div className="card-image">
                  <img src="/img/thumbs/thumb6.PNG" alt=""/>
                </div>
                <div className="card-content">
                  <span className="card-title">나만의 브이로그 영상</span>
                  <span className='grey-text'>Travel Ditto 님</span>
                  <span className='rate'><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_half</i></span>
                  <p className='service-content'>해당 영상을 브이로그형 감성으로 기가막히게 편집해드립니다.</p>
                </div>
                <div className="card-action">
                  <div className="chips">
                    <div className="chip">#감각적인</div>
                    <div className="chip">#트렌디한</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-wrapper col s3">
              <div className="card">
                <div className="card-image">
                  <img src="/img/thumbs/thumb7.PNG" alt=""/>
                </div>
                <div className="card-content">
                  <span className="card-title">브이로그형 감성 편집</span>
                  <span className='grey-text'>편집마스터 님</span>
                  <span className='rate'><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_half</i></span>
                  <p className='service-content'>해당 영상을 브이로그형 감성으로 기가막히게 편집해드립니다.</p>
                </div>
                <div className="card-action">
                  <div className="chips">
                    <div className="chip">#여유로운</div>
                    <div className="chip">#따뜻한</div>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="card-wrapper col s3">
              <div className="card">
                <div className="card-image">
                  <img src="/img/thumbs/thumb8.PNG" alt=""/>
                </div>
                <div className="card-content">
                  <span className="card-title">브이로그형 감성 편집</span>
                  <span className='grey-text'>편집마스터 님</span>
                  <span className='rate'><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_half</i></span>
                  <p className='service-content'>해당 영상을 브이로그형 감성으로 기가막히게 편집해드립니다.</p>
                </div>
                <div className="card-action">
                  <div className="chips">
                    <div className="chip">#여유로운</div>
                    <div className="chip">#따뜻한</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-wrapper col s3">
              <div className="card">
                <div className="card-image">
                  <img src="/img/thumbs/thumb9.PNG" alt=""/>
                </div>
                <div className="card-content">
                  <span className="card-title">브이로그형 감성 편집</span>
                  <span className='grey-text'>편집마스터 님</span>
                  <span className='rate'><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_half</i></span>
                  <p className='service-content'>해당 영상을 브이로그형 감성으로 기가막히게 편집해드립니다.</p>
                </div>
                <div className="card-action">
                  <div className="chips">
                    <div className="chip">#여유로운</div>
                    <div className="chip">#따뜻한</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="card-wrapper col s3">
              <div className="card">
                <div className="card-image">
                  <img src="/img/thumbs/thumb10.PNG" alt=""/>
                </div>
                <div className="card-content">
                  <span className="card-title">브이로그형 감성 편집</span>
                  <span className='grey-text'>편집마스터 님</span>
                  <span className='rate'><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_half</i></span>
                  <p className='service-content'>해당 영상을 브이로그형 감성으로 기가막히게 편집해드립니다.</p>
                </div>
                <div className="card-action">
                  <div className="chips">
                    <div className="chip">#여유로운</div>
                    <div className="chip">#따뜻한</div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col s4 offset-s4 moreBtn">
              <div className="btn">더 보기</div>
            </div>

          </div>
        </div>
      </div>
    )
  }
}

export default Categorypage;
import React, { Component } from 'react'
import './profileSetting.css';
import M from 'materialize-css';

class ProfileSetting extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
      <div className="container profileSetting">
        <div className="profileInfo collection row">
          <div className="col s2">
            <div className='btn-floating grey lighten-1'><i className="large material-icons">person</i></div>
          </div>
          <div className="col s10">
            <h4>의욕적인벚나무7292</h4>
            <div className="starAverage">
              <i className="material-icons">star_borderstar_borderstar_borderstar_borderstar_border</i>
              <span className='grey-text'> | 총 0개의 평가 </span>
            </div>
  
            <div className="score_wrapper">
              <div className='inline-block'>
                <div>0개</div>
                <div className='grey-text'>총작업수</div>
              </div>
              <div className='inline-block'>
                <div>0%</div>
                <div className='grey-text'>만족도</div>
              </div>
              <div className='inline-block'>
                <div>아직몰라요</div>
                <div className='grey-text'>평균응답시간</div>
              </div>
  
              <a href='#modal_profile_register' className="modal-trigger waves-effect waves-light btn right">프로필 등록 / 수정</a>
              <div id="modal_profile_register" className='modal'>
                <div className="modal-content">
                  <nav>
                  <div className="nav-wrapper">
                    <div className="col s12 grey">
                      <a href="#!" className="breadcrumb">전문가 소개</a>
                      <a href="#!" className="breadcrumb">전문분야</a>
                      <a href="#!" className="breadcrumb">보유 기술</a>
                      <a href="#!" className="breadcrumb">학력 및 전공</a>
                      <a href="#!" className="breadcrumb">자격증</a>
                      <a href="#!" className="breadcrumb">경력사항</a>
                    </div>
                  </div>
                  </nav>
                </div>
              </div>
            </div>
  
          </div>
        </div>
  
        <div className="row">
          <div className="col s9">
            <div className="profileView collection row">
              <div className="col s12">
                <ul className="tabs">
                  <li className="tab col s3"><a className='active' href='#profileView1'>소개</a></li>
                  <li className="tab col s3"><a href='#profileView2'>서비스</a></li>
                  <li className="tab col s3"><a href='#profileView3'>포트폴리오</a></li>
                  <li className="tab col s3"><a href='#profileView4'>받은평가</a></li>
                </ul>
              </div>

              <div id="profileView1" className='col s12'>
                <h5>소개</h5>
                <p>소개가 없습니다</p>
              </div>

              <div id="profileView2" className='col s12'>
                <h5>서비스</h5>
                <div className="collection">
                  <div className="serviceRegisterBox">
                    <i className="material-icons large center">photo_library</i>
                    <p className='grey-text'>서비스를 등록하여 수익을 얻어보세요!</p>
                    <p className='center'>+서비스 등록하기</p>
                  </div>
                </div>
              </div>

              <div id="profileView3" className='col s12'>
                <h5 style={{display: 'inline'}}>포트폴리오</h5>
                <span className='btn-flat waves-effect waves-teal right'>포트폴리오 관리 ></span>
                <div className="collection">
                  <div className='grey-text'>디자인 카테고리에 등록된 서비스가 없어 포트폴리오를 등록할 수 없습니다.</div>
                </div>
              </div>

              <div id="profileView4" className='col s12'>
                <h5>받은 평가</h5>
                <div className="collection grey lighten-2">
                  <div className="starsWithScore">
                    <h1 style={{margin:0}}>0.0</h1>
                    <div style={{marginLeft: '2rem'}}>
                      <i className="material-icons">star_borderstar_borderstar_borderstar_borderstar_border</i>
                      <p style={{margin: 0}}className='center'>(0개의 평가)</p>
                    </div>
                  </div>
                </div>
              </div>
            </div>

          </div>
          <div className="col s3">
            <ul className="timeline">
              <li>
                <h6>전문 분야 및 상세 분야</h6>
                <p className='grey-text'>전문 분야 및 상세 분야가 없습니다</p>
              </li>
              <li>
                <h6>보유 기술</h6>
                <p className='grey-text'>보유 기술이 없습니다</p>
              </li>
              <li>
                <h6>경력 사항</h6>
                <p className='grey-text'>경력 사항이 없습니다</p>
              </li>
              <li>
                <h6>학력 및 전공</h6>
                <p className='grey-text'>학력 및 전공이 없습니다</p>
              </li>
              <li>
                <h6>보유 자격증</h6>
                <p className='grey-text'>보유 자격증이 없습니다</p>
              </li>
            </ul>
          </div>
        </div>

        

      </div>
    )
  }
}

export default ProfileSetting;
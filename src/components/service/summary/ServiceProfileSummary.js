import React, { Component, Fragment } from 'react'
import M from 'materialize-css';

class ServiceProfileSummary extends Component {
  componentDidMount() {
    M.AutoInit();
  }

  render() {
    return (
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
    )
  }
}

export default ServiceProfileSummary;
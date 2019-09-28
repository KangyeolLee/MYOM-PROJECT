import React from 'react'
import './servicesSummary.css';

const ServicesSummary = ({service}) => {
  return (
    <div className="service-wrapper col s3">
      <div className="card black-text">
        <div className="card-image">
          <img src={service.imgURL} alt="서비스 섬네일 사진"/>
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
  )
}

export default ServicesSummary;
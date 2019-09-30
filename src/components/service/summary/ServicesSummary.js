import React from 'react'
import './servicesSummary.css';

const ServicesSummary = ({service}) => {
  console.log(service.images.thumbnail);
  return (
    <div className="service-wrapper col s3">
      <div className="card black-text">
        <div className="card-image">
          <img src={service.images.thumbnail} alt="서비스 섬네일 사진"/>
        </div>
        <div className="card-content">
          <span className="card-title">{service.service_title}</span>
          <span className='grey-text'>편집자 닉네임</span>
          <span className='rate'><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_half</i></span>
          <p className='service-content'>{service.service_content}</p>
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
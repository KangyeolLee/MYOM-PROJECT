import React from 'react'
import './servicesSummary.css';
import { Link } from 'react-router-dom';

const ServicesSummary = ({service, category}) => {
  return (
    <div className="service-wrapper col xxl4 xl4 l4 m6 s12">
      <Link to={'/thema/' + category + '/' + service.id}>
        <div className="card z-depth-0 black-text">
          <div className="card-image">
            <img src={service.images.thumbnail} alt="서비스 섬네일 사진"/>
          </div>
          <div className="card-content">
            <span className='nickname notoSans grey-text'>{service.provider_nickName}</span>
            <span className="title-name notoSans">{service.service_title}</span>
            {/* <span className='rate'><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star</i><i className="material-icons">star_half</i></span> */}
            {/* <p className='service-content'>{service.service_content}</p> */}
          </div>

          {/* <div className="card-action">
            <div className="chips">
              <div className="chip">#여유로운</div>
              <div className="chip">#따뜻한</div>
              <div className="chip">#몽환적인</div>
              <div className="chip">#몽환적인</div>
            </div>
          </div> */}
        </div>  
      </Link> 
    </div>
  )
}

export default ServicesSummary;

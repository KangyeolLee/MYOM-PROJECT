import React from 'react';
import './tipsForCategory.css';
import { Link } from 'react-router-dom';

const TipsForCategory = ({category, url}) => {
  return (
    <Link to={url}>
      <div className="tips-for-category">
        {/* <div className="card col s12 z-depth-0"> */}
        <div className="container tips-banner">
          <div className="row">
            {/* <img src="/img/banner/TipBanner.PNG" alt="팁게시판 배너" className='responsive-img'/> */}
            <div className="col xl9 l9 m6 s5">
              <h4 className='scorehvy'>#{category}을 위한 촬영팁</h4>
              <h3 className='scorehvy white-text'>
                지금 바로 보러가기
                <span className="go-btn">GO</span>
              </h3>
            </div>

            <div className="col xl3 l3 m1 offset-m5 s1 offset-s6">
              <img src="/img/banner/촬영팁2.png" alt="촬영팁 안내게시판 링크 배너" className='right banner-img'/>
            </div>
          </div>
        </div>

          {/* <div className="card-image">
            <img style={{width: '20rem'}} src="/img/banner/촬영팁2.png" alt="" className='right'/>
          </div>
          <div className="card-content">
            <h4 className='scorehvy'>#{category}을 위한 촬영팁</h4>
            <h3 className='scorehvy white-text'>
              지금 바로 보러가기
              <span className="go-btn">GO</span>
            </h3>
          </div> */}
        {/* </div> */}
      </div>
    </Link>
  )
}

export default TipsForCategory;
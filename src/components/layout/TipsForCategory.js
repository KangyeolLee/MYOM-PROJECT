import React from 'react';
import './tipsForCategory.css';
import { Link } from 'react-router-dom';

const TipsForCategory = ({category, url}) => {
  console.log(category);
  return (
    <Link to={url}>
      <div className="tips-for-category">
        <div className="card col s12">
          <div className="card-image">
            <img style={{width: '20rem'}} src="/img/banner/촬영팁2.png" alt="" className='right'/>
          </div>
          <div className="card-content">
            <h4 className='scorehvy'>#{category}을 위한 촬영팁</h4>
            <h3 className='scorehvy white-text'>
              지금 바로 보러가기
              <span className="go-btn">GO</span>
            </h3>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default TipsForCategory;
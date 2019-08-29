import React from 'react';
import { Link } from 'react-router-dom';

const ServicesRecommendsSummary = ({serviceId, recommends}) => {
  return (
    <Link to={`/thema/${recommends.category}/${serviceId}`}>
      <div className="col s4">
        <div className="card">
          <div className="card-image">                      
            <img className='' src={recommends.imgURL} alt=""/>
            <span className="card-title black">{recommends.category}</span>
          </div>
        </div>
      </div>
    </Link>
  )
}

export default ServicesRecommendsSummary;
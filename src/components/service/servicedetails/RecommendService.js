import React from 'react'

const RecommendService = ({recommendable}) => {
  return (
    <div className="col s4">
      <div className="card">
        <div className="card-image">
          <img className='' src={recommendable.src} alt=""/>
          <span className="card-title black">{recommendable.title}</span>
        </div>
      </div>
    </div>
  )
}

export default RecommendService;
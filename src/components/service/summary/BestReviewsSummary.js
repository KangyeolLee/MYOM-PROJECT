import React from 'react'

const BestReviewsSummary = ({best}) => {
  return (
    <div className="col s4">
      <div className="card">
        <div className="card-image">
          <img src={best.src} alt=""/>
        </div>
        <div className="card-content black-text">
          <span className="card-title">{best.title}</span>
          <p>{best.content}</p>
        </div>
      </div>
    </div>
  )
}

export default BestReviewsSummary;
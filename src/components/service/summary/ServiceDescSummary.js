import React from 'react'

const ServiceDescSummary = ({desc}) => {
  return (
    <div className="row service-description">
      <div className="col s3">
        <h3>{desc.title}</h3>
      </div>
      <div className="col s9">
        { /* product.mainIntro */}
        <p>{desc.contents}</p>
      </div>
    </div>
  )
}

export default ServiceDescSummary;
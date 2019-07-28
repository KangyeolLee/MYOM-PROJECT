import React from 'react';

const ThemeSummary = ({thema}) => {
  return (
    <div className="col s4">
      <div className="card">
        <div className="card-image">
          <img className='' src={thema.src} alt=""/>
          <span className="card-title">{thema.title}</span>
        </div>
      </div>
    </div>
  )
}

export default ThemeSummary;